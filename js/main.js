// Simple sticky header effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('header');
  navbar.classList.toggle('sticky', window.scrollY > 50);
});
