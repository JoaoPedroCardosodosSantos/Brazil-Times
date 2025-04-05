let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const container = document.querySelector(".carousel-container");
const slideIndexes = document.querySelectorAll(".slide-index");
const slideIndex = 0; 

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    // slideIndex = (slideIndex + 1) % totalSlides;
    updateSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    // slideIndex = (slideIndex - 1) % totalSlides;
    updateSlide();
});

function updateSlide() {
    container.style.transform = `translateX(-${index * 100}%)`;
    if (slideIndex == index) {  
        slideIndex[index].style.background = `rgba(255, 255, 255, 1)`;
    } else {
        slideIndexes[slideIndex].style.background = `rgba(255, 255, 255, .5)`;
    }
}

setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlide();
}, 5000);