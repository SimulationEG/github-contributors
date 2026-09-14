```javascript
const year = document.getElementById("year");
const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

year.textContent = new Date().getFullYear();

messageButton.addEventListener("click", function () {
    message.classList.toggle("show");

    if (message.classList.contains("show")) {
        messageButton.textContent = "Hide Message";
    } else {
        messageButton.textContent = "Show Message";
    }
});
```
