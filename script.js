var css = document.getElementById("data");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var fontcolor = document.querySelector(".fcolor");
var rname = document.getElementsByClassName("rname")[0];
var body = document.getElementsByClassName("result")[0];
var title = document.getElementById("rtitle");
var but = document.getElementById("button");
var butcolr = document.getElementsByClassName("butcol")[0];
var buthcolr = document.getElementsByClassName("buthcol")[0];
var buttcolr = document.getElementsByClassName("buttcol")[0];
var butthcolr = document.getElementsByClassName("butthcol")[0];
var rcontent = document.getElementById("rcont");
var contcol = document.getElementById("rcontcol");
var conttcol = document.getElementById("webconttext");
var webentry = document.getElementById("webcontentry");

function setGradient(){
		console.log("Gradient 1 is " + color1.value);
		console.log("Gradient 2 is " + color2.value);
		body.style.background="linear-gradient(to right, " + color1.value + ", " + color2.value +")";
		body.style.color = ""+fontcolor.value;
		css.innerHTML = "liniear gradient from " + color1.value + "  to  " + color2.value;
		title.innerHTML = " " + rname.value;
		but.style.background=butcolr.value;
		but.style.color=buttcolr.value;
		but.style.transition="background 0.5s ease-in-out, color 0.5s ease-in-out";
		rcontent.style.background=contcol.value;
		rcont.style.color=conttcol.value;
		rcont.innerHTML=webentry.value;

}

function buthov(){
	but.style.background=buthcolr.value
	but.style.color=butthcolr.value
}

color1.addEventListener("input", setGradient);

webentry.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

fontcolor.addEventListener("input", setGradient);

rname.addEventListener("input", setGradient);

butcolr.addEventListener("input", setGradient);

but.addEventListener("mouseenter", buthov);
but.addEventListener("mouseleave", setGradient);

buttcolr.addEventListener("input", setGradient);

contcol.addEventListener("input", setGradient);

conttcol.addEventListener("input", setGradient);
