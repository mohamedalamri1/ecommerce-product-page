let thumbles = document.querySelectorAll(".thumbles img");
let active = document.querySelector(".active img");
let priceAfter = document.querySelector(".after");
let priceBefore = document.querySelector(".before");
let counter = document.querySelector(".counter");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let addBtn = document.querySelector(".cartBtn");
let cartItems = document.querySelector(".cart .items");
let cart = document.querySelector(".cart");
let cartIcon = document.querySelector(".cart-icon");
let cartIconCount = document.querySelector(".cart-count ");
let sliderImg = document.querySelector(".sliderImg ");
let imgs = document.querySelectorAll(".sliderImg img");
let next = document.querySelector(".next ");
let prev = document.querySelector(".prev ");
let menuIcon = document.querySelector(".menu  ");
let navItems = document.querySelector("nav .nav-items  ");
// Gellary63

let srcImgs = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];
thumbles.forEach((e, idx) => {
  e.addEventListener("click", (img) => {
    thumbles.forEach((element) => {
      element.classList.remove("selected");
    });
    active.src = srcImgs[idx];
    img.target.classList.add("selected");
    Aa;
  });
});
let total = 125;
let beforeDiscount = 250;
let count = 1;
// Price
plus.addEventListener("click", (e) => {
  count++;
  counter.innerHTML = count;
  total += 125;
  beforeDiscount += 250;
  priceAfter.innerText = `$${total}.00`;
  priceBefore.innerText = `$${beforeDiscount}.00`;

  if (cart.innerHTML !== "") {
    addToCart();
  }
});
minus.addEventListener("click", (e) => {
  if (counter.innerText == 1) {
    return;
  }
  count--;

  total -= 125;
  beforeDiscount -= 250;
  counter.innerHTML = count;
  priceAfter.innerText = `$${total}.00`;
  priceBefore.innerText = `$${beforeDiscount}.00`;

  if (cart.innerHTML !== "") {
    addToCart();
  }
});

// Cart

cartIcon.addEventListener("click", (e) => {
  cart.classList.toggle("active");
});
addBtn.addEventListener("click", () => {
  addToCart();
  counter.innerHTML = count;
  cartIconCount.innerHTML = count;
});
let clearCart = () => {
  cartItems.innerHTML = `<div class="items"><h2 class="cart-empty">Your Cart is empty</h2></div>`;
  cartIconCount.innerHTML = "";
  total = 125;
  beforeDiscount = 250;
  count = 1;
  counter.innerHTML = 1;
  priceAfter.innerText = `$125.00`;
  priceBefore.innerText = `$250.00`;
};
let addToCart = () => {
  cartItems.innerHTML = `
    <div class="item">
          <img src="images/image-product-1-thumbnail.jpg" alt="" />
          <div>
            <h4 class="item-name">Fall Limited Edition Sneakers</h4>
            <h4>
               <span class="item-count">$125.00 x ${count}</span>
            <span>
               $${total}
            </span>
            <img src="images/icon-delete.svg" alt="" class="deleteFromCart" onClick=clearCart()>
            </h4>
            
          </div>
          </div>
          <button>Checkout</button>
    `;
};
let sliderLength = imgs.length;
let position = 0;

next.addEventListener("click", () => {
  if (position === (sliderLength - 1) * 100) {
    return;
  }
  position += 100;
  sliderImg.style.transform = `translateX(${-position}%)`;
});
prev.addEventListener("click", () => {
  if (position === 0) {
    return;
  }
  position -= 100;
  sliderImg.style.transform = `translateX(${-position}%)`;
});

menuIcon.addEventListener("click", () => {
  navItems.classList.toggle("active");
  if (navItems.classList.contains("active")) {
    return (menuIcon.src = "images/icon-close.svg");
  }
  menuIcon.src = "images/icon-menu.svg";
});
