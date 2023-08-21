/*
 James Green
 ICT 4510
 07/29/2023
 This script creates a Leaflet map using Mapbox tiles. On first load it sets the initial view to the specified coordinates
  with a zoom level of 15 and adds a marker at the same location.
  */

/* Sliding banner */

const slider = document.querySelector('.slider');
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');
let currentIndex = 0;

prevArrow.addEventListener('click', handlePrevClick);
nextArrow.addEventListener('click', handleNextClick);

function handlePrevClick() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  updateSlider();
}

function handleNextClick() {
  currentIndex = (currentIndex + 1) % 3;
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}


