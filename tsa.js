
document.addEventListener("click",function arrowGenerator() {
	var randomNumber = Math.floor(Math.random() * 20);
	if (randomNumber % 2 === 0) {
		document.getElementById("arrow").innerHTML = "<img id='arrowimage' src='images/rightarrow.png' alt='right-arrow'>"
	}
	else {
		document.getElementById("arrow").innerHTML = "<img id='arrowimage' src='images/leftarrow.png' alt='left-arrow'>"
	}
});



	

