const slider = document.querySelector(".slider");

let position = 0;

setInterval(() => {

    position += 1;

    slider.style.transform = `translateX(-${position}px)`;

    if(position >= slider.scrollWidth / 2){
        position = 0;
    }

}, 30);
