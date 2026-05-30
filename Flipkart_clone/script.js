const slider = document.querySelector(".slider");

let index = 0;
const totalSlides = 10;

setInterval(() => {

    index++;

    slider.style.transition = "transform 0.6s ease";
    slider.style.transform = `translateX(-${index * (100 / 11)}%)`;

    if(index === totalSlides){

        setTimeout(() => {
            slider.style.transition = "none";
            slider.style.transform = "translateX(0)";
            index = 0;
        }, 600);

    }

}, 3000);