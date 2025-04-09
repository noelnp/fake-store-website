export function createProducts(productsArray) {
  productsArray.forEach((product) => {
    const productsGrid = document.getElementById('products-grid');

    const gridColumn = document.createElement('div');
    gridColumn.classList.add('col-6', 'col-md-4', 'col-lg-3');

    const aTagElement = document.createElement('a');
    aTagElement.href = 'checkout.html';

    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'card-product');
    const cardProductImage = document.createElement('img');

    cardProductImage.src = product.imageLink || 'default-image.jpg';
    cardProductImage.classList.add('card-img-top');
    
    cardProductImage.width = 431;
    cardProductImage.height = 647;

    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body');

    const cardBodyTitle = document.createElement('div');
    cardBodyTitle.classList.add('card-title');

    cardBodyTitle.innerHTML = product.name;

    const cardBodyText = document.createElement('div');
    cardBodyText.classList.add('card-text');

    cardBodyText.innerHTML = product.price + 'kr';

    cardBodyElement.appendChild(cardBodyTitle);
    cardBodyElement.appendChild(cardBodyText);
    cardElement.appendChild(cardProductImage);
    cardElement.appendChild(cardBodyElement);
    aTagElement.appendChild(cardElement);
    gridColumn.appendChild(aTagElement);
    productsGrid.appendChild(gridColumn);

    aTagElement.addEventListener('click', () => {
      localStorage.setItem('selectedProduct', JSON.stringify(product));
    });
  });
}
