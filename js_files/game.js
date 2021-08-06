const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'example.js'?",
    choice1: "<script href='example.js'>",
    choice2: "<script name='example.js'>",
    choice3: "<script src='example.js'>",
    choice4: "<script file='example.js'>",
    answer: 3
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4
  },
  {
    question: "Which is not a HTML5 tag ?",
    choice1: "<section>",
    choice2: "<article>",
    choice3: "<aside>",
    choice4: "<caption>",
    answer: 4
  },
  {
    question: "Which tag makes a text bold?",
    choice1: "<b>",
    choice2: "<bold>",
    choice3: "<bd>",
    choice4: "None of the above",
    answer: 1
  },
  {
    question: "Which tag makes a superscripted text?",
    choice1: "<su>",
    choice2: "<super>",
    choice3: "<sup>",
    choice4: "<superscript>",
    answer: 3
  },
  {
    question: "Which tag makes a subscripted text ?",
    choice1: "<sub>",
    choice2: "<subscript>",
    choice3: "<sscript>",
    choice4: "None of the above",
    answer: 1
  },
  {
    question: "Which syntax is correct?",
    choice1: "<a href = 'call:+918850593778' target = '_blank'>Call Me</a>",
    choice2: "<a href = 'phone:+918850593778' target = '_blank'>Call Me</a>",
    choice3: "<a href = 'tele:+918850593778' target = '_blank'>Call Me</a>",
    choice4: "<a href = 'tel:+918850593778' target = '_blank'>Call Me</a>",
    answer: 4
  },
  {
    question: "Which syntax is correct?",
    choice1: "<a href = 'mailto:ap0661236@gmail.com' target = '_blank'>Send an email</a>",
    choice2: "<a href = 'email:ap0661236@gmail.com' target = '_blank'>Send an email</a>",
    choice3: "<a href = 'gmailto:ap0661236@gmail.com' target = '_blank'>Send an email</a>",
    choice4: "<a href = 'contact>mailto:ap0661236@gmail.com' target = '_blank'>Send an email</a>",
    answer: 1
  }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("../end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
