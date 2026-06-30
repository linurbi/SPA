"""Convert logo PNG to multi-color SVG for print (contour trace)."""
from __future__ import annotations

import argparse
from pathlib import Path

import cv2
import numpy as np
from PIL import Image


def rgb_hex(rgb: tuple[int, int, int]) -> str:
    r, g, b = (int(rgb[0]), int(rgb[1]), int(rgb[2]))
    return f"#{r:02x}{g:02x}{b:02x}"


def trace_color_svg(
    src: Path,
    dst: Path,
    *,
    size: int = 1024,
    colors: int = 14,
    min_area: float = 12.0,
    epsilon: float = 0.35,
) -> None:
    im = Image.open(src).convert("RGBA")
    if size:
        im = im.resize((size, size), Image.Resampling.LANCZOS)

    rgba = np.array(im)
    alpha = rgba[:, :, 3]
    rgb = rgba[:, :, :3]

    # Flatten near-white background to transparent for cleaner trace.
    mask_bg = (alpha < 16) | (
        (rgb[:, :, 0] > 248) & (rgb[:, :, 1] > 248) & (rgb[:, :, 2] > 248)
    )
    rgb_work = rgb.copy()
    rgb_work[mask_bg] = (255, 255, 255)

    flat = rgb_work.reshape(-1, 3).astype(np.float32)
    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 40, 0.2)
    _compactness, labels, centers = cv2.kmeans(
        flat, colors, None, criteria, 5, cv2.KMEANS_PP_CENTERS
    )
    centers = np.uint8(centers)
    quantized = centers[labels.flatten()].reshape(rgb_work.shape)

    h, w = quantized.shape[:2]
    paths: list[tuple[str, str]] = []

    for idx, center in enumerate(centers):
        bgr = (int(center[2]), int(center[1]), int(center[0]))
        if center[0] > 250 and center[1] > 250 and center[2] > 250:
            continue

        layer = (labels.reshape(h, w) == idx).astype(np.uint8) * 255
        layer = cv2.medianBlur(layer, 3)
        contours, _ = cv2.findContours(layer, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        for contour in contours:
            area = cv2.contourArea(contour)
            if area < min_area:
                continue
            peri = cv2.arcLength(contour, True)
            approx = cv2.approxPolyDP(contour, epsilon * 0.01 * peri, True)
            if len(approx) < 3:
                continue
            pts = approx.reshape(-1, 2)
            d = "M " + " L ".join(f"{x:.2f},{y:.2f}" for x, y in pts) + " Z"
            paths.append((rgb_hex((center[0], center[1], center[2])), d))

    svg = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">',
    ]
    for fill, d in paths:
        svg.append(f'  <path fill="{fill}" d="{d}"/>')
    svg.append("</svg>")

    dst.write_text("\n".join(svg), encoding="utf-8")
    print(f"Wrote {dst} ({len(paths)} paths, {w}x{h})")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("src", type=Path)
    parser.add_argument("dst", type=Path)
    parser.add_argument("--size", type=int, default=1024)
    parser.add_argument("--colors", type=int, default=14)
    args = parser.parse_args()
    trace_color_svg(args.src, args.dst, size=args.size, colors=args.colors)
