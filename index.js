const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn_burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const menuItem = document.querySelectorAll(".menu-nav_item");
const date = document.querySelector(".date");

const currentDate = new Date().getFullYear();
date.textContent = currentDate;

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    for (let item = 0; item < menuItem.length; item++) {
      menuItem[item].classList.add("open");
    }

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    for (let item = 0; item < menuItem.length; item++) {
      menuItem[item].classList.remove("open");
    }

    showMenu = false;
  }
}
