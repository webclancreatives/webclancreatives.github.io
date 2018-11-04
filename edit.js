	
const trailWeb = () => {
	const hedbg = document.getElementById("headbg");
	const htex = document.getElementById("headtext");
	const head = document.getElementsByClassName("ehead")[0];
	const content = document.getElementsByClassName("econtent")[0];
	const conbg = document.getElementById("contbg");
	const ctex = document.getElementById("conttext");
	const vcol = document.getElementById("navcol");
	const nav = document.getElementsByClassName("enav")[0];
	const navbg = document.getElementById("navbg");
	const fot = document.querySelector(".footer");

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

	hedbg.addEventListener("input",trailWeb);
	htex.addEventListener("input", trailWeb);
	conbg.addEventListener("input", trailWeb);
	ctex.addEventListener("input", trailWeb);
	navcol.addEventListener("input", trailWeb);
	navbg.addEventListener("input", trailWeb);


}

trailWeb();