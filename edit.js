var hedbg = document.getElementById("headbg");
var htex = document.getElementById("headtext");
var head = document.getElementsByClassName("ehead")[0];

var conbg = document.getElementById("contbg");
var ctex = document.getElementById("conttext");
var cont = document.getElementsByClassName("econtent")[0];
var vcol = document.getElementById("navcol");
var nav = document.getElementsByClassName("enav")[0];

function trailWeb() {
	console.log(hedbg.value);
	head.style.background = hedbg.value;
	head.style.color = htex.value;
	console.log(hedbg.value);
	cont.style.background = conbg.value;
	cont.style.color = ctex.value;
	enav.style.color = navcol.value;
}

trailWeb();

hedbg.addEventListener("input",trailWeb);
htex.addEventListener("input", trailWeb);
conbg.addEventListener("input", trailWeb);
ctex.addEventListener("input", trailWeb);