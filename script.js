let header = document.getElementById("header");

function toggle() {
	header.classList.toggle('active');
}

function toggleHome() {
	if (header.classList.contains('active')) {
		header.classList.remove('active');
	}
	else {
		return;
	}
}
