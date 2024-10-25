document.addEventListener('DOMContentLoaded', () => {
  const openNavBtn = document.querySelector('#openNav');
  const closeNavBtn = document.querySelector('#closeNav');
  const navContainer = document.querySelector('.nav-drawer__container');


  openNavBtn.addEventListener('click', () => {
    navContainer.classList.add('open');
    document.body.classList.add('no-scroll');
  });

  closeNavBtn.addEventListener('click', () => {
    navContainer.classList.remove('open');
  });
})