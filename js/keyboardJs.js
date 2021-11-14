function showKeyboard() {

	document.getElementById('surrounding').style.display = "block"
	capsLk.toggle = 1;
	shift.toggle = 1;
	/*
	window.onclick = function(event) {
		if (event.target == s) {
			s.style.display = "none";
		}
	}
	*/
}


function typeKey(k) {
	//var key = document.getElementById(id);
	document.getElementById("input").value = document.getElementById("input").value + k;
}

function closeKeyboard() {
	document.getElementById('surrounding').style.display = "none";
	document.getElementById('capsLk').style.display = "none";
	document.getElementById('shift').style.display = "none";
}

function backspace(){
	var str = document.getElementById("input").value;
	var strSplited = str.split("");
	str = "";
	for(i=0; i<strSplited.length - 1; i++){
		str = str + strSplited[i];
	}
	document.getElementById("input").value = str;
}

function capsLk(){
	if(capsLk.toggle == 0){
	document.getElementById('shift').style.display = "none";
	document.getElementById('capsLk').style.display = "none";
	document.getElementById('surrounding').style.display = "block";
	capsLk.toggle = 1;
	}else{
		document.getElementById('surrounding').style.display = "none";
		document.getElementById('shift').style.display = "none";
		document.getElementById('capsLk').style.display = "block";
		capsLk.toggle = 0;
	}
}

function shift(){
	if(shift.toggle == 0){
	document.getElementById('shift').style.display = "none";
	document.getElementById('capsLk').style.display = "none";
	document.getElementById('surrounding').style.display = "block";
	shift.toggle = 1;
	}else{
		document.getElementById('surrounding').style.display = "none";
		document.getElementById('capsLk').style.display = "none";
		document.getElementById('shift').style.display = "block";
		shift.toggle = 0;
	}
}
