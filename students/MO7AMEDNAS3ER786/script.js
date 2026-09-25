const btn = document.getElementById('greetBtn');
const msg = document.getElementById('greetMsg');

const greetings = [
  "Welcome to my page! 🚀",
  "Thanks for stopping by! 😄",
  "Happy coding! 💻"
];

btn.addEventListener('click', () => {
  const random = greetings[Math.floor(Math.random() * greetings.length)];
  msg.textContent = random;
});