const hamburgerBtn = document.querySelector('.hamburgerBtn');
const menu = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('#close-menu');
hamburgerBtn.addEventListener('click', () => {
  menu.classList.remove('hidden');
  menu.classList.toggle('visible');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('visible');
  menu.classList.toggle('hidden');
});