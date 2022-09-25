const cells = document.querySelectorAll(".cell");

let playerOne;
let playerTwo;
let pointsLeft = 0;
let pointsRight = 0;

const storedPlayerOne = localStorage.getItem("playerOne");
const storedPlayerTwo = localStorage.getItem("playerTwo");
let wereNamesSwapped = 0;
let isDefaultScoring = 1;
let hasWinner = 0;

let array = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let move = 0;
let history = [
  [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
];
