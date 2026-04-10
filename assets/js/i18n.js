/* =======================================================
   SIMPLE MULTILINGUAL ENGINE
   Loads translations.json and replaces all [data-i18n] tags
========================================================== */

async function applyTranslations() {
    const lang = localStorage.getItem("lang") || "en";

    const res = await fetch("assets/data/translations.json");
    const dict = await res.json();

    // Apply meta titles/descriptions
    applyMetaTranslations(dict, lang);

    // Then apply in-body translations
    const page = document.body.dataset.page || "index";
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        const translation =
            dict[lang]?.[page]?.[key] ||
            dict["en"]?.[page]?.[key] ||
            "";
        el.innerHTML = translation;
    });
}

/* =======================================================
   LANGUAGE SWITCH HANDLER
========================================================== */
document.addEventListener("click", e => {
    if (e.target.matches("[data-lang]")) {
        localStorage.setItem("lang", e.target.dataset.lang);
        location.reload();
    }
});

/* =======================================================
   RUN ON PAGE LOAD
========================================================== */
document.addEventListener("DOMContentLoaded", applyTranslations);

function applyMetaTranslations(dict, lang) {
    const page = document.body.dataset.page || "index";

    // Title
    const titleKey = `title_${page}`;
    if (dict[lang].meta?.[titleKey]) {
        document.title = dict[lang].meta[titleKey];
    }

    // Meta description
    const descKey = `desc_${page}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict[lang].meta?.[descKey]) {
        metaDesc.setAttribute("content", dict[lang].meta[descKey]);
    }
}
