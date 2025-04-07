import { validateCheckoutForm } from './validate-checkout.js';

document.addEventListener('DOMContentLoaded', function () {
  // Hero section scroll effect
  const heroContainer = document.querySelector('.hero-container');
  const navbar = document.querySelector('.navbar');
  //const heroHeight = heroContainer.offsetHeight;

  window.addEventListener('scroll', function () {
    if (window.scrollY > heroHeight - 75) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Checkout-formulär
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstNameInput').value;
    localStorage.setItem('customerFirstName', firstName);

    if (validateCheckoutForm()) {
      window.location.href = 'checkout-complete.html';
    }
  });

  // Ta bort produkt
  const removeProductElement = document.getElementById('removeProduct');
  removeProductElement.addEventListener('click', function () {
    localStorage.removeItem('selectedProduct');
    window.location.href = 'index.html';
  });
});
