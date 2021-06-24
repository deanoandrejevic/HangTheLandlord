// retriving parts of the quiz layout to be called on later

let questionsText = document.getElementById("question-text");
let answerText = Array.from(document.getElementsByClassName("answer-text"));

// function to toggle between showing rules and hiding rules

document.getElementById("rules-button").addEventListener("click", function showRules(event) {
  var ruleDiv = document.getElementById("game-rules");
  var gameDiv = document.getElementById("game-layout");

  if (ruleDiv.style.display == "none") {
    ruleDiv.style.display = "block";
    gameDiv.style.display = "none";
  } else {
    ruleDiv.style.display = "none";
    gameDiv.style.display = "block";
  }
});

// Varibles to be used throughout

let userScore = 0;
let currentQuestion ={};
let questionNumber = 0;
let avalibleQuestions = []
let acceptingAnswers = false;

const maxQuestions = 20;

// Questions for the quiz
let questions = [
  {
    question:
      "What former disney channel star recently released the song Good 4 U?",
    choice1: "Olivia Rodrigo",
    choice2: "Selena Gomez",
    choice3: "Demi Lovato",
    choice4: "Vanessa Hudgens",
    correctAnswer: 1,
  },
  {
    question:
      "What red haired sensation has announced he will be a sponsor for Ipswich town football club in the 21/22 season?",
    choice1: "Hayley Williams",
    choice2: "Florence Welsh",
    choice3: "Ed Sheeran",
    choice4: "Elly Jackson",
    correctAnswer: 3,
  },
  {
    question:
      "In 2020 Dua Lipa released her second studio album, what is the name of that album?",
    choice1: "Past Nostalgia",
    choice2: "Future Nostalgia",
    choice3: "Present Nostalgia",
    choice4: "Nostalgic Past",
    correctAnswer: 2,
  },
  {
    question:
      "Harry Styles took the music and TikTok world by storm with the song Watermelon….",
    choice1: "Fruit",
    choice2: "Juice",
    choice3: "Honey",
    choice4: "Sugar",
    correctAnswer: 4,
  },
  {
    question:
      "On 31st October 1975, british rock group Queen released what is regarded as one of the best songs ever created but in 2018 what biographical film took on the same name?",
    choice1: "Radio Ga Ga",
    choice2: "The Show Must Go On",
    choice3: "Boheimem Rhapsody",
    choice4: "We Will Rock You",
    correctAnswer: 3,
  },
  {
    question: "Ariana Grande recently tied the knot with who?",
    choice1: "Dalton Gomez",
    choice2: "Pete Davidson",
    choice3: "Ricky Alvarez",
    choice4: "Nathan Sykes",
    correctAnswer: 1,
  },
  {
    question: "In 2010 Wiz Kalifa released the famous song 'Black and ....'",
    choice1: "Gold",
    choice2: "Red",
    choice3: "Green",
    choice4: "Yellow",
    correctAnswer: 4,
  },
  {
    question:
      "Finish the lyric from the Billie Ellish song Bad Guy 'I'm the bad guy, ....'",
    choice1: "What!",
    choice2: "Duh!",
    choice3: "Huh!",
    choice4: "Yes!",
    correctAnswer: 2,
  },
  {
    question: "Legendary rock group, The Beatles were from which English city",
    choice1: "Manchester",
    choice2: "Liverpool",
    choice3: "Birmingham",
    choice4: "Newcastle",
    correctAnswer: 2,
  },
  {
    question:
      "Michael Jacksons, Thriller, is still the best selling album of all time, but how long did it chart at number 1 on the billboards",
    choice1: "50 weeks",
    choice2: "37 weeks",
    choice3: "20 weeks",
    choice4: "18 weeks",
    correctAnswer: 2,
  },
  {
    question: 'Complete the famous Eagles song title, "Hotel ...."',
    choice1: "California",
    choice2: "Michigan",
    choice3: "Washington",
    choice4: "Florida",
    correctAnswer: 1,
  },

  {
    question:
      "The song Free Bird was performed by which Florida based music group",
    choice1: "KC and The Sunshine Band",
    choice2: "The Allman Brothers",
    choice3: "Lynyrd Skynyrd",
    choice4: "Tom Petty and the Heartbreakers",
    correctAnswer: 3,
  },
  {
    question:
      "Hans Zimmer is one of the most recognizable composers of all time, but with which film did he win an oscar?",
    choice1: "Inception",
    choice2: "The Lion King",
    choice3: "The Dark Knight",
    choice4: "Gladiator",
    correctAnswer: 2,
  },
  {
    question: "Who is drummer for the pop-punk band blink-182?",
    choice1: "Chad Smith",
    choice2: "Mike Portney",
    choice3: "Dave Grohl",
    choice4: "Travis Barker",
    correctAnswer: 4,
  },
  {
    question: "Metallica released which colored album in 1991",
    choice1: "Black",
    choice2: "Red",
    choice3: "Yellow",
    choice4: "Green",
    correctAnswer: 1,
  },
  {
    question:
      "Walk this way was a hit song from rock group Aerosmith in 1975 but which hip/hop group re-released the song with Aerosmith in 1986",
    choice1: "N.W.A",
    choice2: "A Tribe Called Quest",
    choice3: "Public Enemy",
    choice4: "Run-DMC",
    correctAnswer: 4,
  },
  {
    question: "Who was th lead singer of the punk group, 'Sex Pistols'?",
    choice1: "Paul Weller",
    choice2: "Iggy Pop",
    choice3: "Johnny Rotten",
    choice4: "Joey Ramone",
    correctAnswer: 3,
  },

  {
    question:
      "The song Land of Confusion was on the Genesis record 'Invisible Touch', but which metal group covered the song in 2005",
    choice1: "Avenged Sevenfold",
    choice2: "Drowning Pool",
    choice3: "Slipknot",
    choice4: "Disturbed",
    correctAnswer: 4,
  },
  {
    question: "What brand did Kanye West first release his Yeezy Line with?",
    choice1: "Adidas",
    choice2: "Nike",
    choice3: "New Balance",
    choice4: "Asics",
    correctAnswer: 2,
  },

  {
    question:
      "The song 'I Don't Want To Set The World On Fire' was written in 1938, but which artists rendition of the song has become synonmus with the popular gaming franchise, Fallout",
    choice1: "Vera Lynn",
    choice2: "Harlan Leonard",
    choice3: "Horace Hiedt",
    choice4: "The Ink Spots",
    correctAnswer: 4,
  },
  {
    question: "Who opened Live Aid?",
    choice1: "David Bowie",
    choice2: "Status Quo",
    choice3: "Phil Collins",
    choice4: "The Boomtown Rats",
    correctAnswer: 2,
  },
  {
    question:
      "Who is the only musician ever to have been awarded the Nobel prize for literature?",
    choice1: "Bob Dylan",
    choice2: "Bob Geldof",
    choice3: "Jimi Hendrix",
    choice4: "Paul Mcartney",
    correctAnswer: 1,
  },
];

// function for starting the game

document.getElementById("start-button").addEventListener("click", function startGame() {
  questionNumber = 0;
  avalibleQuestions = [...questions]
  userScore = 0;
  displayQuestion();
});



// Select Random Question and display

function displayQuestion() {

if (questionNumber >= maxQuestions){
  return endGame()
}

  questionNumber++;

  const randomQuestion = Math.floor(Math.random() * avalibleQuestions.length);
  

  currentQuestion = avalibleQuestions[randomQuestion]
    questionsText.innerHTML = currentQuestion.question;
  

  answerText.forEach((choice) => {
    const number = choice.dataset["number"]
      choice.innerHTML = currentQuestion["choice" + number];
  });
 
  avalibleQuestions.splice(randomQuestion, 1)
  acceptingAnswers = true;
};

// check answers with an assigned data set 

answerText.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply = "incorrect-answer";

    if (selectedAnswer == currentQuestion.correctAnswer) {
      classToApply = "correct-answer"
      selectedChoice.parentElement.classList.add(classToApply)
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        displayQuestion()
      }, 1000)
      userScore++
    } else {
      classToApply = "incorrect-answer"
      selectedChoice.parentElement.classList.add(classToApply)
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        endGame()
      }, 1000)
    }

     
  });
});

function endGame() {

if (userScore == 20){
  questionsText.innerHTML = `Wow! You really are a music god! Well Done`
} else {
  questionsText.innerHTML = `Awwww unlucky, you lost! Your score is ${userScore}`;
  
}
}