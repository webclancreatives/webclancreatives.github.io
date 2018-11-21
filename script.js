AOS.init({
	duration: 1200,
})

var navi = document.getElementsByClassName("nav")[0];
var cont = document.getElementsByClassName("content");
var butt = document.getElementsByClassName("but");
var soc = document.getElementsByClassName("socnet")[0];

var mobnavi = document.getElementById("mnav");
var clsbtn = document.getElementsByClassName("closebtn")[0];

window.onscroll = function navig() {
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

	if (document.body.scrollTop > 512 || document.documentElement.scrollTop > 512) {
		soc.style.position = "fixed";
		soc.style.top = "70px";
	}

	else if (document.body.scrollTop < 511 || document.documentElement.scrollTop < 511) {
		soc.style.position = "absolute";
		soc.style.top = "512px";
	}
}

function mobnav() {
	mobnavi.style.width="100%";

	function close() {
	mobnavi.style.width="0%";
}

clsbtn.addEventListener("click", close);
}



