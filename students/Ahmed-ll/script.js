const quotes = [
  "Clean code always looks like it was written by someone who cares.",
  "Every expert was once a beginner who kept debugging.",
  "Consistency beats intensity when it comes to learning.",
  ".NET today, anything tomorrow.",
  "Small daily commits build big careers.",
];

const quoteEl = document.getElementById("quote");
const avatarEl = document.getElementById("avatar");

function showRandomQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = `"${random}"`;
}

showRandomQuote();

if (avatarEl) {
  avatarEl.addEventListener("click", showRandomQuote);
  avatarEl.style.cursor = "pointer";
}
