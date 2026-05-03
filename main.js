(function () {
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var year = document.getElementById("year");

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
      }
    });
  });

  if (window.SPA_I18N) {
    var stored = window.SPA_I18N.getStoredLang();
    var lang = stored || window.SPA_I18N.detectLang();
    window.SPA_I18N.applyLang(lang);
    syncToggleAria();
  }
})();
