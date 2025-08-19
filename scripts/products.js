// import { products } from '/javascript/globals.js'

const products =
  [{
    path: 'assets/raws/anime-tshirt.png',
    name: 'anime t-shirt',
    rating: { stars: 3.5, count: 22 },
    price: '$100.00'
  },
  {
    path: 'assets/raws/black-corsair-kb-util.png', name: 'black corsair keyboard utility',
    rating: {
      stars: 4.5,
      count: 123,
    },
    price: '$1,300.00'
  }, {
    path: 'assets/raws/rgb-cat-wears-headphoness.png', name: 'cat-ear-phones',
    rating: { stars: 5.0, count: 5 }, price: '$400.00'
  },
  {
    path: 'assets/raws/fluffy-chair.png',
    name: 'Fluffy Chair',
    rating: {
      stars: 3.5,
      count: 2322,
    },
    price: '$90.00',
  },
  {
    path: 'assets/raws/outdoor-vine-set.jpg',
    name: 'Outdoor Vinewood Set',
    rating: {
      stars: 4.5,
      count: 23423,
    },
    price: '$2,300.00',
  },
  {
    path: 'assets/raws/wooden-living-room-set.png',
    name: 'Wooden Livingroom Set',
    rating: {
      stars: 5.0,
      count: 4224,
    },
    price: '$19,000.00',
  },
  {
    path: 'assets/raws/moon-balls.jpg',
    name: 'Moon Balls',
    rating: {
      stars: 3.5,
      count: 223,
    },
    price: '$20.00',
  },
  {
    path: 'assets/raws/golf-balls.png',
    name: 'Foam Golf Balls',
    rating: {
      stars: 4.5,
      count: 3332,
    },
    price: '$240.00',
  },
  {
    path: 'assets/raws/pofessioinal-billiard-ball-set.png',
    name: 'Professional Billard Balls Set',
    rating: {
      stars: 5.0,
      count: 2322,
    },
    price: '$1000.00',
  },
  {
    path: 'assets/raws/tennis-balls.png',
    name: 'Tennis Balls',
    rating: {
      stars: 3.5,
      count: 4435,
    },
    price: "$5.00",
  },
  {
    path: 'assets/raws/ultimate-soccer-balls.png',
    name: 'Ultimate Soccer Balls',
    rating: {
      stars: 5.0,
      count: 5546,
    },
    price: "$300.00",
  },
  {
    path: 'assets/raws/klemoo-basketball.jpg',
    name: 'Klemoo Basketball',
    rating: {
      stars: 4.5,
      count: 223,
    },
    price: "$375.00",
  },
  {
    path: 'assets/raws/dark-brown-tshirt.avif',
    name: 'Dark Brown T-Shirt',
    rating: {
      stars: 4.5,
      count: 435,
    },
    price: "$60.00",
  },
  {
    path: 'assets/raws/Dark-hooded-sweater.jpg',
    name: 'Dark Hooded Sweater',
    rating: {
      stars: 5,
      count: 1034,
    },
    price: '$550.00',
  },
  {
    path: 'assets/raws/bench-tie-pants.png',
    name: "Bench Tie Pants",
    rating: {
      stars: 3.5,
      count: 33556,
    },
    price: "$657.00",
  },
  {
    path: 'assets/raws/gel-pens.png',
    name: 'Gel Pens',
    rating: {
      stars: 3.5,
      count: 2222,
    },
    price: '$3.00',
  },


  ]

const cardContainer = document.getElementById("card-container")

const stars = {
  five: 'assets/raws/5-star copy.png',
  four_five: 'assets/raws/4.5-star.png',
  four: 'assets/raws/4-star.png',
  three_five: 'assets/raws/3.5-star.png',
  three: 'assets/raws/3-star.png',
}

for (property of products) {

  let starsPath = '';
  switch (property.rating.stars) {
    case 5:
      starsPath = stars.five
      break;
    case 4.5:
      starsPath = stars.four_five
      break;
    case 4:
      starsPath = stars.four
      break;
    case 3.5:
      starsPath = stars.three_five
      break;
    case 3:
      starsPath = stars.three
      break;
  }

  cardContainer.innerHTML +=
    `
      <div class="card b-box">

        <img src="../../${property.path}" alt="" class="card-image b-box">

        <div class="product-details b-box">
          <hr>

          <span class="card-name">${property.name}
          </span>

          <div class="stars">
            <img class="stars-image" src="../../${starsPath}">
            <span class="stars-rating">${property.rating.stars}</span>
            <span class="ratings-count">${property.rating.count}</span>
          </div>

          <span class="product-price">${property.price}</span>

          <button class="cta rounded-sm pulse-ao">
            Add To Cart
          </button>

        </div>
      </div>
  `;
}
