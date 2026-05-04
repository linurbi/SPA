(function () {
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var year = document.getElementById("year");

  function syncHeaderHeight() {
    var el = document.querySelector(".site-header");
    if (!el) return;
    var h = Math.ceil(el.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--header-h", h + "px");
  }

  function navDict() {
    if (!window.SPA_I18N || !window.SPA_I18N.strings) {
      return { nav_open: "Open menu", nav_close: "Close menu" };
    }
    var lang = document.documentElement.getAttribute("lang") || "en";
    return window.SPA_I18N.strings[lang] || window.SPA_I18N.strings.en;
  }

  function syncToggleAria() {
    if (!toggle) return;
    var d = navDict();
    var expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-label", expanded ? d.nav_close : d.nav_open);
  }

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      syncToggleAria();
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        syncToggleAria();
      });
    });
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var code = btn.getAttribute("data-lang");
      if (code && window.SPA_I18N) {
        window.SPA_I18N.applyLang(code);
        syncToggleAria();
        requestAnimationFrame(syncHeaderHeight);
      }
    });
  });

  window.addEventListener(
    "resize",
    function () {
      requestAnimationFrame(syncHeaderHeight);
    },
    { passive: true }
  );

  window.addEventListener("load", function () {
    requestAnimationFrame(syncHeaderHeight);
  });

  if (window.document.fonts && window.document.fonts.ready) {
    window.document.fonts.ready.then(function () {
      requestAnimationFrame(syncHeaderHeight);
    });
  }

  var logoImg = document.querySelector(".logo-img");
  if (logoImg) {
    if (logoImg.complete) {
      requestAnimationFrame(syncHeaderHeight);
    } else {
      logoImg.addEventListener("load", function () {
        requestAnimationFrame(syncHeaderHeight);
      });
    }
  }

  setTimeout(syncHeaderHeight, 50);
  setTimeout(syncHeaderHeight, 350);

  if (window.SPA_I18N) {
    var stored = window.SPA_I18N.getStoredLang();
    var lang = stored || window.SPA_I18N.detectLang();
    window.SPA_I18N.applyLang(lang);
    syncToggleAria();
  }

  requestAnimationFrame(syncHeaderHeight);
})();
