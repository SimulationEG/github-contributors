// Welcome message based on the current time

const welcome = document.querySelector(".welcome");

const hour = new Date().getHours();

if (hour < 12) {
    welcome.textContent = "Good Morning, I'm";
} else if (hour < 18) {
    welcome.textContent = "Good Afternoon, I'm";
} else {
    welcome.textContent = "Good Evening, I'm";
}


// Update footer year automatically

const footer = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footer.innerHTML = `&copy; ${currentYear} SAEID MOHAMED ELKHOULY. All rights reserved.`;