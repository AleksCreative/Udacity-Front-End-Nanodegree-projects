/* Model */

const model = {

  currentCat: {},

  /*constructor: function Cat(name, picture, clicks) {
    this.name = name;
    this.picture = picture;
    this.clicks = clicks;
  },*/

  cats: [
    {name: 'Kiki',
    picture: 'img/cat.jpg',
    clicks: 0},

    {name: 'Blacky',
    picture: 'img/cat2.jpg',
    clicks: 0},

    {name: 'Swan',
    picture: 'img/cat3.jpg',
    clicks: 0},

    {name: 'Freya',
    picture:'img/cat4.jpg',
    clicks: 0}
    ]
}

/* Octopus */

const octopus = {

  init: function() {
    model.currentCat = model.cats[0];

    catView.init();
    listView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  addClicks: function() {
    model.currentCat.clicks++;
    catView.render();
  }

};

/* Cat box view */

const catView = {

  init: function() {
    this.catBox = document.getElementById('cat-box');
    this.catName = document.getElementById('cat-name');
    this.catPicture = document.getElementById('cat-picture');
    this.clickCounter = document.getElementById('click-count');

    this.catPicture.addEventListener('click', function() {
      octopus.addClicks();
    });

    this.render();
  },

  render: function() {
    let currentCat = octopus.getCurrentCat();
    this.clickCounter.textContent = currentCat.clicks;
    this.catName.textContent = currentCat.name;
    this.catPicture.src = currentCat.picture;
  }

};

/* Cat list view */

const listView = {

  init: function() {
    this.catList = document.getElementById('cat-list');
    this.render();
  },

  render: function() {

      var cat, elem, i;
      var cats = octopus.getCats();
      this.catList.innerHTML = '';

      for (i = 0; i < cats.length; i++) {
          cat = cats[i];
          elem = document.createElement('li');
          elem.textContent = cat.name;
          elem.addEventListener('click', (function(catCopy) {
              return function() {
                  octopus.setCurrentCat(catCopy);
                  catView.render();
              };
          })(cat));
          this.catList.appendChild(elem);
      }
  }

};

octopus.init();
