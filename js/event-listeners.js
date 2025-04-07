import { validateCheckoutForm } from './validate-checkout.js';

document.addEventListener('DOMContentLoaded', function () {
  // Hero section scroll effect
  const heroContainer = document.querySelector('.hero-container');
  const navbar = document.querySelector('.navbar');

  if (heroContainer && navbar) {
    const heroHeight = heroContainer.offsetHeight;

    window.addEventListener('scroll', function () {
      if (window.scrollY > heroHeight - 75) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  const checkoutLink = document.getElementById('checkoutLink');
  if (checkoutLink) {
    checkoutLink.addEventListener('click', function (event) {
      if (!localStorage.getItem('selectedProduct')) {
        event.preventDefault();
        window.location.href = 'index.html';

        alert('Var vänlig och välj en produkt.');
      }
    });
  }

  // Checkout-formulär
  const submitButton = document.getElementById('submitButton');
  if (submitButton) {
    submitButton.addEventListener('click', function (event) {
      event.preventDefault();

      const firstName = document.getElementById('firstNameInput').value;
      localStorage.setItem('customerFirstName', firstName);

      if (validateCheckoutForm()) {
        window.location.href = 'checkout-complete.html';
      }
    });
  }

  // Ta bort produkt
  const removeProductElement = document.getElementById('removeProduct');
  if (removeProductElement) {
    removeProductElement.addEventListener('click', function () {
      localStorage.removeItem('selectedProduct');
      window.location.href = 'index.html';
    });
  }
});
