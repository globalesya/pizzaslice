import 'reset-css';
import '../css/style.scss';

require(__dirname + '/partials/dropdown.js')

function requireAll(r) {
	r.keys().forEach(r);
}

requireAll(require.context('../icons/', true, /\.svg$/));

fetch(`/dist/icons/icons.svg`).then(res => {
	return res.text();
}).then(data => {
	document.getElementById('svg-icons').innerHTML = data;
});


let listViewSwitch = document.querySelector('.list-view-switch');
let switchButtons = listViewSwitch.querySelectorAll('.switch-item');

if (switchButtons) {
	switchButtons.forEach((switchButton) => {
		switchButton.addEventListener('click', listView);
	});
}

function listView() {
	let view =  this.getAttribute('data-view');
	let listProducts = document.querySelector('.products-list');

	if (switchButtons) {
		switchButtons.forEach((switchButton) => {
			if (switchButton.classList.contains('active')) {
				switchButton.classList.remove('active');
			}
		});
	}

	if (!this.classList.contains('active')) {
		this.classList.add('active');
	}


	if (listProducts.classList.contains('grid-view')) {
		listProducts.classList.remove('grid-view');
	}

	if (listProducts.classList.contains('list-view')) {
		listProducts.classList.remove('list-view');
	}

	listProducts.classList.add(view + '-view');

}


(function() {

	var parent = document.querySelector(".range-slider");
	if(!parent) return;

	var
		rangeS = parent.querySelectorAll("input[type=range]"),
		numberS = parent.querySelectorAll("input[type=number]");

	rangeS.forEach(function(el) {
		el.oninput = function() {
			var slide1 = parseFloat(rangeS[0].value),
				slide2 = parseFloat(rangeS[1].value);

			if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
			}

			numberS[0].value = slide1;
			numberS[1].value = slide2;
		}
	});

	numberS.forEach(function(el) {
		el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
				number2 = parseFloat(numberS[1].value);

			if (number1 > number2) {
				var tmp = number1;
				numberS[0].value = number2;
				numberS[1].value = tmp;
			}

			rangeS[0].value = number1;
			rangeS[1].value = number2;

		}
	});

})();

