/* ===================================================
   UNIVERSAL HEADER LOGIC — SAFE FOR TEMPLATE INJECTION
=================================================== */

function initUniversalHeader() {

    const header  = document.querySelector("header");
    const burger  = document.querySelector(".burger");
    const menu    = document.querySelector(".main-menu");
    const overlay = document.querySelector(".menu-overlay");

    if (!header || !burger || !menu || !overlay) return;

    /* REMOVE any old scroll listeners (important for project pages) */
    window.removeEventListener("scroll", window._headerScrollHandler);

    /* Avoid double-binding */
    if (burger.dataset.bound === "true") return;
    burger.dataset.bound = "true";

    /* =======================
       MOBILE BURGER
    ======================= */
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    });

    overlay.addEventListener("click", () => {
        burger.classList.remove("active");
        menu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });

    /* =======================
       DESKTOP HIDE-ON-SCROLL
    ======================= */
    let lastScroll = 0;

    function handleScroll() {
        if (window.innerWidth <= 768) {
            header.classList.remove("header--hidden");
            return;
        }

        const current = window.scrollY;

        if (current > lastScroll && current > 80)
            header.classList.add("header--hidden");
        else
            header.classList.remove("header--hidden");

        lastScroll = current;
    }

    // Save reference globally so it can be removed later
    window._headerScrollHandler = handleScroll;
    window.addEventListener("scroll", handleScroll);
}
