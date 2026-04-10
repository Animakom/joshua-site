const projectData = {
    web: [
        { 
            title: {
                en: "Agence Laboustau – Real Estate Website",
                fr: "Agence Laboustau – Site Immobilier"
            },
            subtitle: {
                en: "Showcase Website – WordPress",
                fr: "Site vitrine – WordPress"
            },
            description: {
                en: "A sleek, modern website for a real estate agent featuring high-end property listings, interactive sliders, and a coherent visual identity.",
                fr: "Un site élégant et moderne pour une agence immobilière, avec des annonces haut de gamme."
            },
            image: "/assets/images/PNG/projects/thumbs/laboustau.png",
            type: "realestate",
            slug: "laboustau"
        },

        { 
            title: {
                en: "Gipsy Esthetic",
                fr: "Gipsy Esthetic"
            },
            subtitle: {
                en: "Landing Page – WordPress",
                fr: "Landing page – WordPress"
            },
            description: {
                en: "A vibrant landing page for a beauty salon, showcasing services and booking options.",
                fr: "Une landing page dynamique pour un salon esthétique, présentant les services et les options de réservation."
            },
            type: "landing",
            image: "/assets/images/PNG/projects/thumbs/gipsyesthetic.png",
            slug: "gipsyesthetic"
        },

        { 
            title: {
                en: "Be-Unique",
                fr: "Be-Unique"
            },
            subtitle: {
                en: "E-commerce Website – WooCommerce",
                fr: "Site e-commerce – WooCommerce"
            },
            description: {
                en: "An e-commerce website for a fashion brand with product catalogs, shopping cart, and secure checkout.",
                fr: "Un site e-commerce pour une marque de mode, avec catalogue produits, panier et paiement sécurisé."
            },
            type: "ecommerce",
            image: "/assets/images/PNG/projects/thumbs/beunique.png",
            slug: "beunique"
        },
    ],


    print: [
        { 
            title: {
                en: "Print Project 01",
                fr: "Projet Print 01"
            },
            subtitle: {
                en: "Poster Series",
                fr: "Série d’affiches"
            },
            description: {
                en: "A set of A2 posters exploring shapes and colors through a minimal geometric system.",
                fr: "Une série d’affiches A2 explorant formes et couleurs via un système géométrique minimaliste."
            },
            color: "#ff9f1c",
            slug: "print-project-01"
        },

        { 
            title: {
                en: "Print Project 02",
                fr: "Projet Print 02"
            },
            subtitle: {
                en: "Brand Brochure",
                fr: "Brochure de marque"
            },
            description: {
                en: "A clean brochure layout designed for a brand identity project.",
                fr: "Une mise en page épurée pour une brochure dans le cadre d’un projet d’identité de marque."
            },
            color: "#ffbf69",
            slug: "print-project-02"
        },

        { 
            title: {
                en: "Print Project 03",
                fr: "Projet Print 03"
            },
            subtitle: {
                en: "Magazine Ads",
                fr: "Annonces magazine"
            },
            description: {
                en: "A collection of magazine ad concepts blending typography and bold photography.",
                fr: "Une collection de concepts d’annonces magazine mêlant typographie et photographies percutantes."
            },
            color: "#cbf3f0",
            slug: "print-project-03"
        },
    ],


    branding: [
        { 
            title: {
                en: "Branding 01",
                fr: "Branding 01"
            },
            subtitle: {
                en: "Visual Identity",
                fr: "Identité visuelle"
            },
            description: {
                en: "Logo, color palette, typography, and brand assets designed for a modern tech startup.",
                fr: "Logo, palette de couleurs, typographies et assets de marque créés pour une startup tech moderne."
            },
            color: "#9b5de5",
            slug: "branding-project-01"
        },

        { 
            title: {
                en: "Whatever",
                fr: "Whatever"
            },
            subtitle: {
                en: "Cool Subtitle",
                fr: "Sous-titre stylé"
            },
            description: {
                en: "Bla bla bla bla bla bla bla bla bla bla bla.",
                fr: "Bla bla bla bla bla bla bla bla bla bla bla."
            },
            color: "#f15bb5",
            slug: "branding-project-02"
        },

        { 
            title: {
                en: "Branding 03",
                fr: "Branding 03"
            },
            subtitle: {
                en: "Brand Guidelines",
                fr: "Charte graphique"
            },
            description: {
                en: "A detailed style guide covering correct and incorrect uses of the new brand assets.",
                fr: "Une charte graphique détaillée expliquant les bonnes pratiques et les interdits d’utilisation de la nouvelle identité."
            },
            color: "#fee440",
            slug: "branding-project-03"
        },
    ],


    dev: [
        { 
            title: {
                en: "Dev Tool 01",
                fr: "Dev Tool 01"
            },
            subtitle: {
                en: "Custom Script",
                fr: "Script personnalisé"
            },
            description: {
                en: "A lightweight script automating file organization and metadata tagging.",
                fr: "Un script léger automatisant l’organisation de fichiers et l’ajout de métadonnées."
            },
            color: "#00beef",
            slug: "dev-tool-01"
        },

        { 
            title: {
                en: "Dev Tool 02",
                fr: "Dev Tool 02"
            },
            subtitle: {
                en: "Web App",
                fr: "Application web"
            },
            description: {
                en: "A small utility app featuring dynamic filtering, live search, and clean interface logic.",
                fr: "Une petite application utilitaire avec filtres dynamiques, recherche instantanée et logique d’interface propre."
            },
            color: "#0081a7",
            slug: "dev-tool-02"
        },

        { 
            title: {
                en: "Dev Tool 03",
                fr: "Dev Tool 03"
            },
            subtitle: {
                en: "Internal Dashboard",
                fr: "Tableau de bord interne"
            },
            description: {
                en: "A dashboard built for tracking local data and offering a productivity-focused UI.",
                fr: "Un tableau de bord conçu pour suivre des données locales et offrir une interface axée productivité."
            },
            color: "#00afb9",
            slug: "dev-tool-03"
        },
    ],
};


const typeColorMap = {
    showcase:      "var(--type-showcase)",
    corporate:     "var(--type-corporate)",
    landing:       "var(--type-landing)",
    ecommerce:     "var(--type-ecommerce)",
    catalog:       "var(--type-catalog)",
    portfolio:     "var(--type-portfolio)",
    blog:          "var(--type-blog)",
    magazine:      "var(--type-magazine)",
    booking:       "var(--type-booking)",
    subscription:  "var(--type-subscription)",
    community:     "var(--type-community)",
    elearning:     "var(--type-elearning)",
    webapp:        "var(--type-webapp)",
    dashboard:     "var(--type-dashboard)",
    realestate:    "var(--type-realestate)"
};


function renderProjects(category) {
    const container = document.getElementById("projectsGrid");
    const items = projectData[category];
    const lang = localStorage.getItem("lang") || "en";

    container.innerHTML = items.map((item, i) => `
        <div class="project-card win95-frame card-animate" style="animation-delay:${i * 0.12}s;">
            
            <!-- TOP VENT BAR -->
            <div class="win95-topbar">
                <div class="win95-vents"></div>
            </div>

            <!-- THUMBNAIL AREA WITH INNER FRAME -->
            <div class="project-thumb-area">
                <div class="inner-frame">
                    <div class="project-thumb" style="
                        background-image: url('${item.image}');
                        background-size: cover;
                        background-position: center;
                    "></div>
                </div>
            </div>

            <!-- INFO PANEL -->
            <div class="project-info">
            
            <div class="info-header">
                <h3>${item.title[lang]}</h3>

                <a data-i18n="learn_more_btn" class="btn-win95" href="/project/${item.slug}">
                    LEARN MORE
                </a>
            </div>

                <p class="description">${item.description[lang]}</p>
            </div>

            <!-- STATUS PANEL -->
            <div 
                class="project-status" 
                style="background: ${typeColorMap[item.type] || 'var(--snow)'}"
            >
                ${item.subtitle[lang]}
            </div>

        </div>
    `).join("");
}



const filterButtons = document.querySelectorAll(".project-filters button");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const cat = btn.dataset.category;
        renderProjects(cat);
    });
});

// Load default category
renderProjects("web");
