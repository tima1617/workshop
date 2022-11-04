var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("level");
console.log(c);

let quizData = [];
if (c == 1) {
  console.log("1");
  quizData = [
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
} else if (c == 2) {
  console.log("2");
  quizData = [
    {
      question: "En plus d'être un fruit, qu'est-ce qu'un kiwi ?",
      a: "Un rongeur",
      b: "Un oiseau",
      c: "Un lapin",
      d: "Un animal marin",
      correct: "b",
    },
    {
      question: "En quelle année a été construit le mur de Berlin ?",
      a: "1945",
      b: "1950",
      c: "1957",
      d: "196",
      correct: "d",
    },
    {
      question: "Lequel de ces pays ne paye pas en Euro ?",
      a: "Norvège",
      b: "Grèce",
      c: "Chypre",
      d: "Andorre",
      correct: "a",
    },
    {
      question: "Pour quel journal travaille Gaston Lagaffe ?",
      a: "Le journal de Mickey",
      b: "Pif Gadget",
      c: "Sciences et Vie Junior",
      d: "Spirou",
      correct: "d",
    },
  ];
} else if (c == 3) {
  console.log("3");
  quizData = [
    {
      question: "Dans quel lieu parisien se trouvent un zoo et un hippodrome ?",
      a: "Le bois de Boulogne",
      b: "Le bois de Vincennes",
      c: "La forêt de Meudon",
      d: "Le domaine de Marie-Antoinette",
      correct: "b",
    },
    {
      question:
        "Quel est ce château de l'Oise dans lequel on peut visiter le musée Condé ?",
      a: "Le château de Chantilly",
      b: "Le château de Chenonceau",
      c: "Le château de Fontainebleau",
      d: "Le château de Saumur",
      correct: "a",
    },
    {
      question:
        "Dans quel département du Languedoc-Roussillon se trouve le lac de Salagou ?",
      a: "Le Gard",
      b: "L'Hérault'",
      c: "L'Aude",
      d: "Les Pyrénées Orientales",
      correct: "b",
    },
    {
      question:
        "Dans quel département se trouvent les villes de Langres, Chaumont et Saint-Dizier ?",
      a: "La Haute-Marne",
      b: "La Corrèze",
      c: "Le Gers",
      d: "La Mayenne",
      correct: "a",
    },
  ];
}

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
<a onclick="history.go(0)" class="button" href='index.html' style="text-align: center;">Accueil</a>
`;
    }
  }
});
