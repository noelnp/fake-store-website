// const productsUrl = 'http://localhost:8080/api/products';

// async function fetchProducts() {
//   const response = await fetch(productsUrl);
//   const productJson = await response.json();
//   const products = JSON.stringify(productJson);

//   return products;
// }

// const products = fetchProducts();

// function createProducts() {
//   const productsGrid = document.getElementById('products-grid');

//   const titleElement = document.createElement('div');
//   titleElement.innerHTML = 'Produkt';

//   const imageElement = document.createElement('img');
//   imageElement.src = products[0].imageLink;
//   imageElement.alt = 'Produktbild';

//   const productElement = document.createElement('div');
//   productElement.classList.add(
//     'col-6',
//     'col-md-4',
//     'col-lg-3',
//     'test',
//     'text-red'
//   );

//   productElement.appendChild(titleElement);

//   //   productElement.appendChild(imageElement);

//   productsGrid.appendChild(productElement);
// }

// createProducts();
