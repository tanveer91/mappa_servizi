const LANG_STORAGE_KEY = "pitspot-landing-lang";
const SITE_URL = "https://www.pitspotapp.com";

const translations = {
  it: {
    "meta.title": "PitSpot — La mappa per fontanelle e bagni pubblici",
    "meta.description":
      "PitSpot è l'app gratuita per trovare fontanelle d'acqua potabile e bagni pubblici sulla mappa. Ideale per viaggi, escursioni e giornate all'aria aperta. Presto su Android.",
    "meta.keywords":
      "PitSpot, fontanelle, bagni pubblici, mappa, app Android, acqua potabile, viaggi outdoor, servizi igienici, escursioni",
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
    "hero.screenshotCaption":
      "Anteprima dell'app PitSpot su smartphone con mappa interattiva",
    "about.title": "Cos'è PitSpot?",
    "about.text":
      "PitSpot è un'app mobile gratuita che aiuta viaggiatori, escursionisti e cittadini a trovare fontanelle d'acqua potabile e servizi igienici pubblici sulla mappa. Cerca per indirizzo o usa il GPS per scoprire i punti più vicini a te.",
    "faq.title": "Domande frequenti",
    "faq.q1": "Cos'è PitSpot?",
    "faq.a1":
      "PitSpot è un'app per Android che mostra fontanelle d'acqua potabile e bagni pubblici su una mappa interattiva, ideale per chi viaggia, fa trekking o esplora la città.",
    "faq.q2": "PitSpot è gratuito?",
    "faq.a2": "Sì, PitSpot sarà completamente gratuito. Nessun abbonamento, nessun costo nascosto.",
    "faq.q3": "Quando sarà disponibile l'app?",
    "faq.a3":
      "L'app è in arrivo su Android. Iscriviti alla newsletter per ricevere una notifica al momento del lancio ufficiale.",
    "faq.q4": "Cosa posso trovare sulla mappa?",
    "faq.a4":
      "Puoi trovare fontanelle d'acqua potabile e bagni pubblici, con informazioni su accessibilità, orari di apertura e indirizzo.",
    "faq.q5": "Su quali piattaforme sarà disponibile?",
    "faq.a5": "Il lancio iniziale è previsto su Android. Altre piattaforme potrebbero seguire in futuro.",
    "newsletter.title": "Resta aggiornato",
    "newsletter.lead":
      "Lascia la tua email per essere avvisato quando l'app sarà disponibile su Android. Nessuno spam: solo una notifica al lancio.",
    "newsletter.emailLabel": "Email",
    "newsletter.emailPlaceholder": "la.tua@email.com",
    "newsletter.submit": "Avvisami al lancio",
    "newsletter.privacy":
      "Inviando il modulo accetti di ricevere una sola email al momento del lancio. Puoi richiedere la cancellazione in qualsiasi momento.",
    "footer.tagline": "App per fontanelle e bagni pubblici",
    "form.configError":
      "Configura prima il modulo: sostituisci YOUR_FORM_ID in index.html con il tuo ID Formspree.",
    "form.sending": "Invio in corso...",
    "form.success": "Perfetto! Ti avviseremo quando PitSpot sarà disponibile su Android.",
    "form.error": "Qualcosa è andato storto. Riprova tra poco.",
    "form.submitFailed": "Invio non riuscito.",
  },
  en: {
    "meta.title": "PitSpot — The map for water fountains and public toilets",
    "meta.description":
      "PitSpot is the free app to find drinking water fountains and public toilets on the map. Perfect for travel, hikes, and outdoor days. Coming soon on Android.",
    "meta.keywords":
      "PitSpot, water fountains, public toilets, map app, Android app, drinking water, outdoor travel, restrooms, hiking",
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
    "hero.screenshotCaption": "PitSpot app preview on smartphone with interactive map",
    "about.title": "What is PitSpot?",
    "about.text":
      "PitSpot is a free mobile app that helps travelers, hikers, and city explorers find drinking water fountains and public restrooms on the map. Search by address or use GPS to discover the nearest points.",
    "faq.title": "Frequently asked questions",
    "faq.q1": "What is PitSpot?",
    "faq.a1":
      "PitSpot is an Android app that shows drinking water fountains and public toilets on an interactive map, ideal for travelers, hikers, and city explorers.",
    "faq.q2": "Is PitSpot free?",
    "faq.a2": "Yes, PitSpot will be completely free. No subscription, no hidden costs.",
    "faq.q3": "When will the app be available?",
    "faq.a3":
      "The app is coming soon on Android. Join the newsletter to get notified at the official launch.",
    "faq.q4": "What can I find on the map?",
    "faq.a4":
      "You can find drinking water fountains and public toilets, with details on accessibility, opening hours, and address.",
    "faq.q5": "Which platforms will be supported?",
    "faq.a5": "The initial launch is planned for Android. Other platforms may follow in the future.",
    "newsletter.title": "Stay updated",
    "newsletter.lead":
      "Leave your email to be notified when the app becomes available on Android. No spam — just one notification at launch.",
    "newsletter.emailLabel": "Email",
    "newsletter.emailPlaceholder": "your.email@example.com",
    "newsletter.submit": "Notify me at launch",
    "newsletter.privacy":
      "By submitting the form, you agree to receive a single email when the app launches. You can request removal at any time.",
    "footer.tagline": "App for water fountains and public toilets",
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
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (urlLang === "it" || urlLang === "en") {
    return urlLang;
  }

  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved === "it" || saved === "en") {
    return saved;
  }

  const browserLang = (navigator.language || "it").toLowerCase();
  return browserLang.startsWith("en") ? "en" : "it";
}

function updateStructuredData() {
  const script = document.getElementById("structured-data");
  if (!script) return;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "PitSpot",
        url: SITE_URL,
        logo: `${SITE_URL}/assets/logo.png`,
        description: t("meta.description"),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "PitSpot",
        url: SITE_URL,
        inLanguage: ["it-IT", "en-US"],
        publisher: { "@id": `${SITE_URL}/#organization` },
        description: t("meta.description"),
      },
      {
        "@type": "MobileApplication",
        "@id": `${SITE_URL}/#app`,
        name: "PitSpot",
        operatingSystem: "Android",
        applicationCategory: "TravelApplication",
        description: t("about.text"),
        url: SITE_URL,
        image: `${SITE_URL}/assets/screenshot.jpg`,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        featureList: [t("hero.feature1"), t("hero.feature2"), t("hero.feature3")],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: [
          { q: "faq.q1", a: "faq.a1" },
          { q: "faq.q2", a: "faq.a2" },
          { q: "faq.q3", a: "faq.a3" },
          { q: "faq.q4", a: "faq.a4" },
          { q: "faq.q5", a: "faq.a5" },
        ].map(({ q, a }) => ({
          "@type": "Question",
          name: t(q),
          acceptedAnswer: {
            "@type": "Answer",
            text: t(a),
          },
        })),
      },
    ],
  };

  script.textContent = JSON.stringify(data);
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
    const value = t(key);
    if (element.tagName === "TITLE") {
      document.title = value;
    } else {
      element.setAttribute("content", value);
    }
  });

  const ogLocale = document.getElementById("og-locale");
  if (ogLocale) {
    ogLocale.setAttribute("content", lang === "it" ? "it_IT" : "en_US");
  }

  const langGroup = document.querySelector(".lang-switch");
  if (langGroup) {
    langGroup.setAttribute("aria-label", t("lang.groupLabel"));
  }

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateStructuredData();

  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url);
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
