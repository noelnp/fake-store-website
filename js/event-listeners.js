import { validateCheckoutForm } from './validate-checkout.js';

document.addEventListener('DOMContentLoaded', function () {
  // Hero section scroll effect
  const heroContainer = document.querySelector('.hero-container');
  //const heroHeight = heroContainer.offsetHeight;

  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > heroHeight - 75) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (validateCheckoutForm()) window.location.href = 'checkout-complete.html';
  });
});
