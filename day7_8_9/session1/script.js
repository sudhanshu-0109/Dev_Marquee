document.querySelector('h1').onmouseenter = function() {
    this.textContent = 'Sudhanshu Ranjan';
};
document.querySelector('h1').onmouseleave = function() {
    this.textContent = 'Hello, World!';
};