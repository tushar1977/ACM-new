function createSuccessModal() {
	const div = document.createElement('div');
	div.classList = 'modal js-modal';
	div.innerHTML = `
			<div class="modal-image">
				<svg viewBox="0 0 32 32" style="fill: #48db71">
					<path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
				</svg>
			</div>
			<h1 class="modal-heading">Success!</h1>
			<p class="modal-message">To dismiss click the button below</p>
			<button class="modal-btn js-close">Dismiss</button>
	`;
	document.querySelector('body').append(div);
}
function createErrorModal() {
	const div = document.createElement('div');
	div.classList = 'modal js-modal';
	div.style.border = '2px solid #ff1500';
	div.style.backgroundColor = '#fff';
	div.innerHTML = `
		<img src="https://image.flaticon.com/icons/png/512/1680/1680214.png" class="modal-image" style="border-radius: 0; box-shadow: 0 0 0 2px #ffffff; padding: 0;" />
		<h1 class="modal-heading">Error!</h1>
		<p class="modal-message">To dismiss click the button below</p>
		<button class="js-close modal-btn">Dismiss</button>
	`;
	document.querySelector('body').append(div);
}
function removeModal() {
	const modal = document.querySelector('.modal');
	modal.remove();
}

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
		while (newClass.indexOf(' ' + className + ' ') >= 0) {
			newClass = newClass.replace(' ' + className + ' ', ' ');
		}
		elem.className = newClass.replace(/^\s+|\s+$/g, '');
	} else {
		elem.className += ' ' + className;
	}
}
// select
function select(selector) {
	var elements = document.querySelectorAll(selector);

	if (elements.length > 1) {
		return elements;
	} else {
		return elements.item(0);
	}
}
// External JS: JS Helper Functions
// External JS: Dynamics JS
var successBtn = select('.success-modal');
var errorBtn = select('.error-modal');

function hideModal() {
	var modal = select('.js-modal');
	dynamics.animate(
		modal,
		{
			opacity: 0,
			translateY: 100,
		},
		{
			type: dynamics.spring,
			frequency: 50,
			friction: 600,
			duration: 1500,
		}
	);
}
function showModal() {
	var modal = select('.js-modal');
	// Define initial properties
	dynamics.css(modal, {
		opacity: 0,
		scale: 0.5,
	});

	// Animate to final properties
	dynamics.animate(
		modal,
		{
			opacity: 1,
			scale: 1,
		},
		{
			type: dynamics.spring,
			frequency: 300,
			friction: 400,
			duration: 1000,
		}
	);
}
function showModalChildren() {
	var modal = select('.js-modal');
	var modalChildren = modal.children;
	// Animate each child individually
	for (var i = 0; i < modalChildren.length; i++) {
		var item = modalChildren[i];

		// Define initial properties
		dynamics.css(item, {
			opacity: 0,
			translateY: 30,
		});

		// Animate to final properties
		dynamics.animate(
			item,
			{
				opacity: 1,
				translateY: 0,
			},
			{
				type: dynamics.spring,
				frequency: 300,
				friction: 400,
				duration: 1000,
				delay: 100 + i * 40,
			}
		);
	}
}
function toggleClasses() {
	toggleClass(successBtn, 'is-active');
	toggleClass(errorBtn, 'is-active');
	document.querySelector('body').classList.toggle("bg-color");
	var modal = select('.js-modal');
	if (modal) {
		toggleClass(modal, 'is-active');
	}
}
// event listener for success btn
successBtn.addEventListener('click', function (e) {
	createSuccessModal();
	toggleClasses();
	showModal();
	showModalChildren();

	var btnClose = select('.js-close');
	btnClose.addEventListener('click', function (e) {
		hideModal();
		removeModal();
		toggleClasses();
	});
});
//event listener for error btn
errorBtn.addEventListener('click', function (e) {
	createErrorModal();
	toggleClasses();
	showModal();
	showModalChildren();

	var btnClose = select('.js-close');
	btnClose.addEventListener('click', function (e) {
		hideModal();
		removeModal();
		toggleClasses();
	});
});
