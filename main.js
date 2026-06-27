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

  var contactForm = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");
  var formSending = false;
  var FORMSPREE_ID = "mykqwvrq";

  function spaDict() {
    if (!window.SPA_I18N || !window.SPA_I18N.strings) return null;
    var lang = document.documentElement.getAttribute("lang") || "en";
    return window.SPA_I18N.strings[lang] || window.SPA_I18N.strings.en;
  }

  function thankYouUrl() {
    var base = (window.SPA_I18N && window.SPA_I18N.siteUrl) || "";
    return base ? base + "/thank-you.html" : "thank-you.html";
  }

  function setFormStatus(type, message) {
    if (!formStatus) return;
    formStatus.hidden = false;
    formStatus.textContent = message;
    formStatus.classList.remove("is-success", "is-error");
    if (type === "success") formStatus.classList.add("is-success");
    else if (type === "error") formStatus.classList.add("is-error");
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var dict = spaDict();
      if (!dict) return;

      var gotcha = contactForm.querySelector('input[name="_gotcha"]');
      if (gotcha && (gotcha.value || "").trim() !== "") return;

      if (!contactForm.reportValidity()) return;
      if (formSending) return;

      var subject = contactForm.querySelector('[name="_subject"]');
      if (subject && dict.form_email_subject) {
        subject.value = dict.form_email_subject;
      }

      var btn = contactForm.querySelector('button[type="submit"]');
      formSending = true;
      if (formStatus) {
        formStatus.hidden = true;
        formStatus.textContent = "";
        formStatus.classList.remove("is-success", "is-error");
      }
      if (btn) {
        btn.disabled = true;
        if (dict.form_sending) btn.textContent = dict.form_sending;
      }

      var fd = new FormData(contactForm);

      fetch("https://formspree.io/f/" + FORMSPREE_ID, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          return res
            .json()
            .catch(function () {
              return {};
            })
            .then(function (data) {
              return { ok: res.ok, data: data };
            });
        })
        .then(function (r) {
          if (r.ok && r.data && r.data.ok) {
            window.location.assign(thankYouUrl());
            return;
          }
          var msg = dict.form_error;
          if (r.data) {
            if (typeof r.data.error === "string") msg = r.data.error;
            else if (r.data.errors && typeof r.data.errors === "object") {
              var first = Object.keys(r.data.errors)[0];
              if (first && r.data.errors[first]) msg = String(r.data.errors[first]);
            }
          }
          setFormStatus("error", msg);
        })
        .catch(function () {
          setFormStatus("error", dict.form_error);
        })
        .finally(function () {
          formSending = false;
          if (btn) {
            btn.disabled = false;
            var d = spaDict();
            if (d && d.form_submit) btn.textContent = d.form_submit;
          }
        });
    });
  }
})();
