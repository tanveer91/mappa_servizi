const LANG_STORAGE_KEY = "pitspot-landing-lang";
const SITE_URL = "https://www.pitspotapp.com";
const SUPPORTED_LANGS = ["it", "en", "de"];

const translations = {
  it: {
    "meta.title": "PitSpot — App gratuita per fontanelle e bagni pubblici sulla mappa",
    "meta.description":
      "PitSpot è l'app gratuita per trovare fontanelle d'acqua potabile e bagni pubblici sulla mappa. Ideale per viaggi, escursioni e giornate outdoor. Presto su Android.",
    "meta.keywords":
      "PitSpot, fontanelle, bagni pubblici, mappa, app Android, acqua potabile, viaggi outdoor, servizi igienici, escursioni, refill water, toilette pubbliche",
    "lang.groupLabel": "Lingua",
    "lang.italian": "Italiano",
    "lang.english": "Inglese",
    "lang.german": "Tedesco",
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
    "usecases.title": "A chi è utile PitSpot",
    "usecases.lead":
      "Un'app pensata per chi si muove all'aperto e in città e vuole acqua e servizi igienici senza stress.",
    "usecases.item1": "Escursioni e trekking: trova fontanelle lungo il percorso",
    "usecases.item2": "City trip e turismo: individua bagni pubblici in centro",
    "usecases.item3": "Giornate fuori porta: riempi la borraccia invece di comprare plastica",
    "usecases.item4": "Viaggi in famiglia: localizza servizi igienici con info su accessibilità",
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
    "faq.q6": "In quali lingue è disponibile PitSpot?",
    "faq.a6": "PitSpot è disponibile in italiano, inglese e tedesco.",
    "newsletter.title": "Resta aggiornato",
    "newsletter.lead":
      "Lascia la tua email per essere avvisato quando l'app sarà disponibile su Android. Nessuno spam: solo una notifica al lancio.",
    "newsletter.emailLabel": "Email",
    "newsletter.emailPlaceholder": "la.tua@email.com",
    "newsletter.submit": "Avvisami al lancio",
    "newsletter.privacy":
      "Inviando il modulo accetti di ricevere una sola email al momento del lancio. Puoi richiedere la cancellazione in qualsiasi momento.",
    "captcha.label": "Digita i caratteri dell'immagine per confermare che non sei un bot:",
    "captcha.placeholder": "Codice",
    "captcha.refresh": "Nuova immagine",
    "captcha.inputLabel": "Codice di verifica",
    "captcha.imageAlt": "Immagine di verifica anti-spam",
    "captcha.hint": "Non serve distinguere maiuscole e minuscole. Usa ↻ per una nuova immagine.",
    "captcha.confirm": "Conferma e iscriviti",
    "captcha.invalid": "Codice non corretto. Prova di nuovo con una nuova immagine.",
    "captcha.required": "Completa la verifica anti-spam per continuare.",
    "footer.tagline": "App per fontanelle e bagni pubblici",
    "form.configError":
      "Configura prima il modulo: sostituisci YOUR_FORM_ID in index.html con il tuo ID Formspree.",
    "form.sending": "Invio in corso...",
    "form.success": "Perfetto! Ti avviseremo quando PitSpot sarà disponibile su Android.",
    "form.error": "Qualcosa è andato storto. Riprova tra poco.",
    "form.submitFailed": "Invio non riuscito.",
  },
  en: {
    "meta.title": "PitSpot — Free app for water fountains and public toilets on the map",
    "meta.description":
      "PitSpot is the free Android app to find drinking water fountains and public toilets on the map. Perfect for travel, hiking, and outdoor days. Coming soon.",
    "meta.keywords":
      "PitSpot, water fountains, public toilets, map app, Android app, drinking water, outdoor travel, restrooms, hiking, water refill, public bathroom finder",
    "lang.groupLabel": "Language",
    "lang.italian": "Italian",
    "lang.english": "English",
    "lang.german": "German",
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
    "usecases.title": "Who PitSpot is for",
    "usecases.lead":
      "Built for people on the move outdoors and in the city who need water and restrooms without stress.",
    "usecases.item1": "Hiking and trekking: find water fountains along your route",
    "usecases.item2": "City trips and tourism: locate public toilets downtown",
    "usecases.item3": "Day trips: refill your bottle instead of buying plastic",
    "usecases.item4": "Family travel: find restrooms with accessibility details",
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
    "faq.q6": "Which languages does PitSpot support?",
    "faq.a6": "PitSpot is available in Italian, English, and German.",
    "newsletter.title": "Stay updated",
    "newsletter.lead":
      "Leave your email to be notified when the app becomes available on Android. No spam — just one notification at launch.",
    "newsletter.emailLabel": "Email",
    "newsletter.emailPlaceholder": "your.email@example.com",
    "newsletter.submit": "Notify me at launch",
    "newsletter.privacy":
      "By submitting the form, you agree to receive a single email when the app launches. You can request removal at any time.",
    "captcha.label": "Type the characters from the image to confirm you're not a bot:",
    "captcha.placeholder": "Code",
    "captcha.refresh": "New image",
    "captcha.inputLabel": "Verification code",
    "captcha.imageAlt": "Anti-spam verification image",
    "captcha.hint": "Uppercase and lowercase don't matter. Use ↻ for a new image.",
    "captcha.confirm": "Confirm and subscribe",
    "captcha.invalid": "Incorrect code. Try again with a new image.",
    "captcha.required": "Complete the anti-spam check to continue.",
    "footer.tagline": "App for water fountains and public toilets",
    "form.configError":
      "Configure the form first: replace YOUR_FORM_ID in index.html with your Formspree ID.",
    "form.sending": "Sending...",
    "form.success": "Great! We'll notify you when PitSpot is available on Android.",
    "form.error": "Something went wrong. Please try again shortly.",
    "form.submitFailed": "Submission failed.",
  },
  de: {
    "meta.title": "PitSpot — Kostenlose App für Trinkbrunnen und öffentliche Toiletten",
    "meta.description":
      "PitSpot ist die kostenlose Android-App, um Trinkbrunnen und öffentliche Toiletten auf der Karte zu finden. Ideal für Reisen, Wanderungen und Outdoor-Tage. Bald verfügbar.",
    "meta.keywords":
      "PitSpot, Trinkbrunnen, öffentliche Toiletten, Karte, Android App, Trinkwasser, Outdoor-Reisen, Wanderungen, Sanitäranlagen, Wasser auffüllen, Toilettenfinder",
    "lang.groupLabel": "Sprache",
    "lang.italian": "Italienisch",
    "lang.english": "Englisch",
    "lang.german": "Deutsch",
    "header.cta": "Beim Start benachrichtigen",
    "hero.eyebrow": "Bald auf Android",
    "hero.title": "Die ultimative Karte für deine Outdoor-Abenteuer",
    "hero.lead":
      "PitSpot zeigt dir Trinkbrunnen und öffentliche Toiletten in deiner Nähe. Perfekt für Wanderungen, Städtetrips und Tage im Freien.",
    "hero.feature1": "Trinkbrunnen und Wasserstellen in der Nähe",
    "hero.feature2": "Öffentliche Toiletten mit Details zu Barrierefreiheit und Öffnungszeiten",
    "hero.feature3": "Suche nach Adresse oder aktuellem GPS-Standort",
    "hero.cta": "Auf die Warteliste setzen",
    "hero.visualLabel": "PitSpot App-Vorschau",
    "hero.screenshotAlt":
      "PitSpot App-Screenshot mit Karte von Mailand, Trinkbrunnen und Suchsteuerung",
    "hero.screenshotCaption": "PitSpot App-Vorschau auf dem Smartphone mit interaktiver Karte",
    "about.title": "Was ist PitSpot?",
    "about.text":
      "PitSpot ist eine kostenlose mobile App, die Reisenden, Wanderern und Stadterkundern hilft, Trinkbrunnen und öffentliche Toiletten auf der Karte zu finden. Suche nach Adresse oder nutze GPS, um die nächsten Punkte zu entdecken.",
    "usecases.title": "Für wen PitSpot gedacht ist",
    "usecases.lead":
      "Für alle, die unterwegs in der Natur oder in der Stadt Wasser und Toiletten ohne Stress finden wollen.",
    "usecases.item1": "Wandern und Trekking: Trinkbrunnen entlang der Route finden",
    "usecases.item2": "Städtetrips und Tourismus: öffentliche Toiletten in der Innenstadt finden",
    "usecases.item3": "Tagesausflüge: Flasche auffüllen statt Plastik zu kaufen",
    "usecases.item4": "Familienreisen: Toiletten mit Infos zur Barrierefreiheit finden",
    "faq.title": "Häufig gestellte Fragen",
    "faq.q1": "Was ist PitSpot?",
    "faq.a1":
      "PitSpot ist eine Android-App, die Trinkbrunnen und öffentliche Toiletten auf einer interaktiven Karte anzeigt – ideal für Reisende, Wanderer und Stadterkunder.",
    "faq.q2": "Ist PitSpot kostenlos?",
    "faq.a2": "Ja, PitSpot wird vollständig kostenlos sein. Kein Abo, keine versteckten Kosten.",
    "faq.q3": "Wann wird die App verfügbar sein?",
    "faq.a3":
      "Die App kommt bald auf Android. Melde dich für den Newsletter an, um beim offiziellen Start benachrichtigt zu werden.",
    "faq.q4": "Was finde ich auf der Karte?",
    "faq.a4":
      "Du findest Trinkbrunnen und öffentliche Toiletten mit Informationen zu Barrierefreiheit, Öffnungszeiten und Adresse.",
    "faq.q5": "Für welche Plattformen ist PitSpot geplant?",
    "faq.a5": "Der erste Start ist für Android geplant. Weitere Plattformen könnten später folgen.",
    "faq.q6": "In welchen Sprachen ist PitSpot verfügbar?",
    "faq.a6": "PitSpot ist auf Italienisch, Englisch und Deutsch verfügbar.",
    "newsletter.title": "Bleib auf dem Laufenden",
    "newsletter.lead":
      "Hinterlasse deine E-Mail, um benachrichtigt zu werden, wenn die App auf Android verfügbar ist. Kein Spam – nur eine Benachrichtigung beim Start.",
    "newsletter.emailLabel": "E-Mail",
    "newsletter.emailPlaceholder": "deine@email.com",
    "newsletter.submit": "Beim Start benachrichtigen",
    "newsletter.privacy":
      "Mit dem Absenden des Formulars stimmst du zu, eine einzelne E-Mail beim App-Start zu erhalten. Du kannst die Löschung jederzeit anfordern.",
    "captcha.label": "Gib die Zeichen aus dem Bild ein, um zu bestätigen, dass du kein Bot bist:",
    "captcha.placeholder": "Code",
    "captcha.refresh": "Neues Bild",
    "captcha.inputLabel": "Bestätigungscode",
    "captcha.imageAlt": "Anti-Spam-Prüfbild",
    "captcha.hint": "Groß- und Kleinschreibung sind egal. Mit ↻ ein neues Bild laden.",
    "captcha.confirm": "Bestätigen und anmelden",
    "captcha.invalid": "Falscher Code. Bitte mit einem neuen Bild erneut versuchen.",
    "captcha.required": "Bitte die Anti-Spam-Prüfung abschließen.",
    "footer.tagline": "App für Trinkbrunnen und öffentliche Toiletten",
    "form.configError":
      "Konfiguriere zuerst das Formular: Ersetze YOUR_FORM_ID in index.html durch deine Formspree-ID.",
    "form.sending": "Wird gesendet...",
    "form.success": "Perfekt! Wir benachrichtigen dich, wenn PitSpot auf Android verfügbar ist.",
    "form.error": "Etwas ist schiefgelaufen. Bitte versuche es später erneut.",
    "form.submitFailed": "Senden fehlgeschlagen.",
  },
};

let currentLang = "it";

function t(key) {
  return translations[currentLang][key] ?? translations.it[key] ?? key;
}

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (SUPPORTED_LANGS.includes(urlLang)) {
    return urlLang;
  }

  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (SUPPORTED_LANGS.includes(saved)) {
    return saved;
  }

  const browserLang = (navigator.language || "it").toLowerCase();
  if (browserLang.startsWith("de")) return "de";
  if (browserLang.startsWith("en")) return "en";
  return "it";
}

function updateStructuredData() {
  const script = document.getElementById("structured-data");
  if (!script) return;

  const localeMap = { it: "it-IT", en: "en-US", de: "de-DE" };
  const pageUrl = `${SITE_URL}/?lang=${currentLang}`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "PitSpot",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assets/logo.png`,
        },
        description: t("meta.description"),
        sameAs: [
          `${SITE_URL}/llms.txt`,
          `${SITE_URL}/llms-it.txt`,
          `${SITE_URL}/llms-de.txt`,
          `${SITE_URL}/ai.txt`,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "PitSpot",
        url: SITE_URL,
        inLanguage: ["it-IT", "en-US", "de-DE"],
        publisher: { "@id": `${SITE_URL}/#organization` },
        description: t("meta.description"),
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: pageUrl,
        name: t("meta.title"),
        description: t("meta.description"),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#app` },
        inLanguage: localeMap[currentLang] || "it-IT",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assets/screenshot.jpg`,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-title", ".lead", "#about-title", ".about-card p"],
        },
      },
      {
        "@type": ["MobileApplication", "SoftwareApplication"],
        "@id": `${SITE_URL}/#app`,
        name: "PitSpot",
        operatingSystem: "Android",
        applicationCategory: "TravelApplication",
        applicationSubCategory: "Maps",
        description: t("about.text"),
        url: SITE_URL,
        image: `${SITE_URL}/assets/screenshot.jpg`,
        inLanguage: ["it", "en", "de"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          availability: "https://schema.org/PreOrder",
        },
        featureList: [t("hero.feature1"), t("hero.feature2"), t("hero.feature3")],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t("faq.title"),
            item: `${SITE_URL}/#faq`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: t("newsletter.title"),
            item: `${SITE_URL}/#newsletter`,
          },
        ],
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
          { q: "faq.q6", a: "faq.a6" },
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

  const canonical = document.getElementById("canonical-link");
  if (canonical) {
    canonical.setAttribute("href", pageUrl);
  }

  const ogUrl = document.getElementById("og-url");
  if (ogUrl) {
    ogUrl.setAttribute("content", pageUrl);
  }
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
    const localeMap = { it: "it_IT", en: "en_US", de: "de_DE" };
    ogLocale.setAttribute("content", localeMap[lang] || "it_IT");
  }

  const langLabels = {
    it: t("lang.italian"),
    en: t("lang.english"),
    de: t("lang.german"),
  };

  const langGroup = document.querySelector(".lang-switch");
  if (langGroup) {
    langGroup.setAttribute("aria-label", t("lang.groupLabel"));
  }

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const buttonLang = button.dataset.lang;
    const isActive = buttonLang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("aria-label", langLabels[buttonLang] || buttonLang);
  });

  refreshCaptchaIfVisible();
  updateStructuredData();

  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url);
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    if (SUPPORTED_LANGS.includes(lang)) {
      applyLanguage(lang);
    }
  });
});

const CAPTCHA_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const CAPTCHA_LENGTH = 5;

let captchaCode = "";
let captchaShownAt = 0;
let captchaSolved = false;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(list) {
  return list[randomInt(0, list.length - 1)];
}

function generateCaptchaCode() {
  let code = "";
  for (let i = 0; i < CAPTCHA_LENGTH; i += 1) {
    code += CAPTCHA_CHARS.charAt(randomInt(0, CAPTCHA_CHARS.length - 1));
  }
  return code;
}

function drawCaptcha(code) {
  const canvas = document.getElementById("captcha-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = canvas.width;
  const height = canvas.height;

  const layer = document.createElement("canvas");
  layer.width = width;
  layer.height = height;
  const lctx = layer.getContext("2d");
  if (!lctx) return;

  ctx.clearRect(0, 0, width, height);
  lctx.clearRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#eef1f3");
  gradient.addColorStop(1, "#dde3e7");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Rumore di fondo leggero
  for (let i = 0; i < 70; i += 1) {
    ctx.fillStyle = `rgba(${randomInt(40, 160)}, ${randomInt(40, 160)}, ${randomInt(40, 160)}, 0.18)`;
    ctx.fillRect(randomInt(0, width), randomInt(0, height), 1, 1);
  }

  for (let i = 0; i < 4; i += 1) {
    ctx.strokeStyle = `rgba(${randomInt(60, 140)}, ${randomInt(60, 140)}, ${randomInt(60, 140)}, 0.28)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(randomInt(0, width), randomInt(0, height));
    ctx.bezierCurveTo(
      randomInt(0, width),
      randomInt(0, height),
      randomInt(0, width),
      randomInt(0, height),
      randomInt(0, width),
      randomInt(0, height)
    );
    ctx.stroke();
  }

  const fonts = [
    "700 34px Georgia, serif",
    "700 33px 'Courier New', monospace",
    "700 34px Arial, sans-serif",
    "italic 700 33px Georgia, serif",
  ];
  const colors = ["#2f3538", "#4e5558", "#a83228", "#1f5f99", "#1f7a48", "#c45a1a"];
  const step = width / (code.length + 1);

  for (let i = 0; i < code.length; i += 1) {
    const char = code[i];
    const x = step * (i + 1) + randomInt(-2, 2);
    const y = height / 2 + randomInt(-6, 6);

    lctx.save();
    lctx.translate(x, y);
    lctx.rotate((randomInt(-22, 22) * Math.PI) / 180);
    lctx.font = randomItem(fonts);
    lctx.fillStyle = randomItem(colors);
    lctx.textAlign = "center";
    lctx.textBaseline = "middle";
    lctx.shadowColor = "rgba(0, 0, 0, 0.2)";
    lctx.shadowBlur = 1.5;
    lctx.fillText(char, 0, 0);
    lctx.restore();
  }

  // Distorsione lieve (non sfoca, solo curva leggermente)
  const warped = document.createElement("canvas");
  warped.width = width;
  warped.height = height;
  const wctx = warped.getContext("2d");
  if (wctx) {
    const amp = 1.8;
    const freq = 0.05;
    for (let y = 0; y < height; y += 1) {
      const offsetX = Math.sin(y * freq) * amp;
      wctx.drawImage(layer, 0, y, width, 1, offsetX, y, width, 1);
    }
    ctx.drawImage(warped, 0, 0);
  } else {
    ctx.drawImage(layer, 0, 0);
  }

  // 2 linee sottili sopra i caratteri
  for (let i = 0; i < 2; i += 1) {
    ctx.strokeStyle = `rgba(${randomInt(50, 120)}, ${randomInt(50, 120)}, ${randomInt(50, 120)}, 0.4)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(8, randomInt(18, height - 18));
    ctx.bezierCurveTo(
      width * 0.35,
      randomInt(10, height - 10),
      width * 0.65,
      randomInt(10, height - 10),
      width - 8,
      randomInt(18, height - 18)
    );
    ctx.stroke();
  }

  // Rumore finale leggero
  for (let i = 0; i < 50; i += 1) {
    const shade = randomInt(30, 200);
    ctx.fillStyle = `rgba(${shade}, ${shade}, ${shade}, 0.16)`;
    ctx.fillRect(randomInt(0, width), randomInt(0, height), 1, 1);
  }
}

function refreshCaptcha(resetInput = true) {
  captchaCode = generateCaptchaCode();
  captchaSolved = false;
  captchaShownAt = Date.now();
  drawCaptcha(captchaCode);

  const answerEl = document.getElementById("captcha-answer");
  if (answerEl && resetInput) {
    answerEl.value = "";
  }

  const refreshBtn = document.getElementById("captcha-refresh");
  if (refreshBtn) {
    refreshBtn.setAttribute("aria-label", t("captcha.refresh"));
  }

  const canvas = document.getElementById("captcha-canvas");
  if (canvas) {
    canvas.setAttribute("aria-label", t("captcha.imageAlt"));
  }
}

function refreshCaptchaIfVisible() {
  const panel = document.getElementById("captcha-panel");
  if (panel && !panel.hidden) {
    refreshCaptcha(false);
  }
}

function showCaptchaPanel() {
  const panel = document.getElementById("captcha-panel");
  const submitBtn = document.getElementById("signup-submit");
  if (!panel) return;

  panel.hidden = false;
  if (submitBtn) submitBtn.hidden = true;
  refreshCaptcha(true);

  const answerEl = document.getElementById("captcha-answer");
  answerEl?.focus();
}

function hideCaptchaPanel() {
  const panel = document.getElementById("captcha-panel");
  const submitBtn = document.getElementById("signup-submit");
  if (panel) {
    panel.hidden = true;
  }
  if (submitBtn) submitBtn.hidden = false;
  captchaCode = "";
  captchaSolved = false;
  captchaShownAt = 0;
}

function normalizeCaptcha(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

function isCaptchaValid() {
  const answerEl = document.getElementById("captcha-answer");
  const userCode = normalizeCaptcha(answerEl?.value);
  const expected = normalizeCaptcha(captchaCode);

  // Evita invii istantanei da bot subito dopo la generazione
  const elapsed = Date.now() - captchaShownAt;
  if (!expected || elapsed < 1200) {
    return false;
  }

  return userCode.length === expected.length && userCode === expected;
}

async function submitNewsletter() {
  const formEl = document.getElementById("signup-form");
  const status = document.getElementById("form-status");
  if (!formEl || !status) return;

  const action = formEl.getAttribute("action") || "";
  status.hidden = false;

  if (action.includes("YOUR_FORM_ID")) {
    status.className = "form-status error";
    status.textContent = t("form.configError");
    return;
  }

  const honeypot = formEl.querySelector('input[name="_gotcha"]');
  if (honeypot && honeypot.value.trim() !== "") {
    status.className = "form-status success";
    status.textContent = t("form.success");
    formEl.reset();
    hideCaptchaPanel();
    return;
  }

  status.className = "form-status";
  status.textContent = t("form.sending");

  try {
    const formData = new FormData(formEl);
    formData.delete("captcha");

    const response = await fetch(action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      formEl.reset();
      hideCaptchaPanel();
      status.className = "form-status success";
      status.textContent = t("form.success");
      return;
    }

    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || t("form.submitFailed"));
  } catch (error) {
    refreshCaptcha(true);
    status.className = "form-status error";
    status.textContent = error.message || t("form.error");
  }
}

applyLanguage(detectLanguage());

const form = document.getElementById("signup-form");
const statusEl = document.getElementById("form-status");
const captchaRefreshBtn = document.getElementById("captcha-refresh");
const captchaConfirmBtn = document.getElementById("captcha-confirm");
const emailInput = document.getElementById("email");

if (captchaRefreshBtn) {
  captchaRefreshBtn.addEventListener("click", () => refreshCaptcha(true));
}

if (emailInput) {
  emailInput.addEventListener("input", () => {
    // Se cambia l'email dopo aver mostrato il captcha, richiedi nuova verifica
    if (!document.getElementById("captcha-panel")?.hidden) {
      captchaSolved = false;
    }
  });
}

if (captchaConfirmBtn) {
  captchaConfirmBtn.addEventListener("click", async () => {
    statusEl.hidden = false;

    if (!isCaptchaValid()) {
      statusEl.className = "form-status error";
      statusEl.textContent = t("captcha.invalid");
      refreshCaptcha(true);
      document.getElementById("captcha-answer")?.focus();
      return;
    }

    captchaSolved = true;
    await submitNewsletter();
  });
}

if (form && statusEl) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput?.value?.trim() || "";
    if (!email || !emailInput.checkValidity()) {
      emailInput?.reportValidity();
      return;
    }

    const panel = document.getElementById("captcha-panel");

    // 1° click: mostra captcha, non inviare ancora
    if (!panel || panel.hidden) {
      statusEl.hidden = true;
      showCaptchaPanel();
      return;
    }

    // 2° percorso: conferma solo dopo captcha valido
    if (!isCaptchaValid()) {
      statusEl.hidden = false;
      statusEl.className = "form-status error";
      statusEl.textContent = captchaSolved ? t("captcha.invalid") : t("captcha.required");
      if (!isCaptchaValid()) {
        refreshCaptcha(true);
      }
      document.getElementById("captcha-answer")?.focus();
      return;
    }

    await submitNewsletter();
  });
}
