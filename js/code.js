document.addEventListener('DOMContentLoaded', function () {
  const heroContainer = document.querySelector('.hero-container');
  const heroHeight = heroContainer.offsetHeight;

  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > heroHeight - 75) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
