document.addEventListener('DOMContentLoaded', () => {
  const openNavBtn = document.querySelector('#openNav');
  const closeNavBtn = document.querySelector('#closeNav');
  const navContainer = document.querySelector('.nav-drawer__container');


  openNavBtn.addEventListener('click', () => {
    navContainer.classList.remove('close');
  });

  closeNavBtn.addEventListener('click', () => {
    navContainer.classList.add('close');
  });
})