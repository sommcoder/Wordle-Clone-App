// DOM Element Selectors
const keyboardBtns = document.getElementsByClassName('keyboard-btn');
const backspaceBtn = document.querySelector('.backspace-btn');
const enterBtn = document.querySelector('.enter-btn');

console.log(keyboardBtns);
console.log(keyboardBtns[0].dataset.key);

const keyArray = [];
const wordle = 'SUPER';

let currRow = 0;
let currTile = 0;

const addLetter = letter => {
  const tile = document.querySelector(
    `game__input-row-${currRow}-block-${currTile}`
  );
  tile.textContent = letter;
  currTile++; // once entered, move to next tile
};

const handleClick = letter => {
  console.log('clicked', letter);
  addLetter(letter);
};

keyboardBtns.addEventListener('click', handleClick());

// KEYBOARD FUNCTIONALITY
// click to input
// keyboardBtns.addEventListener('click', function () {});

// // type to input

// const inputText = function () {};

// class Game {
//   constructor() {}
//   _;
// }

// const Wordle = new Game();

// Random Words API on RapidAPI
// Dictionary API on RapidAPI

// $(".input1").on('keyup', function (e) {
//     if (e.key === 'Enter' || e.keyCode === 13) {
//         // Do something
//     }
// });

// // select word function.
// // checks the whole dictionary database
// // returns a common 5 letter word

// // use the string method .split() to break

// // These code snippets use an open-source library.

// // // http://unirest.io/nodejs
// // unirest.get("https://wordsapiv1.p.mashape.com/words/soliloquy")
// // .header("X-Mashape-Key", "<required>")

// // fetch()

// // correctWord.split('')

// fetch('https://wordsapiv1.p.rapidapi.com/words/%7Bword%7D', {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
//     'x-rapidapi-key': '4dfaa2009dmsh172c09c52425424p11f61fjsnce4a8e5aaad1',
//   },
// })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// // include conditional statements

// if (randomWord.split(' ') === 5)

// // word generator:

// /*
// npm install random-words

// OR

// $ npm install check-word

// ^^^  in this method we need to create a function that creates random words... this may be more complex...

// let {randomWords} = require('random-words');

// const wordValidation = function() {

//    let splitWord = randomWords( exactly: 1 ).split('');

//    if (splitWord === 5)
//    'd', 'o', 'd', 'g', 'e'
//    console.log(splitWord)

// }

// */

// // https://www.npmjs.com/package/random-words

//   {
//   "continuationToken": "NitzdHI...==",
//   "validGuess": true,
//   "correctWord": false,
//   "numberOfGuesses": 1,
//   "wordLength": 5,
//   "gameNumber": 1,
//   "result": [
//     {
//       "index": 0,
//       "letter": "h",
//       "colour": "grey"
//     },
//     {
//       "index": 1,
//       "letter": "e",
//       "colour": "yellow"
//     },
//     {
//       "index": 2,
//       "letter": "l",
//       "colour": "grey"
//     },
//     {
//       "index": 3,
//       "letter": "l",
//       "colour": "grey"
//     },
//     {
//       "index": 4,
//       "letter": "o",
//       "colour": "yellow"
//     }
//   ],
//   "keyBoard": {
//     "a": "grey",
//     "b": "grey",
//     "c": "grey",
//     "d": "grey",
//     "e": "yellow",
//     "f": "grey",
//     "g": "grey",
//     "h": "grey",
//     "i": "grey",
//     "j": "grey",
//     "k": "grey",
//     "l": "grey",
//     "m": "grey",
//     "n": "grey",
//     "o": "yellow",
//     "p": "grey",
//     "q": "grey",
//     "r": "grey",
//     "s": "grey",
//     "t": "grey",
//     "u": "grey",
//     "v": "grey",
//     "w": "grey",
//     "x": "grey",
//     "y": "grey",
//     "z": "grey"
//   }
// }
