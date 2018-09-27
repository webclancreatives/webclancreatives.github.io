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

var slideIndexa = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndexa++;
    if (slideIndexa > slides.length) {slideIndexa = 1} 
    slides[slideIndexa-1].style.display = "block"; 
    setTimeout(showSlides, 7000); // Change image every 2 seconds
}

particlesJS.load('touch', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});