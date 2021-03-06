const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav__list');
const navLanguage = document.querySelector('.nav__language');

function toggleNavMenu() {
  burger.classList.toggle('active');
  navList.classList.toggle('active');
  navLanguage.classList.toggle('active');
  document.body.style.overflow = document.body.style.overflow ? '' : 'hidden';
}

burger.addEventListener('click', toggleNavMenu);

window.addEventListener('resize', () => {
  if (
    document.documentElement.clientWidth <= 768 &&
    Array.from(navList.classList).includes('active')
  ) {
    toggleNavMenu();
  }
});
