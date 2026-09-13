document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Raghda Gad's Contributor Page!");
    console.log("Ask me about: C++, Java, Data Structures & Algorithms");

    let count = 0;
    const clickCountDisplay = document.getElementById('clickCount');
    const trackLinks = document.querySelectorAll('.track-link');

    trackLinks.forEach(link => {
        link.addEventListener('click', () => {
            count++;
            if (clickCountDisplay) {
                clickCountDisplay.textContent = count;
                clickCountDisplay.classList.remove('pop');
                void clickCountDisplay.offsetWidth; // restart animation
                clickCountDisplay.classList.add('pop');
            }
        });
    });
});