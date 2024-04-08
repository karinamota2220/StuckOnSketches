// Create slides for last kawaii food
let catCakeSlideIndex = slideController(1, "cat-cake-slide", "cat-cake-thumbnail", "last-caption");

// Next/previous controls
function thirdChangeSlide(n) {
    catCakeSlideIndex = slideController(catCakeSlideIndex += n, "cat-cake-slide", "cat-cake-thumbnail", "last-caption");
}

// Thumbnail image controls
function thirdControlSelectSlide(n) {
    catCakeSlideIndex = slideController(catCakeSlideIndex = n, "cat-cake-slide", "cat-cake-thumbnail", "last-caption");
}

// Create slides for last kawaii food
let testSlideIndex = slideController(1, "test-slide", "test-thumbnail", "test-caption");

// Next/previous controls
function testChangeSlide(n) {
    testSlideIndex = slideController(testSlideIndex += n, "test-slide", "test-thumbnail", "test-caption");
}

// Thumbnail image controls
function testControlSelectSlide(n) {
    testSlideIndex = slideController(testSlideIndex = n, "test-slide", "test-thumbnail", "test-caption");
}

// Create slides for helloKitty
let kuromiSlideIndex = slideController(1, "kuromi-slide", "kuromi-thumbnail", "kuromi-caption");

// Next/previous controls
function kuromiChangeSlide(n) {
    kuromiSlideIndex = slideController(kuromiSlideIndex += n, "kuromi-slide", "kuromi-thumbnail", "kuromi-caption");
}

// Thumbnail image controls
function kuromiControlSelectSlide(n) {
    kuromiSlideIndex = slideController(kuromiSlideIndex = n, "kuromi-slide", "kuromi-thumbnail", "kuromi-caption");
}

function slideController(n, slidesDataAtr, thumbnailsDataAtr, captionClassName) {
    let i;
    let slideKawaiiIndex = 1;
    let slides = document.querySelectorAll(`[data-slide='${slidesDataAtr}']`)
    let thumbnails = document.querySelectorAll(`[data-slide-thumbnail='${thumbnailsDataAtr}']`)
    let captionText = document.getElementById(captionClassName);

    if (n > slides.length) {
        slideKawaiiIndex = 1
        n = 1
    } else if (n < 1) {
        slideKawaiiIndex = slides.length
    } else {
        slideKawaiiIndex = n
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Removes active classname from all thumbnail images
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    // Get current image and set thumbnail to active
    thumbnails[slideKawaiiIndex-1].className += " active";
    // Use selected thumbnail to set caption
    captionText.innerHTML = thumbnails[slideKawaiiIndex-1].alt;

    slides[slideKawaiiIndex-1].style.display = "block";

    return slideKawaiiIndex
}

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

// sticky navbar

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


// remove toggle and navbar when navbar link is clicked
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
