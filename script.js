const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");


hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle("navOpen");
    hamburgerEl.classList.toggle("hamburgerOpen")
});

navEl.addEventListener("click", () => {
    navEl.classList.remove("navOpen")
    hamburgerEl.classList.remove("hamburgerOpen")
});

//Modal buttons

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)
    })
});

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest('.modal');
        closeModal(modal)
    })
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add("active")
    overlay.classList.add("active")
};

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove("active")
    overlay.classList.remove("active")
};

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll(".modal.active")
    modals.forEach(modal => {
        closeModal(modal)
    });
});

// Nav Links
const navLinkEls = document.querySelectorAll(".nav-link");
const sectionEls = document.querySelectorAll(".section");

let currentSection = 'about'
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('.active');
            navLinkEl.classList.add('active');
        }
    });
});


// Clock 
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");

setInterval(() =>{
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
}, 1000);

// Scroll to top button
scrollToTopBtn = document.getElementById("scroll-btn");

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});


