document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.button');
  const contents = document.querySelectorAll('.content');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active-button'));
      button.classList.add('active-button');

      contents.forEach((content, i) => {
        if (i === index) {
          content.style.display = content.style.display === 'none' ? 'block' : 'none';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
});