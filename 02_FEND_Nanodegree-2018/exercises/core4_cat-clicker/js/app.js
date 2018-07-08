const catPicture = document.getElementById('cat-picture');
let clickNumber = 0;
const clickCounter = document.getElementById('click-count');

clickCounter.textContent = clickNumber + ' times';

function updateClicks() {
  clickNumber++;
  catPicture.classList.toggle('change-opacity');
  setTimeout(function() {
    catPicture.classList.toggle('change-opacity');
  }, 500);

  for (let m = 0; m < clickNumber; m++) {
    if (clickNumber === 1) {
      clickCounter.textContent = clickNumber + ' time';
    } else {
      clickCounter.textContent = clickNumber + ' times';
    }
  }
}

function clickCat() {
  catPicture.addEventListener('click', updateClicks);
}

clickCat();
