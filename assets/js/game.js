// retriving parts of the quiz layout to be called on later

const questionsText = document.getElementById("question-text");
const answerText = Array.from(document.getElementsByClassName("answer-text"));

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
let currentQuestionOne = {};
let currentQuestionTwo = {};
let currentQuestionThree = {};
let currentQuestionFour = {};
let questionNumber = 0;
let avalibleQuestions = [];

// Questions for the quiz
// Level 1 Questions
var questionsLvl1 = [
  {
    question:
      "What former disney channel star recently released the song Good 4 U?",
    choiceA: "Olivia Rodiguiz",
    choiceB: "Selena Gomez",
    choiceC: "Demi Lovato",
    choiceD: "Vanessa Hudgens",
    correctAnswer: "choiceA",
  },
  {
    question:
      "What red haired sensation has announced he will be a sponsor for Ipswich town football club in the 21/22 season?",
    choiceA: "Hayley Williams",
    choiceB: "Florence Welsh",
    choiceC: "Ed Sheeran",
    choiceD: "Elly Jackson",
    correctAnswer: "choiceC",
  },
  {
    question:
      "In 2020 Dua Lipa released her second studio album, what is the name of that album?",
    choiceA: "Past Nostalgia",
    choiceB: "Future Nostalgia",
    choiceC: "Present Nostalgia",
    choiceD: "Nostalgic Past",
    correctAnswer: "choiceB",
  },
  {
    question:
      "Harry Styles took the music and TikTok world by storm with the song Watermelon….",
    choiceA: "Fruit",
    choiceB: "Juice",
    choiceC: "Honey",
    choiceD: "Sugar",
    correctAnswer: "choiceD",
  },
  {
    question:
      "On 31st October 1975, british rock group Queen released what is regarded as one of the best songs ever created but in 2018 what biographical film took on the same name?",
    choiceA: "Radio Ga Ga",
    choiceB: "The Show Must Go On",
    choiceC: "Boheimem Rhapsody",
    choiceD: "We Will Rock You",
    correctAnswer: "choiceC",
  },
  {
    question: "Ariana Grande recently tied the knot with who?",
    choiceA: "Dalton Gomez",
    choiceB: "Pete Davidson",
    choiceC: "Ricky Alvarez",
    choiceD: "Nathan Sykes",
    correctAnswer: "choiceA",
  },
  {
    question: "In 2010 Wiz Kalifa released the famous song 'Black and ....'",
    choiceA: "Gold",
    choiceB: "Red",
    choiceC: "Green",
    choiceD: "Yellow",
    correctAnswer: "choiceD",
  },
  {
    question:
      "Finish the lyric from the Billie Ellish song Bad Guy 'I'm the bad guy, ....'",
    choiceA: "What!",
    choiceB: "Duh!",
    choiceC: "Huh!",
    choiceD: "Yes!",
    correctAnswer: "choiceB",
  },
  {
    question: "Legendary rock group, The Beatles were from which English city",
    choiceA: "Manchester",
    choiceB: "Liverpool",
    choiceC: "Birmingham",
    choiceD: "Newcastle",
    correctAnswer: "choiceB",
  },
  {
    question:
      "Michael Jacksons, Thriller, is still the best selling album of all time, but how long did it chart at number 1 on the billboards",
    choiceA: "50 weeks",
    choiceB: "37 weeks",
    choiceC: "20 weeks",
    choiceD: "18 weeks",
    correctAnswer: "choiceB",
  },
  {
    question: 'Complete the famous Eagles song title, "Hotel ...."',
    choiceA: "California",
    choiceB: "Michigan",
    choiceC: "Washington",
    choiceD: "Florida",
    correctAnswer: "choiceA",
  },
];
// Level 2 Questions
var questionsLvl2 = [
  {
    question:
      "The song Free Bird was performed by which Florida based music group",
    choiceA: "KC and The Sunshine Band",
    choiceB: "The Allman Brothers",
    choiceC: "Lynyrd Skynyrd",
    choiceD: "Tom Petty and the Heartbreakers",
    correctAnswer: "choiceC",
  },
  {
    question: "Hans Zimmer is one of the most recognizable composers of all time, but with which film did he win an oscar?",
    choiceA: "Inception",
    choiceB: "The Lion King",
    choiceC: "The Dark Knight",
    choiceD: "Gladiator",
    correctAnswer: "choiceB",
  },
  {
    question: "",
    choiceA: "",
    choiceB: "",
    choiceC: "",
    choiceD: "",
    correctAnswer: "",
  },
  {
    question: "",
    choiceA: "",
    choiceB: "",
    choiceC: "",
    choiceD: "",
    correctAnswer: "",
  },
  {
  question: '',
  choiceA: '',
  choiceB: '',
  choiceC: '',
  choiceD: '',
  correctAnswer: '',
  },
  {
  question: '',
  choiceA: '',
  choiceB: '',
  choiceC: '',
  choiceD: '',
  correctAnswer: '',
  },
];
// Level 3 Questions
var questionsLvl3 = [
  {
    question:
      "The song Land of Confusion was on the Genesis record 'Invisible Touch', but which metal group covered the song in 2005",
    choiceA: "Avenged Sevenfold",
    choiceB: "Drowning Pool",
    choiceC: "Slipknot",
    choiceD: "Disturbed",
    correctAnswer: "choiceD",
  },
];
// Level 4 Questions
var questionsLvl4 = [
  {
    question:
      "The song 'I Don't Want To Set The World On Fire' was written in 1938, but which artists rendition of the song has become synonmus with the popular gaming franchise, Fallout",
    choiceA: "Vera Lynn",
    choiceB: "Harlan Leonard",
    choiceC: "Horace Hiedt",
    choiceD: "The Ink Spots",
    correctAnswer: "choiceD",
  },
];

// Select Random Question and display

function displayQuestion() {
  const lvlOne = Math.floor(Math.random() * questionsLvl1.length);
  const lvlTwo = Math.floor(Math.random() * questionsLvl2.length);
  const lvlThree = Math.floor(Math.random() * questionsLvl3.length);
  const lvlFour = Math.floor(Math.random() * questionsLvl4.length);

  currentQuestionOne = avalibleQuestions[lvlOne];
  currentQuestionTwo = avalibleQuestions[lvlTwo];
  currentQuestionThree = avalibleQuestions[lvlThree];
  currentQuestionFour = avalibleQuestions[lvlFour];

  if (userScore < 5) {
    questionsText.innerText = currentQuestionOne.question;
  } else if (userScore > 5) {
    questionsText.innerText = currentQuestionTwo.question;
  } else if (userScore > 10) {
    questionsText.innerText = currentQuestionThree.question;
  } else if (userScore > 15) {
    questionsText.innerText = currentQuestionFour.question;
  }

  answerText.forEach((choice) => {
    var anwserChoice = choice.dataset["letter"];
    if (userScore < 5) {
      choice.innerText = currentQuestionOne["choice" + anwserChoice];
    } else if (userScore > 5) {
      choice.innerText = currentQuestionTwo["choice" + anwserChoice];
    } else if (userScore > 10) {
      choice.innerText = currentQuestionThree["choice" + anwserChoice];
    } else if (userScore > 15) {
      choice.innerText = currentQuestionFour["choice" + anwserChoice];
    }
  });
}

// Check answer and increment score

// function for starting the game

function startGame() {
  avalibleQuestions = [...questionsLvl1, ...questionsLvl2, ...questionsLvl3, ...questionsLvl4];
  userScore = 0;
  displayQuestion();
}

startGame();
