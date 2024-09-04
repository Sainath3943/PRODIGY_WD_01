// JavaScript to change navbar background color on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  // Check if the page is scrolled beyond 50px
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});