"use strict";

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

function showX(text) {
    if (typeof text == "string") {

        const lowerText = text.trim().toLowerCase();
        const textWord = []

        for (let t of lowerText) {
            textWord.push(t)
        }

        const indexOfWord = []

        textWord.forEach((aT, index) => {
                indexOfWord.push(alphabet.indexOf(aT))
            }
        )

        return indexOfWord
    }

}

function keyConverter(text, keyOne, keyTwo) {
    if (typeof text == "string") {
        let stepKeyOne = showX(text).map(value => {

            return ((keyOne * value) + keyTwo) % alphabet.length
        });

        return stepKeyOne.map(value => {
            return alphabet[value]
        })
    } else {
        console.log("pleas enter text")
    }


}

console.log(keyConverter("affline", 5, 8))
