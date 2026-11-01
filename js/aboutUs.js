// Velvet Wine - JavaScript for the About Us page (menu only)

var menu = document.getElementById("menu");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

// Open the menu
openBtn.addEventListener("click", function () {
    menu.classList.add("open");
});

// Close the menu
closeBtn.addEventListener("click", function () {
    menu.classList.remove("open");
});