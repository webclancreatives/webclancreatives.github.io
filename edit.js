	var hedbg = document.getElementById("headbg");
	var htex = document.getElementById("headtext");
	var head = document.getElementsByClassName("ehead")[0];
	var content = document.getElementsByClassName("econtent")[0];
	var conbg = document.getElementById("contbg");
	var ctex = document.getElementById("conttext");
	var vcol = document.getElementById("navcol");
	var nav = document.getElementsByClassName("enav")[0];
	var navbg = document.getElementById("navbg");
	var fot = document.querySelector(".footer");

function trailWeb() {	
	head.style.background = hedbg.value;
	console.log("head bg :" + hedbg.value);
	head.style.color = htex.value;
	console.log("head text :" + htex.value);

	nav.style.background = navbg.value;
	console.log("Nav Bg:" + navbg.value);
	nav.style.color = vcol.value;
	console.log("Nav text:" + vcol.value);

	content.style.color = ctex.value;
	console.log("Content Text:" + ctex.value);
	content.style.background = conbg.value;
	console.log("Content Bg:" + conbg.value);


}

trailWeb();

hedbg.addEventListener("input",trailWeb);
htex.addEventListener("input", trailWeb);
conbg.addEventListener("input", trailWeb);
ctex.addEventListener("input", trailWeb);
navcol.addEventListener("input", trailWeb);
navbg.addEventListener("input", trailWeb);