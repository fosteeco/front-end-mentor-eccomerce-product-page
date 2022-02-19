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
