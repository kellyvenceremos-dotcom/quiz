const questions = [
  {
    question: "What is the capital of Ghana?",
    answers: ["Kumasi", "Accra", "Tamale", "Takoradi"],
    correct: 1
  },
  {
    question: "Which language runs in the browser?",
    answers: ["Python", "Java", "C++", "JavaScript"],
    correct: 3
  },
  {
    question: "HTML stands for?",
    answers: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language"
    ],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

loadQuestion();

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  answerButtons.forEach((btn, index) => {
    btn.textContent = q.answers[index];
    btn.className = "answer-btn";
    btn.onclick = () => checkAnswer(index);
  });
}

function checkAnswer(index) {
  const correctIndex = questions[currentQuestion].correct;

  if (index === correctIndex) {
    score++;
    answerButtons[index].classList.add("correct");
  } else {
    answerButtons[index].classList.add("wrong");
    answerButtons[correctIndex].classList.add("correct");
  }

  scoreEl.textContent = `Score: ${score}`;
  answerButtons.forEach(btn => btn.disabled = true);
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    answerButtons.forEach(btn => btn.disabled = false);
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Finished!";
    document.querySelector(".answers").style.display = "none";
    nextBtn.style.display = "none";
  }
});
