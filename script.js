function moveButton() {

    const button = document.getElementById("noButton");

    const maxX = window.innerWidth - button.offsetWidth - 30;
    const maxY = window.innerHeight - button.offsetHeight - 30;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "fixed";

    button.style.left = randomX + "px";

    button.style.top = randomY + "px";
}


function passedTest() {

    document.getElementById("mainPage").classList.add("hidden");

    document.getElementById("successPage").classList.remove("hidden");

}
