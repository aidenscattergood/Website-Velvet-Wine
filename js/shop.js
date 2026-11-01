// Velvet Wine - JavaScript for the shop page

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

// Filter button: shows or hides the filter panel on phones
var filterBtn = document.getElementById("filterBtn");
var filterPanel = document.getElementById("filterPanel");

filterBtn.addEventListener("click", function () {
    filterPanel.classList.toggle("showFilter");
});

// Get the wine cards
var wineCards = document.querySelectorAll(".shopCard");

// Get the filter options
var categories = document.querySelectorAll('input[name="category"]');
var sizes = document.querySelectorAll('input[name="size"]');
var regions = document.querySelectorAll('input[name="region"]');

// Get the search elements
var searchInput = document.getElementById("searchInput");
var searchBtn = document.getElementById("searchBtn");

// Remember if the person has picked a size or a region yet
var sizeUsed = false;
var regionUsed = false;

// Filter and search the wines
function filterWines() {

    var category = document.querySelector('input[name="category"]:checked').title;
    var size = document.querySelector('input[name="size"]:checked').title;
    var region = document.querySelector('input[name="region"]:checked').title;
    var search = searchInput.value.toLowerCase().trim();

    wineCards.forEach(function(card) {

        var show = true;

        // category: All Wines shows every category
        if (category != "All Wines" && card.dataset.category != category.replace(" Wines", "")) {
            show = false;
        }

        // size and region only count once they have been clicked
        if (sizeUsed && card.dataset.size != size) {
            show = false;
        }

        if (regionUsed && card.dataset.region != region) {
            show = false;
        }

        // search looks at the name and price on the card
        if (!card.textContent.toLowerCase().includes(search)) {
            show = false;
        }

        if (show) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}

// Run the filters when changed
categories.forEach(function(option) {
    option.addEventListener("change", filterWines);
});

sizes.forEach(function(option) {
    option.addEventListener("change", function() {
        sizeUsed = true;
        filterWines();
    });
});

regions.forEach(function(option) {
    option.addEventListener("change", function() {
        regionUsed = true;
        filterWines();
    });
});

// Search when typing
searchInput.addEventListener("input", filterWines);

// Search when button is clicked
searchBtn.addEventListener("click", filterWines);


// Wine product pop-up

var winePopup = document.getElementById("winePopup");
var closePopup = document.getElementById("closePopup");

var popupName = document.getElementById("popupName");
var popupPrice = document.getElementById("popupPrice");
var popupDescription = document.getElementById("popupDescription");

var wineQuantity = document.getElementById("wineQuantity");
var addToCart = document.getElementById("addToCart");
var cartMessage = document.getElementById("cartMessage");

// Open pop-up when a wine card is clicked

wineCards.forEach(function(card) {

    card.addEventListener("click", function() {

        popupName.textContent = card.querySelector("h3").textContent;
        popupPrice.textContent = card.querySelector("p").textContent;

        popupDescription.textContent =
            "A handcrafted " + card.dataset.category +
            " wine from " + card.dataset.region +
            ". Available in " + card.dataset.size + " bottles.";

        wineQuantity.value = 1;
        cartMessage.textContent = "";

        winePopup.style.display = "flex";

    });

});

// Close pop-up

closePopup.addEventListener("click", function() {
    winePopup.style.display = "none";
});

//