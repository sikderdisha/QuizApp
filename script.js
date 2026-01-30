// --- Containers ---
const quizBox = document.querySelector(".myquiz");
const ruleBox = document.querySelector(".rulebox");
const optionContainer = document.querySelector(".option-container");
const academicContainer = document.querySelector(".academic-container");
const generalContainer = document.querySelector(".general-container");
const techContainer = document.querySelector(".tech-container");

// --- Buttons ---
const startBtn = document.querySelector(".myquiz .mybtn button"); // Start Quiz
const continueBtn = document.querySelector(".rule-btn button:nth-child(2)"); // Continue
const quitBtn = document.querySelector(".rule-btn button:nth-child(1)"); // Quit App (rulebox)

// --- Previous buttons for General and Tech pages ---
const prevBtnGeneral = document.querySelector(".general-container .mybtn button");
const prevBtnTech = document.querySelector(".tech-container .mybtn button");

// Category Exit
const exitBtnOption = document.querySelector(".option-container .mybtn button"); // Exit Quiz (category page)

// Academic buttons
const previousBtnAcademic = document.querySelector(".academic-container .mybtn button"); // Previous
// const exitBtnAcademic = document.querySelector(".academic-container .mybtn button.exit"); // Exit if needed

// Option list items
const listBoxes = document.querySelectorAll(".option-container .list-box");

// --- Start Quiz ---
startBtn.addEventListener("click", () => {
    quizBox.style.display = "none";   
    ruleBox.classList.add("activeInfo"); 
});

// --- Continue (Rulebox) ---
continueBtn.addEventListener("click", () => {
    ruleBox.classList.remove("activeInfo"); // hide rulebox
    optionContainer.style.display = "flex";  // show category page
});

// --- Quit App (Rulebox) ---
quitBtn.addEventListener("click", () => {
    ruleBox.classList.remove("activeInfo");
    quizBox.style.display = "flex";        // show index page
});

// --- Exit Quiz (Category page) ---
exitBtnOption.addEventListener("click", () => {
    optionContainer.style.display = "none";
    quizBox.style.display = "flex";        // show index page
});

// --- Academic Previous button ---
previousBtnAcademic.addEventListener("click", () => {
    academicContainer.style.display = "none";  // hide Academic page
    optionContainer.style.display = "flex";    // show Category page
});

// --- Click on Category Options ---
listBoxes.forEach(box => {
    box.addEventListener("click", () => {
        const category = box.textContent.trim();

        if(category === "Academic Subjects") {
            optionContainer.style.display = "none";   // hide category page
            academicContainer.style.display = "flex"; // show academic page
        }
        else if(category === "General Knowledge") {
            optionContainer.style.display = "none";   
            generalContainer.style.display = "flex";  // show general page
        }
        else if(category === "Technology & Programming") {
            optionContainer.style.display = "none";   
            techContainer.style.display = "flex";     // show tech page
        }
    });
});
prevBtnGeneral.addEventListener("click", () => {
    generalContainer.style.display = "none";   // hide General Knowledge page
    optionContainer.style.display = "flex";    // show Category page
});

// --- Previous buttons for General and Tech pages ---
prevBtnTech.addEventListener("click", () => {
    techContainer.style.display = "none";      // hide Tech page
    optionContainer.style.display = "flex";    // show Category page
});