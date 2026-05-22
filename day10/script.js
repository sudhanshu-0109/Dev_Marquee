/* script.js */

const track    = document.getElementById('hero-track');
const slides   = document.querySelectorAll('.slide');
const leftBtn  = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

let current = 0;
const total = slides.length;

function goTo(index) {
    /* Loop around */
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
}

leftBtn.addEventListener('click',  () => goTo(current - 1));
rightBtn.addEventListener('click', () => goTo(current + 1));

/* Auto-slide every 4 seconds */
// let timer = setInterval(() => goTo(current + 1), 4000);

/* Reset timer when user clicks manually */
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 4000);
}

leftBtn.addEventListener('click',  resetTimer);
rightBtn.addEventListener('click', resetTimer);