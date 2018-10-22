AOS.init({
	duration: 1200,
})

var navi = document.getElementsByClassName("nav")[0];
var cont = document.getElementsByClassName("content");
var butt = document.getElementsByClassName("but");

window.onscroll = function() {
	if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
		navi.style.background = "#eaeaea";
		navi.style.color = "#dc162d"
		navi.style.position = "fixed";
		navi.style.top = "0px";
	}

	else if (document.body.scrollTop < 139 || document.documentElement.scrollTop < 139) {
		navi.style.background = "#333333";
		navi.style.color = "#ffd700";
		navi.style.position = "static";
	}
}

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

function plusSlides(n) {
  showSlides(slideIndexa += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndexa = n);
}

function showSlides(n) {

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 7000);
}

var slideIndexa = 0;
showSlides();

function showSlides() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndexa++;
    if (slideIndexa > slides.length) {slideIndexa = 1} 
    slides[slideIndexa-1].style.display = "block";

    setTimeout(showSlides, 7000); 
}

particlesJS.load('touch', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

function mobnav() {
	var mobnavi = document.getElementById("mnav");

	mobnavi.style.display="block";
}