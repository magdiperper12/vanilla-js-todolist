let adding = document.getElementById('input');
let outnig = document.getElementById('output');
let add = document.getElementById('add');

add.addEventListener('click', function () {
	outnig.innerHTML +=
		`<div class="outputall">` +
		adding.value +
		`<span id="clear"> x </span></div>`;
	adding.value = '';

	let clearButtons = document.querySelectorAll('#clear');
	clearButtons.forEach((clear) => {
		clear.addEventListener('click', function () {
			this.parentElement.remove(); // This removes the parent <div> containing the text and clear button
		});
	});
});
