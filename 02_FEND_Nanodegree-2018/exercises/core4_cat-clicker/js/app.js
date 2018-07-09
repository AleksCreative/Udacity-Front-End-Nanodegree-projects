const catPicture = document.getElementById('cat-picture');
const clickCounter = document.getElementById('click-count');
const catName = document.getElementsByClassName('cat-name');
const catList = document.getElementById('cat-list');

function Cat(name, clicks, picture) {
  this.name = name;
  this.clicks = clicks;
  this.picture = function(picture) {
    catPicture.innerHTML = '<img src="img/"' + picture + '>'
  };
  this.changeOpacity = function() {
    this.classList.toggle('change-opacity');
    setTimeout(function() {
      this.classList.toggle('change-opacity')
    }, 500);
  }
  this.updateClicks = function() {
    for (let m = 0; m < this.clicks; m++) {
      if (cat01.clicks === 1) {
        clickCounter[0].textContent = this.clicks + ' time';
      } else {
        clickCounter[0].textContent = this.clicks + ' times';
      }
    }
  }
  this.catClick = function() {
    catPicture.addEventListener('click', updateClicks);
  }
}


let cat01 = new Cat('Kiki', 0, 'cat.jpg');
let cat02 = new Cat('Pussy', 0);
let cat03 = new Cat('Blacky', 0);
let cat04 = new Cat('Boo', 0);
let cat05 = new Cat('Slinki', 0);

let catArray = [cat01, cat02, cat03, cat04, cat05];
let listItem = ' ';
let catSingle = catList.children;


function makeList() {
  for (let i = 0; i < catArray.length; i++) {
  listItem = document.createElement('li');
  catList.appendChild(listItem);
  }

  let listItems = document.querySelectorAll('li')
  for (let j = 0; j < catArray.length; j++) {
    listItems[j].textContent = 'This is ' + catArray[j].name;
  }
}
makeList();

function clickCat() {
  catList.addEventListener('click', function(e) {
    catSingle = e.target;
    generateCat();
  });
}

function generateCat() {
  for (let k = 0; k < catArray.length; k++) {
    catName.textContent = 'My name is ' + catArray[k].name;
  }
}
clickCat();
