const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");


hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle("navOpen");
    hamburgerEl.classList.toggle("hamburgerOpen")
});

navEl.addEventListener("click", () => {
    navEl.classList.remove("navOpen")
    hamburgerEl.classList.remove("hamburgerOpen")
})