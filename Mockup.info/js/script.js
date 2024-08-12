'use strict';

/**
 * element toggle function
 */



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navbar = document.querySelector(".navbar");

navToggleBtn.addEventListener("click", function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
});




/**
 * mockups toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const mockupsBox = document.querySelector("[data-mockups-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(mockupsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  themeToggleBtn.classList.toggle("active");
  document.body.classList.toggle("dark_theme");
  document.body.classList.toggle("light_theme");

  if (themeToggleBtn.classList.contains("active")) {
    localStorage.setItem("theme", "light_theme");
  } else {
    localStorage.setItem("theme", "dark_theme");
  }
});


/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}