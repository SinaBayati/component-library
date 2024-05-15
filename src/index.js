import "./styles.css";

// Drop Down Menu section

const dropDownBtns = (
  document.querySelectorAll(".drop-down button")
);

const dropHandler = function dropDownHandler(event){
  event.currentTarget
    .parentElement
    .querySelector("ul")
    .classList
    .toggle("active");
};

dropDownBtns.forEach(btn => {
  btn.addEventListener("click",dropHandler);
});

// Carousel section

const carouselNextBtns = (
  document.querySelectorAll(".carousel button.next")
);

const carouselPrevBtns = (
  document.querySelectorAll(".carousel button.prev")
);

// global variables for carousel

const carouselSizeInPX = 400;
const numberOfSlides = (
  document.querySelectorAll(".carousel img.slide").length
);
let currentSlide = 0;

const nextSlide = function nextSlideHandler(event){
  // go back to the first slide if on last slide 
  if (currentSlide === (numberOfSlides - 1)) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }

  document.querySelector(".carousel .slide-container")
    .style
    .left = `-${(carouselSizeInPX * currentSlide)}px`;
};

const prevSlide = function prevSlideHandler(event){
  // go to the last slide if currently on the first slide
  if (currentSlide === 0) {
    currentSlide = (numberOfSlides - 1);
  } else {
    currentSlide -= 1;
  }

  document.querySelector(".carousel .slide-container")
    .style
    .left = `-${(carouselSizeInPX * currentSlide)}px`;
};

carouselPrevBtns.forEach(btn => {
  btn.addEventListener("click",prevSlide);
});

carouselNextBtns.forEach(btn => {
  btn.addEventListener("click",nextSlide);
});

setInterval(nextSlide,5000);