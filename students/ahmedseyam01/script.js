document.addEventListener('DOMContentLoaded', () => {
  console.log('Contributor Website loaded for Ahmed Seyam (@ahmedseyam01)');
  
  // Interactive subtle parallax effect on mousemove
  const card = document.querySelector('.card');
  if (card && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    document.addEventListener('mouseleave', () => {
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      card.style.transition = 'transform 0.5s ease';
    });
  }
});
