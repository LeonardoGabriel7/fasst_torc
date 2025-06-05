const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});










const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    const img = slide.querySelector('img');
    img.style.transform = 'rotateY(0deg) scale(1)';
    img.style.opacity = '1';

    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function transitionImage(slide, direction = 1) {
  const img = slide.querySelector('img');
  img.style.transform = `rotateY(${360 * direction}deg) scale(0.8)`;
  img.style.opacity = '0';
}

function nextSlide() {
  transitionImage(slides[current], 1);

  setTimeout(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 800);
}

function prevSlide() {
  transitionImage(slides[current], -1);

  setTimeout(() => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }, 800);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Auto play
setInterval(nextSlide, 5000);
