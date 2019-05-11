var price = Math.floor(Math.random() * 100) + 1;
console.log('working')

var value = Math.floor(Math.random() * 100) + 1;
var btn = document.querySelector("button");
var newGame = document.querySelector("#reset");
var result = document.querySelector("#lowOrHi");
var guess = document.querySelector("#guessField");

btn.addEventListener("click", checker);
newGame.addEventListener("click", randomize)

function reset(){
}

function checker() {
  if (guess.value > value) {
    result.textContent = "Too High";
  } else if (guess.value < value) {
    result.textContent = "Too Low";
  } else if (guess.value == value) {
    result.textContent = "Winner";
  }
}

function randomize(){
    value = Math.floor(Math.random() * 100) + 1;
    guess.value = '';
    result.innerText = '';
}