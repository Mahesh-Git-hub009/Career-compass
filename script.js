// Switch between pages
function showPage(pageId) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// Quiz Questions
const questions = [
  {
    question: "What do you enjoy the most?",
    options: [
      { text: "Solving coding problems", career: "Software Developer" },
      { text: "Designing user experiences", career: "UI/UX Designer" },
      { text: "Managing people & projects", career: "Project Manager" },
      { text: "Protecting systems from hackers", career: "Cybersecurity Analyst" }
    ]
  },
  {
    question: "Which skill describes you best?",
    options: [
      { text: "Logical and analytical", career: "Software Developer" },
      { text: "Creative and empathetic", career: "UI/UX Designer" },
      { text: "Organized and communicative", career: "Project Manager" },
      { text: "Curious and cautious", career: "Cybersecurity Analyst" }
    ]
  },
  {
    question: "What kind of tasks excite you?",
    options: [
      { text: "Building applications", career: "Software Developer" },
      { text: "Creating modern designs", career: "UI/UX Designer" },
      { text: "Leading a team", career: "Project Manager" },
      { text: "Finding security flaws", career: "Cybersecurity Analyst" }
    ]
  },
  {
    question: "Which subject do you like most?",
    options: [
      { text: "Programming", career: "Software Developer" },
      { text: "Graphic Design", career: "UI/UX Designer" },
      { text: "Management", career: "Project Manager" },
      { text: "Networking", career: "Cybersecurity Analyst" }
    ]
  },
  {
    question: "Which word suits your personality best?",
    options: [
      { text: "Logical", career: "Software Developer" },
      { text: "Artistic", career: "UI/UX Designer" },
      { text: "Leader", career: "Project Manager" },
      { text: "Investigator", career: "Cybersecurity Analyst" }
    ]
  }
];

let currentQuestion = 0;
let scores = {};

function startQuiz() {
  showPage('quiz');
  currentQuestion = 0;
  scores = {};
  showQuestion();
}

function showQuestion() {
  const qData = questions[currentQuestion];
  document.getElementById("questionText").textContent = qData.question;
  const optionsBox = document.getElementById("optionsBox");
  optionsBox.innerHTML = "";

  qData.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => selectOption(opt.career);
    optionsBox.appendChild(btn);
  });

  document.getElementById("progress").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;
}

function selectOption(career) {
  scores[career] = (scores[career] || 0) + 1;
  currentQuestion++;
  if (currentQuestion < questions.length) showQuestion();
  else showResult();
}

function showResult() {
  showPage("results");
  const resultDiv = document.getElementById("resultOutput");
  const topCareer = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );
  resultDiv.innerHTML = `
    <h3 style="font-size:2rem;">🎉 Based on your answers, your ideal career is:</h3>
    <h2 style="color:#00bfff;font-size:2.5rem;">${topCareer}</h2>
    <p style="font-size:1.5rem;">Explore more about ${topCareer} — this path suits your strengths and interests!</p>
  `;
}


