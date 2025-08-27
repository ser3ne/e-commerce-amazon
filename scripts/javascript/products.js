const products =
  [{
    path: 'assets/raws/anime-tshirt.png',
    name: 'Anime T-Shirt',
    rating: { stars: '3.5', count: 22 },
    price: '$100.00', stock: '17'
  },
  {
    path: 'assets/raws/black-corsair-kb-util.png', name: 'Black Corsair Keyboard Utility',
    rating: {
      stars: '4.5',
      count: 123,
    },
    price: '$1,300.00',
    stock: '83'
  }, {
    path: 'assets/raws/rgb-cat-wears-headphoness.png', name: 'Cat Ear Phones',
    rating: { stars: '5.0', count: 5 }, price: '$400.00', stock: '221'
  },
  {
    path: 'assets/raws/fluffy-chair.png',
    name: 'Fluffy Chair',
    rating: {
      stars: '3.5',
      count: 2322,
    },
    price: '$90.00', stock: '5'
  },
  {
    path: 'assets/raws/outdoor-vine-set.jpg',
    name: 'Outdoor Vinewood Set',
    rating: {
      stars: '4.5',
      count: 23423,
    },
    price: '$2,300.00', stock: '144'
  },
  {
    path: 'assets/raws/wooden-living-room-set.png',
    name: 'Wooden Livingroom Set',
    rating: {
      stars: '5.0',
      count: 4224,
    },
    price: '$19,000.00', stock: '32'
  },
  {
    path: 'assets/raws/moon-balls.jpg',
    name: 'Moon Balls',
    rating: {
      stars: '3.5',
      count: 223,
    },
    price: '$20.00', stock: '197'
  },
  {
    path: 'assets/raws/golf-balls.png',
    name: 'Foam Golf Balls',
    rating: {
      stars: '4.5',
      count: 3332,
    },
    price: '$240.00', stock: '68'
  },
  {
    path: 'assets/raws/pofessioinal-billiard-ball-set.png',
    name: 'Professional Billard Balls Set',
    rating: {
      stars: '5.0',
      count: 2322,
    },
    price: '$1000.00', stock: '2'
  },
  {
    path: 'assets/raws/tennis-balls.png',
    name: 'Tennis Balls',
    rating: {
      stars: '3.5',
      count: 4435,
    },
    price: "$5.00", stock: '233'
  },
  {
    path: 'assets/raws/ultimate-soccer-balls.png',
    name: 'Ultimate Soccer Balls',
    rating: {
      stars: '5.0',
      count: 5546,
    },
    price: "$300.00", stock: '101'
  },
  {
    path: 'assets/raws/klemoo-basketball.jpg',
    name: 'Klemoo Basketball',
    rating: {
      stars: '4.5',
      count: 223,
    },
    price: "$375.00", stock: '45'
  },
  {
    path: 'assets/raws/dark-brown-tshirt.avif',
    name: 'Dark Brown T-Shirt',
    rating: {
      stars: '4.5',
      count: 435,
    },
    price: "$60.00", stock: '129'
  },
  {
    path: 'assets/raws/Dark-hooded-sweater.jpg',
    name: 'Dark Hooded Sweater',
    rating: {
      stars: '5.0',
      count: 1034,
    },
    price: '$550.00',
    stock: '76'
  },
  {
    path: 'assets/raws/bench-tie-pants.png',
    name: "Bench Tie Pants",
    rating: {
      stars: '3.5',
      count: 33556,
    },
    price: "$657.00",
    stock: '13'
  },
  {
    path: 'assets/raws/gel-pens.png',
    name: 'Gel Pens',
    rating: {
      stars: '3.5',
      count: 2222,
    },
    price: '$3.00',
    stock: '200'
  },

  ]
const cardContainer = document.getElementById("card-container");

const stars = {
  five: 'assets/raws/5-star copy.png',
  four_five: 'assets/raws/4.5-star.png',
  four: 'assets/raws/4-star.png',
  three_five: 'assets/raws/3.5-star.png',
  three: 'assets/raws/3-star.png',
}


for (property of products) {
  // [{}, {}, {}, {}]
  let starsPath = '';
  switch (property.rating.stars) {
    case '5.0':
      starsPath = stars.five
      break;
    case '4.5':
      starsPath = stars.four_five
      break;
    case '4.0':
      starsPath = stars.four
      break;
    case '3.5':
      starsPath = stars.three_five
      break;
    case '3.0':
      starsPath = stars.three
      break;
  }


  cardContainer.innerHTML +=
    `
      <div onclick="getDetails('${property.path}', '${property.name}', '${starsPath}', '${property.rating.stars}','${property.rating.count}', '${property.price}', '${property.stock}'); " class="card b-box rounded-sm">
    <img src="../../${property.path}" alt="" class="card-image b-box">

    <div class="product-details b-box">
      <hr>
      <span class="card-name">
        ${property.name}
      </span>

      <div class="rating">
        <div class="stars">
          <img class="stars-image rounded-sm" src="../../${starsPath}">
          <span class="stars-rating">${property.rating.stars}</span>
        </div>
        <span class="ratings-count">${property.rating.count}</span>
      </div>

      <div class="price-stocks">
        <span class="product-price">${property.price}</span>
        <span class="product-stock">${property.stock}</span>
      </div>

      <a href="product-page.html" onclick="
      getDetails(\t'${property.path}', '${property.name}', '${starsPath}', '${property.rating.stars}','${property.rating.count}', '${property.price}', '${property.stock}'); "class="cta rounded-sm pulse-ao">
        <span class="cta-text">Add To Cart</span>
      </a>

    </div>
  </div>
   `;
}

//path prodname starImg starCount rateCount price stock
function getDetails(path, prodName, starPath, starCount, ratingCount, price, stock) {

  // ? = starts query string
  // query string follows a {key}={value} format
  // every k=v is seperated by an ampersand (&)
  // use ecodeURIComponent(put-data-here) to handle data that has special characters or spaces
  window.location.href = `productDetails.html?prodImg=${path}&prodName=${encodeURIComponent(prodName)}&starImg=${starPath}&starCount=${starCount}&ratingCount=${ratingCount}&price=${encodeURIComponent(price)}&stock=${stock}`;
}
// when 'add to cart' is pressed
// redirect to details page
// then we can dissect the product by how much we want to order
// the variation

// then after all that 'add to cart' or 'order now' 
// 'order now' brings us to the checkout page
// add to cart redirects the user back at the homepage

// so how do we accomodate multiple items in the cart?
// the classic give them product IDs, now this ID is not for css
// but for the javascript object.
// every time the 'add to cart' in the details page is pressed
// we will add the following to some sort of list or object.
// 1.) product ID (so we can call it from a bigger object idk)
// 2.) order amount 
// 3.) price (in single unit)

// the product ID should also help us grab all the necessary attributes of the product
// without bloating the new object. let's see how it should look.


const cartDetails = [{
  productID: '1',
}]



