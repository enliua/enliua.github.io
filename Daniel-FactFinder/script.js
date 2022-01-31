document.querySelector('#menu').a.addEventListener('click', fact1);
document.querySelector('#menu').b.addEventListener('click', fact2); 
document.querySelector('#menu').c.addEventListener('click', fact3); 
document.querySelector('#menu').d.addEventListener('click', fact4); 
document.querySelector('#menu').e.addEventListener('click', fact5); 
document.querySelector('#menu').f.addEventListener('click', fact6); 

function fact1 () {
	document.querySelector('#fact').innerHTML = "Ketchup on shwarma is a sin <img src='images/shwarma.jfif' alt='shwarma'>";
}

function fact2 () {
	document.querySelector('#fact').innerHTML = "One species of jellyfish is immortal <img src='images/jelly.jpeg' alt='jelly'>";
}

function fact3 () {
	document.querySelector('#fact').innerHTML = "A snail can sleep for three years at a time <img src='images/snail.jpeg' alt='snail'>";
}

function fact4 () {
	document.querySelector('#fact').innerHTML = "There are 1 million ants for every human in the world <img src='images/ants.jpeg' alt='ants'>";
}

function fact5 () {
	document.querySelector('#fact').innerHTML = "A bat can eat up to 1 thousand insects per hour. <img src='images/bat.jpeg' alt='bat'>";
}

function fact6 () {
	document.querySelector('#fact').innerHTML = "The now extinct colossal penguin stood as tall as 2.03 metre basketball legend LeBron James <img src='images/penguin.jpg' alt='penguin'>";
}

document.querySelector('#themes').theme1.addEventListener('click', theme1);
document.querySelector('#themes').theme2.addEventListener('click', theme2);
document.querySelector('#themes').theme3.addEventListener('click', theme3);

function theme1 () {
	
	var inputs = document.getElementsByTagName ('input');
	
	document.querySelector('body').style.backgroundColor = "#D6E5FA";
	document.querySelector('main').style.backgroundColor = "#D6E5FA";
	document.querySelector('section').style.backgroundColor = "#D77FA1";
	document.querySelector('section').style.color = "##FFF9F9";

	for (var i = 0; i < 6; i++) {
	inputs[i].style.backgroundColor = "#BAABDA";
	}
	
	for (var i = 0; i < 6; i++) {
	themes[i].style.backgroundColor = "#BAABDA";
	}
	
}

function theme2 () {
	
	var inputs = document.getElementsByTagName ('input');
	
	document.querySelector('body').style.backgroundColor = "#041C32";
	document.querySelector('main').style.backgroundColor = "#041C32";
	document.querySelector('section').style.backgroundColor = "#064663";
	document.querySelector('section').style.color = "#ECB365";

	
	for (var i = 0; i < 6; i++) {
	inputs[i].style.backgroundColor = "#04293A";
	}
	
	for (var i = 0; i < 6; i++) {
	themes[i].style.backgroundColor = "#04293A";
	}
	
}

function theme3 () {
	
	var inputs = document.getElementsByTagName ('input');
	
	document.querySelector('body').style.backgroundColor = "#66806A";
	document.querySelector('main').style.backgroundColor = "#66806A";
	document.querySelector('section').style.backgroundColor = "#FFC286";
	document.querySelector('section').style.color = "##FFF9F9";

	for (var i = 0; i < 6; i++) {
	inputs[i].style.backgroundColor = "#B4C6A6";
	}
	
	for (var i = 0; i < 6; i++) {
	themes[i].style.backgroundColor = "#B4C6A6";
	}
	
}