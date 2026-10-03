/* =========================================
   CONQUERORS LABS
   MATH 101 — POLYNOMIALS
   QUIZ ENGINE
========================================= */


/* =========================================
   QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {

    title: "MATH 101 — POLYNOMIALS",

    timeLimit: 40,

    maxQuestions: 100,

    allowRetake: true,

    questions: [

        /* =====================================
           QUESTION 1
        ===================================== */

        {
            id: 1,

            question:
                "If P(x) = x⁴ + ax³ + 5x² + bx + 6 is exactly divisible by (x - 2)(x - 1), what are the values of a and b?",

            options: [
                "a = -5/3, b = -31/3",
                "a = -3, b = -9",
                "a = 5/3, b = 31/3",
                "a = -2, b = -10"
            ],

            answer: 1,

            explanation:
                "Since (x - 2)(x - 1) divides P(x), both x = 1 and x = 2 are roots. Therefore P(1) = 0: 1 + a + 5 + b + 6 = 0, giving a + b = -12. Also, P(2) = 0: 16 + 8a + 20 + 2b + 6 = 0, giving 4a + b = -21. Subtracting the equations gives 3a = -9, so a = -3. Therefore b = -9."
        },


        /* =====================================
           QUESTION 2
        ===================================== */

        {
            id: 2,

            question:
                "Let α, β, and γ be the roots of 2x³ - 4x² + 5x - 7 = 0. What is 1/α + 1/β + 1/γ?",

            options: [
                "2/7",
                "5/7",
                "-5/7",
                "7/5"
            ],

            answer: 1,

            explanation:
                "By Vieta's formulas, αβ + αγ + βγ = 5/2 and αβγ = 7/2. Therefore, 1/α + 1/β + 1/γ = (αβ + αγ + βγ)/(αβγ) = (5/2)/(7/2) = 5/7."
        },


        /* =====================================
           QUESTION 3
        ===================================== */

        {
            id: 3,

            question:
                "When P(x) is divided by (x - 3), the remainder is 4; when divided by (x + 2), the remainder is -1. What is the remainder when P(x) is divided by x² - x - 6?",

            options: [
                "x - 1",
                "2x + 2",
                "x + 1",
                "-x + 7"
            ],

            answer: 2,

            explanation:
                "Since x² - x - 6 = (x - 3)(x + 2), the remainder must be of degree less than 2. Let R(x) = ax + b. Since P(3) = 4, we have 3a + b = 4. Since P(-2) = -1, we have -2a + b = -1. Subtracting gives 5a = 5, so a = 1. Therefore b = 1, and R(x) = x + 1."
        },


        /* =====================================
           QUESTION 4
        ===================================== */

        {
            id: 4,

            question:
                "What is the remainder when P(x) = 3x⁵⁰ - 2x²⁵ + 4 is divided by (x + 1)?",

            options: [
                "1",
                "5",
                "9",
                "-1"
            ],

            answer: 2,

            explanation:
                "By the Remainder Theorem, the remainder is P(-1). Since (-1)⁵⁰ = 1 and (-1)²⁵ = -1, P(-1) = 3(1) - 2(-1) + 4 = 3 + 2 + 4 = 9."
        },


        /* =====================================
           QUESTION 5
        ===================================== */

        {
            id: 5,

            question:
                "For what value(s) of k does P(x) = x³ - 3x² + k have a double root?",

            options: [
                "k = 0 only",
                "k = 2 or k = 4",
                "k = 0 or k = 4",
                "k = ±3"
            ],

            answer: 2,

            explanation:
                "A repeated root must satisfy both P(x) = 0 and P'(x) = 0. We have P'(x) = 3x² - 6x = 3x(x - 2), so the possible repeated roots are x = 0 and x = 2. For x = 0, P(0) = k = 0. For x = 2, P(2) = 8 - 12 + k = 0, giving k = 4. Therefore k = 0 or k = 4."
        },


        /* =====================================
           QUESTION 6
        ===================================== */

        {
            id: 6,

            question:
                "A monic cubic polynomial with real coefficients has a constant term of 26, and 2 - 3i is one of its roots. What is its third root?",

            options: [
                "-2",
                "2",
                "-13",
                "13"
            ],

            answer: 0,

            explanation:
                "Because the polynomial has real coefficients, the complex conjugate 2 + 3i must also be a root. Their product is (2 - 3i)(2 + 3i) = 2² + 3² = 13. For a monic cubic, the product of the three roots equals -constant term = -26. Therefore 13r = -26, giving r = -2."
        },


        /* =====================================
           QUESTION 7
        ===================================== */

        {
            id: 7,

            question:
                "If α and β are the roots of x² - 5x + 3 = 0, which equation has roots α² and β²?",

            options: [
                "x² - 19x + 9 = 0",
                "x² + 19x - 9 = 0",
                "x² - 25x + 9 = 0",
                "x² - 5x + 9 = 0"
            ],

            answer: 0,

            explanation:
                "From Vieta's formulas, α + β = 5 and αβ = 3. Therefore α² + β² = (α + β)² - 2αβ = 25 - 6 = 19. Also, α²β² = (αβ)² = 9. Hence the equation with roots α² and β² is x² - 19x + 9 = 0."
        },


        /* =====================================
           QUESTION 8
        ===================================== */

        {
            id: 8,

            question:
                "According to the Rational Root Theorem, which of the following is a possible rational root of 4x³ - 6x² + 3x - 9 = 0?",

            options: [
                "5/2",
                "7/4",
                "9/4",
                "11/3"
            ],

            answer: 2,

            explanation:
                "By the Rational Root Theorem, a rational root p/q in lowest terms must have p as a factor of the constant term and q as a factor of the leading coefficient. The factors of 9 can appear in the numerator, while the factors of 4 can appear in the denominator. Therefore 9/4 is a possible rational root."
        },


        /* =====================================
           QUESTION 9
        ===================================== */

        {
            id: 9,

            question:
                "What is the sum of all coefficients in the expansion of (2x³ - 5x + 3)⁴?",

            options: [
                "0",
                "1",
                "16",
                "81"
            ],

            answer: 0,

            explanation:
                "The sum of the coefficients of a polynomial is found by substituting x = 1. Therefore, the required sum is (2(1)³ - 5(1) + 3)⁴ = (2 - 5 + 3)⁴ = 0⁴ = 0."
        },


        /* =====================================
           QUESTION 10
        ===================================== */

        {
            id: 10,

            question:
                "If x² / [(x + 1)(x - 2)²] = A/(x + 1) + B/(x - 2) + C/(x - 2)², what is C?",

            options: [
                "1/3",
                "2/3",
                "4/3",
                "2"
            ],

            answer: 2,

            explanation:
                "Multiply both sides by (x + 1)(x - 2)². We get x² = A(x - 2)² + B(x + 1)(x - 2) + C(x + 1). Put x = 2. Then 4 = 3C, so C = 4/3."
        },


        /* =====================================
           QUESTION 11
        ===================================== */

        {
            id: 11,

            question:
                "If P(x) has degree 4 and Q(x) has degree 3, what is the degree of P(x²) · Q(x)?",

            options: [
                "7",
                "11",
                "12",
                "14"
            ],

            answer: 1,

            explanation:
                "If P(x) has degree 4, then replacing x by x² gives P(x²) degree 8. Since Q(x) has degree 3, the degree of P(x²)Q(x) is 8 + 3 = 11."
        },


        /* =====================================
           QUESTION 12
        ===================================== */

        {
            id: 12,

            question:
                "If α and β are roots of x² + 3x - 5 = 0, find the quadratic equation whose roots are 2α + 1 and 2β + 1.",

            options: [
                "x² + 6x - 15 = 0",
                "x² + 4x - 25 = 0",
                "x² - 4x + 25 = 0",
                "x² + 2x - 33 = 0"
            ],

            answer: 1,

            explanation:
                "From x² + 3x - 5 = 0, Vieta's formulas give α + β = -3 and αβ = -5. Let the new roots be r₁ = 2α + 1 and r₂ = 2β + 1. Their sum is r₁ + r₂ = 2(α + β) + 2 = -6 + 2 = -4. Their product is r₁r₂ = (2α + 1)(2β + 1) = 4αβ + 2(α + β) + 1 = -20 - 6 + 1 = -25. Therefore the required quadratic equation is x² - (sum)x + product = x² + 4x - 25 = 0."
        },


        /* =====================================
           QUESTION 13
        ===================================== */

        {
            id: 13,

            question:
                "For P(x) = x⁴ + px² + q to be divisible by (x - 1)², which values of p and q are required?",

            options: [
                "p = -2, q = 1",
                "p = 2, q = -1",
                "p = -1, q = 2",
                "p = 1, q = -2"
            ],

            answer: 0,

            explanation:
                "For (x - 1)² to divide P(x), x = 1 must be a repeated root. Therefore both P(1) = 0 and P'(1) = 0. We have P'(x) = 4x³ + 2px. Thus P'(1) = 4 + 2p = 0, giving p = -2. Then P(1) = 1 - 2 + q = 0, giving q = 1."
        },


        /* =====================================
           QUESTION 14
        ===================================== */

        {
            id: 14,

            question:
                "What is the remainder when x¹⁰¹ + 101 is divided by x + 1?",

            options: [
                "0",
                "100",
                "102",
                "202"
            ],

            answer: 1,

            explanation:
                "By the Remainder Theorem, substitute x = -1. Since (-1)¹⁰¹ = -1, the remainder is (-1) + 101 = 100."
        },


        /* =====================================
           QUESTION 15
        ===================================== */

        {
            id: 15,

            question:
                "If x = 2 is a root of the polynomial P(x) = x³ - 5x² + kx + 6, what is the value of k?",

            options: [
                "0",
                "1",
                "2",
                "3"
            ],

            answer: 3,

            explanation:
                "Since x = 2 is a root, P(2) = 0. Substituting x = 2 gives 2³ - 5(2²) + 2k + 6 = 0. Therefore 8 - 20 + 2k + 6 = 0, which simplifies to 2k - 6 = 0. Hence 2k = 6 and k = 3."
        }

    ]

};


/* =========================================
   SETTINGS
========================================= */

const COMPLETION_KEY =
    "conquerorsLabs_MATH101_completed";


const questions =
    QUIZ_CONFIG.questions.slice(
        0,
        QUIZ_CONFIG.maxQuestions
    );


/* =========================================
   STATE
========================================= */

let currentQuestion = 0;

let userAnswers =
    new Array(questions.length).fill(null);

let timeRemaining =
    QUIZ_CONFIG.timeLimit * 60;

let timerInterval = null;

let quizSubmitted = false;


/* =========================================
   ELEMENTS
========================================= */

const questionContainer =
    document.getElementById(
        "questionContainer"
    );

const questionNavigator =
    document.getElementById(
        "questionNavigator"
    );

const questionCount =
    document.getElementById(
        "questionCount"
    );

const answeredCount =
    document.getElementById(
        "answeredCount"
    );

const progressFill =
    document.getElementById(
        "progressFill"
    );

const timer =
    document.getElementById(
        "timer"
    );

const timerBox =
    document.getElementById(
        "timerBox"
    );

const prevBtn =
    document.getElementById(
        "prevBtn"
    );

const nextBtn =
    document.getElementById(
        "nextBtn"
    );

const submitBtn =
    document.getElementById(
        "submitBtn"
    );

const quizSection =
    document.getElementById(
        "quizSection"
    );

const resultSection =
    document.getElementById(
        "resultSection"
    );

const reviewSection =
    document.getElementById(
        "reviewSection"
    );

const reviewContainer =
    document.getElementById(
        "reviewContainer"
    );

const reviewBtn =
    document.getElementById(
        "reviewBtn"
    );

const retakeBtn =
    document.getElementById(
        "retakeBtn"
    );

const submitModal =
    document.getElementById(
        "submitModal"
    );

const cancelSubmit =
    document.getElementById(
        "cancelSubmit"
    );

const confirmSubmit =
    document.getElementById(
        "confirmSubmit"
    );


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    initQuiz
);


function initQuiz() {

    if (!questions.length) {

        questionContainer.innerHTML =
            "<p>No questions available.</p>";

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


    renderNavigator();

    showQuestion();

    updateProgress();

    startTimer();
}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const q =
        questions[currentQuestion];


    questionContainer.innerHTML = "";


    const card =
        document.createElement("div");

    card.className =
        "question-card";


    const number =
        document.createElement("div");

    number.className =
        "question-number";

    number.textContent =
        `QUESTION ${currentQuestion + 1}`;


    const heading =
        document.createElement("h2");

    heading.textContent =
        q.question;


    const optionsContainer =
        document.createElement("div");

    optionsContainer.className =
        "options-container";


    q.options.forEach(
        (optionText, index) => {

            const letter =
                String.fromCharCode(
                    65 + index
                );


            const option =
                document.createElement(
                    "button"
                );

            option.type = "button";

            option.className =
                "option";


            if (
                userAnswers[
                    currentQuestion
                ] === index
            ) {

                option.classList.add(
                    "selected"
                );
            }


            const optionLetter =
                document.createElement(
                    "span"
                );

            optionLetter.className =
                "option-letter";

            optionLetter.textContent =
                letter;


            const text =
                document.createElement(
                    "span"
                );

            text.className =
                "option-text";

            text.textContent =
                optionText;


            option.appendChild(
                optionLetter
            );

            option.appendChild(
                text
            );


            option.addEventListener(
                "click",
                () => {

                    if (quizSubmitted) {
                        return;
                    }

                    userAnswers[
                        currentQuestion
                    ] = index;

                    showQuestion();

                    updateProgress();

                    renderNavigator();
                }
            );


            optionsContainer.appendChild(
                option
            );
        }
    );


    card.appendChild(number);

    card.appendChild(heading);

    card.appendChild(
        optionsContainer
    );


    questionContainer.appendChild(
        card
    );


    updateNavigationButtons();

    updateProgress();
}


/* =========================================
   NAVIGATION
========================================= */

prevBtn.addEventListener(
    "click",
    () => {

        if (
            currentQuestion > 0
        ) {

            currentQuestion--;

            showQuestion();

            renderNavigator();
        }
    }
);


nextBtn.addEventListener(
    "click",
    () => {

        if (
            currentQuestion <
            questions.length - 1
        ) {

            currentQuestion++;

            showQuestion();

            renderNavigator();
        }
    }
);


function updateNavigationButtons() {

    prevBtn.disabled =
        currentQuestion === 0;


    nextBtn.disabled =
        currentQuestion ===
        questions.length - 1;
}


/* =========================================
   QUESTION NAVIGATOR
========================================= */

function renderNavigator() {

    questionNavigator.innerHTML = "";


    questions.forEach(
        (_, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.type = "button";

            button.className =
                "question-number-btn";

            button.textContent =
                index + 1;


            if (
                userAnswers[index] !== null
            ) {

                button.classList.add(
                    "answered"
                );
            }


            if (
                index === currentQuestion
            ) {

                button.classList.add(
                    "current"
                );
            }


            button.addEventListener(
                "click",
                () => {

                    if (quizSubmitted) {
                        return;
                    }

                    currentQuestion =
                        index;

                    showQuestion();

                    renderNavigator();
                }
            );


            questionNavigator.appendChild(
                button
            );
        }
    );
}


/* =========================================
   PROGRESS
========================================= */

function updateProgress() {

    const answered =
        userAnswers.filter(
            answer => answer !== null
        ).length;


    const percentage =
        (answered /
            questions.length) *
        100;


    answeredCount.textContent =
        `${answered} answered`;


    questionCount.textContent =
        `Question ${
            currentQuestion + 1
        } of ${
            questions.length
        }`;


    progressFill.style.width =
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

                timeRemaining--;

                updateTimerDisplay();


                if (
                    timeRemaining <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    submitQuiz(true);
                }

            },
            1000
        );
}


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
   SUBMIT MODAL
========================================= */

submitBtn.addEventListener(
    "click",
    () => {

        submitModal.classList.remove(
            "hidden"
        );
    }
);


cancelSubmit.addEventListener(
    "click",
    () => {

        submitModal.classList.add(
            "hidden"
        );
    }
);


confirmSubmit.addEventListener(
    "click",
    () => {

        submitModal.classList.add(
            "hidden"
        );

        submitQuiz(false);
    }
);


/* =========================================
   SUBMIT QUIZ
========================================= */

function submitQuiz(
    automatic = false
) {

    if (quizSubmitted) {
        return;
    }


    quizSubmitted = true;


    clearInterval(
        timerInterval
    );


    let correct = 0;

    let wrong = 0;

    let unanswered = 0;


    questions.forEach(
        (question, index) => {

            const selected =
                userAnswers[index];


            if (selected === null) {

                unanswered++;

            }

            else if (
                selected ===
                question.answer
            ) {

                correct++;

            }

            else {

                wrong++;
            }
        }
    );


    /*
        LOCK THE ATTEMPT
    */

    if (
        !QUIZ_CONFIG.allowRetake
    ) {

        localStorage.setItem(
            COMPLETION_KEY,
            "true"
        );
    }


    const total =
        questions.length;


    const percentage =
        Math.round(
            (correct / total) * 100
        );


    quizSection.classList.add(
        "hidden"
    );


    resultSection.classList.remove(
        "hidden"
    );


    document.getElementById(
        "resultScore"
    ).textContent =
        `${correct}/${total}`;


    document.getElementById(
        "resultPercentage"
    ).textContent =
        `${percentage}%`;


    document.getElementById(
        "correctCount"
    ).textContent =
        correct;


    document.getElementById(
        "wrongCount"
    ).textContent =
        wrong;


    document.getElementById(
        "unansweredCount"
    ).textContent =
        unanswered;


    const resultMessage =
        document.getElementById(
            "resultMessage"
        );


    if (automatic) {

        resultMessage.textContent =
            "Time is up. Your quiz has been submitted automatically.";
    }

    else if (percentage >= 80) {

        resultMessage.textContent =
            "🔥 Strong performance. Review every mistake and keep sharpening your skills.";
    }

    else if (percentage >= 60) {

        resultMessage.textContent =
            "Good attempt. Your corrections are where the real learning begins.";
    }

    else {

        resultMessage.textContent =
            "The questions exposed some weak spots. Study the corrections and attack them again.";
    }


    if (
        QUIZ_CONFIG.allowRetake
    ) {

        retakeBtn.classList.remove(
            "hidden"
        );
    }
}


/* =========================================
   REVIEW
========================================= */

reviewBtn.addEventListener(
    "click",
    () => {

        reviewSection.classList.toggle(
            "hidden"
        );


        if (
            !reviewSection.classList.contains(
                "hidden"
            )
        ) {

            renderReview();

            reviewSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
);


function renderReview() {

    reviewContainer.innerHTML = "";


    questions.forEach(
        (question, index) => {

            const selected =
                userAnswers[index];


            const correct =
                selected ===
                question.answer;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                `review-card ${
                    correct
                        ? "correct"
                        : "wrong"
                }`;


            const number =
                document.createElement(
                    "div"
                );

            number.className =
                "review-question-number";

            number.textContent =
                `QUESTION ${index + 1}`;


            const questionText =
                document.createElement(
                    "div"
                );

            questionText.className =
                "review-question";

            questionText.textContent =
                question.question;


            let selectedAnswer =
                "Not answered";


            if (selected !== null) {

                selectedAnswer =
                    `${String.fromCharCode(
                        65 + selected
                    )}. ${
                        question.options[selected]
                    }`;
            }


            const correctAnswer =
                `${String.fromCharCode(
                    65 + question.answer
                )}. ${
                    question.options[
                        question.answer
                    ]
                }`;


            const yourAnswer =
                document.createElement(
                    "div"
                );

            yourAnswer.className =
                "review-answer";


            yourAnswer.innerHTML =
                `<strong>Your answer:</strong> ${selectedAnswer}`;


            const answer =
                document.createElement(
                    "div"
                );

            answer.className =
                "review-answer";


            answer.innerHTML =
                `<strong>Correct answer:</strong> ${correctAnswer}`;


            const correction =
                document.createElement(
                    "div"
                );

            correction.className =
                "review-correction";


            correction.innerHTML =
                `<strong>🧠 JOT THIS:</strong> ${question.explanation}`;


            card.appendChild(
                number
            );

            card.appendChild(
                questionText
            );

            card.appendChild(
                yourAnswer
            );

            card.appendChild(
                answer
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
   ALREADY COMPLETED
========================================= */

function showAlreadyCompleted() {

    quizSection.classList.add(
        "hidden"
    );


    resultSection.classList.remove(
        "hidden"
    );


    document.querySelector(
        ".result-icon"
    ).textContent =
        "🔒";


    document.querySelector(
        ".result-label"
    ).textContent =
        "ATTEMPT COMPLETED";


    document.getElementById(
        "resultScore"
    ).textContent =
        "LOCKED";


    document.getElementById(
        "resultPercentage"
    ).textContent =
        "";


    document.getElementById(
        "resultMessage"
    ).textContent =
        "You have already completed this MATH 101 CBT on this browser/device. Retakes are currently disabled.";


    document.querySelector(
        ".result-stats"
    ).classList.add(
        "hidden"
    );


    reviewBtn.classList.add(
        "hidden"
    );


    retakeBtn.classList.add(
        "hidden"
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
