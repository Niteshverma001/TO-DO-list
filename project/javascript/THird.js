const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is your Name?",
        answers: [
            {text: "Rohan", correct: true},
            {text: "Rohit", correct: false},
            {text: "Nitesh", correct: false},
            {text: "Ram", correct: false},
        ] 
    },
    {
        question: "What is your Class?",
        answers: [
            {text: "First", correct: false},
            {text: "Second", correct: false},
            {text: "Third", correct: false},
            {text: "Fourth", correct: true},
        ]
    },
    {
        question: "What is your section?",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "C", correct: true},
            {text: "D", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.dataset.correct = answer.correct; // Set the correct attribute directly
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = ""; // Clear answer buttons
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    nextButton.addEventListener("click", nextQuestion);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    alert("Quiz ended!");
}

startQuiz();