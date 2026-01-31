// ================= Containers =================
const quizBox = document.querySelector(".myquiz");
const ruleBox = document.querySelector(".rulebox");
const optionContainer = document.querySelector(".option-container");
const academicContainer = document.querySelector(".academic-container");
const generalContainer = document.querySelector(".general-container");
const techContainer = document.querySelector(".tech-container");
const questionPage = document.querySelector(".questions");
const questionText = document.querySelector(".section span");
const optionBoxes = document.querySelectorAll(".questionOptions");
const questionCount = document.querySelector(".totalQ p");
const seconds = document.querySelector(".seconds");

// ================= Buttons =================
const startBtn = document.querySelector(".myquiz .mybtn button");
const continueBtn = document.querySelector(".rule-btn button:nth-child(2)");
const quitBtn = document.querySelector(".rule-btn button:nth-child(1)");

// ================= Previous Buttons =================
document.querySelector(".academic-container .mybtn button").onclick = () => {
  academicContainer.style.display = "none";
  optionContainer.style.display = "flex";
};

document.querySelector(".general-container .mybtn button").onclick = () => {
  generalContainer.style.display = "none";
  optionContainer.style.display = "flex";
};

document.querySelector(".tech-container .mybtn button").onclick = () => {
  techContainer.style.display = "none";
  optionContainer.style.display = "flex";
};

// ================= Start Quiz Flow =================
startBtn.onclick = () => {
  quizBox.style.display = "none";
  ruleBox.classList.add("activeInfo");
};

continueBtn.onclick = () => {
  ruleBox.classList.remove("activeInfo");
  optionContainer.style.display = "flex"; // ✅ Category selection page
};

// Quit button
quitBtn.onclick = () => location.reload();

// ================= Option Container Click =================
document.querySelector(".option-container").addEventListener("click", e => {
  if (e.target.classList.contains("list-box")) {
    const category = e.target.innerText.trim();
    optionContainer.style.display = "none";

    if (category === "Academic Subjects") academicContainer.style.display = "flex";
    if (category === "General Knowledge") generalContainer.style.display = "flex";
    if (category === "Technology & Programming") techContainer.style.display = "flex";
  }
});

// ================= Academic Quiz Start =================
document.querySelectorAll(".academic-container .card").forEach(card => {
  card.onclick = () => {
    const subject = card.innerText.trim();
    startQuiz(subject);
  };
});

// ================= General Knowledge Quiz Start =================
document.querySelectorAll(".general-container .list-box").forEach(box => {
  box.onclick = () => {
    const subject = box.innerText.trim(); // Current Affairs, History, Geography
    startQuiz(subject);
  };
});

// ================= Technology & Programming Quiz Start =================
document.querySelectorAll(".tech-container .list-box").forEach(box => {
  box.onclick = () => {
    const subject = box.innerText.trim(); // Programming Basics, Web Development, Computer Fundamentals
    startQuiz(subject);
  };
});

// ================= Quiz Data =================
const quizData = {
  // Academic Subjects
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
  ],

  // General Knowledge
  "Current Affairs": [
    { q: "Who is the current UN Secretary-General?", options: ["Antonio Guterres", "Ban Ki-moon", "Kofi Annan", "Boutros Boutros-Ghali"], answer: 0 },
    { q: "Which country recently hosted the COP26 summit?", options: ["UK", "USA", "France", "Germany"], answer: 0 },
    { q: "Which organization issues the World Economic Outlook?", options: ["IMF", "UN", "World Bank", "OECD"], answer: 0 },
    { q: "Which country won the 2022 FIFA World Cup?", options: ["Argentina", "France", "Brazil", "Germany"], answer: 0 },
    { q: "Who is the current US President?", options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"], answer: 0 }
  ],
  History: [
    { q: "Who was the first President of the USA?", options: ["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"], answer: 0 },
    { q: "In which year did World War II end?", options: ["1945", "1944", "1939", "1950"], answer: 0 },
    { q: "Who discovered America?", options: ["Christopher Columbus", "Leif Erikson", "Amerigo Vespucci", "Vasco da Gama"], answer: 0 },
    { q: "Which empire built the Colosseum?", options: ["Roman Empire", "Greek Empire", "Ottoman Empire", "Persian Empire"], answer: 0 },
    { q: "Who was Napoleon Bonaparte?", options: ["French military leader", "English king", "German chancellor", "Italian artist"], answer: 0 }
  ],
  Geography: [
    { q: "Capital of France?", options: ["Paris", "Berlin", "Madrid", "Rome"], answer: 0 },
    { q: "Largest ocean?", options: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: 0 },
    { q: "Highest mountain in the world?", options: ["Everest", "K2", "Kangchenjunga", "Lhotse"], answer: 0 },
    { q: "Longest river?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: 0 },
    { q: "Which continent is Egypt in?", options: ["Africa", "Asia", "Europe", "Australia"], answer: 0 }
  ],

  // Technology & Programming
  "Programming Basics": [
    { q: "What does HTML stand for?", options: ["HyperText Markup Language", "Hyperlinks Text Mark Language", "HighText Markup Language", "None"], answer: 0 },
    { q: "CSS is used for?", options: ["Styling Web Pages", "Programming Logic", "Database Management", "Networking"], answer: 0 },
    { q: "JS stands for?", options: ["JavaScript", "Java System", "JustScript", "None"], answer: 0 },
    { q: "Which tag is used for headings in HTML?", options: ["<h1>", "<p>", "<div>", "<span>"], answer: 0 },
    { q: "Which property changes text color in CSS?", options: ["color", "font-size", "background", "border"], answer: 0 }
  ],
  "Web Development": [
    { q: "Which language is used for backend?", options: ["Node.js", "HTML", "CSS", "Photoshop"], answer: 0 },
    { q: "What is React?", options: ["JS library", "CSS framework", "Backend language", "Database"], answer: 0 },
    { q: "Bootstrap is?", options: ["CSS framework", "JS library", "HTML tag", "Database"], answer: 0 },
    { q: "DOM stands for?", options: ["Document Object Model", "Data Object Model", "Document Output Method", "Database Object Model"], answer: 0 },
    { q: "Which tag is used to create links in HTML?", options: ["<a>", "<link>", "<div>", "<span>"], answer: 0 }
  ],
  "Computer Fundamentals": [
    { q: "What is CPU?", options: ["Central Processing Unit", "Computer Personal Unit", "Control Processing Unit", "Central Performance Unit"], answer: 0 },
    { q: "RAM is used for?", options: ["Temporary storage", "Permanent storage", "Processing graphics", "Network routing"], answer: 0 },
    { q: "ROM stands for?", options: ["Read Only Memory", "Random Operating Memory", "Rapid Output Memory", "Run Once Memory"], answer: 0 },
    { q: "Motherboard is?", options: ["Main circuit board", "Memory stick", "Storage device", "Peripheral"], answer: 0 },
    { q: "Binary system uses how many digits?", options: ["2", "8", "10", "16"], answer: 0 }
  ]
};

// ================= State =================
let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let answered = false;

// ================= Functions =================
function startQuiz(subject) {
  currentQuiz = quizData[subject];
  currentIndex = 0;
  score = 0;

  academicContainer.style.display = "none";
  generalContainer.style.display = "none";
  techContainer.style.display = "none";
  optionContainer.style.display = "none";
  questionPage.style.display = "flex";

  loadQuestion();
  startTimer();
}

// Load question
function loadQuestion() {
  answered = false;
  const q = currentQuiz[currentIndex];
  questionText.innerText = `${currentIndex + 1}. ${q.q}`;

  optionBoxes.forEach((box, i) => {
    box.className = "questionOptions";
    box.querySelector("span").childNodes[0].nodeValue = q.options[i];
    box.classList.remove("correct", "wrong", "disabled");
  });

  questionCount.innerText = `${currentIndex + 1} of ${currentQuiz.length} questions`;
}

// Option click
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

// Timer
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

// Next question
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

// ================= Option Container Exit Button =================
document.querySelector(".option-container .mybtn button").onclick = () => {
    location.reload(); // Exit button click → Reload page
};

// Show result
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
