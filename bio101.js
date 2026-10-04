/* =================================================
   CONQUERORS LABS
   BIO 101 CBT
================================================= */


/* =================================================
   ✏️ EASY-EDIT QUIZ CONFIGURATION
================================================= */

const QUIZ_CONFIG = {

    title: "BIO 101 — Cell Biology",

    quizId: "bio101-cell-biology",

    timeLimit: 60,

    maxQuestions: 30,

    passMark: 50,

    allowRetake: false,


    /* =============================================
       30 BIO 101 QUESTIONS
    ============================================= */

    questions: [

        {
            id: 1,
            question: "What is the basic unit of structure and function in a living thing?",
            options: [
                "Organ",
                "Tissue",
                "Cell",
                "Organelle"
            ],
            answer: "Cell",
            explanation: "A cell is the basic structural and functional unit of a living organism."
        },

        {
            id: 2,
            question: "Which English scientist was the first to record observations of cells in 1663?",
            options: [
                "Theodor Schwann",
                "Robert Hooke",
                "Matthias Schleiden",
                "Antony van Leeuwenhoek"
            ],
            answer: "Robert Hooke",
            explanation: "Robert Hooke observed thin slices of cork under a microscope in 1663."
        },

        {
            id: 3,
            question: "What did Robert Hooke describe cork as when viewing it under a microscope?",
            options: [
                "Fluid spheres",
                "Little boxes looking like a honeycomb",
                "Thread-like filaments",
                "Solid crystalline structures"
            ],
            answer: "Little boxes looking like a honeycomb",
            explanation: "Hooke described the structures he observed in cork as little boxes resembling a honeycomb."
        },

        {
            id: 4,
            question: "According to the cell theory, how do all cells arise?",
            options: [
                "Spontaneous generation",
                "By the division of existing cells",
                "From inorganic minerals",
                "By crystallization of cytoplasm"
            ],
            answer: "By the division of existing cells",
            explanation: "Cell theory states that cells arise from pre-existing cells through cell division."
        },

        {
            id: 5,
            question: "Which part of a phospholipid molecule is hydrophobic?",
            options: [
                "Phosphate head",
                "Fatty acid tail",
                "Glycerol backbone",
                "Nitrogenous base"
            ],
            answer: "Fatty acid tail",
            explanation: "The fatty acid tails are hydrophobic, while the phosphate heads are hydrophilic."
        },

        {
            id: 6,
            question: "How are hydrophobic tails oriented within the phospholipid bilayer?",
            options: [
                "Facing the outer environment",
                "Pointing inwards away from water",
                "Facing the cytoplasm directly",
                "Randomly interspersed"
            ],
            answer: "Pointing inwards away from water",
            explanation: "The hydrophobic tails face inward, away from the aqueous environments on either side of the membrane."
        },

        {
            id: 7,
            question: "Which molecule affects membrane fluidity by restraining lipid movement at body temperature?",
            options: [
                "Glycolipid",
                "Cholesterol",
                "Glycoprotein",
                "Actin"
            ],
            answer: "Cholesterol",
            explanation: "Cholesterol helps regulate membrane fluidity and restrains excessive phospholipid movement at body temperature."
        },

        {
            id: 8,
            question: "Which type of membrane protein spans the entire width of the membrane?",
            options: [
                "Extrinsic protein",
                "Intrinsic protein",
                "Peripheral protein",
                "Glycoprotein anchor"
            ],
            answer: "Intrinsic protein",
            explanation: "Intrinsic proteins are embedded in the membrane and may span its entire width."
        },

        {
            id: 9,
            question: "Which organisms are classified strictly as prokaryotic?",
            options: [
                "Bacteria and Archaea",
                "Fungi and Protists",
                "Plants and Animals",
                "Algae and Fungi"
            ],
            answer: "Bacteria and Archaea",
            explanation: "Bacteria and Archaea are the two major groups of prokaryotic organisms."
        },

        {
            id: 10,
            question: "What are the folded inner membrane layers of a mitochondrion called?",
            options: [
                "Cisternae",
                "Cristae",
                "Stroma",
                "Thylakoids"
            ],
            answer: "Cristae",
            explanation: "The inner mitochondrial membrane is folded into structures called cristae."
        },

        {
            id: 11,
            question: "What space lies between the two membranes of a mitochondrion?",
            options: [
                "Matrix space",
                "Intermembrane space",
                "Stroma space",
                "Cisternal space"
            ],
            answer: "Intermembrane space",
            explanation: "The intermembrane space is the region between the outer and inner mitochondrial membranes."
        },

        {
            id: 12,
            question: "Which organelle contains its own DNA and reproduces by dividing into two?",
            options: [
                "Lysosome",
                "Golgi body",
                "Mitochondria",
                "Endoplasmic reticulum"
            ],
            answer: "Mitochondria",
            explanation: "Mitochondria contain their own DNA and can reproduce by division."
        },

        {
            id: 13,
            question: "What structures cover the surface of Rough Endoplasmic Reticulum?",
            options: [
                "Peroxisomes",
                "Ribosomes",
                "Centrioles",
                "Lysosomes"
            ],
            answer: "Ribosomes",
            explanation: "Rough endoplasmic reticulum has ribosomes attached to its surface."
        },

        {
            id: 14,
            question: "What is the primary function of ribosomes?",
            options: [
                "Lipid storage",
                "Protein synthesis",
                "Carbohydrate digestion",
                "ATP breakdown"
            ],
            answer: "Protein synthesis",
            explanation: "Ribosomes are the cellular structures responsible for protein synthesis."
        },

        {
            id: 15,
            question: "What are the individual flattened membrane-bound sacs of the Golgi body called?",
            options: [
                "Cristae",
                "Cisternae",
                "Matrix",
                "Stroma"
            ],
            answer: "Cisternae",
            explanation: "The Golgi apparatus consists of stacks of flattened membrane-bound sacs called cisternae."
        },

        {
            id: 16,
            question: "Which organelle is involved in the formation of lysosomes?",
            options: [
                "Mitochondrion",
                "Golgi body",
                "Nucleolus",
                "Smooth ER"
            ],
            answer: "Golgi body",
            explanation: "The Golgi apparatus packages materials and participates in the formation of lysosomes."
        },

        {
            id: 17,
            question: "What is the name of the membrane that covers the nucleus?",
            options: [
                "Tonoplast",
                "Plasma membrane",
                "Nuclear envelope",
                "Cell wall"
            ],
            answer: "Nuclear envelope",
            explanation: "The nucleus is surrounded by a double membrane called the nuclear envelope."
        },

        {
            id: 18,
            question: "Which type of chromatin stains lightly and contains active DNA?",
            options: [
                "Heterochromatin",
                "Euchromatin",
                "Metachromatin",
                "Prochromatin"
            ],
            answer: "Euchromatin",
            explanation: "Euchromatin is less condensed, stains lightly, and is generally associated with active gene transcription."
        },

        {
            id: 19,
            question: "Which type of chromatin stains deeply and contains inactive DNA?",
            options: [
                "Euchromatin",
                "Heterochromatin",
                "Achromatin",
                "Isochromatin"
            ],
            answer: "Heterochromatin",
            explanation: "Heterochromatin is highly condensed, stains deeply, and is generally associated with less active DNA."
        },

        {
            id: 20,
            question: "What organelle within the nucleus manufactures ribosomes?",
            options: [
                "Centrosome",
                "Nucleolus",
                "Golgi apparatus",
                "Vacuole"
            ],
            answer: "Nucleolus",
            explanation: "The nucleolus is the region of the nucleus where ribosomal components are produced and assembled."
        },

        {
            id: 21,
            question: "Which organelles contain enzymes and are involved in self-digestion (autolysis)?",
            options: [
                "Ribosomes",
                "Lysosomes",
                "Amyloplasts",
                "Centrioles"
            ],
            answer: "Lysosomes",
            explanation: "Lysosomes contain digestive enzymes and can participate in the breakdown of cellular components."
        },

        {
            id: 22,
            question: "What diameter range do microfilaments typically possess?",
            options: [
                "1–2 nm",
                "5–6 nm",
                "10–12 nm",
                "20–25 nm"
            ],
            answer: "5–6 nm",
            explanation: "Microfilaments are thin cytoskeletal structures approximately 5–6 nm in diameter."
        },

        {
            id: 23,
            question: "Which specific protein makes up microfilaments?",
            options: [
                "Tubulin",
                "Actin",
                "Myosin",
                "Chitin"
            ],
            answer: "Actin",
            explanation: "Microfilaments are primarily composed of the protein actin."
        },

        {
            id: 24,
            question: "What cylindrical structures pull duplicated chromosomes during cell division?",
            options: [
                "Microfilaments",
                "Spindles",
                "Intermediate filaments",
                "Centromeres"
            ],
            answer: "Spindles",
            explanation: "The mitotic spindle, made largely of microtubules, helps move chromosomes during cell division."
        },

        {
            id: 25,
            question: "Which protein fibers help hold the nucleus in position within the cell?",
            options: [
                "Microfilaments",
                "Intermediate filaments",
                "Microtubules",
                "Actin filaments"
            ],
            answer: "Intermediate filaments",
            explanation: "Intermediate filaments provide mechanical support and help maintain the position of organelles such as the nucleus."
        },

        {
            id: 26,
            question: "What structural feature characterizes cilia compared to flagella?",
            options: [
                "Longer and fewer",
                "Short and numerous",
                "Branched and thick",
                "Single and helical"
            ],
            answer: "Short and numerous",
            explanation: "Cilia are generally shorter and more numerous, whereas flagella are usually longer and fewer."
        },

        {
            id: 27,
            question: "What carbohydrate forms the cell walls of plants?",
            options: [
                "Chitin",
                "Cellulose",
                "Peptidoglycan",
                "Glycogen"
            ],
            answer: "Cellulose",
            explanation: "Cellulose is the major structural carbohydrate in plant cell walls."
        },

        {
            id: 28,
            question: "What carbohydrate forms the cell walls of fungi?",
            options: [
                "Cellulose",
                "Chitin",
                "Starch",
                "Lignin"
            ],
            answer: "Chitin",
            explanation: "Fungal cell walls contain chitin as an important structural carbohydrate."
        },

        {
            id: 29,
            question: "Which single membrane surrounds the plant cell central vacuole?",
            options: [
                "Plasma membrane",
                "Tonoplast",
                "Nuclear envelope",
                "Stroma"
            ],
            answer: "Tonoplast",
            explanation: "The central vacuole of a plant cell is surrounded by a membrane called the tonoplast."
        },

        {
            id: 30,
            question: "What internal fluid-filled region surrounds the thylakoid membranes inside a chloroplast?",
            options: [
                "Matrix",
                "Stroma",
                "Cytosol",
                "Cristae"
            ],
            answer: "Stroma",
            explanation: "The stroma is the fluid-filled region of the chloroplast surrounding the thylakoid membranes."
        }

    ]

};


/* =================================================
   🔒 DO NOT EDIT BELOW THIS LINE
================================================= */

const COMPLETION_KEY =
    "conquerorsLabs_BIO101_completed";

const RESULT_ID_KEY =
    "conquerorsLabs_BIO101_result_id";

const questions =
    QUIZ_CONFIG.questions.slice(
        0,
        QUIZ_CONFIG.maxQuestions
    );


/* =========================================
   QUIZ STATE
========================================= */

let currentQuestion = 0;

let userAnswers =
    new Array(questions.length).fill(null);

let timeRemaining =
    QUIZ_CONFIG.timeLimit * 60;

let timerInterval = null;

let quizSubmitted = false;

let studentName = "";


/* =========================================
   HTML ELEMENTS
========================================= */

const nameScreen =
    document.getElementById("nameScreen");

const studentNameInput =
    document.getElementById("studentName");

const startQuizBtn =
    document.getElementById("startQuizBtn");

const quizMain =
    document.getElementById("quizMain");

const quizTitle =
    document.getElementById("quizTitle");

const timer =
    document.getElementById("timer");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const questionCounter =
    document.getElementById("questionCounter");

const optionsContainer =
    document.getElementById("optionsContainer");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const submitBtn =
    document.getElementById("submitBtn");

const questionNavigator =
    document.getElementById("questionNavigator");

const answeredCount =
    document.getElementById("answeredCount");

const resultSection =
    document.getElementById("resultSection");

const resultScore =
    document.getElementById("resultScore");

const resultPercentage =
    document.getElementById("resultPercentage");

const resultMessage =
    document.getElementById("resultMessage");

const reviewContainer =
    document.getElementById("reviewContainer");

const reviewBtn =
    document.getElementById("reviewBtn");

const homeBtn =
    document.getElementById("homeBtn");

const retakeBtn =
    document.getElementById("retakeBtn");


/* =========================================
   INITIAL PAGE STATE
========================================= */

if (questions.length === 0) {

    alert(
        "No questions have been added to this CBT yet."
    );

} else if (
    !QUIZ_CONFIG.allowRetake &&
    localStorage.getItem(COMPLETION_KEY) === "true"
) {

    showAlreadyCompleted();

} else {

    if (quizMain) {

        quizMain.style.display = "none";

    }

}


/* =========================================
   START CBT
========================================= */

if (startQuizBtn) {

    startQuizBtn.addEventListener(
        "click",
        () => {

            const enteredName =
                studentNameInput.value.trim();

            if (!enteredName) {

                studentNameInput.focus();
                studentNameInput.style.borderColor =
                    "#ff7373";

                return;

            }

            if (enteredName.length < 2) {

                studentNameInput.focus();
                studentNameInput.style.borderColor =
                    "#ff7373";

                return;

            }

            studentName = enteredName;

            studentNameInput.style.borderColor = "";

            nameScreen.style.display = "none";

            quizMain.style.display = "block";

            initializeQuiz();

        }
    );

}


/* =========================================
   ENTER KEY
========================================= */

if (studentNameInput) {

    studentNameInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                event.preventDefault();

                startQuizBtn.click();

            }

        }
    );

}


/* =========================================
   INITIALIZE QUIZ
========================================= */

function initializeQuiz() {

    quizTitle.textContent =
        QUIZ_CONFIG.title;

    createQuestionNavigator();

    showQuestion();

    startTimer();

}


/* =========================================
   ALREADY COMPLETED
========================================= */

function showAlreadyCompleted() {

    if (nameScreen)
        nameScreen.style.display = "none";

    if (quizMain)
        quizMain.style.display = "block";

    document.querySelector(".question-card").style.display =
        "none";

    document.querySelector(".navigation").style.display =
        "none";

    document.querySelector(".navigator-card").style.display =
        "none";

    if (submitBtn)
        submitBtn.style.display = "none";

    if (resultSection) {

        resultSection.style.display = "block";

        resultScore.textContent = "✓";

        resultPercentage.textContent = "";

        resultMessage.textContent =
            "You have already completed this CBT. Only one attempt is allowed.";

    }

    if (reviewBtn)
        reviewBtn.style.display = "none";

    if (retakeBtn)
        retakeBtn.style.display = "none";

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const question =
        questions[currentQuestion];

    questionNumber.textContent =
        `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;

    questionText.textContent =
        question.question;

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const percentage =
        ((currentQuestion + 1) / questions.length) * 100;

    progressPercent.textContent =
        `${Math.round(percentage)}%`;

    progressFill.style.width =
        `${percentage}%`;

    optionsContainer.innerHTML = "";

    question.options.forEach(
        (option, index) => {

            const optionButton =
                document.createElement("button");

            optionButton.className = "option";

            if (
                userAnswers[currentQuestion] === option
            ) {

                optionButton.classList.add("selected");

            }

            const letter =
                String.fromCharCode(65 + index);

            const optionLetter =
                document.createElement("span");

            optionLetter.className =
                "option-letter";

            optionLetter.textContent =
                letter;

            const optionText =
                document.createElement("span");

            optionText.className =
                "option-text";

            optionText.textContent =
                option;

            optionButton.appendChild(optionLetter);
            optionButton.appendChild(optionText);

            optionButton.addEventListener(
                "click",
                () => selectAnswer(option)
            );

            optionsContainer.appendChild(
                optionButton
            );

        }
    );

    previousBtn.disabled =
        currentQuestion === 0;

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Finish →"
            : "Next →";

    updateNavigator();

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(answer) {

    if (quizSubmitted)
        return;

    userAnswers[currentQuestion] = answer;

    showQuestion();

}


/* =========================================
   NEXT
========================================= */

nextBtn.addEventListener(
    "click",
    () => {

        if (
            currentQuestion <
            questions.length - 1
        ) {

            currentQuestion++;

            showQuestion();

        } else {

            submitQuiz();

        }

    }
);


/* =========================================
   PREVIOUS
========================================= */

previousBtn.addEventListener(
    "click",
    () => {

        if (currentQuestion > 0) {

            currentQuestion--;

            showQuestion();

        }

    }
);


/* =========================================
   QUESTION NAVIGATOR
========================================= */

function createQuestionNavigator() {

    questionNavigator.innerHTML = "";

    questions.forEach(
        (question, index) => {

            const button =
                document.createElement("button");

            button.className =
                "question-dot";

            button.textContent =
                index + 1;

            button.title =
                `Question ${index + 1}`;

            button.addEventListener(
                "click",
                () => {

                    if (quizSubmitted)
                        return;

                    currentQuestion = index;

                    showQuestion();

                }
            );

            questionNavigator.appendChild(
                button
            );

        }
    );

}


/* =========================================
   UPDATE NAVIGATOR
========================================= */

function updateNavigator() {

    const buttons =
        questionNavigator.querySelectorAll(
            ".question-dot"
        );

    buttons.forEach(
        (button, index) => {

            button.classList.remove(
                "current",
                "answered"
            );

            if (index === currentQuestion)
                button.classList.add("current");

            if (userAnswers[index] !== null)
                button.classList.add("answered");

        }
    );

    const answered =
        userAnswers.filter(
            answer => answer !== null
        ).length;

    answeredCount.textContent =
        `${answered}`;

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    updateTimerDisplay();

    timerInterval =
        setInterval(
            () => {

                if (timeRemaining <= 0) {

                    clearInterval(timerInterval);

                    submitQuiz(true);

                    return;

                }

                timeRemaining--;

                updateTimerDisplay();

            },
            1000
        );

}


function updateTimerDisplay() {

    const minutes =
        Math.floor(timeRemaining / 60);

    const seconds =
        timeRemaining % 60;

    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeRemaining <= 300) {

        timer.style.color = "#ff7373";

    }

}


/* =========================================
   SUBMIT BUTTON
========================================= */

submitBtn.addEventListener(
    "click",
    () => {

        const unanswered =
            userAnswers.filter(
                answer => answer === null
            ).length;

        if (unanswered > 0) {

            const proceed =
                confirm(
                    `You have ${unanswered} unanswered question(s). Submit anyway?`
                );

            if (!proceed)
                return;

        }

        submitQuiz();

    }
);


/* =========================================
   SUBMIT QUIZ
========================================= */

async function submitQuiz(timeUp = false) {

    if (quizSubmitted)
        return;

    quizSubmitted = true;

    clearInterval(timerInterval);

    let score = 0;

    questions.forEach(
        (question, index) => {

            if (
                userAnswers[index] ===
                question.answer
            ) {

                score++;

            }

        }
    );

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );

    const qualifiedForLeaderboard =
        percentage >= QUIZ_CONFIG.passMark;


    /* =====================================
       ONE ATTEMPT MODE
    ===================================== */

    if (!QUIZ_CONFIG.allowRetake) {

        localStorage.setItem(
            COMPLETION_KEY,
            "true"
        );

    }


    /* =====================================
       SAVE RESULT
    ===================================== */

    const resultId =
        await saveQuizResult(
            score,
            percentage,
            qualifiedForLeaderboard
        );


    /* =====================================
       SAVE FAILED
    ===================================== */

    if (!resultId) {

        showLockedResult(
            "Your quiz was completed, but your result could not be saved. Please contact the administrator."
        );

        return;

    }


    /* =====================================
       STORE RESULT ID
    ===================================== */

    localStorage.setItem(
        RESULT_ID_KEY,
        resultId
    );


    /* =====================================
       CHECK LEADERBOARD SETTINGS
    ===================================== */

    const leaderboardSettings =
        await getLeaderboardSettings();


    if (!leaderboardSettings) {

        showLockedResult(
            "Your quiz was submitted successfully. Your result is temporarily locked while the leaderboard is being prepared."
        );

        return;

    }


    const leaderboardIsEnabled =
        leaderboardSettings.leaderboard_enabled === true ||
        leaderboardSettings.leaderboard_enabled === "true";


    /* =====================================
       LEADERBOARD LOCKED
    ===================================== */

    if (!leaderboardIsEnabled) {

        showLockedResult(
            "Your quiz has been submitted successfully. Your result and leaderboard position are currently locked. Results will be available when the leaderboard is opened."
        );

        return;

    }


    /* =====================================
       LEADERBOARD OPEN
    ===================================== */

    showResults(
        score,
        percentage,
        timeUp
    );

}


/* =========================================
   GET LEADERBOARD SETTINGS
========================================= */

async function getLeaderboardSettings() {

    try {

        const { data, error } =
            await supabaseClient
                .from("leaderboard_settings")
                .select(
                    "quiz_id, leaderboard_enabled, pass_mark"
                )
                .eq(
                    "quiz_id",
                    QUIZ_CONFIG.quizId
                )
                .single();

        if (error) {

            console.error(
                "Leaderboard settings error:",
                error
            );

            return null;

        }


        return {

            ...data,

            leaderboard_enabled:
                data.leaderboard_enabled === true ||
                data.leaderboard_enabled === "true"

        };

    } catch (error) {

        console.error(
            "Leaderboard settings JavaScript error:",
            error
        );

        return null;

    }

}


/* =========================================
   SAVE RESULT
========================================= */

async function saveQuizResult(
    score,
    percentage,
    qualifiedForLeaderboard
) {

    try {

        const { data, error } =
            await supabaseClient.rpc(
                "submit_quiz_result",
                {
                    p_student_name:
                        studentName,

                    p_quiz_id:
                        QUIZ_CONFIG.quizId,

                    p_quiz_title:
                        QUIZ_CONFIG.title,

                    p_score:
                        score,

                    p_total_questions:
                        questions.length,

                    p_percentage:
                        percentage,

                    p_qualified_for_leaderboard:
                        qualifiedForLeaderboard
                }
            );


        if (error) {

            console.error(
                "DATABASE ERROR:",
                error
            );

            return null;

        }


        console.log(
            "🔥 DATABASE INSERT SUCCESSFUL!",
            data
        );


        return data;

    } catch (error) {

        console.error(
            "JAVASCRIPT ERROR:",
            error
        );

        return null;

    }

}


/* =========================================
   SHOW LOCKED RESULT
========================================= */

function showLockedResult(message) {

    document.querySelector(
        ".question-card"
    ).style.display = "none";

    document.querySelector(
        ".navigation"
    ).style.display = "none";

    document.querySelector(
        ".navigator-card"
    ).style.display = "none";


    if (submitBtn)
        submitBtn.style.display = "none";


    if (resultSection)
        resultSection.style.display = "block";


    if (resultScore)
        resultScore.textContent = "🔒";


    if (resultPercentage)
        resultPercentage.textContent =
            "RESULT LOCKED";


    if (resultMessage)
        resultMessage.textContent =
            message;


    if (reviewBtn)
        reviewBtn.style.display = "none";


    if (reviewContainer)
        reviewContainer.innerHTML = "";


    if (retakeBtn)
        retakeBtn.style.display = "none";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   SHOW RESULTS
========================================= */

function showResults(
    score,
    percentage,
    timeUp
) {

    document.querySelector(
        ".question-card"
    ).style.display = "none";


    document.querySelector(
        ".navigation"
    ).style.display = "none";


    document.querySelector(
        ".navigator-card"
    ).style.display = "none";


    submitBtn.style.display = "none";


    resultSection.style.display = "block";


    resultScore.textContent =
        `${score} / ${questions.length}`;


    resultPercentage.textContent =
        `${percentage}%`;


    if (timeUp) {

        resultMessage.textContent =
            "Time is up. Your answers have been submitted.";

    } else {

        resultMessage.textContent =
            getResultMessage(percentage);

    }


    if (retakeBtn) {

        if (QUIZ_CONFIG.allowRetake) {

            retakeBtn.style.display =
                "inline-flex";

        } else {

            retakeBtn.style.display =
                "none";

        }

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   RESULT MESSAGE
========================================= */

function getResultMessage(
    percentage
) {

    if (percentage >= 80)
        return "Excellent work. Keep pushing.";

    if (percentage >= 60)
        return "Good effort. Review your corrections and keep improving.";

    if (percentage >= 40)
        return "You're getting there. Use the corrections to strengthen your weak areas.";

    return "Keep studying. Every correction is another opportunity to improve.";

}


/* =========================================
   REVIEW ANSWERS
========================================= */

reviewBtn.addEventListener(
    "click",
    () => {

        reviewContainer.innerHTML = "";


        questions.forEach(
            (question, index) => {

                const userAnswer =
                    userAnswers[index];

                const correct =
                    userAnswer === question.answer;


                const review =
                    document.createElement("div");

                review.className =
                    "review-item";


                const questionElement =
                    document.createElement("p");

                questionElement.className =
                    "review-question";

                questionElement.textContent =
                    `${index + 1}. ${question.question}`;


                const userAnswerElement =
                    document.createElement("p");

                userAnswerElement.className =
                    `review-answer ${
                        correct
                            ? "review-correct"
                            : "review-wrong"
                    }`;

                userAnswerElement.textContent =
                    `Your answer: ${
                        userAnswer ?? "Not answered"
                    }`;


                const correctAnswerElement =
                    document.createElement("p");

                correctAnswerElement.className =
                    "review-answer review-correct";

                correctAnswerElement.textContent =
                    `Correct answer: ${question.answer}`;


                const explanationElement =
                    document.createElement("p");

                explanationElement.className =
                    "review-explanation";

                explanationElement.textContent =
                    question.explanation;


                review.appendChild(
                    questionElement
                );

                review.appendChild(
                    userAnswerElement
                );

                review.appendChild(
                    correctAnswerElement
                );

                review.appendChild(
                    explanationElement
                );


                reviewContainer.appendChild(
                    review
                );

            }
        );


        reviewContainer.scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* =========================================
   RETAKE BUTTON
========================================= */

if (retakeBtn) {

    retakeBtn.addEventListener(
        "click",
        () => {

            if (!QUIZ_CONFIG.allowRetake)
                return;

            location.reload();

        }
    );

}


/* =========================================
   BACK TO HOME
========================================= */

homeBtn.addEventListener(
    "click",
    () => {

        window.location.href =
            "index.html";

    }
);