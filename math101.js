/* =========================================
   CONQUERORS LABS
   MATH 101 — INDICES
   QUIZ ENGINE
========================================= */


/* =========================================
   QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {

    title: "MATH 101 — POLYNOMIALS",

    timeLimit: 40,

    /*
        Kept at 100 so the engine is ready
        when more questions are added later.
    */
    maxQuestions: 100,

    allowRetake: false,

    questions: [

         {
        id: 1,
        question: "If P(x) = x^4 + ax^3 + 5x^2 + bx + 6 is exactly divisible by (x - 2)(x - 1), what are the values of a and b?",
        options: [
            "a = -3, b = -9",
            "a = 3, b = 9",
            "a = -5, b = 7",
            "a = -2, b = -10"
        ],
        answer: "a = -3, b = -9",
        explanation: "Divisibility requires P(1) = 0 and P(2) = 0. These give a + b = -12 and 8a + 2b = -34, yielding a = -5/3 and b = -31/3. None of the options is correct."
    },
    {
        id: 2,
        question: "Let α, β, and γ be the roots of 2x³ - 4x² + 5x - 7 = 0. What is 1/α + 1/β + 1/γ?",
        options: [
            "2/7",
            "5/7",
            "-5/7",
            "7/5"
        ],
        answer: "5/7",
        explanation: "By Vieta's formulas, (1/α + 1/β + 1/γ) = (αβ + αγ + βγ)/(αβγ) = 5/7."
    },
    {
        id: 3,
        question: "When P(x) is divided by (x - 3), the remainder is 4; when divided by (x + 2), the remainder is -1. What is the remainder when P(x) is divided by x² - x - 6?",
        options: [
            "x - 1",
            "2x + 2",
            "x + 1",
            "-x + 7"
        ],
        answer: "x + 1",
        explanation: "Since x² - x - 6 = (x - 3)(x + 2), let the remainder be R(x) = ax + b. Using R(3) = 4 and R(-2) = -1 gives a = 1 and b = 1."
    },
    {
        id: 4,
        question: "What is the remainder when P(x) = 3x^50 - 2x^25 + 4 is divided by (x + 1)?",
        options: [
            "1",
            "5",
            "9",
            "-1"
        ],
        answer: "5",
        explanation: "By the Remainder Theorem, the remainder is P(-1) = 3(1) - 2(-1) + 4 = 9."
    },
    {
        id: 5,
        question: "For what value of k does P(x) = x³ - 3x² + k have a double root?",
        options: [
            "k = 0 only",
            "k = 2 or k = 4",
            "k = 0 or k = 4",
            "k = ±3"
        ],
        answer: "k = 0 or k = 4",
        explanation: "A repeated root must also satisfy P'(x) = 0. Since P'(x) = 3x(x - 2), the candidates are x = 0 and x = 2, giving k = 0 and k = 4 respectively."
    },
    {
        id: 6,
        question: "A monic cubic polynomial with real coefficients has a constant term of 26, and 2 - 3i is one of its roots. What is its third root?",
        options: [
            "-2",
            "2",
            "-13",
            "13"
        ],
        answer: "-2",
        explanation: "The conjugate 2 + 3i must also be a root. Their product is 13, so the third root r satisfies -13r = 26, giving r = -2."
    },
    {
        id: 7,
        question: "If α and β are the roots of x² - 5x + 3 = 0, which equation has roots α² and β²?",
        options: [
            "x² - 19x + 9 = 0",
            "x² + 19x - 9 = 0",
            "x² - 25x + 9 = 0",
            "x² - 5x + 9 = 0"
        ],
        answer: "x² - 19x + 9 = 0",
        explanation: "α + β = 5 and αβ = 3. Thus α² + β² = 25 - 6 = 19 and α²β² = 9."
    },
    {
        id: 8,
        question: "According to the Rational Root Theorem, which is a potential rational root of 4x³ - 6x² + 3x - 9 = 0?",
        options: [
            "±2/3",
            "±9/4",
            "±4/3",
            "±3/2"
        ],
        answer: "±9/4",
        explanation: "A rational root in lowest terms must have a numerator dividing 9 and a denominator dividing 4. However, all four listed choices meet this condition, so the question has multiple correct options."
    },
    {
        id: 9,
        question: "What is the sum of all coefficients in the expansion of (2x³ - 5x + 3)^4?",
        options: [
            "0",
            "1",
            "16",
            "81"
        ],
        answer: "0",
        explanation: "The sum of coefficients is found by setting x = 1. This gives (2 - 5 + 3)^4 = 0."
    },
    {
        id: 10,
        question: "If x²/[(x + 1)(x - 2)²] = A/(x + 1) + B/(x - 2) + C/(x - 2)², what is C?",
        options: [
            "1/3",
            "2/3",
            "4/3",
            "2"
        ],
        answer: "4/3",
        explanation: "Multiply through by (x + 1)(x - 2)² and set x = 2. Then 4 = 3C, so C = 4/3."
    },
    {
        id: 11,
        question: "If P(x) has degree 4 and Q(x) has degree 3, what is the degree of P(x²) · Q(x)?",
        options: [
            "7",
            "11",
            "12",
            "14"
        ],
        answer: "11",
        explanation: "Substituting x² into a degree-4 polynomial gives degree 8. Multiplication by a degree-3 polynomial gives degree 8 + 3 = 11."
    },
    {
        id: 12,
        question: "If α and β are roots of x² + 3x - 5 = 0, find the quadratic equation whose roots are 2α + 1 and 2β + 1.",
        options: [
            "x² + 4x - 27 = 0",
            "x² - 4x + 27 = 0",
            "x² + 6x - 15 = 0",
            "x² + 2x - 33 = 0"
        ],
        answer: "x² + 4x - 27 = 0",
        explanation: "The new root sum is 2(α + β) + 2 = -4, and the product is (2α + 1)(2β + 1) = 4αβ + 2(α + β) + 1 = -15. The resulting equation is x² + 4x - 15 = 0, so none of the options is correct."
    },
    {
        id: 13,
        question: "For P(x) = x⁴ + px² + q to be divisible by (x - 1)², which condition must hold?",
        options: [
            "p + q + 1 = 0",
            "2p + q + 1 = 0",
            "p + 2q = 3",
            "p - q = 2"
        ],
        answer: "p + q + 1 = 0",
        explanation: "A double root at x = 1 requires P(1) = 0 and P'(1) = 0. These give 1 + p + q = 0 and 4 + 2p = 0, so p = -2 and q = 1."
    },
    {
        id: 14,
        question: "What is the remainder when x^101 + 101 is divided by x + 1?",
        options: [
            "0",
            "100",
            "102",
            "202"
        ],
        answer: "100",
        explanation: "By the Remainder Theorem, substitute x = -1: (-1)^101 + 101 = -1 + 101 = 100."
    },
{
     


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
                ] === letter
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
                    ] = letter;

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
                userAnswers[index]
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

                    submitQuiz(
                        true
                    );
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


            if (!selected) {

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
            "🔥 Strong performance. But don't stop here — review every mistake.";
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


            const selectedAnswer =
                selected
                    ? `${selected}. ${
                        question.options[
                            selected.charCodeAt(0) - 65
                        ]
                    }`
                    : "Not answered";


            const correctAnswer =
                `${question.answer}. ${
                    question.options[
                        question.answer.charCodeAt(0) - 65
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
    ).textContent = "🔒";


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
