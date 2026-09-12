document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigationLinks = document.querySelector('#nav-links');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigationLinks.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigationLinks.classList.toggle('is-open', !isOpen);
});

navigationLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

window.matchMedia('(max-width: 760px)').addEventListener('change', closeMenu);

document.querySelector('#year').textContent = new Date().getFullYear();
