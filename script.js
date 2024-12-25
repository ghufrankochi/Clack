// script.js
const words = ["apple", "banana", "cherry", "date", "elephant", "frog", "grape", "house"];
let currentWord = "";
let score = 0;

const wordElement = document.getElementById("word");
const inputBox = document.getElementById("input-box");
const startButton = document.getElementById("start-button");
const scoreElement = document.getElementById("score");

// Start game
startButton.addEventListener("click", () => {
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  inputBox.value = "";
  inputBox.disabled = false;
  inputBox.focus();
  nextWord();
});

// Check input
inputBox.addEventListener("input", () => {
  if (inputBox.value === currentWord) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    inputBox.value = "";
    nextWord();
  }
});

// Show next word
function nextWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord = words[randomIndex];
  wordElement.textContent = currentWord;
}