// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    // reset position of the enemy when reaches the end of canvas
    if (this.x > 510) {
        this.x = -60;
        this.speed = 100 + Math.floor(Math.random() * 40);
    }

    if (player.y < this.y + 70 &&
        player.y + 70 > this.y &&
        player.x + 80 > this.x &&
        player.x < this.x + 80) {
        player.points = 0;
        player.y = 400;
        player.x = 200;
      }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x, y, points){
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
  this.points = points;
};

// This class requires an update(),
Player.prototype.update = function() {

  if (this.x > 400) {
    this.x = 400;
  } if (this.x < 0) {
    this.x = 0;
  } if (this.y > 400) {
    this.y = 400;
    // player go backs to start when reaches the water, and gets 10 points score.
  } if (this.y < -50) {
    this.y = 400;
    this.x = 200;
    this.points += 10;
  }
  // points update in the score panel
  pointNumber.textContent = player.points;
};
// render() and
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// a handleInput() method.
Player.prototype.handleInput = function(keyPress) {
  switch (keyPress) {
    case 'left': this.x -=50;
    break;
    case 'right': this.x +=50;
    break;
    case 'up': this.y -=50;
    break;
    case 'down': this.y +=50;
    break;
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var enemy1 = new Enemy(-50, 60, 70);
var enemy2 = new Enemy(-20, 145, 100);
var enemy3 = new Enemy(-100, 225, 60);
var enemy4 = new Enemy(-310, 145, 100);

var allEnemies = [enemy1, enemy2, enemy3, enemy4];

// Place the player object in a variable called player
var player = new Player(200,400, 0);

// Score panel
var pointNumber = document.getElementById('points');


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
