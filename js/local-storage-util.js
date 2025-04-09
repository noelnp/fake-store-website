(function getCurrentProduct() {
  const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

  const productImage = selectedProduct.imageLink;
  const productName = selectedProduct.name;
  const productPrice = selectedProduct.price;
  const nameElement = document.getElementById('productName');
  const imageElement = document.getElementById('productImage');
  const priceElement = document.getElementById('productPrice');

  nameElement.textContent = productName;
  priceElement.textContent = `${productPrice}kr`;
  imageElement.src = productImage;
})();

const completeMessage = document.getElementById('complete-message');
const customerFirstName = localStorage.getItem('customerFirstName');

if (completeMessage) {
  completeMessage.textContent = `Tack för din beställning ${customerFirstName}!`;
}
