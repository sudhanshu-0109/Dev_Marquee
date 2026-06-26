let button = document.getElementById("button");

function onClick() {
    document.querySelector("#box").style.backgroundColor = "red";
    document.querySelector("#box").style.transition = "all 0.5s ease-in-out";
}

button.addEventListener("click", onClick);