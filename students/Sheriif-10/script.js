const button = document.getElementById("welcomeButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Welcome to my profile!";
});
