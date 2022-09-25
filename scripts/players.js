import { nameLeft, nameRight } from "./score.js";

const divOne = document.querySelector("#player-one");
const divTwo = document.querySelector("#player-two");
const inputOne = document.querySelector("#player-one input");
const inputTwo = document.querySelector("#player-two input");
const info = document.querySelector("#info");
const message = document.querySelector("#message");

if (storedPlayerOne && storedPlayerTwo) {
  playerOne = storedPlayerOne;
  playerTwo = storedPlayerTwo;
  message.textContent = playerOne + " is playing";
  divOne.style.display = "none";
  divTwo.style.display = "none";
} else if (storedPlayerOne) {
  playerOne = storedPlayerOne;
  divOne.style.display = "none";
  info.style.display = "none";
  inputTwo.focus();
} else {
  divTwo.style.display = "none";
  info.style.display = "none";
}

export function swapNames() {
  [playerOne, playerTwo] = [playerTwo, playerOne];
}

inputOne.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    playerOne = inputOne.value.trim();
    if (playerOne) {
      localStorage.setItem("playerOne", playerOne);
      inputOne.value = "";
      divOne.style.display = "none";
      divTwo.style.display = "block";
      nameLeft.textContent = playerOne;
      inputTwo.focus();
    } else alert("Please provide your name.");
  }
});
inputTwo.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    playerTwo = inputTwo.value.trim();
    if (playerTwo === playerOne)
      alert(`Hey ${playerOne}, this is a two-player game.`);
    else if (playerTwo) {
      localStorage.setItem("playerTwo", playerTwo);
      inputTwo.value = "";
      divTwo.style.display = "none";
      info.style.display = "grid";
      nameRight.textContent = playerTwo;
      message.textContent = playerOne + " is playing";
    } else alert("Please provide your name.");
  }
});

message.addEventListener("click", () => {
  const prompt = "Do you want to change player name?\n\n";
  if (confirm(prompt) === true) {
    localStorage.clear();
    location.reload();
  }
});
