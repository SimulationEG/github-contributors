const welcomeButton = document.getElementById("welcomeButton");
const message = document.getElementById("message");

welcomeButton.addEventListener("click", function () {
    message.textContent = "Welcome to my developer profile!";
});
