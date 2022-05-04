'use strict';

const alphabet = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

// return the index of x in alphabet
function showX(text) {
	if (typeof text == 'string') {
		const lowerText = text.trim().toLowerCase();
		const textWord = [];

		for (let t of lowerText) {
			textWord.push(t);
		}

		const indexOfWord = [];

		textWord.forEach((aT, index) => {
			indexOfWord.push(alphabet.indexOf(aT));
		});

		return indexOfWord;
	}
}

function encryptAffine(text, keyOne, keyTwo) {
	if (typeof text == 'string') {
		let stepKeyOne = showX(text).map((value) => {
			return (keyOne * value + keyTwo) % alphabet.length;
		});

		const newAlpha = stepKeyOne.map((value) => {
			return alphabet[value];
		});

		return newAlpha.join('');
	} else {
		console.log('pleas enter text');
	}
}

function decryptAffine(a, b, word) {
	a = parseInt(a);
	b = parseInt(b);

	for (var i = 0; i < word.length; i++) {
		a %= alphabet.length;

		//Bruteforce the modular invert of the a

		for (var j = 1; j < alphabet.length; j++) {
			if ((a * j) % alphabet.length == 1) var invert = j;
		}

		var alphaIndex = alphabet.indexOf(word[i]);

		var troublesome = (invert * (alphaIndex - b)) % alphabet.length;
		if (troublesome < 0) troublesome += alphabet.length;
		word = word.substring(0, i) + alphabet[troublesome] + word.substring(i + 1);
	}
	return word;
}
