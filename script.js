const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu_bar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuBar.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menuBar.classList.remove('active');
}));
