const catPicture = document.getElementsByClassName('cat-picture');
const clickCounter = document.getElementsByClassName('click-count');
const catName = document.getElementsByClassName('cat-name')

function Cat(name, clicks) {
  this.name = name;
  this.clicks = clicks;
  this.changeOpacity = function() {
    this.classList.toggle('change-opacity');
    setTimeout(function() {
      this.classList.toggle('change-opacity')
    }, 500);
  }
  this.updateClicks = function() {
    this.clicks++;
  }
}

let cat01 = new Cat('Kiki', 0);
let cat02 = new Cat('Slinki', 0);

catName[0].textContent = cat01.name;
catName[1].textContent = cat02.name;

/**function updateClicks() {
  catPicture[0].classList.toggle('change-opacity');
  catPicture[1].classList.toggle('change-opacity');
  setTimeout(function() {
    catPicture[0].classList.toggle('change-opacity');
    catPicture[1].classList.toggle('change-opacity');
  }, 500);

  for (let m = 0; m < cat01.clicks; m++) {
    if (cat01.clicks === 1) {
      clickCounter[0].textContent = cat01.clicks + ' time';
    } else {
      clickCounter[0].textContent = cat01.clicks + ' times';
    }
  }
} */



function clickCat() {
  catPicture[0].addEventListener('click', cat01.updateClicks);
}
function clickCat2() {
  catPicture[1].addEventListener('click', cat02.updateClicks);
}

if (cat01.clicks === 1) {
  clickCounter[0].textContent = cat01.clicks + ' time';
} else {
  clickCounter[0].textContent = cat01.clicks + ' times';
}

clickCat();
clickCat2();
