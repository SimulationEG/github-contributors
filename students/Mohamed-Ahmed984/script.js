const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav');
const themeButton = document.querySelector('.theme-button');
const savedTheme = localStorage.getItem('mohamed-portfolio-theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeButton.textContent = '☀';
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

themeButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeButton.textContent = isDark ? '☀' : '☾';
  localStorage.setItem('mohamed-portfolio-theme', isDark ? 'dark' : 'light');
});

document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
