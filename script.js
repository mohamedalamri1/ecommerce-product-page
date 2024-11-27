const thumbles = document.querySelectorAll(".thumbles img");
const activeImg = document.querySelector(".active img");
const priceAfter = document.querySelector(".after");
const priceBefore = document.querySelector(".before");
const counterElement = document.querySelector(".counter");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const addBtn = document.querySelector(".cartBtn");
const cartItems = document.querySelector(".cart .items");
const cart = document.querySelector(".cart");
const cartIcon = document.querySelector(".cart-icon");
const cartIconCount = document.querySelector(".cart-count");
const sliderImg = document.querySelector(".sliderImg");
const imgs = document.querySelectorAll(".sliderImg img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const menuIcon = document.querySelector(".menu");
const navItems = document.querySelector("nav .nav-items");

// Constants
const IMAGE_SOURCES = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];
const BASE_PRICE = 125;
const DISCOUNTED_PRICE = 250;

// State Variables
let totalPrice = BASE_PRICE;
let beforeDiscountPrice = DISCOUNTED_PRICE;
let itemCount = 1;
let currentSlide = 0;

// Utility Functions
const updatePrices = () => {
  priceAfter.innerText = `$${totalPrice}.00`;
  priceBefore.innerText = `$${beforeDiscountPrice}.00`;
};

const resetCart = () => {
  cartItems.innerHTML = `<div class="items"><h2 class="cart-empty">Your Cart is empty</h2></div>`;
  cartIconCount.innerText = "";
  totalPrice = BASE_PRICE;
  beforeDiscountPrice = DISCOUNTED_PRICE;
  itemCount = 1;
  counterElement.innerText = itemCount;
  updatePrices();
};

const addToCart = () => {
  cartItems.innerHTML = `
    <div class="item">
      <img src="images/image-product-1-thumbnail.jpg" alt="Product Thumbnail" />
      <div>
        <h4 class="item-name">Fall Limited Edition Sneakers</h4>
        <h4>
          <span class="item-count">$${BASE_PRICE}.00 x ${itemCount}</span>
          <span>$${totalPrice}</span>
        </h4>
      </div>
      <img src="images/icon-delete.svg" alt="Delete Item" class="deleteFromCart" />
    </div>
    <button>Checkout</button>
  `;
  const deleteButton = document.querySelector(".deleteFromCart");
  deleteButton.addEventListener("click", resetCart);
};

// Event Listeners
thumbles.forEach((thumb, idx) => {
  thumb.addEventListener("click", () => {
    thumbles.forEach((element) => element.classList.remove("selected"));
    activeImg.src = IMAGE_SOURCES[idx];
    thumb.classList.add("selected");
  });
});

plusBtn.addEventListener("click", () => {
  itemCount++;
  totalPrice += BASE_PRICE;
  beforeDiscountPrice += DISCOUNTED_PRICE;
  counterElement.innerText = itemCount;
  updatePrices();
  if (cartItems.innerHTML) addToCart();
});

minusBtn.addEventListener("click", () => {
  if (itemCount > 1) {
    itemCount--;
    totalPrice -= BASE_PRICE;
    beforeDiscountPrice -= DISCOUNTED_PRICE;
    counterElement.innerText = itemCount;
    updatePrices();
    if (cartItems.innerHTML) addToCart();
  }
});

cartIcon.addEventListener("click", () => {
  cart.classList.toggle("active");
});

addBtn.addEventListener("click", () => {
  addToCart();
  cartIconCount.innerText = itemCount;
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < imgs.length - 1) {
    currentSlide++;
    sliderImg.style.transform = `translateX(${-currentSlide * 100}%)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    sliderImg.style.transform = `translateX(${-currentSlide * 100}%)`;
  }
});

menuIcon.addEventListener("click", () => {
  navItems.classList.toggle("active");
  menuIcon.src = navItems.classList.contains("active")
    ? "images/icon-close.svg"
    : "images/icon-menu.svg";
});
