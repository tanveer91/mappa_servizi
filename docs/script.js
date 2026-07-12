const LANG_STORAGE_KEY = "pitspot-landing-lang";

const translations = {
  it: {
    "meta.title": "PitSpot — La mappa per le tue avventure all'aria aperta",
    "meta.description":
      "PitSpot — trova fontanelle e bagni pubblici sulla mappa, ovunque tu sia. Presto disponibile su Android.",
    "lang.groupLabel": "Lingua",
    "header.cta": "Avvisami al lancio",
    "hero.eyebrow": "Presto su Android",
    "hero.title": "La mappa definitiva per i tuoi viaggi all'aria aperta",
    "hero.lead":
      "PitSpot ti mostra fontanelle d'acqua potabile e bagni pubblici vicino a te. Perfetta per escursioni, city trip e giornate fuori porta.",
    "hero.feature1": "Fontanelle e punti d'acqua nelle vicinanze",
    "hero.feature2": "Bagni pubblici con dettagli su accessibilità e orari",
    "hero.feature3": "Ricerca per indirizzo o posizione GPS attuale",
    "hero.cta": "Iscriviti alla lista d'attesa",
    "hero.visualLabel": "Anteprima dell'app PitSpot",
    "hero.screenshotAlt":
      "Schermata dell'app PitSpot con mappa di Milano, fontanelle e controlli di ricerca",
    "newsletter.title": "Resta aggiornato",
    "newsletter.lead":
      "Lascia la tua email per essere avvisato quando l'app sarà disponibile su Android. Nessuno spam: solo una notifica al lancio.",
    "newsletter.emailLabel": "Email",
    "newsletter.emailPlaceholder": "la.tua@email.com",
    "newsletter.submit": "Avvisami al lancio",
    "newsletter.privacy":
      "Inviando il modulo accetti di ricevere una sola email al momento del lancio. Puoi richiedere la cancellazione in qualsiasi momento.",
    "form.configError":
      "Configura prima il modulo: sostituisci YOUR_FORM_ID in index.html con il tuo ID Formspree.",
    "form.sending": "Invio in corso...",
    "form.success": "Perfetto! Ti avviseremo quando PitSpot sarà disponibile su Android.",
    "form.error": "Qualcosa è andato storto. Riprova tra poco.",
    "form.submitFailed": "Invio non riuscito.",
  },
  en: {
    "meta.title": "PitSpot — The map for your outdoor adventures",
    "meta.description":
      "PitSpot — find water fountains and public toilets on the map, wherever you are. Coming soon on Android.",
    "lang.groupLabel": "Language",
    "header.cta": "Notify me at launch",
    "hero.eyebrow": "Coming soon on Android",
    "hero.title": "The ultimate map for your outdoor adventures",
    "hero.lead":
      "PitSpot shows you drinking water fountains and public toilets near you. Perfect for hikes, city trips, and days out.",
    "hero.feature1": "Water fountains and drinking points nearby",
    "hero.feature2": "Public toilets with accessibility and opening hours details",
    "hero.feature3": "Search by address or current GPS location",
    "hero.cta": "Join the waitlist",
    "hero.visualLabel": "PitSpot app preview",
    "hero.screenshotAlt":
      "PitSpot app screenshot showing a Milan map with water fountains and search controls",
    "newsletter.title": "Stay updated",
    "newsletter.lead":
      "Leave your email to be notified when the app becomes available on Android. No spam — just one notification at launch.",
    "newsletter.emailLabel": "Email",
    "newsletter.emailPlaceholder": "your.email@example.com",
    "newsletter.submit": "Notify me at launch",
    "newsletter.privacy":
      "By submitting the form, you agree to receive a single email when the app launches. You can request removal at any time.",
    "form.configError":
      "Configure the form first: replace YOUR_FORM_ID in index.html with your Formspree ID.",
    "form.sending": "Sending...",
    "form.success": "Great! We'll notify you when PitSpot is available on Android.",
    "form.error": "Something went wrong. Please try again shortly.",
    "form.submitFailed": "Submission failed.",
  },
};

let currentLang = "it";

function t(key) {
  return translations[currentLang][key] ?? translations.it[key] ?? key;
}

function detectLanguage() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved === "it" || saved === "en") {
    return saved;
  }

  const browserLang = (navigator.language || "it").toLowerCase();
  return browserLang.startsWith("en") ? "en" : "it";
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    element.placeholder = t(key);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria-label");
    element.setAttribute("aria-label", t(key));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.getAttribute("data-i18n-alt");
    element.alt = t(key);
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const key = element.getAttribute("data-i18n-content");
    if (element.tagName === "TITLE") {
      document.title = t(key);
    } else {
      element.setAttribute("content", t(key));
    }
  });

  const langGroup = document.querySelector(".lang-switch");
  if (langGroup) {
    langGroup.setAttribute("aria-label", t("lang.groupLabel"));
  }

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    if (lang === "it" || lang === "en") {
      applyLanguage(lang);
    }
  });
});

applyLanguage(detectLanguage());

const form = document.getElementById("signup-form");
const statusEl = document.getElementById("form-status");

if (form && statusEl) {
  form.addEventListener("submit", async (event) => {
    const action = form.getAttribute("action") || "";

    if (action.includes("YOUR_FORM_ID")) {
      event.preventDefault();
      statusEl.hidden = false;
      statusEl.className = "form-status error";
      statusEl.textContent = t("form.configError");
      return;
    }

    event.preventDefault();
    statusEl.hidden = false;
    statusEl.className = "form-status";
    statusEl.textContent = t("form.sending");

    try {
      const response = await fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        statusEl.className = "form-status success";
        statusEl.textContent = t("form.success");
        return;
      }

      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || t("form.submitFailed"));
    } catch (error) {
      statusEl.className = "form-status error";
      statusEl.textContent = error.message || t("form.error");
    }
  });
}
