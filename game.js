const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
        question: "Inside which HTML tag do we put the JavaScript ?",
        choice1: "<script>",
        choice2: "<jscript>",
        choice3: "<html>",
        choice4: "<js>",
        answer: 1
    },
    {
        question: "What is the correct syntax for reffering to an external css file named abc.css ?",
        choice1: '<script href="abc.css" />',
        choice2: '<script src = "abc.css" type = "stylesheet">',
        choice3: '<link rel = "stylesheet" href = "abc.css" />',
        choice4: "<css link = 'abc.css' path = './' />",
        answer: 3
    },
    {
        question: "Which tag is used to add an image to an HTML document ?",
        choice1: "<image>",
        choice2: "<img />",
        choice3: "<figure>",
        choice4: "<picture>",
        answer: 2
    },

];


// CONSTANTS 

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    
}