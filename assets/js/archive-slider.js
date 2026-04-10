/* ==========================================================
   ARCHIVE PAGE — PARALLAX SLIDER (Standalone Module)
=========================================================== */

export function initArchiveSlider() {

    const slides = document.querySelectorAll(".archive-hero .slide");
    const nextBtn = document.querySelector(".slide-next");
    const prevBtn = document.querySelector(".slide-prev");

    if (!slides.length) return;

    let current = 0;

    /* ------------------------------
       SLIDE CHANGE FUNCTION
    --------------------------------*/
    function goToSlide(i) {
        slides[current].classList.remove("active");
        current = (i + slides.length) % slides.length;
        slides[current].classList.add("active");

        // Micro flash glitch on title block
        const uiLayer = slides[current].querySelector(".ui-layer");
        uiLayer.classList.add("glitch-flash");
        setTimeout(() => uiLayer.classList.remove("glitch-flash"), 150);
    }

    /* ------------------------------
       BUTTONS NAVIGATION
    --------------------------------*/
    nextBtn?.addEventListener("click", () => goToSlide(current + 1));
    prevBtn?.addEventListener("click", () => goToSlide(current - 1));

    /* ------------------------------
       PARALLAX EFFECT
    --------------------------------*/
    document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        const slide = slides[current];
        if (!slide) return;

        const bg = slide.querySelector(".bg-layer");
        const mid = slide.querySelector(".mid-layer");
        const ui  = slide.querySelector(".ui-layer");

        if (bg) bg.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        if (mid) mid.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
        if (ui) ui.style.transform = `translate(${x * 0.7}px, ${y * 0.7}px)`;
    });
}

/* Auto-init if the script is loaded directly, not imported */
if (!window.archiveSliderLoaded) {
    window.archiveSliderLoaded = true;
    document.addEventListener("DOMContentLoaded", initArchiveSlider);
}
