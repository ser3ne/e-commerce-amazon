const products =
  [{
    path: 'assets/raws/anime-tshirt.png',
    name: 'anime t-shirt',
    rating: {
      stars: 0,
      count: 0
    },
    price: 'tbd'
  }, {
    path: 'assets/raws/black-corsair-kb-util.png',
    name: 'black corsair keyboard utility',
    rating: {
      stars: 0,
      count: 0,
    },
    price: 'tbd'
  },
  {
    path: 'assets/raws/rgb-cat-wears-headphoness.png',
    name: 'cat-ear-phones',
    rating: {
      stars: 0,
      count: 0
    },
    price: 'tbd'

  }
  ]
const cardContainer = document.querySelector('.container')




for (property of products) {
  cardContainer.innerHTML += `<div class="card b-box">
      <img src="../../${property.path}" alt="" class="card-image b-box">

      <hr style="background-color: black; color: black">
      <div class="card-name">
      <h1>${property.name}</h1>
      </div>

      <div class="rating">
        <img src="../../assets/raws/5-star.png" alt="" class="stars">
        <div class="feedback-count">
        ${property.rating.count}
        </div>
      </div>
    </div>
  `;
}

const rawImages = new Image();
rawImages.src = products[0].path
let width;
let height;
rawImages.onload = function () {
  width = this.width;
  height = this.height;
};

console.log(`width: ${width}\nheight: ${height}`)