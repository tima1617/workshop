const quizData = [
  {
    question: "Quel insecte produit le miel ?",
    a: "L'abeille",
    b: "L'ours",
    c: "Le lapin",
    d: "Le dauphin",
    correct: "a",
  },
  {
    question: "Quel fleuve traverse l'Égypte ?",
    a: "Le Kibo",
    b: "Le Danube",
    c: "Le Rhin",
    d: "Le Nil",
    correct: "d",
  },
  {
    question: "Quel est le nom de l'agence spatiale américaine ?",
    a: "La NSA",
    b: "La NASA",
    c: "Le Mir",
    d: "La Lufthansa",
    correct: "b",
  },
  {
    question: "La Vespa créé en 1946, est un célèbre...",
    a: "Scooter",
    b: "Vélo",
    c: "Camion",
    d: "Skateboard",
    correct: "a",
  },
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  document.getElementById("question").innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
<h2>You answered ${score}/${quizData.length} questions correctly</h2>
<button onclick="history.go(0)">Play Again</button>
`;
    }
  }
});
