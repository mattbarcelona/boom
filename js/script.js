// HTML elements
let userInputField = document.getElementById("userInput");
let countdownDisplay = document.getElementById("countdown");
let resultDisplay = document.getElementById("result");
let restartButton = document.getElementById("restart");

// Save user input in localStorage
userInputField.addEventListener("input", (event) => {
  const inputValue = parseInt(event.target.value);
  if (inputValue >= 1 && inputValue <= 3) {
    localStorage.setItem("numberInput", inputValue);
    console.log("Number input saved:", inputValue);
  } else {
    console.log("Invalid input. Enter a number between 1 and 3.");
  }
});

// Start countdown
function startCountdown() {
  let count = 5;
  const interval = setInterval(() => {
    countdownDisplay.textContent = `Cuenta atrás: ${count}`;
    count--;

    if (count < 0) {
      clearInterval(interval);
      countdownDisplay.textContent = "¡Se acabó!";
      startGame(); // Start the game after countdown
    }
  }, 1000);
}

// Start game
function startGame() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log("Random Number:", randomNumber);

  const userInput = parseInt(localStorage.getItem("numberInput"));
  console.log("User Input:", userInput);

  if (userInput === randomNumber) {
    resultDisplay.innerHTML = `<p><strong>¡Enhorabuena! ¡Has salvado el mundo!</strong></p>
    <p>Tu numero es el ${userInput}, el numero de la maquina era el ${randomNumber}.</p>`;
  } else {
    resultDisplay.innerHTML = `<p><strong>¡La bomba ha estallado!</strong></p><p>Tu numero es el ${userInput}, el numero de la maquina era el ${randomNumber}.</p>`;
  }
}

// Restart game
restartButton.addEventListener("click", () => {
  localStorage.removeItem("numberInput");
  location.reload(); // Reload the page to restart
});

// Initialize the game
startCountdown();
