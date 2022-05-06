const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const tabs = document.querySelectorAll(".slider-tabs .slider-tab[tab-index]");
const slides = document.querySelectorAll(".slider-container .slide[slide-index]");

let currentSlide = ((params.service >= 0) ? params.service : 0);
SetActualSlide(currentSlide);


function SetActualSlide (currentSlide) {   
    tabs[currentSlide].classList.add("active");
    slides[currentSlide].classList.add("active");
    console.log(currentSlide);
}
