// retriving parts of the quiz layout to be called on later

const questionsBox = document.getElementById("question-box");
const answerBox = document.getElementsByClassName("answer-box");

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
let currentQuestion1 = {};
let currentQuestion2 = {};
let currentQuestion3 = {};
let currentQuestion4 = {};
let questionNumber = 0;
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

var levelTwoQuestions = [
  {
    question:
      "The song Free Bird was performed by which Florida based music group",
    a: "KC and The Sunshine Band",
    b: "The Allman Brothers",
    c: "Lynyrd Skynyrd",
    d: "Tom Petty and the Heartbreakers",
    correctAnswer: "c",
  },
];

// Level 3 Questions

var levelThreeQuestions = [
  {
    question:
      "The song Land of Confusion was on the Genesis record 'Invisible Touch', but which metal group covered the song in 2005",
    a: "Avenged Sevenfold",
    b: "Drowning Pool",
    c: "Slipknot",
    d: "Disturbed",
    correctAnswer: "d",
  },
];

// Level 4 Questions

var levelFourQuestions = [
  {
    question:
      "The song 'I Don't Want To Set The World On Fire' was written in 1938, but which artists rendition of the song has become synonmus with the popular gaming franchise, Fallout",
    a: "Vera Lynn",
    b: "Harlan Leonard",
    c: "Horace Hiedt",
    d: "The Ink Spots",
    correctAnswer: "d",
  },
];

// Select Random Question and display

function displayQuestion() {
  const randomLevelOne = Math.floor(Math.random() * levelOneQuestions.length);
  const randomLevelTwo = Math.floor(Math.random() * levelTwoQuestions.length);
  const randomLevelThree = Math.floor(Math.random() * levelThreeQuestions.length);
  const randomLevelFour = Math.floor(Math.random() * levelFourQuestions.length);

  currentQuestion1 = levelOneQuestions[randomLevelOne];
  currentQuestion2 = levelTwoQuestions[randomLevelTwo];
  currentQuestion3 = levelThreeQuestions[randomLevelThree];
  currentQuestion4 = levelFourQuestions[randomLevelFour];

  if (userScore <= 5) {
    questionsBox.innerHTML = currentQuestion1.question;
  } else if (userScore <= 10) {
    questionsBox.innerHTML = currentQuestion2.question;
  } else if (userScore <= 15) {
    questionsBox.innerHTML = currentQuestion3.question;
  } else if (userScore <= 20) {
    questionsBox.innerHTML = currentQuestion4.question;
  }
}

// User score



// function for starting the game

function startGame() {}
