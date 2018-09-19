var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
_.each(alphabet, function(letter) {
});

// Array of topics
// select a category
// word hint
// selected word
//guess
// more guess options
// lives
// count guesses
// number of spaces in the word
var categories;
var chosenCategory;
var getHint;
var word;
var guess;
var guesses = [ ];
var lives;
var counter;
var space;

// Elements
var showLives = document.getElementById("mylives");
var showCategory = document.getElementById("showcatagory");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");

// Alphabet 
var buttons = function () {
  myButtons = document.getElementById("buttons");
  letters = document.createElement('ul');

  for(var i = 0; i < alphabet.length; i++) {
  letters.id = 'alphabet';
  list = document.createElement('li');
  list.id = 'letter';
  
  }
}
