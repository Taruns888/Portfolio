// Get the navigation menu element
const menu = document.getElementById("menu");

// Get the button that toggles the menu on small screens
const toggleButton = document.getElementById("toggle-button");

// When the toggle button is clicked, toggle the "active" class on the menu
toggleButton.addEventListener("click", function() {
  menu.classList.toggle("active");
});

// Hide the menu when a link is clicked on small screens
const menuLinks = document.querySelectorAll("#menu li a");

menuLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    }
  });
});

// Resize listener to hide menu when screen size increases
window.addEventListener("resize", function() {
  if (window.innerWidth > 768 && menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
});
