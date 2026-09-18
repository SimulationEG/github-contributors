document.getElementById('year').textContent = new Date().getFullYear();

const greetBtn = document.getElementById('greet-btn');
const greetOutput = document.getElementById('greet-output');

const greetings = [
  "Hey there! Thanks for visiting my page.",
  "Hello! Great to see you here.",
  "Welcome! Hope you're having a good day."
];

greetBtn.addEventListener('click', () => {
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  greetOutput.textContent = randomGreeting;
});
