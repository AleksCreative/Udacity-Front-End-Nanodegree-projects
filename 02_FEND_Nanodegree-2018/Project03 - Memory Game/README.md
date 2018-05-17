# Aleks' Memory Game Project for Udacity FEND

A complete browser-based card matching game made with HTML, CSS and JavaScript.
You can [Play it Here](https://alekscreative.github.io/Udacity-Front-End-Nanodegree-projects/02_FEND_Nanodegree-2018/Project03%20-%20Memory%20Game/index.html) if you wish!

## Table of Contents

* [Scope of the project](#scope-of-the-project)
* [How to play](#how-to-play)
* [Contributing](#contributing)

## Scope of the project

### Game Behaviour

#### Memory Game Logic
The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

#### Congratulations Popup
When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.

#### Restart Button
A restart button allows the player to reset the game board, the timer, and the star rating.

#### Star Rating
The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. After a few more moves, it should change to a even lower star rating (down to 1).

#### Timer
When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.

#### Move Counter
Game displays the current number of moves a user has made.

### Interface Design

#### Styling
Application uses CSS to style components for the game.

#### Usability
All application components are usable across modern desktop, tablet, and phone browsers.

### Documentation

#### README
A README file is included detailing the game and all dependencies.

#### Comments
Comments are present and effectively explain longer code procedure when necessary.

#### Code Quality
Code is formatted with consistent, logical, and easy-to-read formatting as described in the [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html).

## How to play

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

Each turn:

- The player flips one card over to reveal its underlying symbol.
- The player then turns over a second card, trying to find the corresponding card with the same symbol.
- If the cards match, both cards stay flipped over.
- If the cards do not match, both cards are flipped face down.
- The game ends once all cards have been correctly matched.

## Contributing

This is my personal project made for Udacity FEND course. Feel free to fork it, but I will not except any pull requests.
