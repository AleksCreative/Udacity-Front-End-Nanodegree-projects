/* ---------- ALEKS' MEMORY GAME. Udacity FEND Project 3 ---------- */
/* ---------------------------------------------------------------- */

/* ----------------------- GAME SETUP ----------------------------- */

/* ---------- Array that holds all of the card classes ------------ */

let cardArray = [
                  'fa-diamond',
                  'fa-paper-plane-o',
                  'fa-anchor',
                  'fa-bolt',
                  'fa-cube',
                  'fa-leaf',
                  'fa-bicycle',
                  'fa-bomb',
                  'fa-diamond',
                  'fa-paper-plane-o',
                  'fa-anchor',
                  'fa-bolt',
                  'fa-cube',
                  'fa-leaf',
                  'fa-bicycle',
                  'fa-bomb'
                ];

/* ----------------------- Cards Shuffle -------------------------- */

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

/* ------------- Creating a list of cards with icons -------------- */

const cardDeck = document.querySelector('.deck'); // Select the ul .deck element

/* ---------- Declare empty list items and icon variables --------- */

let listItem = ' ';
let cardItem = ' ';

/* Function that creates a list of cards of a length of the cardArray and assign them classes */

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

/* ----------- Function that clears out the card deck ------------ */

function removeCards () {
  while(cardDeck.hasChildNodes()) {
    cardDeck.removeChild(cardDeck.lastChild);
  }
}

/* ------------------ MAIN GAME FUNCTIONALITY ------------------- */

/* --------- Declaring variables for the game functions --------- */

let cardsOpen = [ ];
let cardNumber = 0;
let moves = 0;
let cardsMatched = 0;
let card = cardDeck.children;

/* --------------- Adding classes to show the cards ------------ */

function openCard() {
  card.className += ' open show';
}

/* -------------- Adding opened cards to the array ------------- */

function addCardsToTempArray() {
  cardsOpen.push(card);
  cardNumber++;
}

/* ------------ Removing opened cards to the array ------------ */

function removeCardsFromTempArray() {
  cardsOpen = [ ];
  cardNumber = 0;
}

/* ------------ Adding classes to the matched cards ----------- */

function matchCard() {
  cardsOpen[0].className += ' match';
  cardsOpen[1].className += ' match';
}

/* --------------- Removing classes from cards ---------------- */

function removeClass() {
  setTimeout(function() {
    cardsOpen[0].className = 'card';
    cardsOpen[1].className = 'card';
    removeCardsFromTempArray();
  }, 800);
}

/* Adding .dismatch when cards don't match and turning them back */

function dismatchCard() {
  setTimeout(function() {
    cardsOpen[0].className += ' dismatch';
    cardsOpen[1].className += ' dismatch';
  }, 500);
  removeClass();
}

/* --------------- Check if the two cards match -------------- */

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

/* -------------------- Main game function ------------------- */

function game() {
  cardDeck.addEventListener('click', function(e){
    card = e.target;

    if (card.className === 'card open show'){
      return; // disable clicking the same card twice

    } else if (card.className === 'card' && cardNumber < 2) {
      openCard(); // shows the card
      addCardsToTempArray(); // adds cards to open cards array
      if (cardNumber === 2) {
        checkMatch(); // check if the two cards match
        moves++; // increase the moves
        displayMoves(); // update the current number of used moves
        removeStars();
        }
      toggleModal(); // toggles the modal if the game is finished
      } else {
        return;
    }
 });
}

/* ------------------- MOVES and STARS BAR ------------------- */

/* ------------------- Show moves function ------------------- */

let movesDisplay = document.querySelectorAll('.moves');

function displayMoves() {
  for (let m = 0; m < moves; m++) {
    if (moves === 1) {
      movesDisplay[0].textContent = moves + ' Move.'; // targeting the .moves class within the top bar when the game is played
    } else {
      movesDisplay[0].textContent = moves + ' Moves.';
      movesDisplay[1].textContent = moves + ' Moves'; // targeting the .moves class within the modal
    }
  }
}
/* ------------------- Reset moves to 0 ---------------------- */

function resetDisplayMoves() {
  movesDisplay[0].textContent = '0 Moves.';
  movesDisplay[1].textContent = '0 Moves'
}

/* -------------------- Star ranking function ---------------- */

let star = document.querySelectorAll(".star")

function removeStars() {
if (moves > 10 && moves <= 16) {
    star[0].setAttribute('style', 'visibility: hidden'); // shows 2 stars in the main bar
    star[5].setAttribute('style', 'visibility: hidden'); // show 2 stars in the modal
  } else if (moves > 16) {
    star[0].setAttribute('style', 'visibility: hidden'); // shows 1 star in the main bar
    star[1].setAttribute('style', 'visibility: hidden');
    star[4].setAttribute('style', 'visibility: hidden'); // show 1 star in the modal
    star[5].setAttribute('style', 'visibility: hidden');
  }
}

/* ------------------ Reset stars to show all 3 ------------- */

function showAllStars() {
  star[0].removeAttribute('style');
  star[1].removeAttribute('style');
  star[4].removeAttribute('style');
  star[5].removeAttribute('style');
}

/* ------------------------- MODAL ------------------------- */

/* ---------------------- Modal pop-up --------------------- */

const modal = document.getElementById('modal');

function toggleModal() {
  if (cardsMatched === 8) {
    setTimeout(function() {
      modal.classList.toggle('hidden');
    }, 500);
  }
}

/* --------------- Switch off modal function -------------- */

function switchOffModal() {
  modal.className = 'hidden';
}

/* ---------------- Modal buttons functions --------------- */

const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');

yesButton.addEventListener('click', reset);
noButton.addEventListener('click', switchOffModal);

/* ----------------- START & RESET GAME ------------------- */

/*------------------ Start Game function ------------------ */

document.addEventListener('DOMContentLoaded', startGame, false);

function startGame() {
  makeList(); // puts shuffled cards on the table
  game(); // holds main game functionality
}

/* -------------------- Reset the game -------------------- */

function reset() {
  removeCards(); // removes cards from the table
  moves = 0; // resets the moves
  cardsMatched = 0; // resets the matched cards number
  resetDisplayMoves(); // resets the moves display to 0
  showAllStars(); // shows 3 stars
  switchOffModal(); // hides the modal pop-up
  startGame(); // starts new game
}

/* ------------- Restart Buttons functionality ----------- */

function restartGame() {
  let resetGame = document.querySelector('.restart');
  resetGame.addEventListener('click', reset);
}
restartGame();

/* ------------------------------------------------------- */
