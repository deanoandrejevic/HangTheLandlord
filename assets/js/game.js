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
let currentQuestion = {};
let questionNumber = 0;
let avalibleQuestions1 = [];
let avalibleQuestions2 = [];
let avalibleQuestions3 = [];
let avalibleQuestions4 = [];
let acceptingAnswers = false;

const max_questions = 20;

// Questions for the quiz
var questionsLvl1 = [
  {
    question:
      "What former disney channel star recently released the song Good 4 U?",
    choiceA: "Olivia Rodiguiz",
    choiceB: "Selena Gomez",
    choiceC: "Demi Lovato",
    choiceD: "Vanessa Hudgens",
    correctAnswer: "A",
  },
  {
    question:
      "What red haired sensation has announced he will be a sponsor for Ipswich town football club in the 21/22 season?",
    choiceA: "Hayley Williams",
    choiceB: "Florence Welsh",
    choiceC: "Ed Sheeran",
    choiceD: "Elly Jackson",
    correctAnswer: "C",
  },
  {
    question:
      "In 2020 Dua Lipa released her second studio album, what is the name of that album?",
    choiceA: "Past Nostalgia",
    choiceB: "Future Nostalgia",
    choiceC: "Present Nostalgia",
    choiceD: "Nostalgic Past",
    correctAnswer: "B",
  },
  {
    question:
      "Harry Styles took the music and TikTok world by storm with the song Watermelon….",
    choiceA: "Fruit",
    choiceB: "Juice",
    choiceC: "Honey",
    choiceD: "Sugar",
    correctAnswer: "D",
  },
  {
    question:
      "On 31st October 1975, british rock group Queen released what is regarded as one of the best songs ever created but in 2018 what biographical film took on the same name?",
    choiceA: "Radio Ga Ga",
    choiceB: "The Show Must Go On",
    choiceC: "Boheimem Rhapsody",
    choiceD: "We Will Rock You",
    correctAnswer: "C",
  },
  {
    question: "Ariana Grande recently tied the knot with who?",
    choiceA: "Dalton Gomez",
    choiceB: "Pete Davidson",
    choiceC: "Ricky Alvarez",
    choiceD: "Nathan Sykes",
    correctAnswer: "A",
  },
  {
    question: "In 2010 Wiz Kalifa released the famous song 'Black and ....'",
    choiceA: "Gold",
    choiceB: "Red",
    choiceC: "Green",
    choiceD: "Yellow",
    correctAnswer: "D",
  },
  {
    question:
      "Finish the lyric from the Billie Ellish song Bad Guy 'I'm the bad guy, ....'",
    choiceA: "What!",
    choiceB: "Duh!",
    choiceC: "Huh!",
    choiceD: "Yes!",
    correctAnswer: "B",
  },
  {
    question: "Legendary rock group, The Beatles were from which English city",
    choiceA: "Manchester",
    choiceB: "Liverpool",
    choiceC: "Birmingham",
    choiceD: "Newcastle",
    correctAnswer: "B",
  },
  {
    question:
      "Michael Jacksons, Thriller, is still the best selling album of all time, but how long did it chart at number 1 on the billboards",
    choiceA: "50 weeks",
    choiceB: "37 weeks",
    choiceC: "20 weeks",
    choiceD: "18 weeks",
    correctAnswer: "B",
  },
  {
    question: 'Complete the famous Eagles song title, "Hotel ...."',
    choiceA: "California",
    choiceB: "Michigan",
    choiceC: "Washington",
    choiceD: "Florida",
    correctAnswer: "A",
  },
];
var questionsLvl2 = [
  {
    question:
      "The song Free Bird was performed by which Florida based music group",
    choiceA: "KC and The Sunshine Band",
    choiceB: "The Allman Brothers",
    choiceC: "Lynyrd Skynyrd",
    choiceD: "Tom Petty and the Heartbreakers",
    correctAnswer: "C",
  },
  {
    question:
      "Hans Zimmer is one of the most recognizable composers of all time, but with which film did he win an oscar?",
    choiceA: "Inception",
    choiceB: "The Lion King",
    choiceC: "The Dark Knight",
    choiceD: "Gladiator",
    correctAnswer: "B",
  },
  {
    question: "Who is drummer for the pop-punk band blink-182?",
    choiceA: "Chad Smith",
    choiceB: "Mike Portney",
    choiceC: "Dave Grohl",
    choiceD: "Travis Barker",
    correctAnswer: "D",
  },
  {
    question: "Metallica released which colored album in 1991",
    choiceA: "Black",
    choiceB: "Red",
    choiceC: "Yellow",
    choiceD: "Green",
    correctAnswer: "A",
  },
  {
    question:
      "Walk this way was a hit song from rock group Aerosmith in 1975 but which hip/hop group re-released the song with Aerosmith in 1986",
    choiceA: "N.W.A",
    choiceB: "A Tribe Called Quest",
    choiceC: "Public Enemy",
    choiceD: "Run-DMC",
    correctAnswer: "D",
  },
  {
    question: "Who was th lead singer of the punk group, 'Sex Pistols'?",
    choiceA: "Paul Weller",
    choiceB: "Iggy Pop",
    choiceC: "Johnny Rotten",
    choiceD: "Joey Ramone",
    correctAnswer: "C",
  },
];

var questionsLvl3 = [
  {
    question:
      "The song Land of Confusion was on the Genesis record 'Invisible Touch', but which metal group covered the song in 2005",
    choiceA: "Avenged Sevenfold",
    choiceB: "Drowning Pool",
    choiceC: "Slipknot",
    choiceD: "Disturbed",
    correctAnswer: "D",
  },
  {
    question: "What brand did Kanye West first release his Yeezy Line with?",
    choiceA: "Adidas",
    choiceB: "Nike",
    choiceC: "New Balance",
    choiceD: "Asics",
    correctAnswer: "B",
  },
];
var questionsLvl4 = [
  {
    question:
      "The song 'I Don't Want To Set The World On Fire' was written in 1938, but which artists rendition of the song has become synonmus with the popular gaming franchise, Fallout",
    choiceA: "Vera Lynn",
    choiceB: "Harlan Leonard",
    choiceC: "Horace Hiedt",
    choiceD: "The Ink Spots",
    correctAnswer: "D",
  },
];

// function for starting the game

function startGame() {
  questionNumber = 0;
  avalibleQuestions1 = [...questionsLvl1];
  avalibleQuestions2 = [...questionsLvl2];
  avalibleQuestions3 = [...questionsLvl3];
  avalibleQuestions4 = [...questionsLvl4];
  userScore = 6;
  displayQuestion();
}

// check answers

// Select Random Question and display

function displayQuestion() {
  questionNumber++;

  const lvlOne = Math.floor(Math.random() * questionsLvl1.length);
  const lvlTwo = Math.floor(Math.random() * questionsLvl2.length);
  const lvlThree = Math.floor(Math.random() * questionsLvl3.length);
  const lvlFour = Math.floor(Math.random() * questionsLvl4.length);

  currentQuestionOne = avalibleQuestions1[lvlOne];
  currentQuestionTwo = avalibleQuestions2[lvlTwo];
  currentQuestionThree = avalibleQuestions3[lvlThree];
  currentQuestionFour = avalibleQuestions4[lvlFour];

  if (userScore < 5) {
    questionsText.innerText = currentQuestionOne.question;
  } else if (userScore < 10) {
    questionsText.innerText = currentQuestionTwo.question;
  } else if (userScore < 15) {
    questionsText.innerText = currentQuestionThree.question;
  } else if (userScore < 20) {
    questionsText.innerText = currentQuestionFour.question;
  }

  answerText.forEach((choice) => {
    const anwserChoice = choice.dataset["letter"];
    if (userScore < 5) {
      choice.innerText = currentQuestionOne["choice" + anwserChoice];
    } else if (userScore < 10) {
      choice.innerText = currentQuestionTwo["choice" + anwserChoice];
    } else if (userScore < 15) {
      choice.innerText = currentQuestionThree["choice" + anwserChoice];
    } else if (userScore < 20) {
      choice.innerText = currentQuestionFour["choice" + anwserChoice];
    }
  });

  avalibleQuestions1.splice(lvlOne, 1);
  avalibleQuestions2.splice(lvlTwo, 1);
  avalibleQuestions3.splice(lvlThree, 1);
  avalibleQuestions4.splice(lvlFour, 1);
  acceptingAnswers = true;
}

answerText.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["letter"];

    let classToApply = "incorrect-answer";

    if (selectedAnswer == currentQuestionOne.correctAnswer) {
      classToApply = "correct-answer"
    } else if (selectedAnswer == currentQuestionTwo.correctAnswer) {
      classToApply ="correct-answer" 
    } else if (selectedAnswer == currentQuestionThree.correctAnswer) { 
      classToApply ="correct-answer"
    } else if (selectedAnswer == currentQuestionFour.correctAnswer) {
      classToApply = "correct-answer"
    }

    console.log(classToApply);

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      displayQuestion();
    }, 1000);
  });
});

startGame();
