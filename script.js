const quantity = document.querySelector("#quantity");
let qVal = +quantity.innerText;
const plusButton = document.querySelector("#plus-button");
const minusButton = document.querySelector("#minus-button");
const error = document.querySelector("#error-message");
let waiting = false;

plusButton.addEventListener("click", () => {
  if (qVal >= 5) {
    const errMessage = "Limit 5 Per Customer!";
    showError(errMessage);
    return;
  }
  qVal++;
  updateQuantity();
});

minusButton.addEventListener("click", () => {
  if (qVal <= 0) {
    const errMessage = "Can't order less than 0!";
    showError(errMessage);
    return;
  }
  qVal--;
  quantity.innerText = qVal;
});

const updateQuantity = () => {
  quantity.innerText = qVal;
};

const showError = (msg) => {
  error.innerText = "ERROR:" + msg;
  error.classList.remove("d-none");
  setTimeout(() => {
    error.classList.add("d-none");
  }, 1500);
};

const slideMobile = document.querySelector("#slide-mobile");
const closeMobile = document.querySelector("#close-mobile");
const mobileNav = document.querySelector("#mobile-sliding-nav");
slideMobile.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});
closeMobile.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

let images = {
  ["./images/image-product-1-thumbnail.jpg"]: "./images/image-product-1.jpg",
  ["./images/image-product-2-thumbnail.jpg"]: "./images/image-product-2.jpg",
  ["./images/image-product-3-thumbnail.jpg"]: "./images/image-product-3.jpg",
  ["./images/image-product-4-thumbnail.jpg"]: "./images/image-product-4.jpg",
};

const thumbnails = document.querySelectorAll(".product-thumbnail-container");
const mainImg = document.querySelector("#main-product-image");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    console.log("thumbnail :", thumbnail);
    const activeThumbNail = document.querySelector(
      ".product-thumbnail-container.active"
    );
    const mainImgSrc = mainImg.getAttribute("src");
    const imgSrc = thumbnail.firstElementChild.getAttribute("src");
    const fullImg = images[imgSrc];
    if (mainImg !== fullImg) {
      activeThumbNail.classList.remove("active");
      mainImg.setAttribute("src", fullImg);
    }
    thumbnail.classList.add("active");
  });
});

/* Mobile code carousel code */
const mobileImage = document.querySelector("#mobile-product-image");
const leftImageArrow = document.querySelector("#left-image-arrow");
const rightImageArrow = document.querySelector("#right-image-arrow");
let imagePos = 0;

leftImageArrow.addEventListener("click", () => {
  if (imagePos === 0) {
    imagePos = 3;
  } else {
    imagePos--;
  }
  changeMobileImage();
});

rightImageArrow.addEventListener("click", () => {
  if (imagePos === 3) {
    imagePos = 0;
  } else {
    imagePos++;
  }
  changeMobileImage();
});

const changeMobileImage = () => {
  mobileImage.src = Object.values(images)[imagePos];
};

/* Avatar cart code */

const avatar = document.querySelector("#avatar");
const cartPreview = document.querySelector("#cart-preview");

avatar.addEventListener("click", () => {
  cartPreview.classList.toggle("hide");
  console.log("clicked on avatar");
});

/* Add to cart */
const addtoCartBtn = document.querySelector("#add-to-cart");

addtoCartBtn.addEventListener("click", () => {});
