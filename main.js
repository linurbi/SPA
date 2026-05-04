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

  function spaDict() {
    if (!window.SPA_I18N || !window.SPA_I18N.strings) return null;
    var lang = document.documentElement.getAttribute("lang") || "en";
    return window.SPA_I18N.strings[lang] || window.SPA_I18N.strings.en;
  }

  function setFormStatus(type, message) {
    if (!formStatus) return;
    formStatus.hidden = false;
    formStatus.textContent = message;
    formStatus.classList.remove("is-success", "is-error");
    if (type === "success") formStatus.classList.add("is-success");
    else if (type === "error") formStatus.classList.add("is-error");
  }

  function clearFormStatus() {
    if (!formStatus) return;
    formStatus.hidden = true;
    formStatus.textContent = "";
    formStatus.classList.remove("is-success", "is-error");
  }

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var dict = spaDict();
      if (!dict) return;

      var formId = (contactForm.getAttribute("data-formspree-id") || "").trim();
      if (!formId) {
        setFormStatus("error", dict.form_need_key);
        return;
      }

      var gotcha = contactForm.querySelector('input[name="_gotcha"]');
      if (gotcha && (gotcha.value || "").trim() !== "") return;

      if (!contactForm.reportValidity()) return;

      var btn = contactForm.querySelector('button[type="submit"]');
      var name = (contactForm.querySelector('[name="name"]') || {}).value || "";
      var email = (contactForm.querySelector('[name="email"]') || {}).value || "";
      var message = (contactForm.querySelector('[name="message"]') || {}).value || "";

      if (formSending) return;
      formSending = true;
      clearFormStatus();
      if (btn) {
        btn.disabled = true;
        btn.textContent = dict.form_sending;
      }

      var fd = new FormData();
      fd.append("name", name.trim());
      fd.append("email", email.trim());
      fd.append("message", message.trim());
      fd.append("_subject", dict.form_email_subject);
      fd.append("_replyto", email.trim());

      var endpoint = "https://formspree.io/f/" + encodeURIComponent(formId);

      fetch(endpoint, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          return res.json().catch(function () {
            return {};
          }).then(function (data) {
            return { ok: res.ok, status: res.status, data: data };
          });
        })
        .then(function (r) {
          if (r.ok && r.data && (r.data.ok === true || r.data.next)) {
            setFormStatus("success", dict.form_success);
            contactForm.reset();
          } else {
            var msg = dict.form_error;
            if (r.data) {
              if (typeof r.data.error === "string") msg = r.data.error;
              else if (r.data.errors && typeof r.data.errors === "object") {
                var first = Object.keys(r.data.errors)[0];
                if (first && r.data.errors[first]) msg = String(r.data.errors[first]);
              }
            }
            setFormStatus("error", msg);
          }
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

    contactForm.addEventListener("input", function () {
      if (formStatus && !formStatus.hidden && formStatus.classList.contains("is-error")) {
        clearFormStatus();
      }
    });
  }
})();
