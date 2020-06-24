let header = document.getElementById("header");
let marker = document.querySelector('#marker');
let item = document.querySelectorAll('nav a');

function toggle() {
	header.classList.toggle('active');
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

marker.style.left = '0px';
marker.style.width = '97px';
