/* =========================================
   CONQUERORS LABS
   PHY 101 CBT
========================================= */


/* =========================================
   QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {

    title:
        "DIMESIONAL ANALYSIS",

    timeLimit:
        30,

    /*
        The engine can support up to 100
        questions.

        This particular quiz contains 50.
    */
    maxQuestions:
        100,

    /*
        false = one attempt only
        true  = retakes allowed
    */
    allowRetake:
        false,


    /* =====================================
       QUESTIONS
    ===================================== */

    questions: [


       {
        id: 1,
        question: "How many fundamental quantities are officially defined in physics?",
        options: [
            "3",
            "5",
            "7",
            "9"
        ],
        answer: "7",
        explanation: "The SI system defines seven base quantities: length, mass, time, electric current, thermodynamic temperature, amount of substance, and luminous intensity."
    },
    {
        id: 2,
        question: "Which of the following is a fundamental quantity rather than a derived quantity?",
        options: [
            "Volume",
            "Electric current",
            "Force",
            "Density"
        ],
        answer: "Electric current",
        explanation: "Electric current is an SI base quantity, measured in amperes (A). Volume, force, and density are derived quantities."
    },
    {
        id: 3,
        question: "What is the standard SI unit for the amount of substance?",
        options: [
            "Kilogram (kg)",
            "Ampere (A)",
            "Mole (mol)",
            "Candela (cd)"
        ],
        answer: "Mole (mol)",
        explanation: "The mole is the SI base unit for the amount of substance."
    },
    {
        id: 4,
        question: "What does the unit of a physical quantity fundamentally tell us?",
        options: [
            "The dimensional formula of the substance",
            "The scale in which its measurement is made",
            "The exact quantity of matter present",
            "Whether the quantity is intensive or extensive"
        ],
        answer: "The scale in which its measurement is made",
        explanation: "A unit provides a standard reference scale for expressing the magnitude of a physical quantity."
    },
    {
        id: 5,
        question: "All quantities in mechanics can be expressed using which three fundamental dimensions?",
        options: [
            "Length, Mass, and Time",
            "Force, Energy, and Power",
            "Current, Temperature, and Mass",
            "Mole, Candela, and Kelvin"
        ],
        answer: "Length, Mass, and Time",
        explanation: "In mechanics, derived quantities can be expressed using the fundamental dimensions L, M, and T."
    },
    {
        id: 6,
        question: "What is the approximate order of magnitude of the thickness of a human hair?",
        options: [
            "1 femtometre (fm)",
            "100 micrometres (μm)",
            "4.5 terametres (Tm)",
            "7,000 megawatts (MW)"
        ],
        answer: "100 micrometres (μm)",
        explanation: "Human hair is typically tens of micrometres thick, often around 50–100 μm, depending on the individual and hair type."
    },
    {
        id: 7,
        question: "Which SI prefix corresponds to a multiplier of 10⁻⁹?",
        options: [
            "Micro (μ)",
            "Nano (n)",
            "Pico (p)",
            "Femto (f)"
        ],
        answer: "Nano (n)",
        explanation: "The prefix nano represents 10⁻⁹, or one-billionth of a unit."
    },
    {
        id: 8,
        question: "What is the derived SI unit of power expressed in base units?",
        options: [
            "kg·m/s²",
            "kg·m²/s²",
            "J/s or kg·m²/s³",
            "kg·m⁻¹·s⁻²"
        ],
        answer: "J/s or kg·m²/s³",
        explanation: "Power is energy transferred per unit time. Since 1 J = 1 kg·m²/s², power has units kg·m²/s³."
    },
    {
        id: 9,
        question: "What is the correct dimensional formula for pressure (p)?",
        options: [
            "LT⁻¹",
            "MLT⁻²",
            "ML⁻³",
            "ML⁻¹T⁻²"
        ],
        answer: "ML⁻¹T⁻²",
        explanation: "Pressure equals force divided by area. Therefore, its dimensions are (MLT⁻²)/L² = ML⁻¹T⁻²."
    },
    {
        id: 10,
        question: "According to dimensional analysis, what must be true of the terms in a physically valid equation?",
        options: [
            "They must all be dimensionless pure numbers",
            "They must have the same dimensions",
            "Their exponents must equal zero",
            "They must depend only on mass and length"
        ],
        answer: "They must have the same dimensions",
        explanation: "Dimensional homogeneity requires quantities added or subtracted in an equation to have identical dimensions."
    },
    {
        id: 11,
        question: "What is a dimensionless quantity also commonly called?",
        options: [
            "A fundamental base unit",
            "A super unit",
            "A pure number",
            "A scalar vector"
        ],
        answer: "A pure number",
        explanation: "A dimensionless quantity has no net physical dimensions and can be expressed as a pure number."
    },
    {
        id: 12,
        question: "Which of the following is dimensionless despite having units in common measurement systems?",
        options: [
            "Velocity",
            "Acceleration",
            "Angles (radians/degrees)",
            "Density"
        ],
        answer: "Angles (radians/degrees)",
        explanation: "A plane angle in radians is the ratio of arc length to radius, so its dimensions cancel. Degrees are another unit for the same dimensionless quantity."
    },
    {
        id: 13,
        question: "In the dimensional formula LᵃMᵇTᶜIᵈΘᵉNᶠJᵍ, what condition makes a quantity dimensionless?",
        options: [
            "All exponents equal zero",
            "All exponents equal one",
            "Only the mass exponent equals zero",
            "The quantity is measured in SI units"
        ],
        answer: "All exponents equal zero",
        explanation: "A dimensionless quantity has zero net exponent for every base dimension."
    },
    {
        id: 14,
        question: "If x = At² + B and y = Dt³ - E represent displacements, what are the dimensions of A and D?",
        options: [
            "A = LT⁻², D = LT³",
            "A = LT⁻², D = LT⁻³",
            "A = L², D = LT⁻³",
            "A = LT⁻³, D = LT³"
        ],
        answer: "A = LT⁻², D = LT⁻³",
        explanation: "Every term added to a displacement must have dimension L. Thus [A]T² = L and [D]T³ = L, giving [A] = LT⁻² and [D] = LT⁻³."
    },
    {
        id: 15,
        question: "When checking v² = u² + 2as using dimensional analysis, what is the dimension shared by every term?",
        options: [
            "LT⁻¹",
            "L²T⁻²",
            "ML²T⁻²",
            "LT⁻²"
        ],
        answer: "L²T⁻²",
        explanation: "Velocity squared has dimensions L²T⁻². Also, acceleration multiplied by displacement gives (LT⁻²)(L) = L²T⁻²."
    },
    {
        id: 16,
        question: "For a simple pendulum, suppose T ∝ lˣmʸgᶻ. Why is the mass exponent y equal to zero?",
        options: [
            "Mass has no dimensional representation in mechanics",
            "Equating the mass dimensions on both sides gives y = 0",
            "Mass is a fundamental unit that cancels with time",
            "The constant k absorbs the mass variable"
        ],
        answer: "Equating the mass dimensions on both sides gives y = 0",
        explanation: "The period T has no mass dimension, while l has none and g has none involving mass. Therefore, matching mass exponents gives y = 0."
    },
    {
        id: 17,
        question: "In deriving the simple pendulum period from T ∝ lˣmʸgᶻ, what equation results from equating the time dimensions?",
        options: [
            "x + z = 0",
            "-2z = 1",
            "y = 0",
            "x = 1/2"
        ],
        answer: "-2z = 1",
        explanation: "Since [g] = LT⁻² and the period has dimension T¹, matching time exponents gives -2z = 1, so z = -1/2."
    },
    {
        id: 18,
        question: "What is the dimension of the derivative of velocity with respect to time, [dv/dt]?",
        options: [
            "LT⁻¹",
            "LT⁻²",
            "MLT⁻²",
            "L²T⁻²"
        ],
        answer: "LT⁻²",
        explanation: "Velocity has dimensions LT⁻¹. Dividing by time gives acceleration with dimensions LT⁻²."
    },
    {
        id: 19,
        question: "What is the dimension of the integral of velocity with respect to time, [∫v dt]?",
        options: [
            "L (Length)",
            "T (Time)",
            "LT⁻²",
            "ML²T⁻²"
        ],
        answer: "L (Length)",
        explanation: "Velocity multiplied by time has dimensions (LT⁻¹)(T) = L, corresponding to displacement."
    },
    {
        id: 20,
        question: "Why does a physical value without its unit of measurement have incomplete meaning?",
        options: [
            "Dimensions can only be calculated using SI base units",
            "The unit provides the specific scale used for the measurement",
            "Pure numbers cannot be evaluated without a prefix",
            "All derived quantities must be converted into fundamental quantities"
        ],
        answer: "The unit provides the specific scale used for the measurement",
        explanation: "A numerical value alone does not specify the measurement scale; for example, 5 metres and 5 kilometres represent different lengths."
    }
];
            


/* =========================================
   COMPLETION LOCK
========================================= */

const COMPLETION_KEY =
    "conquerorsLabs_PHY101_completed";


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

let timerInterval = null;

let quizSubmitted = false;


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
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        quizTitle.textContent =
            QUIZ_CONFIG.title;


        if (questions.length === 0) {

            alert(
                "No questions have been added to this CBT yet."
            );

            return;
        }


        /*
            ONE-ATTEMPT LOCK
        */

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
                document.createElement("button");

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
                document.createElement("span");

            letter.className =
                "option-letter";

            letter.textContent =
                String.fromCharCode(
                    65 + index
                );


            const text =
                document.createElement("span");

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
   BUILD NAVIGATOR
========================================= */

function buildNavigator() {

    questionNavigator.innerHTML =
        "";


    questions.forEach(
        (_, index) => {

            const button =
                document.createElement("button");

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
                "You have answered all 50 questions. Are you ready to submit?";

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

function submitQuiz() {

    if (quizSubmitted) return;


    quizSubmitted = true;


    clearInterval(
        timerInterval
    );


    let correct = 0;

    let wrong = 0;

    let unanswered = 0;


    questions.forEach(
        (question, index) => {

            const userAnswer =
                answers[index];


            if (
                userAnswer === null
            ) {

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


    /*
        Save completion.
    */

    if (
        !QUIZ_CONFIG.allowRetake
    ) {

        localStorage.setItem(
            COMPLETION_KEY,
            "true"
        );

    }


    correctCount.textContent =
        correct;

    wrongCount.textContent =
        wrong;

    unansweredCount.textContent =
        unanswered;


    resultScore.textContent =
        `${correct} / ${total}`;


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


    if (
        QUIZ_CONFIG.allowRetake
    ) {

        retakeBtn.classList.remove(
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

        return "Outstanding! You absolutely conquered this PHY 101 set. ⚡🔥";

    }

    if (percentage >= 80) {

        return "Excellent performance! Your understanding of vectors and kinematics is strong. ⚡";

    }

    if (percentage >= 70) {

        return "Great job! You have a solid grasp of the concepts. Keep sharpening your calculations.";

    }

    if (percentage >= 60) {

        return "Good attempt. Review the corrections carefully and lock in the formulas.";

    }

    if (percentage >= 50) {

        return "You have a foundation to build on. Study the corrections and attack the weak areas.";

    }

    return "This is your starting point. Review every correction, rebuild the concepts, and come back stronger.";

}


/* =========================================
   REVIEW
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
                document.createElement("div");

            card.className =
                `review-card ${
                    isCorrect
                        ? "correct"
                        : "wrong"
                }`;


            const questionNumber =
                document.createElement("div");

            questionNumber.className =
                "review-question-number";

            questionNumber.textContent =
                `QUESTION ${index + 1}`;


            const questionText =
                document.createElement("div");

            questionText.className =
                "review-question";

            questionText.textContent =
                question.question;


            const yourAnswer =
                document.createElement("div");

            yourAnswer.className =
                "review-answer";


            const yourLabel =
                document.createElement("strong");

            yourLabel.textContent =
                "Your answer: ";


            yourAnswer.appendChild(
                yourLabel
            );

            yourAnswer.appendChild(
                document.createTextNode(
                    userAnswer ??
                    "Not answered"
                )
            );


            const correctAnswer =
                document.createElement("div");

            correctAnswer.className =
                "review-answer";


            const correctLabel =
                document.createElement("strong");

            correctLabel.textContent =
                "Correct answer: ";


            correctAnswer.appendChild(
                correctLabel
            );

            correctAnswer.appendChild(
                document.createTextNode(
                    question.answer
                )
            );


            const correction =
                document.createElement("div");

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
   ALREADY COMPLETED
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
