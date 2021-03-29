const quiz = document.getElementById('question');
const firstAnswer = document.getElementById('question-answers_first');
const secondAnswer = document.getElementById('question-answers_second');
const thirdAnswer = document.getElementById('question-answers_third');
const forthAnswer = document.getElementById('question-answers_forth');
const scoreValue = document.getElementById('score');
const prizeValue = document.getElementById('prize');
const container = document.getElementById('container');
const skipButton = document.getElementById('skipButton');
const skip = document.getElementById('button-skip');
const startButton = document.getElementById('start');

let questionTracker = [];
let gameQuestions
let questionAmount = 1;
let score = 0;
let prize = 100;
let maxPrize = 1000000;
let prizeMultiplier = 2;
let firstIndex = 0;
let secondIndex = 1;
let thirdIndex = 2;
let currentQuestion;

function showHide() {
    if (container.style.display === 'none' && skip.style.display === 'none') {
        container.style.display = 'block';
        skip.style.display = 'block';
    } else {
        container.style.display = 'none';
        skip.style.display = 'none';
    }
}

function startQuiz(skip = false) {
    console.log(gameQuestions);
    for (let i = 0; i < questionAmount; i++) {
        do {
            currentQuestion = Math.floor(Math.random() * gameQuestions.length);
        } while (existQuestion());
    }

    quiz.innerHTML = gameQuestions[currentQuestion].question;
    let displayAnswers = gameQuestions[currentQuestion].content;


    for (let k = 0; k < displayAnswers.length; k++) {
        let answer = '<button type="button" name="answers">' + displayAnswers[k] + '<br>';
        if (k === firstIndex) {
            firstAnswer.innerHTML = answer;
        } else if (k === secondIndex) {
            secondAnswer.innerHTML = answer;
        } else if (k === thirdIndex) {
            thirdAnswer.innerHTML = answer;
        } else {
            forthAnswer.innerHTML = answer;
        }
    }

    questionTracker.push(currentQuestion);

    if (skip) {
        skipButton.outerHTML = '';
    }

    function existQuestion() {
        for (let i = 0; i < questionTracker.length; i++) {
            if (questionTracker[i] === currentQuestion) {
                return true;
            }
        }
        return false;
    }
}

function checkAnswer(answer) {
    if (score >= maxPrize) {
        container.innerHTML = 'Congratulations! You won 1000000.';
    } else if (gameQuestions[currentQuestion].correct !== answer) {
        container.innerHTML = 'Game over. You prize is:' + score;
    } else if (score < maxPrize && gameQuestions[currentQuestion].correct === answer) {
        score += prize;
        prize *= prizeMultiplier;
        scoreValue.innerHTML = score;
        prizeValue.innerHTML = prize;
    }
    startQuiz();
}
gameQuestions = JSON.parse(localStorage.getItem('questions'));