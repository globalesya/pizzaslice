let activeDropdown = {};

let allDropdowns = document.querySelectorAll('.dropdown');
if (allDropdowns) {
	allDropdowns.forEach((dropdown) => {
		dropdown.addEventListener('click', showDropdown);
	});
}

function showDropdown(e) {
	if (activeDropdown.id && activeDropdown.id !== e.target.id) {
		activeDropdown.element.classList.remove('active');
	}

	if (e.target.tagName === 'LI') {
		activeDropdown.button.innerHTML = e.target.innerHTML;
		for (let i = 0; i < e.target.parentNode.children.length; i++) {
			if (e.target.parentNode.children[i].classList.contains('check')) {
				e.target.parentNode.children[i].classList.remove('check');
			}
		}

		window.setTimeout(function () {
			e.target.classList.add('check');
		}, 500)
	}
	for (let i = 0; i < this.children.length; i++) {
		if (this.children[i].classList.contains('dropdown-selection')) {
			activeDropdown.id = this.id;
			activeDropdown.element = this.children[i];
			this.children[i].classList.add('active');
		}

		else if (this.children[i].classList.contains('dropdown-button')) {
			activeDropdown.button = this.children[i];
		}
	}
}

// window.onclick = function (e) {
// 	if (!e.target.classList.contains('dropdown-button')) {
// 		activeDropdown.element.classList.remove('active');
// 	}
// }

// Detect all clicks on the document
document.addEventListener("click", function(e) {
	// If user clicks inside the element, do nothing
	if (e.target.closest(".dropdown-button")) return;

	// If user clicks outside the element, hide it!
	activeDropdown.element.classList.remove('active');
});
