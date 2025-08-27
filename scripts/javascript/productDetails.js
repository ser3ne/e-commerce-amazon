




let data = new URLSearchParams(window.location.search);
const productItem = Object.fromEntries(data.entries());
console.log(productItem)

const pageTitle = document.querySelector('title');
pageTitle.innerHTML = productItem.prodName;

// I crammed the price with the Product title, idk 
const productTitle = document.querySelector('.product-title');
productTitle.innerHTML = `${productItem.prodName}\t\t\t <span style="font-size: .5em; font-weight:normal">${productItem.price}</span>`;

const starImage = document.querySelector('.star-image');
starImage.src = `../../${productItem.starImg}`;

const productImage = document.querySelector('.product-image');
productImage.src = `../../${productItem.prodImg}`;

const rateCount = document.querySelector('.rate-count');
rateCount.innerHTML = `${productItem.starCount}`;

console.log(document.querySelector('.test'))