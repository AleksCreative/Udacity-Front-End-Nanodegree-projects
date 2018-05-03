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

/* Function that clears out the card deck */

function removeCards () {
  while(cardDeck.hasChildNodes()) {
    cardDeck.removeChild(cardDeck.lastChild);
  }
}

/* ----- Declaring variables for the game functions ------- */

let cardsOpen = [ ];

let cardNumber = 0;

let moves = 0;
let cardsMatched = 0;
let card = cardDeck.children;

/* ---- Adding classes to show the cards ---- */

function openCard() {
  card.className += ' open show';
}

/* ---- Adding opened cards to the array ---- */

function addCardsToTempArray() {
  cardsOpen.push(card);
  cardNumber++;
}

/* ---- Removing opened cards to the array ---- */

function removeCardsFromTempArray() {
  cardsOpen = [ ];
  cardNumber = 0;
}

/* ---- Adding classes to the matched cards ---- */

function matchCard() {
  cardsOpen[0].className += ' match';
  cardsOpen[1].className += ' match';
}

/* ---- Removing classes from cards ---- */

function removeClass() {
  setTimeout(function() {
    cardsOpen[0].className = 'card';
    cardsOpen[1].className = 'card';
    removeCardsFromTempArray();
  }, 800);
}

/* ---- Adding classes when cards don't match ---- */

function dismatchCard() {
  setTimeout(function() {
    cardsOpen[0].className += ' dismatch';
    cardsOpen[1].className += ' dismatch';
  }, 500);
  removeClass();
}

/* ---- Check if the two cards match ---- */

function checkMatch() {
  let firstCard = cardsOpen[0].innerHTML;
  let secondCard = cardsOpen[1].innerHTML;

  if (firstCard === secondCard) {
    matchCard();
    cardsMatched++;
    removeCardsFromTempArray();
  } else {
    dismatchCard();
  }
}

/* ---- Main game functions ---- */

function game() {
  cardDeck.addEventListener('click', function(e){

    card = e.target;

    if (card.className === 'card open show'){
      return; // disable clicking the same card twice

    } else if (card.className === 'card' && cardNumber < 2) {
      openCard(); // shows the card
      addCardsToTempArray(); // adds cards to open cards array
      if (cardNumber === 2) {
        checkMatch();
        moves++;
        displayMoves();
        }
      } else {
        return;
    }
 });
}

/* ------------ Moves showing function when game is played ------- */

let movesDisplay = document.querySelector('.moves');

function displayMoves() {
  for (let m = 0; m < moves; m++) {
    if (moves === 0) {
      movesDisplay.textContent = "0 Moves."
    }
    else if (moves === 1) {
      movesDisplay.textContent = moves + ' Move.';
    } else {
      movesDisplay.textContent = moves + ' Moves.';
    }
  }
}

function resetDisplayMoves() {
  movesDisplay.textContent = "0 Moves."
}


/* ------------ Star ranking function ------- */


function showStars() {
if(moves <= 10) {
  //show 3 stars
} else if (moves > 10 && moves < 20) {
    //show 2 stars
  } else {
    // show 1 star
  }
}

/* ----------- Modal pop-up -------------- */

if (cardsMatched === 8) {
  let modal = getElementById('modal');
  //toggles css display: block etc...
}


/* --------------- Start the Game ---------------- */

document.addEventListener('DOMContentLoaded', startGame, false);

function startGame(){
  makeList(); // puts shuffled cards on the table
  game(); // responds to card clicks (game play)
}

/* --------- Restart Game --------- */

function restartGame() {

  let resetGame = document.querySelector('.restart');

  resetGame.addEventListener('click', function(){
    removeCards();
    moves = 0;
    resetDisplayMoves();
    startGame();
  });

}

restartGame();

/*

.firstElementChild.className

 If a card is clicked:

 *  - display the card's symbol (put this functionality in another function that you call from this one)


 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)


 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
