import { swapNames } from "./players.js";

export const nameLeft = document.querySelector("#name-left");
export const nameRight = document.querySelector("#name-right");
export const scoreLeft = document.querySelector("#score-left");
export const scoreRight = document.querySelector("#score-right");
const storedScoreLeft = parseInt(localStorage.getItem("scoreLeft"));
const storedScoreRight = parseInt(localStorage.getItem("scoreRight"));

nameLeft.textContent = storedPlayerOne;
nameRight.textContent = storedPlayerTwo;

if (storedScoreLeft) {
  scoreLeft.textContent = storedScoreLeft;
  pointsLeft = storedScoreLeft;
} else scoreLeft.textContent = pointsLeft;

if (storedScoreRight) {
  scoreRight.textContent = storedScoreRight;
  pointsRight = storedScoreRight;
} else scoreRight.textContent = pointsRight;

export function addPoints() {
  if (isDefaultScoring) {
    if (move % 2 === 1) {
      addPointsToLeft();
      swapNames();
      wereNamesSwapped = 1;
      isDefaultScoring = 0;
    } else {
      addPointsToRight();
      wereNamesSwapped = 0;
    }
  } else {
    if (move % 2 === 1) {
      addPointsToRight();
      swapNames();
      wereNamesSwapped = 1;
      isDefaultScoring = 1;
    } else {
      addPointsToLeft();
      wereNamesSwapped = 0;
    }
  }
}
function addPointsToLeft() {
  pointsLeft++;
  scoreLeft.textContent = pointsLeft;
  localStorage.setItem("scoreLeft", pointsLeft);
}
function addPointsToRight() {
  pointsRight++;
  scoreRight.textContent = pointsRight;
  localStorage.setItem("scoreRight", pointsRight);
}

export function deductPoints() {
  checkIfNamesWereSwapped();
  if (isDefaultScoring) {
    if (move % 2 === 0) deductPointsToLeft();
    else deductPointsToRight();
  } else {
    if (move % 2 === 0) deductPointsToRight();
    else deductPointsToLeft();
  }
}
function deductPointsToLeft() {
  pointsLeft--;
  scoreLeft.textContent = pointsLeft;
  localStorage.setItem("scoreLeft", pointsLeft);
}
function deductPointsToRight() {
  pointsRight--;
  scoreRight.textContent = pointsRight;
  localStorage.setItem("scoreRight", pointsRight);
}
function checkIfNamesWereSwapped() {
  if (wereNamesSwapped) {
    swapNames();
    wereNamesSwapped = 0;
    message.textContent = playerOne + " is playing";
    isDefaultScoring = !isDefaultScoring;
  }
}
