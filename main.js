const openM = document.querySelector('.toggle-menu');
const closeM = document.querySelector('.close-menu');
const nav = document.querySelector('nav#navbar');

function openMenu() {
  nav.style.display = 'block';
  closeM.classList.replace('d-none', 'd-block');
}

function closeMenu() {
  nav.style.display = "none";
  closeM.classList.replace('d-block', 'd-none');
}

openM.addEventListener('click', openMenu);

closeM.addEventListener('click', closeMenu);