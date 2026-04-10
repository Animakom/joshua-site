document.addEventListener("click", e => {
    const lb = document.getElementById("lightbox");
    const lbImg = lb?.querySelector("img");
    const close = document.getElementById("lightbox-close");

    if (e.target.matches(".project-gallery img")) {
        lbImg.src = e.target.src;
        lb.classList.add("active");
    }

    if (e.target === lb || e.target === close) {
        lb.classList.remove("active");
    }
});
