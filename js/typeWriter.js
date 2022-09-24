
let i = 0;
let text1 = "Hey! (everypony)";
let text2 = "Stiu ca nu iti pot arata proiectele pentru ca sunt plecat, dar m-am gandit sa fac unul mic (average sized) cat timp inca nu sunt plecat. M-ai intrebat acum cateva minute care este poza care ma face sa ma simt norocos pentru ca te am. Problema este ca am mult prea multe. Cu toate acestea, o sa incerc sa iti arat cateva dintre ele."
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
//};
