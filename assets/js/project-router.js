/* ============================================================
   PROJECT ROUTER — AUTO PAGE GENERATION (BILINGUAL VERSION)
   Loads template + JSON + injects content based on URL slug.
   ============================================================ */

(async function () {

    /* ---------------------------------------------
       0. LANGUAGE SELECTION
    --------------------------------------------- */
    const lang = localStorage.getItem("lang") || "en";


    /* ---------------------------------------------
       1. GET SLUG FROM QUERY STRING OR PATH
    --------------------------------------------- */
    const params = new URLSearchParams(window.location.search);
    let slug = params.get("slug");

    // Fallback: /project/slug
    if (!slug) {
        const segments = window.location.pathname.split("/").filter(Boolean);
        const projectIndex = segments.indexOf("project");

        if (projectIndex !== -1 && segments[projectIndex + 1]) {
            slug = segments[projectIndex + 1];
        }
    }

    if (!slug) {
        document.body.innerHTML =
            "<h1 style='color:white; text-align:center;'>❌ No project slug provided.</h1>";
        return;
    }

    console.log("Slug loaded:", slug);


    /* ---------------------------------------------
       2. LOAD TEMPLATE FILE INTO PAGE
    --------------------------------------------- */
    let templateHTML;
    try {
        const res = await fetch("/assets/pages/work/template-project.html");
        templateHTML = await res.text();
    } catch (err) {
        console.error("❌ Could not load template-project.html", err);
        document.body.innerHTML = "Template not found.";
        return;
    }

    document.getElementById("project-template-container").innerHTML = templateHTML;


    /* ---------------------------------------------
       3. LOAD PROJECTS JSON
    --------------------------------------------- */
    let projectData;
    try {
        const res = await fetch("/assets/data/projects.json");
        projectData = await res.json();
    } catch (err) {
        console.error("❌ Could not load projects.json", err);
        return;
    }

    const p = projectData[slug];
    if (!p) {
        document.getElementById("project-template-container").innerHTML =
            `<h1 style="color:white; text-align:center;">❌ Project '${slug}' not found.</h1>`;
        return;
    }

    console.log("Loaded project:", p);


    /* ---------------------------------------------
       4. SEO TAGS (bilingual)
    --------------------------------------------- */
    document.title = `${p.title[lang]} – Portfolio`;

    document.querySelector('meta[name="description"]')
        ?.setAttribute("content", p.subtitle[lang]);

    document.querySelector('meta[property="og:title"]')
        ?.setAttribute("content", p.title[lang]);

    document.querySelector('meta[property="og:image"]')
        ?.setAttribute("content", p.heroImage);

    document.querySelector('link[rel="canonical"]')
        ?.setAttribute("href", window.location.href);


    /* ---------------------------------------------
       5. BASIC TEXT CONTENT
    --------------------------------------------- */
    document.getElementById("project-title").textContent = p.title[lang];
    document.getElementById("project-subtitle").textContent = p.subtitle[lang];


    /* ---------------------------------------------
       6. HERO IMAGE
    --------------------------------------------- */
    const heroImg = document.getElementById("project-hero-image");
    heroImg.src = p.heroImage;
    heroImg.alt = p.title[lang];


    /* ---------------------------------------------
       7. DESCRIPTION
    --------------------------------------------- */
    const descContainer = document.getElementById("project-description");
    descContainer.innerHTML = p.description[lang]
        .map(paragraph => `<p>${paragraph}</p>`)
        .join("");


    /* ---------------------------------------------
       8. TECHNOLOGIES
    --------------------------------------------- */
    const techList = document.getElementById("project-technos");
    techList.innerHTML = p.technos[lang]
        .map(t => `<li>${t}</li>`)
        .join("");


    /* ---------------------------------------------
       9. DELIVERABLES
    --------------------------------------------- */
    const delivList = document.getElementById("project-deliverables");
    delivList.innerHTML = p.deliverables[lang]
        .map(d => `<li>${d}</li>`)
        .join("");


    /* ---------------------------------------------
       10. GALLERY
    --------------------------------------------- */
    const gallery = document.getElementById("project-gallery");
    gallery.innerHTML = p.gallery
        .map(img => `<figure><img src="${img}" alt="${p.title[lang]}"></figure>`)
        .join("");


    /* ---------------------------------------------
       11. STATUS BAR (color + subtitle)
    --------------------------------------------- */
    const statusBar = document.getElementById("project-status-bar");
    const statusText = document.getElementById("project-status-text");

    statusText.textContent = p.subtitle[lang];

    const cssVarName = `--type-${p.type}`;
    const cssVarValue = getComputedStyle(document.documentElement)
        .getPropertyValue(cssVarName);

    if (cssVarValue) {
        statusBar.style.background = cssVarValue.trim();
    } else {
        console.warn(`⚠️ No color defined for project type '${p.type}'`);
    }


    /* ---------------------------------------------
       12. REINIT UNIVERSAL HEADER
    --------------------------------------------- */
    if (typeof initUniversalHeader === "function") {
        initUniversalHeader();
    }


    /* ---------------------------------------------
       13. LIGHTBOX BINDING (after template load)
    --------------------------------------------- */
    document.addEventListener("click", e => {
        const lb = document.getElementById("lightbox");
        const lbImg = lb.querySelector("img");
        const close = document.getElementById("lightbox-close");

        if (e.target.matches(".project-gallery img")) {
            lbImg.src = e.target.src;
            lb.classList.add("active");
        }
        if (e.target === lb || e.target === close) {
            lb.classList.remove("active");
        }
    });

})();
