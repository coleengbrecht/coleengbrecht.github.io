
const pageCount = 3;

document.onload = function() {
}

show_page = function(page) {
	for (let i = 0; i < pageCount; ++i) {
		let elem = document.getElementById("page-" + i);
		elem.style.display = "none";
	}
	let elem = document.getElementById("page-" + page);
	elem.style.display = "block";
}
