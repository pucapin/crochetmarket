const carousel = document.querySelector(".carousel");
const backgroundImage = document.querySelector(".bg-image");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;
let prevIndex;
const images = document.querySelectorAll(".carousel-image");

const totalImages = Object.keys(images).length;

// const imageWidth = images[1].getBoundingClientRect().x;
const imageWidth = 400;