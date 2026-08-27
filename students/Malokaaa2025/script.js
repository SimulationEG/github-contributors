const helloButton = document.getElementById("helloButton");
const message = document.getElementById("message");

helloButton.addEventListener("click", function () {
    message.textContent = "Hello! Thanks for visiting my website 👋";
});