// `const toggleButton = document.getElementsByClassName("menu-toggle-button");
// console.log("toggleButton", toggleButton);

const toggleButton = document.querySelector(".click-here");

const barToggle = document.querySelector(".bar");

const menuHamburger = document.querySelector(".nav-bar .menu-hamburger");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  if (menuHamburger.classList.contains("visible")) {
    menuHamburger.classList.add("hidden");
    menuHamburger.classList.remove("visible");
  } else {
    menuHamburger.classList.remove("hidden");
    menuHamburger.classList.add("visible");
  }
});

const open = document.getElementById("open");
const modalContainer = document.getElementById("modal-container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

close.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

const submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
});
