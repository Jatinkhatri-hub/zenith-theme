document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#parent-link').forEach(button => {
    button.addEventListener('click', () => {
      const dropdownMenu = button.nextElementSibling;
      const icon = button.querySelector('svg');

      dropdownMenu.classList.toggle('visible');

      if (button.classList.contains('active')) {
        icon.style.transform = 'rotate(180deg)';
      } else {
        icon.style.transform = 'rotate(0deg)';
      }
    })
  })
})