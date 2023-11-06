import "./style.css";

// Open Hamburger Menu
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("openMenu");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
