// function to toggle between showing rules and hiding rules

function showRules(event) {
  var ruleDiv = document.getElementById("game-rules");
  var gameDiv = document.getElementById("game-layout");

  if (ruleDiv.style.display === "none") {
    ruleDiv.style.display = "block";
    gameDiv.style.display = "none";
  } else {
    ruleDiv.style.display = "none";
    gameDiv.style.display = "block";
  }
}

// Varibles to be used throughout

let userScore = 0;
let currentQuestions = {};
let questionCounter = 0;
let levelQuestions = [];


// Questions for the quiz
// Level 1 Questions

var levelOneQuestions = [
  {
    question:
      "What former disney channel star recently released the song Good 4 U?",
    a: "Olivia Rodiguiz",
    b: "Selena Gomez",
    c: "Demi Lavato",
    d: "Vanessa Hudgens",
    correctAnswer: "a",
  },
  {
    question:
      "What red haired sensation has announced he will be a sponsor for Ipswich town football club in the 21/22 season?",
    a: "Hayley Williams",
    b: "Florence Welsh",
    c: "Ed Sheeran",
    d: "Elly Jackson",
    correctAnswer: "c",
  },
];

// Level 2 Questions

// Level 3 Questions

// Level 4 Questions

// Select Random Question and display


// User score

// function for starting the game

function startGame() {}
