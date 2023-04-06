'use strict';

(function () {
	let container_result = document.querySelector('.container_result');
	let start_button = document.querySelector('.btn');
	let checkIcon = document.querySelector('#check_icon');
	let xIcon = document.querySelector('#x_icon');
	let i = 0;

	start_button.addEventListener('click', function () {
		typeNote();
	});

	checkIcon.addEventListener('click', function () {
		createNote();
	});

	xIcon.addEventListener('click', function () {
		typeNote();
	});

	function typeNote() {
		let container_input = document.querySelector('.container_input');

		if (container_input.style.display == 'none') {
			container_input.style.display = 'block';
		} else {
			container_input.style.display = 'none';
		}
	}

	function createNote() {
		let noteText = document.querySelector('#note_text').value;
		let node0 = document.createElement('div');
		let node1 = document.createElement('h1');

		node1.innerHTML = noteText;

		node1.setAttribute(
			'style',
			'width:200px; height:200px; font-size:26px; padding:19px; margin-top:7px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)'
		);

		node1.style.margin = margin();
		node1.style.transform = rotate();
		node1.style.background = color();

		node0.appendChild(node1);

		container_result.insertAdjacentElement('beforeend', node0);

		node0.addEventListener('mouseenter', function () {
			node0.style.transform = 'scale(1.1)';
		});

		node0.addEventListener('mouseleave', function () {
			node0.style.transform = 'scale(1)';
		});

		node0.addEventListener('dblclick', function () {
			node0.remove();
		});

		document.querySelector('#note_text').value = '';
	}

	function margin() {
		let random_margin = ['-5px', '1px', '5px', '10px', '15px', '20px'];

		return random_margin[Math.floor(Math.random() * random_margin.length)];
	}

	function rotate() {
		let random_rotate = [
			'rotate(3deg)',
			'rotate(1deg)',
			'rotate(-1deg)',
			'rotate(-3deg)',
			'rotate(-5deg)',
			'rotate(-10deg)',
		];

		return random_rotate[Math.floor(Math.random() * random_rotate.length)];
	}

	function color() {
		let random_color = [
			'#c2ff3d',
			'#ff3de8',
			'#3dc2ff',
			'#04e022',
			'#bc83e6',
			'#ebb328',
			'#3A86FF',
		];

		if (i > random_color.length - 1) {
			i = 0;
		}

		return random_color[i++];
	}
})();
