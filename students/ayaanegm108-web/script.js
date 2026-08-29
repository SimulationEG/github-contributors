// Typing effect for the two bio lines
const bioLine1 = "Studying Backend .NET at Simulation Academy — building clean, reliable APIs and services.";
const bioLine2 = "Also studying Data Analysis at DEPI — turning raw data into clear, useful insights.";

const line1El = document.getElementById('bioLine1');
const line2El = document.getElementById('bioLine2');
const cursor1El = document.querySelector('.cursor-1');
const cursor2El = document.querySelector('.cursor-2');

function typeText(text, el, speed, onDone) {
  let i = 0;
  function step() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(step, speed);
    } else if (onDone) {
      onDone();
    }
  }
  step();
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  line1El.textContent = bioLine1;
  line2El.textContent = bioLine2;
  cursor2El.style.visibility = 'visible';
} else {
  typeText(bioLine1, line1El, 26, () => {
    cursor1El.style.visibility = 'hidden';
    cursor2El.style.visibility = 'visible';
    typeText(bioLine2, line2El, 26);
  });
}

// Card / JSON view toggle
const toggleButtons = document.querySelectorAll('.toggle-btn');
const cardView = document.getElementById('cardView');
const jsonView = document.getElementById('jsonView');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const view = btn.dataset.view;
    if (view === 'card') {
      cardView.classList.add('active');
      jsonView.classList.remove('active');
    } else {
      jsonView.classList.add('active');
      cardView.classList.remove('active');
    }
  });
});
