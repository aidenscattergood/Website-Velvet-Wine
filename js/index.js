// Velvet Wine - JavaScript for the menu only

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


// See All button: shows or hides the extra wines on phones
var seeBtn = document.getElementById("seeBtn");
var wineRow = document.getElementById("wineRow");

seeBtn.addEventListener("click", function () {
    wineRow.classList.toggle("showAll");

    if (wineRow.classList.contains("showAll")) {
        seeBtn.textContent = "See Less";
    } else {
        seeBtn.textContent = "See All";
    }
});