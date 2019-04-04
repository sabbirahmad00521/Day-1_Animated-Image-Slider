var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); // every slider section common class
    var dots = document.getElementsByClassName("dot"); // every single dots  common class
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
//        slides[i].style.opacity = "0";
//        slides[i].style.visibility = "hidden";
//        slides[i].style.animation = "slideOut 1s";
        slides[i].className = slides[i].className.replace(" active", "");
        
        
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
//    slides[slideIndex - 1].style.opacity = "1";
//    slides[slideIndex - 1].style.visibility = "visible";
//    slides[slideIndex - 1].style.animation = "slideIn 1s";
    slides[slideIndex - 1].className = slides[slideIndex - 1].className.replace(" ", " active ");
    dots[slideIndex - 1].className += " active";
}
