let header = document.getElementById("header");
let marker = document.querySelector('#marker');
let item = document.querySelectorAll('nav a');
let down = document.querySelector("#contact > div > span");
let i = 0;

function toggle() {
	header.classList.toggle('active');
}

function count() {
	i++;
	console.log(`Pressed: ${i} Times`);
}

function indicator(e) {
	marker.style.left = e.offsetLeft+"px";
	marker.style.width = e.offsetWidth+"px";
}

item.forEach(link => {
	link.addEventListener('click', (e) => {
		indicator(e.target);
	});
});

down.addEventListener('click', () => {
	scrollBy(0,657);
});

marker.style.left = '0px';
marker.style.width = '97px';
