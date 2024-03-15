

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const service = document.querySelectorAll(".service");

var sliderNav = function(manual){
    
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    service.forEach((service) => {
        service.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    service[manual].classList.add("active");
}

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i)
        });
    });