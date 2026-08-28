// رسالة ترحيب بسيطة في الـ console
console.log("👋 أهلاً بيك في صفحة Mahmoud Khalifa!");

// تأثير بسيط: إظهار الكارت تدريجيًا عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
  const card = document.querySelector('.card');
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

  setTimeout(function () {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 100);
});