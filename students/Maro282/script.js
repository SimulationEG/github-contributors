const createGreetingButton = document.getElementById("createGreeting");

const greetingOverlay = document.getElementById("greetingOverlay");

// Show greeting

createGreetingButton.addEventListener("click", function () {
  greetingOverlay.classList.add("show");
});

// Hide greeting when clicking anywhere

greetingOverlay.addEventListener("click", function () {
  greetingOverlay.classList.remove("show");
});
