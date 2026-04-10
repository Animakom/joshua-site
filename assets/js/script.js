// ===================================
// HEADER + MENU
// ===================================

let lastScroll = 0;
const header  = document.querySelector("header");
const burger  = document.querySelector(".burger");
const menu    = document.querySelector(".main-menu");
const overlay = document.querySelector(".menu-overlay");

/* -------------------------------
   FIXED DESKTOP HIDE/SHOW BEHAVIOR
   (now reacts to resize)
-------------------------------- */

function onScrollDesktop() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 80) {
        header.classList.add("header--hidden");
    } else {
        header.classList.remove("header--hidden");
    }

    lastScroll = currentScroll;
}

function handleHeaderBehavior() {
    if (window.innerWidth > 768) {
        // enable desktop behavior
        window.addEventListener("scroll", onScrollDesktop);
    } else {
        // disable on mobile
        window.removeEventListener("scroll", onScrollDesktop);
        header.classList.remove("header--hidden");
    }
}

handleHeaderBehavior();
window.addEventListener("resize", handleHeaderBehavior);


/* -------------------------------
   BURGER + OVERLAY
-------------------------------- */
if (burger && menu && overlay) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        document.body.classList.toggle("no-scroll-x");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        burger.classList.remove("active");
        menu.classList.remove("active");
        overlay.classList.remove("active");
    });
}



// ===============================================
// SKILL TREE
// (requires global `skillsData` from skills.js)
// ===============================================

function renderSkillsTree() {
    const container  = document.getElementById("skillsTree");
    const modal      = document.getElementById("skillModal");
    const skillsBg   = document.querySelector(".skills-bg");
    const isTouch    = window.innerWidth <= 1024;

    if (!container || !modal || !skillsData) return;

    container.innerHTML = skillsData.map((skill, i) => {
        const iconSrc = skill.icon || "assets/icons/skill-icon.svg";
        const iconAlt = `${skill.name} icon`;

        return `
            <div class="skill-item" data-index="${i}">
                <div class="node-circle">
                    <img src="${iconSrc}" alt="${iconAlt}">
                </div>
                <div class="connector"></div>
            </div>
        `;
    }).join("");

    const items       = container.querySelectorAll(".skill-item");
    const titleEl     = modal.querySelector(".modal-title");
    const subtitleEl  = modal.querySelector(".modal-sub");
    const descEl      = modal.querySelector(".modal-desc");

    if (!titleEl || !subtitleEl || !descEl) {
        console.warn("Skill modal is missing .modal-title / .modal-sub / .modal-desc");
        return;
    }

    const updateModalContent = (data) => {
        const lang = localStorage.getItem("lang") || "en";

        titleEl.textContent    = data.name[lang] || data.name.en || "";
        subtitleEl.textContent = data.subtitle[lang] || data.subtitle.en || "";
        descEl.textContent     = data.description[lang] || data.description.en || "";


        if (skillsBg && data.bg) {
            skillsBg.style.backgroundImage  = `url("${data.bg}")`;
            skillsBg.style.backgroundSize   = "cover";
            skillsBg.style.backgroundRepeat = "no-repeat";
            skillsBg.style.backgroundPosition = "center";
        }
    };

    items.forEach(item => {

        /* -----------------------------------
           MOBILE / TABLET (tap)
        ----------------------------------- */
        if (isTouch) {
            item.addEventListener("click", () => {
                const index = item.dataset.index;
                const data  = skillsData[index];
                if (!data) return;

                updateModalContent(data);

                const rect        = item.getBoundingClientRect();
                const nodeCenterX = rect.left + rect.width / 2 + window.scrollX;
                const nodeCenterY = rect.top + rect.height / 2 + window.scrollY;

                modal.style.left = (nodeCenterX - modal.offsetWidth / 2) + "px";
                modal.style.top  = (nodeCenterY - modal.offsetHeight + 50) + "px";

                modal.classList.add("show", "glitch");
                setTimeout(() => modal.classList.remove("glitch"), 200);
            });
        }

        /* -----------------------------------
           DESKTOP (hover)
        ----------------------------------- */
        else {
            item.addEventListener("mouseenter", () => {
                const index = item.dataset.index;
                const data  = skillsData[index];
                if (!data) return;

                updateModalContent(data);

                const rect = item.getBoundingClientRect();
                const GAP  = 40;

                const nodeCenterX = rect.left + rect.width / 2 + window.scrollX;
                const nodeCenterY = rect.top + rect.height / 2 + window.scrollY;

                modal.style.left = (nodeCenterX + GAP) + "px";
                modal.style.top  = (nodeCenterY - modal.offsetHeight / 2) + "px";

                modal.classList.add("show", "glitch");
                setTimeout(() => modal.classList.remove("glitch"), 200);
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderSkillsTree();
});


/* ----------------------------------------------
   MOBILE: close modal when clicking outside
-------------------------------------------- */
document.addEventListener("click", (e) => {
    if (window.innerWidth <= 1024) {
        const modal       = document.getElementById("skillModal");
        if (!modal) return;

        const clickedNode  = e.target.closest(".skill-item");
        const clickedModal = e.target.closest("#skillModal");

        if (!clickedNode && !clickedModal) {
            modal.classList.remove("show");
        }
    }
});


/* ----------------------------------------------------
   DESKTOP: reset bg when leaving skills section
-------------------------------------------------- */
const skillsSection = document.querySelector(".skills-section");
const skillsBg      = document.querySelector(".skills-bg");
const modal         = document.getElementById("skillModal");

if (skillsSection && skillsBg && modal) {
    skillsSection.addEventListener("mouseleave", () => {
        skillsBg.style.backgroundImage = "none";
        skillsBg.style.backgroundColor = "#111";
        modal.classList.remove("show");
    });
}


/* ----------------------------------------------
   SCROLL HINTS → scroll to projects
---------------------------------------------- */
document.querySelectorAll('.scroll-hint, .scroll-hint-desktop').forEach(hint => {
    hint.addEventListener('click', () => {
        const target = document.getElementById('projects');
        if (!target) return;

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

/* ==========================================================
   LANGUAGE DROPDOWN MENU
=========================================================== */

const langDropdown = document.querySelector(".lang-dropdown");
const langCurrent = document.querySelector("#langCurrent");
const langMenu = document.querySelector("#langMenu");

// --- FIX: Set initial label ---
const savedLang = localStorage.getItem("lang") || "en";
langCurrent.childNodes[0].nodeValue = savedLang.toUpperCase() + " ";

if (langDropdown) {
    langCurrent.addEventListener("click", () => {
        langDropdown.classList.toggle("open");
    });

    langMenu.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;
            localStorage.setItem("lang", lang);

            // Update UI text
            langCurrent.childNodes[0].nodeValue = lang.toUpperCase() + " ";

            langDropdown.classList.remove("open");

            // Reload translations
            if (typeof applyTranslations === "function") {
                applyTranslations();
            }
        });
    });

    // Close on click outside
    document.addEventListener("click", (e) => {
        if (!langDropdown.contains(e.target)) {
            langDropdown.classList.remove("open");
        }
    });
}
