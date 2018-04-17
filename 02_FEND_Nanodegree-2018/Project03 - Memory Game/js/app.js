/* ---------- ALEKS' MEMORY GAME. Udacity FEND Project 3 ---------- */

/* ---------------------------------------------------------------- */

/* Array that holds all of the card classes */

let cardArray = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb' ];

/* ----------------------- Cards Shuffle ------------------------ */

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/* ------------- Creating a list of cards with icons --------------- */

/* Select the ul .deck element */

const cardDeck = document.querySelector('.deck');

/* Declare empty list items and icon variables */

let listItem = ' ';
let cardItem = ' ';

/* Function that creates a list items and icons of a length of the cardArray and assign them classes */

function makeList() {
  for(let i = 0; i < cardArray.length; i++) {
    listItem = document.createElement('li');
    listItem.className = 'card';
    cardDeck.appendChild(listItem);

    cardItem = document.createElement('i');
    cardItem.className = 'fa';
    listItem.appendChild(cardItem);
  }
  let shuffledClasses = shuffle(cardArray);
  let cardItems = document.querySelectorAll('.card .fa');
  for (let j = 0; j < cardArray.length; j++) {
  cardItems[j].classList.add(shuffledClasses[j]);
  }
}

/* ----- Arrays that hold Open and Matched cards ------- */

let cardsOpen = [ ];
let cardsMatched = [ ];

/* Function that opens and shows a card on click and adds it to the array of opened cards */

function openCard() {
  cardDeck.addEventListener('click', function(event) {
    if (event.target.classList.value === 'card') {
      event.target.className += ' open show';
    } else if (event.target.classList.value === 'card open show') {
      return;
    }
  });
}

/* ----- Adding classes to the matched cards ---- */

let card = cardDeck.children;

function matchCard() {
  card.className += " open match";
}






/* --------------- Start the Game ---------------- */

function startGame(){
makeList(); // puts shuffled cards on the table
// starts the timer
// counts the moves
}






/*
 * set up the event listener for a card.


 If a card is clicked:

 *  - display the card's symbol (put this functionality in another function that you call from this one)


 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)


 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
