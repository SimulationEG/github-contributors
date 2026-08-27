document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".buttons a");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(`Opening: ${button.textContent.trim()}`);
        });
    });
});