var slideIndex = 1;
showSlides(slideIndex);
 
function changeSlides(n) {
    showSlides(slideIndex += n);
}
 
function currentSlide(n) {
    showSlides(slideIndex = n);
}
 
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("pic");
    var tbb = document.getElementsByClassName("tbb");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < tbb.length; i++) {
        tbb[i].className = tbb[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    tbb[slideIndex-1].className += " active";
}

window.addEventListener("keydown", function(e) {
    var key = e.which || e.keyCode;
    if (key == '37') {
        changeSlides(-1);
    }
    else if (key == '39'){
        changeSlides(1);
    }
});