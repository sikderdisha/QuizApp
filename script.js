// ================= Containers =================
const quizBox = document.querySelector(".myquiz");
const ruleBox = document.querySelector(".rulebox");
const academicContainer = document.querySelector(".academic-container");
const questionPage = document.querySelector(".questions");
const questionText = document.querySelector(".section span");
const optionBoxes = document.querySelectorAll(".questionOptions");
const questionCount = document.querySelector(".totalQ p");
const seconds = document.querySelector(".seconds");

// ================= Buttons =================
const startBtn = document.querySelector(".myquiz .mybtn button");
const continueBtn = document.querySelector(".rule-btn button:nth-child(2)");
const quitBtn = document.querySelector(".rule-btn button:nth-child(1)");
const nextBtn = document.querySelector(".nextBtn");

// ================= Previous Button =================
document.querySelector(".academic-container .mybtn button").onclick = () => {
  academicContainer.style.display = "none"; // Academic container hide
  document.querySelector(".option-container").style.display = "flex"; // Show Category selection page
};

document.querySelector(".general-container .mybtn button").onclick = () => {
  generalContainer.style.display = "none";
  document.querySelector(".option-container").style.display = "flex";
};


// ================= Quiz Data =================
const quizData = {
  Mathematics: [
    { q: "What is 5 + 3?", options: ["5", "8", "10", "15"], answer: 1 },
    { q: "Square root of 16?", options: ["2", "4", "6", "8"], answer: 1 },
    { q: "10 × 2 = ?", options: ["10", "20", "30", "40"], answer: 1 },
    { q: "7 + 6 = ?", options: ["12", "13", "14", "15"], answer: 1 },
    { q: "9 - 3 = ?", options: ["5", "6", "7", "3"], answer: 1 }
  ],
  Physics: [
    { q: "Unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], answer: 0 },
    { q: "Acceleration due to gravity?", options: ["9.8 m/s²", "10 m/s²", "9 m/s²", "8.9 m/s²"], answer: 0 },
    { q: "Light speed?", options: ["3×10^8 m/s", "3×10^6 m/s", "3×10^5 m/s", "3×10^7 m/s"], answer: 0 },
    { q: "Unit of energy?", options: ["Joule", "Newton", "Pascal", "Watt"], answer: 0 },
    { q: "Force = ?", options: ["Mass × Acceleration", "Mass ÷ Acceleration", "Mass + Acceleration", "Mass − Acceleration"], answer: 0 }
  ],
  Chemistry: [
    { q: "Water formula?", options: ["H2O", "CO2", "O2", "H2"], answer: 0 },
    { q: "NaCl is?", options: ["Salt", "Sugar", "Acid", "Base"], answer: 0 },
    { q: "Atomic number of Hydrogen?", options: ["1", "2", "3", "4"], answer: 0 },
    { q: "pH < 7 means?", options: ["Acidic", "Basic", "Neutral", "Salt"], answer: 0 },
    { q: "Formula of Carbon dioxide?", options: ["CO2", "CO", "C2O", "C2O2"], answer: 0 }
  ],
  Biology: [
    { q: "Humans are?", options: ["Mammals", "Reptiles", "Birds", "Amphibians"], answer: 0 },
    { q: "Plant photosynthesis?", options: ["Yes", "No", "Sometimes", "Rarely"], answer: 0 },
    { q: "Red blood cells carry?", options: ["Oxygen", "CO2", "Water", "Sugar"], answer: 0 },
    { q: "Largest organ?", options: ["Skin", "Heart", "Brain", "Liver"], answer: 0 },
    { q: "Humans have how many chromosomes?", options: ["46", "48", "44", "42"], answer: 0 }
  ],
  ICT: [
    { q: "CPU stands for?", options: ["Central Processing Unit", "Computer Personal Unit", "Control Processing Unit", "Central Performance Unit"], answer: 0 },
    { q: "RAM is?", options: ["Random Access Memory", "Read Access Memory", "Ready Application Memory", "Rapid Access Memory"], answer: 0 },
    { q: "WWW stands for?", options: ["World Wide Web", "World Web Wide", "Web Wide World", "Wide World Web"], answer: 0 },
    { q: "HTML is used for?", options: ["Web Pages", "Apps", "Databases", "Operating System"], answer: 0 },
    { q: "IP Address identifies?", options: ["Device on Network", "CPU", "RAM", "Software"], answer: 0 }
  ],
  English: [
    { q: "Plural of mouse?", options: ["Mice", "Mouses", "Mouse", "Meese"], answer: 0 },
    { q: "Synonym of Happy?", options: ["Joyful", "Sad", "Angry", "Tired"], answer: 0 },
    { q: "Antonym of Dark?", options: ["Light", "Bright", "Shiny", "Both"], answer: 0 },
    { q: "Past tense of Go?", options: ["Went", "Gone", "Go", "Goes"], answer: 0 },
    { q: "Plural of Child?", options: ["Children", "Childs", "Childes", "Childer"], answer: 0 }
  ]
};

// ================= State =================
let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let answered = false;

// ================= Start =================
startBtn.onclick = () => {
  quizBox.style.display = "none";
  ruleBox.classList.add("activeInfo");
};

continueBtn.onclick = () => {
  ruleBox.classList.remove("activeInfo");
  academicContainer.style.display = "flex";
};

quitBtn.onclick = () => location.reload();

// ================= Academic Start =================
document.querySelectorAll(".academic-container .card").forEach(card => {
  card.onclick = () => {
    const subject = card.innerText.trim();
    currentQuiz = quizData[subject];
    currentIndex = 0;
    score = 0;

    academicContainer.style.display = "none";
    questionPage.style.display = "flex";

    loadQuestion();
    startTimer();
  };
});

// ================= Load Question =================
function loadQuestion() {
  answered = false;
  const q = currentQuiz[currentIndex];
  questionText.innerText = `${currentIndex + 1}. ${q.q}`;

  optionBoxes.forEach((box, i) => {
    box.className = "questionOptions";
    box.querySelector("span").childNodes[0].nodeValue = q.options[i];
  });

  questionCount.innerText = `${currentIndex + 1} of ${currentQuiz.length} questions`;
}

// ================= Option Click =================
optionBoxes.forEach((box, index) => {
  box.onclick = () => {
    if (answered) return;
    answered = true;
    clearInterval(timer);

    const correct = currentQuiz[currentIndex].answer;
    optionBoxes.forEach(opt => opt.classList.add("disabled"));

    if (index === correct) {
      box.classList.add("correct");
    } else {
      box.classList.add("wrong");
      optionBoxes[correct].classList.add("correct");
    }

    if (index === correct) score++;

    setTimeout(nextQuestion, 600);
  };
});

// ================= Timer =================
function startTimer() {
  clearInterval(timer);
  timeLeft = 15;
  seconds.innerText = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    seconds.innerText = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

// ================= Next Question =================
function nextQuestion() {
  clearInterval(timer);
  currentIndex++;

  if (currentIndex < currentQuiz.length) {
    loadQuestion();
    startTimer();
  } else {
    showResult();
  }
}

// ================= Result =================
function showResult() {
  questionPage.innerHTML = `
    <div style="padding:30px;text-align:center">
      <h2>🎉 Quiz Completed!</h2>
      <p style="margin-top:15px;font-size:18px">
        Your Score: <b>${score} / ${currentQuiz.length}</b>
      </p>
      <button onclick="location.reload()" style="margin-top:20px">
        Restart Quiz
      </button>
    </div>
  `;
}
