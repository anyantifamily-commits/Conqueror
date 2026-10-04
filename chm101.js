

/* =========================================
   CONQUERORS LABS
   CHM 101 — ACIDS, BASES & BUFFERS
========================================= */

const QUIZ_CONFIG = {

    title: "CHM 101 — Acids, Bases & Buffers",

    timeLimit: 20,

    maxQuestions: 30,

    allowRetake: false,

    quizId: "chm101",

    passMark: 50,

    questions: [

        {
            id: 1,
            question: "What is the characteristic pH value of an acidic solution at 25°C?",
            options: [
                "pH > 7",
                "pH = 7",
                "pH < 7",
                "pH = 14"
            ],
            answer: "pH < 7",
            explanation: "At 25°C, an acidic aqueous solution has a pH below 7."
        },

        {
            id: 2,
            question: "Which of the following is a physical property commonly associated with bases?",
            options: [
                "Sour taste",
                "Slippery feel",
                "Turns moist blue litmus red",
                "Always harmless when dilute"
            ],
            answer: "Slippery feel",
            explanation: "Many basic solutions feel slippery. Never taste or touch chemicals to identify them."
        },

        {
            id: 3,
            question: "What colour change occurs when an acid acts on moist blue litmus paper?",
            options: [
                "It turns red",
                "It turns blue",
                "It becomes colourless",
                "It turns yellow"
            ],
            answer: "It turns red",
            explanation: "Acids turn moist blue litmus paper red."
        },

        {
            id: 4,
            question: "According to Arrhenius theory, an acid in aqueous solution is a substance that:",
            options: [
                "Accepts protons",
                "Donates an electron pair",
                "Produces H⁺ ions in water",
                "Produces OH⁻ ions in water"
            ],
            answer: "Produces H⁺ ions in water",
            explanation: "An Arrhenius acid increases the concentration of H⁺, more accurately represented in water as H₃O⁺."
        },

        {
            id: 5,
            question: "What term describes a base that dissolves in water to produce an alkaline solution?",
            options: [
                "Salt",
                "Alkali",
                "Buffer",
                "Indicator"
            ],
            answer: "Alkali",
            explanation: "An alkali is a water-soluble base that produces OH⁻ ions in aqueous solution."
        },

        {
            id: 6,
            question: "What is the pH of a neutral aqueous solution at 25°C?",
            options: [
                "0",
                "5",
                "7",
                "14"
            ],
            answer: "7",
            explanation: "At 25°C, a neutral aqueous solution has pH 7 because [H⁺] equals [OH⁻]."
        },

        {
            id: 7,
            question: "Which of the following is a strong acid in water?",
            options: [
                "HF",
                "H₂S",
                "HNO₃",
                "HCN"
            ],
            answer: "HNO₃",
            explanation: "Nitric acid ionizes essentially completely in dilute aqueous solution, unlike the other listed acids."
        },

        {
            id: 8,
            question: "Under the Brønsted–Lowry definition, an acid is a:",
            options: [
                "Proton donor",
                "Proton acceptor",
                "Electron-pair donor",
                "Electron-pair acceptor"
            ],
            answer: "Proton donor",
            explanation: "A Brønsted–Lowry acid donates a proton, H⁺, to another species."
        },

        {
            id: 9,
            question: "How does Lewis theory define a Lewis acid?",
            options: [
                "Proton donor",
                "Proton acceptor",
                "Electron-pair donor",
                "Electron-pair acceptor"
            ],
            answer: "Electron-pair acceptor",
            explanation: "A Lewis acid accepts an electron pair to form a coordinate covalent bond."
        },

        {
            id: 10,
            question: "What is the ionic product of water, Kᵥ (Kw), at 25°C?",
            options: [
                "1.00 × 10⁻⁷",
                "1.00 × 10⁻¹⁴",
                "1.8 × 10⁻⁵",
                "1.1 × 10⁻⁸"
            ],
            answer: "1.00 × 10⁻¹⁴",
            explanation: "At 25°C, Kw = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴."
        },

        {
            id: 11,
            question: "When ammonium chloride dissolves in water, what type of solution does it produce?",
            options: [
                "Acidic solution",
                "Neutral solution",
                "Basic solution",
                "A solution that is always buffered"
            ],
            answer: "Acidic solution",
            explanation: "NH₄Cl is a salt of a strong acid and a weak base. The NH₄⁺ ion reacts with water, making the solution acidic. Strictly, NH₄Cl is a normal salt, not an acid salt in the structural classification."
        },

        {
            id: 12,
            question: "Which equation is commonly used to calculate the pH of a buffer containing a weak acid and its conjugate-base salt?",
            options: [
                "Ostwald's dilution law",
                "Henderson–Hasselbalch equation",
                "Arrhenius rate equation",
                "Ionic product equation alone"
            ],
            answer: "Henderson–Hasselbalch equation",
            explanation: "For an acidic buffer, pH = pKa + log([conjugate base]/[weak acid])."
        },

        {
            id: 13,
            question: "What is the relationship between Ka and pKa?",
            options: [
                "A larger Ka corresponds to a smaller pKa and generally a stronger acid",
                "A larger Ka corresponds to a larger pKa and a weaker acid",
                "A smaller Ka always corresponds to a smaller pKa",
                "Ka and pKa are unrelated to acid strength"
            ],
            answer: "A larger Ka corresponds to a smaller pKa and generally a stronger acid",
            explanation: "pKa = −log Ka. A larger Ka means greater acid dissociation and a smaller pKa."
        },

        {
            id: 14,
            question: "What is the primary role of buffer solutions in living organisms?",
            options: [
                "Accelerate all chemical reactions",
                "Resist sudden changes in pH",
                "Neutralize every ion completely",
                "Act as the main source of energy"
            ],
            answer: "Resist sudden changes in pH",
            explanation: "Buffers minimize pH changes when small amounts of acid or base are added."
        },

        {
            id: 15,
            question: "Which indicators are generally suitable for a strong acid–strong base titration?",
            options: [
                "Methyl orange only",
                "Phenolphthalein only",
                "Both methyl orange and phenolphthalein",
                "Neither indicator"
            ],
            answer: "Both methyl orange and phenolphthalein",
            explanation: "A strong acid–strong base titration has a steep pH change near its equivalence point, so both indicators can be suitable."
        },

        {
            id: 16,
            question: "Which statement correctly describes phenolphthalein in aqueous solution?",
            options: [
                "Pink below pH 4 and yellow above pH 5",
                "Red below pH 3 and yellow above pH 4",
                "Colourless below about pH 8.2 and pink in its transition range of about pH 8.2–10.0",
                "Blue above pH 9 and colourless below pH 8"
            ],
            answer: "Colourless below about pH 8.2 and pink in its transition range of about pH 8.2–10.0",
            explanation: "Phenolphthalein is colourless in acidic and near-neutral solutions and changes to pink over an approximate pH range of 8.2–10.0."
        },

        {
            id: 17,
            question: "Which of the following is a diprotic acid?",
            options: [
                "HCl",
                "HNO₃",
                "H₂SO₄",
                "H₃PO₄"
            ],
            answer: "H₂SO₄",
            explanation: "Sulfuric acid can donate two protons per molecule, making it diprotic. Phosphoric acid is triprotic."
        },

        {
            id: 18,
            question: "In Ostwald's dilution law, what does α represent?",
            options: [
                "Molar concentration",
                "Degree of dissociation",
                "Dissociation constant",
                "Ionic product of water"
            ],
            answer: "Degree of dissociation",
            explanation: "The symbol α represents the fraction of the original electrolyte that dissociates into ions."
        },

        {
            id: 19,
            question: "What type of solution is generally produced when a salt of a weak acid and a strong base dissolves in water?",
            options: [
                "Acidic, with pH < 7",
                "Neutral, with pH = 7",
                "Basic, with pH > 7",
                "Always exactly pH 7"
            ],
            answer: "Basic, with pH > 7",
            explanation: "The conjugate base of the weak acid reacts with water to produce OH⁻, making the solution basic at 25°C."
        },

        {
            id: 20,
            question: "Which substance acts as a Lewis base by donating an electron pair?",
            options: [
                "AlCl₃",
                "Cu²⁺",
                "NH₃",
                "BCl₃"
            ],
            answer: "NH₃",
            explanation: "Ammonia has a lone pair on nitrogen that it can donate to a Lewis acid."
        },

        {
            id: 21,
            question: "What is the pH of a 0.20 M HNO₃ solution, assuming complete ionization?",
            options: [
                "0.40",
                "0.70",
                "1.30",
                "7.00"
            ],
            answer: "0.70",
            explanation: "HNO₃ is a strong monoprotic acid, so [H⁺] = 0.20 M. pH = −log(0.20) ≈ 0.70."
        },

        {
            id: 22,
            question: "What is the pH of a 0.20 M H₂SO₄ solution if [H⁺] is given as 0.40 mol dm⁻³?",
            options: [
                "0.40",
                "0.70",
                "1.00",
                "1.40"
            ],
            answer: "0.40",
            explanation: "Using the stated hydrogen-ion concentration, pH = −log(0.40) ≈ 0.398, which rounds to 0.40."
        },

        {
            id: 23,
            question: "For a weak monoprotic acid of concentration c, which expression approximates [H⁺] when dissociation is small?",
            options: [
                "[H⁺] ≈ √(Ka c)",
                "[H⁺] = c / Ka",
                "[H⁺] = Ka / c²",
                "[H⁺] = c²Ka"
            ],
            answer: "[H⁺] ≈ √(Ka c)",
            explanation: "For a weak acid with small dissociation, Ka ≈ [H⁺]²/c, giving [H⁺] ≈ √(Ka c)."
        },

        {
            id: 24,
            question: "What is the pH of a 0.05 M NaOH solution at 25°C, assuming complete dissociation?",
            options: [
                "1.30",
                "7.00",
                "12.70",
                "13.00"
            ],
            answer: "12.70",
            explanation: "[OH⁻] = 0.05 M. pOH = −log(0.05) ≈ 1.30, so pH = 14.00 − 1.30 = 12.70."
        },

        {
            id: 25,
            question: "Which expression gives the approximate pH of a weak base of concentration c at 25°C?",
            options: [
                "pH = ½pKa − ½log c",
                "pH = pKw − ½pKb + ½log c",
                "pH = −log[OH⁻]",
                "pH = pKa + log([salt]/[acid])"
            ],
            answer: "pH = pKw − ½pKb + ½log c",
            explanation: "For a weak base, pOH ≈ ½(pKb − log c). Therefore pH = pKw − pOH."
        },

        {
            id: 26,
            question: "How is buffer capacity, β, defined?",
            options: [
                "Change in pH divided by moles of acid or base added per litre",
                "Moles of strong acid or base added per litre divided by the resulting pH change",
                "[H⁺][OH⁻]",
                "Ka multiplied by Kb"
            ],
            answer: "Moles of strong acid or base added per litre divided by the resulting pH change",
            explanation: "Buffer capacity is the amount of strong acid or base added per unit volume, divided by the resulting change in pH. Its units are commonly mol dm⁻³ per pH unit."
        },

        {
            id: 27,
            question: "What is the approximate useful pH transition range of an acid–base indicator with pKa value pKa(In)?",
            options: [
                "pH = pKa(In) ± 1",
                "pH = pKa(In) ± 7",
                "pH = 2 × pKa(In)",
                "pH = pKa(In) / 2"
            ],
            answer: "pH = pKa(In) ± 1",
            explanation: "An indicator typically changes colour over a range of approximately one pH unit below to one pH unit above its pKa."
        },

        {
            id: 28,
            question: "Why is no ordinary visual indicator generally suitable for a weak acid–weak base titration?",
            options: [
                "The colour change is always instantaneous",
                "There is usually no sufficiently sharp pH change at the equivalence point",
                "Both reactants must be insoluble",
                "The pH always remains exactly 7"
            ],
            answer: "There is usually no sufficiently sharp pH change at the equivalence point",
            explanation: "Weak acid–weak base titrations generally lack a steep pH jump, making a visual indicator endpoint unreliable."
        },

        {
            id: 29,
            question: "When a small amount of strong base is added to a buffer containing a weak acid and its conjugate-base salt, what happens?",
            options: [
                "The acid concentration increases and the salt concentration decreases",
                "The acid concentration decreases and the conjugate-base concentration increases",
                "Both concentrations increase",
                "Both concentrations remain unchanged"
            ],
            answer: "The acid concentration decreases and the conjugate-base concentration increases",
            explanation: "The added OH⁻ reacts with the weak acid, converting some HA into A⁻ and water."
        },

        {
            id: 30,
            question: "What is the relationship between Kw, Ka and Kb for a conjugate acid–base pair in water?",
            options: [
                "Kw = Ka + Kb",
                "Kw = Ka / Kb",
                "Kw = Ka × Kb",
                "Kw = √(Ka × Kb)"
            ],
            answer: "Kw = Ka × Kb",
            explanation: "For a conjugate acid–base pair, Ka × Kb = Kw at the same temperature."
        }

    ]

};
/* =========================================
   COMPLETION LOCK
========================================= */

const COMPLETION_KEY =
    "conquerorsLabs_CHM101_completed";


/* =========================================
   RESULT ID
========================================= */

const RESULT_ID_KEY =
    "conquerorsLabs_CHM101_result_id";


/* =========================================
   QUIZ STATE
========================================= */

const questions =
    QUIZ_CONFIG.questions.slice(
        0,
        QUIZ_CONFIG.maxQuestions
    );

let currentQuestion = 0;

let answers =
    new Array(questions.length).fill(null);

let timeRemaining =
    QUIZ_CONFIG.timeLimit * 60;

let timerInterval =
    null;

let quizSubmitted =
    false;

let pendingSubmission =
    false;


/* =========================================
   DOM ELEMENTS
========================================= */

const quizTitle =
    document.getElementById("quizTitle");

const timer =
    document.getElementById("timer");

const timerBox =
    document.querySelector(".timer-box");

const progressText =
    document.getElementById("progressText");

const answeredText =
    document.getElementById("answeredText");

const progressBar =
    document.getElementById("progressBar");

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const optionsContainer =
    document.getElementById("optionsContainer");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const questionNavigator =
    document.getElementById("questionNavigator");

const submitBtn =
    document.getElementById("submitBtn");

const questionArea =
    document.getElementById("questionArea");

const navigatorCard =
    document.querySelector(".navigator-card");

const resultSection =
    document.getElementById("resultSection");

const resultScore =
    document.getElementById("resultScore");

const resultPercentage =
    document.getElementById("resultPercentage");

const resultMessage =
    document.getElementById("resultMessage");

const correctCount =
    document.getElementById("correctCount");

const wrongCount =
    document.getElementById("wrongCount");

const unansweredCount =
    document.getElementById("unansweredCount");

const reviewBtn =
    document.getElementById("reviewBtn");

const retakeBtn =
    document.getElementById("retakeBtn");

const reviewSection =
    document.getElementById("reviewSection");

const reviewContainer =
    document.getElementById("reviewContainer");

const submitModal =
    document.getElementById("submitModal");

const modalText =
    document.getElementById("modalText");

const cancelSubmitBtn =
    document.getElementById("cancelSubmitBtn");

const confirmSubmitBtn =
    document.getElementById("confirmSubmitBtn");


/* =========================================
   NAME MODAL ELEMENTS
========================================= */

const nameModal =
    document.getElementById("nameModal");

const studentNameInput =
    document.getElementById(
        "studentNameInput"
    );

const nameError =
    document.getElementById(
        "nameError"
    );

const cancelNameBtn =
    document.getElementById(
        "cancelNameBtn"
    );

const continueNameBtn =
    document.getElementById(
        "continueNameBtn"
    );


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        if (quizTitle) {

            quizTitle.textContent =
                QUIZ_CONFIG.title;

        }


        if (questions.length === 0) {

            alert(
                "No questions have been added to this CBT yet."
            );

            return;

        }


        if (
            !QUIZ_CONFIG.allowRetake &&
            localStorage.getItem(
                COMPLETION_KEY
            ) === "true"
        ) {

            showAlreadyCompleted();

            return;

        }


        initializeQuiz();

    }
);


/* =========================================
   INITIALIZE QUIZ
========================================= */

function initializeQuiz() {

    buildNavigator();

    renderQuestion();

    updateProgress();

    startTimer();

}


/* =========================================
   RENDER QUESTION
========================================= */

function renderQuestion() {

    const question =
        questions[currentQuestion];


    if (!question) return;


    questionNumber.textContent =
        currentQuestion + 1;


    questionText.textContent =
        question.question;


    optionsContainer.innerHTML =
        "";


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "option";


            if (
                answers[currentQuestion] ===
                option
            ) {

                button.classList.add(
                    "selected"
                );

            }


            const letter =
                document.createElement(
                    "span"
                );

            letter.className =
                "option-letter";

            letter.textContent =
                String.fromCharCode(
                    65 + index
                );


            const text =
                document.createElement(
                    "span"
                );

            text.className =
                "option-text";

            text.textContent =
                option;


            button.appendChild(letter);

            button.appendChild(text);


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        option
                    );

                }
            );


            optionsContainer.appendChild(
                button
            );

        }
    );


    previousBtn.disabled =
        currentQuestion === 0;


    nextBtn.disabled =
        currentQuestion ===
        questions.length - 1;


    updateNavigator();

    updateProgress();

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(option) {

    if (quizSubmitted) return;

    answers[currentQuestion] =
        option;

    renderQuestion();

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

            renderQuestion();

            scrollToQuestion();

        }

    }
);


/* =========================================
   PREVIOUS
========================================= */

previousBtn.addEventListener(
    "click",
    () => {

        if (
            currentQuestion > 0
        ) {

            currentQuestion--;

            renderQuestion();

            scrollToQuestion();

        }

    }
);


/* =========================================
   SCROLL
========================================= */

function scrollToQuestion() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   NAVIGATOR
========================================= */

function buildNavigator() {

    questionNavigator.innerHTML =
        "";


    questions.forEach(
        (_, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "question-number-btn";

            button.textContent =
                index + 1;


            button.addEventListener(
                "click",
                () => {

                    currentQuestion =
                        index;

                    renderQuestion();

                    scrollToQuestion();

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
            ".question-number-btn"
        );


    buttons.forEach(
        (button, index) => {

            button.classList.toggle(
                "answered",
                answers[index] !== null
            );


            button.classList.toggle(
                "current",
                index === currentQuestion
            );

        }
    );

}


/* =========================================
   UPDATE PROGRESS
========================================= */

function updateProgress() {

    const answered =
        answers.filter(
            answer => answer !== null
        ).length;


    const total =
        questions.length;


    const percentage =
        ((currentQuestion + 1) / total) * 100;


    progressText.textContent =
        `Question ${
            currentQuestion + 1
        } of ${total}`;


    answeredText.textContent =
        `${answered} answered`;


    progressBar.style.width =
        `${percentage}%`;

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    updateTimerDisplay();


    timerInterval =
        setInterval(
            () => {

                if (quizSubmitted) {

                    clearInterval(
                        timerInterval
                    );

                    return;

                }


                timeRemaining--;

                updateTimerDisplay();


                if (
                    timeRemaining <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    autoSubmit();

                }

            },
            1000
        );

}


/* =========================================
   TIMER DISPLAY
========================================= */

function updateTimerDisplay() {

    const minutes =
        Math.floor(
            timeRemaining / 60
        );

    const seconds =
        timeRemaining % 60;


    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    timerBox.classList.remove(
        "warning",
        "danger"
    );


    if (
        timeRemaining <= 300 &&
        timeRemaining > 60
    ) {

        timerBox.classList.add(
            "warning"
        );

    }


    if (
        timeRemaining <= 60
    ) {

        timerBox.classList.add(
            "danger"
        );

    }

}


/* =========================================
   SUBMIT BUTTON
========================================= */

submitBtn.addEventListener(
    "click",
    () => {

        if (quizSubmitted) return;


        const unanswered =
            answers.filter(
                answer => answer === null
            ).length;


        if (unanswered > 0) {

            modalText.textContent =
                `You still have ${unanswered} unanswered question${
                    unanswered === 1 ? "" : "s"
                }. Are you sure you want to submit?`;

        } else {

            modalText.textContent =
                "You have answered all 30 questions. Are you ready to submit?";

        }


        submitModal.classList.remove(
            "hidden"
        );

    }
);


/* =========================================
   CANCEL SUBMIT
========================================= */

cancelSubmitBtn.addEventListener(
    "click",
    () => {

        submitModal.classList.add(
            "hidden"
        );

    }
);


/* =========================================
   CONFIRM SUBMIT
========================================= */

confirmSubmitBtn.addEventListener(
    "click",
    () => {

        submitModal.classList.add(
            "hidden"
        );

        submitQuiz();

    }
);


/* =========================================
   AUTO SUBMIT
========================================= */

function autoSubmit() {

    alert(
        "Time is up! Your CBT will now be submitted automatically."
    );

    submitQuiz();

}


/* =========================================
   SUBMIT QUIZ
========================================= */

async function submitQuiz() {

    if (
        quizSubmitted ||
        pendingSubmission
    ) return;


    pendingSubmission = true;


    clearInterval(
        timerInterval
    );


    let correct =
        0;

    let wrong =
        0;

    let unanswered =
        0;


    questions.forEach(
        (question, index) => {

            const userAnswer =
                answers[index];


            if (userAnswer === null) {

                unanswered++;

            } else if (
                userAnswer === question.answer
            ) {

                correct++;

            } else {

                wrong++;

            }

        }
    );


    const total =
        questions.length;


    const percentage =
        Math.round(
            (correct / total) * 100
        );


    const qualifiedForLeaderboard =
        percentage >= QUIZ_CONFIG.passMark;


    /*
        Ask for name through the
        custom in-page modal.
    */

    openNameModal();


    /*
        Do not lock the quiz or save
        anything until the student
        actually provides a name.
    */

}


/* =========================================
   OPEN NAME MODAL
========================================= */

function openNameModal() {

    nameError.classList.add(
        "hidden"
    );


    studentNameInput.value =
        "";


    nameModal.classList.remove(
        "hidden"
    );


    setTimeout(
        () => {

            studentNameInput.focus();

        },
        100
    );

}


/* =========================================
   CANCEL NAME
========================================= */

cancelNameBtn.addEventListener(
    "click",
    () => {

        nameModal.classList.add(
            "hidden"
        );


        pendingSubmission = false;


        startTimer();

    }
);


/* =========================================
   CONTINUE NAME
========================================= */

continueNameBtn.addEventListener(
    "click",
    () => {

        processNameSubmission();

    }
);


/* =========================================
   ENTER KEY
========================================= */

studentNameInput.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();

            processNameSubmission();

        }

    }
);


/* =========================================
   PROCESS NAME SUBMISSION
========================================= */

async function processNameSubmission() {

    const studentName =
        studentNameInput.value.trim();


    if (!studentName) {

        nameError.textContent =
            "Please enter your name.";

        nameError.classList.remove(
            "hidden"
        );

        studentNameInput.focus();

        return;

    }


    nameError.classList.add(
        "hidden"
    );


    continueNameBtn.disabled =
        true;

    continueNameBtn.textContent =
        "SAVING...";


    const correct =
        calculateCorrectAnswers();

    const total =
        questions.length;

    const unanswered =
        calculateUnanswered();

    const wrong =
        total -
        correct -
        unanswered;

    const percentage =
        Math.round(
            (correct / total) * 100
        );

    const qualifiedForLeaderboard =
        percentage >= QUIZ_CONFIG.passMark;


    const resultId =
        await saveQuizResult(
            studentName,
            correct,
            total,
            percentage,
            qualifiedForLeaderboard
        );


    if (!resultId) {

        continueNameBtn.disabled =
            false;

        continueNameBtn.textContent =
            "CONTINUE";

        nameError.textContent =
            "Your result could not be saved. Please try again.";

        nameError.classList.remove(
            "hidden"
        );

        pendingSubmission =
            false;

        startTimer();

        return;

    }


    /*
        Store the Supabase result UUID.
        The leaderboard page uses this
        to retrieve the student's
        personal result later.
    */

    localStorage.setItem(
        RESULT_ID_KEY,
        resultId
    );


    /*
        Result has now been safely saved.
        Only now lock the attempt.
    */

    quizSubmitted =
        true;

    pendingSubmission =
        false;


    if (!QUIZ_CONFIG.allowRetake) {

        localStorage.setItem(
            COMPLETION_KEY,
            "true"
        );

    }


    clearInterval(
        timerInterval
    );


    nameModal.classList.add(
        "hidden"
    );


    const leaderboardSettings =
        await getLeaderboardSettings();


    if (!leaderboardSettings) {

        showLockedResult(
            "Your quiz was submitted successfully. Your result is temporarily locked while the leaderboard is being prepared.please join Conqueror Labs WhatsApp channel to be notified when the result drops. Thank you 🌹"
        );

        return;

    }


    const leaderboardIsEnabled =
        leaderboardSettings.leaderboard_enabled === true ||
        leaderboardSettings.leaderboard_enabled === "true";


    if (!leaderboardIsEnabled) {

        showLockedResult(
            "Your quiz has been submitted successfully. Your result and leaderboard position are currently locked. Results will be available when the leaderboard is opened.Please join the Conqueror Labs WhatsApp channel to be notified when the result drops 🌹"
        );

        return;

    }


    showResults(
        correct,
        wrong,
        unanswered,
        percentage
    );

}


/* =========================================
   CALCULATE CORRECT
========================================= */

function calculateCorrectAnswers() {

    let correct =
        0;


    questions.forEach(
        (question, index) => {

            if (
                answers[index] ===
                question.answer
            ) {

                correct++;

            }

        }
    );


    return correct;

}


/* =========================================
   CALCULATE UNANSWERED
========================================= */

function calculateUnanswered() {

    return answers.filter(
        answer => answer === null
    ).length;

}


/* =========================================
   SAVE QUIZ RESULT
========================================= */

async function saveQuizResult(
    studentName,
    score,
    totalQuestions,
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
                        totalQuestions,

                    p_percentage:
                        percentage,

                    p_qualified_for_leaderboard:
                        qualifiedForLeaderboard
                }
            );


        if (error) {

            console.error(
                "Quiz result save error:",
                error
            );

            return false;

        }


        /*
            The RPC returns the UUID of
            the newly created quiz result.
        */

        if (!data) {

            console.error(
                "Quiz result save error: No result ID returned."
            );

            return false;

        }


        return data;

    } catch (error) {

        console.error(
            "Quiz result JavaScript error:",
            error
        );

        return false;

    }

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
   SHOW RESULTS
========================================= */

function showResults(
    correct,
    wrong,
    unanswered,
    percentage
) {

    correctCount.textContent =
        correct;

    wrongCount.textContent =
        wrong;

    unansweredCount.textContent =
        unanswered;


    resultScore.textContent =
        `${correct} / ${questions.length}`;


    resultPercentage.textContent =
        `${percentage}%`;


    resultMessage.textContent =
        getResultMessage(
            percentage
        );


    questionArea.classList.add(
        "hidden"
    );


    navigatorCard.classList.add(
        "hidden"
    );


    submitBtn.classList.add(
        "hidden"
    );


    resultSection.classList.remove(
        "hidden"
    );


    reviewBtn.classList.remove(
        "hidden"
    );


    retakeBtn.classList.add(
        "hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   LOCKED RESULT
========================================= */

function showLockedResult(message) {

    questionArea.classList.add(
        "hidden"
    );


    navigatorCard.classList.add(
        "hidden"
    );


    submitBtn.classList.add(
        "hidden"
    );


    resultSection.classList.remove(
        "hidden"
    );


    resultScore.textContent =
        "🔒";


    resultPercentage.textContent =
        "";


    resultMessage.textContent =
        message;


    if (reviewBtn) {

        reviewBtn.classList.add(
            "hidden"
        );

    }


    if (retakeBtn) {

        retakeBtn.classList.add(
            "hidden"
        );

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

    if (percentage >= 90) {

        return "Outstanding! You conquered CHM 101 at a very high level. 🔥";

    }


    if (percentage >= 80) {

        return "Excellent performance! Your CHM 101 foundation is looking strong. 🧪";

    }


    if (percentage >= 70) {

        return "Great job! You have a solid grasp of the material. Keep sharpening it.";

    }


    if (percentage >= 60) {

        return "Good attempt. Review the corrections carefully and strengthen the weaker areas.";

    }


    if (percentage >= 50) {

        return "You have a foundation to build on. Use the corrections to lock in the concepts.";

    }


    return "This is your starting point. Review the corrections, learn from the misses, and come back stronger.";

}


/* =========================================
   REVIEW BUTTON
========================================= */

reviewBtn.addEventListener(
    "click",
    () => {

        generateReview();


        reviewSection.classList.remove(
            "hidden"
        );


        reviewSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* =========================================
   GENERATE REVIEW
========================================= */

function generateReview() {

    reviewContainer.innerHTML =
        "";


    questions.forEach(
        (question, index) => {

            const userAnswer =
                answers[index];


            const isCorrect =
                userAnswer ===
                question.answer;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                `review-card ${
                    isCorrect
                        ? "correct"
                        : "wrong"
                }`;


            const questionNumber =
                document.createElement(
                    "div"
                );

            questionNumber.className =
                "review-question-number";

            questionNumber.textContent =
                `QUESTION ${index + 1}`;


            const questionText =
                document.createElement(
                    "div"
                );

            questionText.className =
                "review-question";

            questionText.textContent =
                question.question;


            const yourAnswer =
                document.createElement(
                    "div"
                );

            yourAnswer.className =
                "review-answer";


            const yourAnswerLabel =
                document.createElement(
                    "strong"
                );

            yourAnswerLabel.textContent =
                "Your answer: ";


            const yourAnswerValue =
                document.createTextNode(
                    userAnswer ??
                    "Not answered"
                );


            yourAnswer.appendChild(
                yourAnswerLabel
            );

            yourAnswer.appendChild(
                yourAnswerValue
            );


            const correctAnswer =
                document.createElement(
                    "div"
                );

            correctAnswer.className =
                "review-answer";


            const correctLabel =
                document.createElement(
                    "strong"
                );

            correctLabel.textContent =
                "Correct answer: ";


            const correctValue =
                document.createTextNode(
                    question.answer
                );


            correctAnswer.appendChild(
                correctLabel
            );

            correctAnswer.appendChild(
                correctValue
            );


            const correction =
                document.createElement(
                    "div"
                );

            correction.className =
                "review-correction";

            correction.textContent =
                `💡 Correction: ${question.explanation}`;


            card.appendChild(
                questionNumber
            );

            card.appendChild(
                questionText
            );

            card.appendChild(
                yourAnswer
            );

            card.appendChild(
                correctAnswer
            );

            card.appendChild(
                correction
            );


            reviewContainer.appendChild(
                card
            );

        }
    );

}


/* =========================================
   RETAKE
========================================= */

retakeBtn.addEventListener(
    "click",
    () => {

        if (
            !QUIZ_CONFIG.allowRetake
        ) {

            return;

        }


        localStorage.removeItem(
            COMPLETION_KEY
        );


        location.reload();

    }
);


/* =========================================
   ALREADY COMPLETED SCREEN
========================================= */

function showAlreadyCompleted() {

    quizSubmitted =
        true;


    if (questionArea) {

        questionArea.classList.add(
            "hidden"
        );

    }


    if (navigatorCard) {

        navigatorCard.classList.add(
            "hidden"
        );

    }


    if (submitBtn) {

        submitBtn.classList.add(
            "hidden"
        );

    }


    if (resultSection) {

        resultSection.classList.remove(
            "hidden"
        );

    }


    if (resultScore) {

        resultScore.textContent =
            "✓";

    }


    if (resultPercentage) {

        resultPercentage.textContent =
            "";

    }


    if (resultMessage) {

        resultMessage.textContent =
            "You have already completed this CBT. Only one attempt is allowed.";

    }


    if (reviewBtn) {

        reviewBtn.classList.add(
            "hidden"
        );

    }


    if (retakeBtn) {

        retakeBtn.classList.add(
            "hidden"
        );

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
