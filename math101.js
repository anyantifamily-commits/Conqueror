/* =========================================
   CONQUERORS LABS
   MATH 101 — DIFFERENTIATION
   QUIZ ENGINE — VERSION 2
========================================= */


/* =========================================
   QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {
    title: "MATH 101 & 102 — Differentiation",
    quizId: "math101",
    quizVersion: 2,
    timeLimit: 30,
    maxQuestions: 30,
    allowRetake: false,
    passMark: 50,

    questions: [

        // =====================================
        // PART 1: EASY QUESTIONS
        // =====================================

        {
            id: 1,
            question: "What is the derivative of f(x) = x⁶ with respect to x?",
            options: ["6x⁵", "x⁵", "6x⁶", "5x⁶"],
            answer: "A",
            explanation: "Using the power rule, d(xⁿ)/dx = nxⁿ⁻¹. Therefore, d(x⁶)/dx = 6x⁵."
        },

        {
            id: 2,
            question: "What is the derivative of any constant function, such as f(x) = 12?",
            options: ["12", "1", "0", "12x"],
            answer: "C",
            explanation: "The derivative of a constant is zero because its value does not change as x changes."
        },

        {
            id: 3,
            question: "Find the derivative of f(x) = 4x³ − 5x² + 7.",
            options: [
                "12x² − 10x",
                "7x² − 10x + 7",
                "12x² − 5x",
                "4x² − 10x"
            ],
            answer: "A",
            explanation: "Differentiate each term: 4x³ gives 12x², −5x² gives −10x, and the constant 7 gives 0."
        },

        {
            id: 4,
            question: "What is the derivative of f(x) = √x?",
            options: [
                "1/(2√x)",
                "2√x",
                "1/√x",
                "−1/(2√x)"
            ],
            answer: "A",
            explanation: "Rewrite √x as x^(1/2). The power rule gives (1/2)x^(−1/2) = 1/(2√x), for x > 0."
        },

        {
            id: 5,
            question: "What is the derivative of the natural exponential function f(x) = eˣ?",
            options: ["xeˣ⁻¹", "eˣ", "ln(x)", "1"],
            answer: "B",
            explanation: "The exponential function eˣ is its own derivative: d(eˣ)/dx = eˣ."
        },

        {
            id: 6,
            question: "What is the derivative of f(x) = ln(x) for x > 0?",
            options: ["eˣ", "1/x", "x", "1/ln(x)"],
            answer: "B",
            explanation: "The standard derivative rule for the natural logarithm is d(ln x)/dx = 1/x."
        },

        {
            id: 7,
            question: "Find the derivative of f(x) = sin(x).",
            options: ["−cos(x)", "sin(x)", "cos(x)", "−sin(x)"],
            answer: "C",
            explanation: "The derivative of sin(x) is cos(x)."
        },

        {
            id: 8,
            question: "Find the derivative of f(x) = cos(x).",
            options: ["−sin(x)", "sin(x)", "cos(x)", "−cos(x)"],
            answer: "A",
            explanation: "The derivative of cos(x) is −sin(x)."
        },

        {
            id: 9,
            question: "What is the derivative of f(x) = 1/x?",
            options: ["1/x²", "−1/x²", "−1/x", "x⁻²"],
            answer: "B",
            explanation: "Rewrite 1/x as x⁻¹. Applying the power rule gives −x⁻² = −1/x²."
        },

        {
            id: 10,
            question: "Find the derivative of f(x) = 9x².",
            options: ["9x", "18x", "18x²", "2x"],
            answer: "B",
            explanation: "Using the power rule, d(9x²)/dx = 9 × 2x = 18x."
        },

        {
            id: 11,
            question: "What is the derivative of f(x) = 3ˣ?",
            options: ["3ˣ ln(3)", "x3ˣ⁻¹", "3ˣ/ln(3)", "3ˣ"],
            answer: "A",
            explanation: "For an exponential function aˣ, the derivative is aˣ ln(a). Therefore, d(3ˣ)/dx = 3ˣ ln(3)."
        },

        {
            id: 12,
            question: "Find the derivative of f(x) = 4sin(x) + 2cos(x).",
            options: [
                "4cos(x) − 2sin(x)",
                "−4sin(x) − 2cos(x)",
                "4cos(x) + 2sin(x)",
                "−4cos(x) + 2sin(x)"
            ],
            answer: "A",
            explanation: "Differentiate each term: 4sin(x) gives 4cos(x), while 2cos(x) gives −2sin(x)."
        },

        {
            id: 13,
            question: "What is the derivative of f(x) = 5∛x?",
            options: [
                "(5/3)x⁻²ᐟ³",
                "15x²ᐟ³",
                "(3/5)x²ᐟ³",
                "5x⁻²ᐟ³"
            ],
            answer: "A",
            explanation: "Rewrite 5∛x as 5x^(1/3). The power rule gives (5/3)x^(−2/3)."
        },

        {
            id: 14,
            question: "Find the derivative of f(x) = −6x⁻².",
            options: [
                "12x⁻³",
                "−12x⁻³",
                "12x⁻¹",
                "−3x⁻³"
            ],
            answer: "A",
            explanation: "The power rule gives −6 × (−2)x⁻³ = 12x⁻³."
        },

        {
            id: 15,
            question: "What is the derivative of f(x) = 7π with respect to x?",
            options: ["7", "7π", "0", "π"],
            answer: "C",
            explanation: "7π is constant with respect to x. The derivative of a constant is zero."
        },


        // =====================================
        // PART 2: MEDIUM QUESTIONS
        // =====================================

        {
            id: 16,
            question: "Using the product rule, find the derivative of f(x) = x³eˣ.",
            options: [
                "3x²eˣ",
                "x³eˣ + 3x²eˣ",
                "3x²e²ˣ",
                "x³eˣ"
            ],
            answer: "B",
            explanation: "The product rule states (uv)' = u'v + uv'. Here u = x³ and v = eˣ, so f'(x) = 3x²eˣ + x³eˣ."
        },

        {
            id: 17,
            question: "Using the quotient rule, find the derivative of f(x) = x/(x − 1).",
            options: [
                "1/(x − 1)²",
                "−1/(x − 1)²",
                "(2x − 1)/(x − 1)²",
                "1/(x − 1)"
            ],
            answer: "B",
            explanation: "Using the quotient rule, f'(x) = [(x − 1) − x]/(x − 1)² = −1/(x − 1)²."
        },

        {
            id: 18,
            question: "Using the chain rule, find the derivative of f(x) = (2x² + 3)⁵.",
            options: [
                "5(2x² + 3)⁴",
                "10x(2x² + 3)⁴",
                "20x(2x² + 3)⁴",
                "40x(2x² + 3)⁴"
            ],
            answer: "C",
            explanation: "The chain rule gives 5(2x² + 3)⁴ × 4x = 20x(2x² + 3)⁴."
        },

        {
            id: 19,
            question: "Find the derivative of f(x) = sin(3x²).",
            options: [
                "cos(3x²)",
                "6x cos(3x²)",
                "−6x sin(3x²)",
                "3x cos(3x²)"
            ],
            answer: "B",
            explanation: "By the chain rule, differentiate the outer sine function and multiply by the derivative of 3x², which is 6x."
        },

        {
            id: 20,
            question: "Find the derivative of f(x) = e⁴ˣ.",
            options: ["e⁴ˣ", "4e⁴ˣ", "4xe⁴ˣ⁻¹", "(1/4)e⁴ˣ"],
            answer: "B",
            explanation: "By the chain rule, d(e⁴ˣ)/dx = e⁴ˣ × 4 = 4e⁴ˣ."
        },

        {
            id: 21,
            question: "Find the derivative of f(x) = ln(3x² + 2).",
            options: [
                "6x/(3x² + 2)",
                "3/(3x² + 2)",
                "6x/x",
                "1/(6x)"
            ],
            answer: "A",
            explanation: "Using the chain rule, the derivative is (1/(3x² + 2)) × 6x = 6x/(3x² + 2)."
        },

        {
            id: 22,
            question: "What is the derivative of f(x) = tan(x)?",
            options: ["cot(x)", "sec²(x)", "−csc²(x)", "sec(x)tan(x)"],
            answer: "B",
            explanation: "The standard derivative rule is d(tan x)/dx = sec²(x), wherever tan(x) is defined."
        },

        {
            id: 23,
            question: "What is the derivative of f(x) = csc(x)?",
            options: [
                "sec(x)tan(x)",
                "−csc(x)cot(x)",
                "csc²(x)",
                "−sec(x)"
            ],
            answer: "B",
            explanation: "The derivative of csc(x) is −csc(x)cot(x)."
        },

        {
            id: 24,
            question: "Find the derivative of f(x) = x sin(x).",
            options: [
                "x cos(x)",
                "sin(x) + x cos(x)",
                "sin(x) − x cos(x)",
                "−x sin(x)"
            ],
            answer: "B",
            explanation: "By the product rule, f'(x) = 1 × sin(x) + x × cos(x) = sin(x) + x cos(x)."
        },

        {
            id: 25,
            question: "Find the derivative of f(x) = x²/(x + 2).",
            options: [
                "(x² + 4x)/(x + 2)²",
                "2x/(x + 2)²",
                "1/(x + 2)²",
                "(x² + 2)/(x + 2)²"
            ],
            answer: "A",
            explanation: "The quotient rule gives [2x(x + 2) − x²]/(x + 2)². Simplifying the numerator gives x² + 4x."
        },

        {
            id: 26,
            question: "Find the derivative of f(x) = √(x² + 9).",
            options: [
                "1/(2√(x² + 9))",
                "x/√(x² + 9)",
                "2x/√(x² + 9)",
                "x/(2√(x² + 9))"
            ],
            answer: "B",
            explanation: "Rewrite the function as (x² + 9)^(1/2). The chain rule gives (1/2)(x² + 9)^(−1/2) × 2x = x/√(x² + 9)."
        },

        {
            id: 27,
            question: "Find the second derivative f''(x) of f(x) = 2x³ − 5x² + 4x − 1.",
            options: [
                "6x² − 10x + 4",
                "12x − 10",
                "12x",
                "6 − 10x"
            ],
            answer: "B",
            explanation: "First derivative: f'(x) = 6x² − 10x + 4. Differentiating again gives f''(x) = 12x − 10."
        },

        {
            id: 28,
            question: "Find the derivative of f(x) = x² ln(x) for x > 0.",
            options: [
                "2x ln(x)",
                "x(2ln(x) + 1)",
                "x² + ln(x)",
                "2/x"
            ],
            answer: "B",
            explanation: "Using the product rule, f'(x) = 2x ln(x) + x²(1/x) = 2x ln(x) + x = x(2ln(x) + 1)."
        },

        {
            id: 29,
            question: "Find the derivative of f(x) = cos(5x).",
            options: [
                "−5sin(5x)",
                "5sin(5x)",
                "−5cos(5x)",
                "sin(5x)"
            ],
            answer: "A",
            explanation: "By the chain rule, the derivative is −sin(5x) × 5 = −5sin(5x)."
        },

        {
            id: 30,
            question: "Find the derivative of f(x) = e²ˣ + 3x⁴.",
            options: [
                "2e²ˣ + 12x³",
                "e²ˣ + 12x³",
                "2e²ˣ + 3x³",
                "4e²ˣ + 12x³"
            ],
            answer: "A",
            explanation: "Differentiate each term: d(e²ˣ)/dx = 2e²ˣ and d(3x⁴)/dx = 12x³. Therefore f'(x) = 2e²ˣ + 12x³."
        }

    ]
};


/* =========================================
   SETTINGS — VERSION 2
========================================= */

const COMPLETION_KEY =
    `conquerorsLabs_MATH101_completed_v${QUIZ_CONFIG.quizVersion}`;

const RESULT_ID_KEY =
    `conquerorsLabs_MATH101_result_id_v${QUIZ_CONFIG.quizVersion}`;

const QUIZ_ID =
    QUIZ_CONFIG.quizId;

const PASS_MARK =
    QUIZ_CONFIG.passMark;

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

let studentName = "";


/* =========================================
   ELEMENTS
========================================= */

const questionContainer =
    document.getElementById("questionContainer");

const questionNavigator =
    document.getElementById("questionNavigator");

const questionCount =
    document.getElementById("questionCount");

const answeredCount =
    document.getElementById("answeredCount");

const progressFill =
    document.getElementById("progressFill");

const timer =
    document.getElementById("timer");

const timerBox =
    document.getElementById("timerBox");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

const submitBtn =
    document.getElementById("submitBtn");

const quizSection =
    document.getElementById("quizSection");

const resultSection =
    document.getElementById("resultSection");

const reviewSection =
    document.getElementById("reviewSection");

const reviewContainer =
    document.getElementById("reviewContainer");

const reviewBtn =
    document.getElementById("reviewBtn");

const retakeBtn =
    document.getElementById("retakeBtn");

const submitModal =
    document.getElementById("submitModal");

const cancelSubmit =
    document.getElementById("cancelSubmit");

const confirmSubmit =
    document.getElementById("confirmSubmit");

const nameModal =
    document.getElementById("nameModal");

const studentNameInput =
    document.getElementById("studentNameInput");

const nameError =
    document.getElementById("nameError");

const cancelName =
    document.getElementById("cancelName");

const confirmName =
    document.getElementById("confirmName");


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    initQuiz
);


function initQuiz() {

    if (!questions.length) {
        questionContainer.textContent =
            "No questions available.";
        return;
    }

    if (
        !QUIZ_CONFIG.allowRetake &&
        localStorage.getItem(COMPLETION_KEY) === "true"
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

    const q = questions[currentQuestion];

    questionContainer.innerHTML = "";

    const card = document.createElement("div");
    card.className = "question-card";

    const number = document.createElement("div");
    number.className = "question-number";
    number.textContent =
        `QUESTION ${currentQuestion + 1}`;

    const heading = document.createElement("h2");
    heading.textContent = q.question;

    const optionsContainer =
        document.createElement("div");

    optionsContainer.className = "options-container";

    q.options.forEach((optionText, index) => {

        const letter = String.fromCharCode(65 + index);

        const option = document.createElement("button");
        option.type = "button";
        option.className = "option";

        if (userAnswers[currentQuestion] === letter) {
            option.classList.add("selected");
        }

        const optionLetter = document.createElement("span");
        optionLetter.className = "option-letter";
        optionLetter.textContent = letter;

        const text = document.createElement("span");
        text.className = "option-text";
        text.textContent = optionText;

        option.appendChild(optionLetter);
        option.appendChild(text);

        option.addEventListener("click", () => {

            if (quizSubmitted) return;

            userAnswers[currentQuestion] = letter;

            showQuestion();
            updateProgress();
            renderNavigator();
        });

        optionsContainer.appendChild(option);
    });

    card.appendChild(number);
    card.appendChild(heading);
    card.appendChild(optionsContainer);

    questionContainer.appendChild(card);

    updateNavigationButtons();
    updateProgress();
}


/* =========================================
   NAVIGATION
========================================= */

prevBtn.addEventListener("click", () => {

    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        renderNavigator();
    }
});


nextBtn.addEventListener("click", () => {

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
        renderNavigator();
    }
});


function updateNavigationButtons() {

    prevBtn.disabled = currentQuestion === 0;

    nextBtn.disabled =
        currentQuestion === questions.length - 1;
}


/* =========================================
   QUESTION NAVIGATOR
========================================= */

function renderNavigator() {

    questionNavigator.innerHTML = "";

    questions.forEach((_, index) => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "question-number-btn";
        button.textContent = index + 1;

        if (userAnswers[index]) {
            button.classList.add("answered");
        }

        if (index === currentQuestion) {
            button.classList.add("current");
        }

        button.addEventListener("click", () => {

            if (quizSubmitted) return;

            currentQuestion = index;

            showQuestion();
            renderNavigator();
        });

        questionNavigator.appendChild(button);
    });
}


/* =========================================
   PROGRESS
========================================= */

function updateProgress() {

    const answered =
        userAnswers.filter(answer => answer !== null).length;

    const percentage =
        (answered / questions.length) * 100;

    answeredCount.textContent =
        `${answered} answered`;

    questionCount.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    progressFill.style.width =
        `${percentage}%`;
}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    updateTimerDisplay();

    timerInterval = setInterval(() => {

        timeRemaining--;

        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz(true);
        }

    }, 1000);
}


function updateTimerDisplay() {

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    timerBox.classList.remove("warning", "danger");

    if (timeRemaining <= 300 && timeRemaining > 60) {
        timerBox.classList.add("warning");
    }

    if (timeRemaining <= 60) {
        timerBox.classList.add("danger");
    }
}


/* =========================================
   SUBMIT MODAL
========================================= */

submitBtn.addEventListener("click", () => {

    if (quizSubmitted) return;

    submitModal.classList.remove("hidden");
});


cancelSubmit.addEventListener("click", () => {

    submitModal.classList.add("hidden");
});


confirmSubmit.addEventListener("click", () => {

    submitModal.classList.add("hidden");

    openNameModal();
});


/* =========================================
   NAME MODAL
========================================= */

function openNameModal() {

    studentNameInput.value = "";

    nameError.style.display = "none";

    nameModal.classList.remove("hidden");

    setTimeout(() => {
        studentNameInput.focus();
    }, 100);
}


cancelName.addEventListener("click", () => {

    nameModal.classList.add("hidden");
});


confirmName.addEventListener("click", () => {

    const name = studentNameInput.value.trim();

    if (!name) {
        nameError.style.display = "block";
        studentNameInput.focus();
        return;
    }

    studentName = name.substring(0, 60);

    nameModal.classList.add("hidden");

    submitQuiz(false);
});


studentNameInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        confirmName.click();
    }
});


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
                    p_student_name: studentName || "Anonymous",
                    p_quiz_id: QUIZ_ID,
                    p_quiz_title: QUIZ_CONFIG.title,
                    p_score: score,
                    p_total_questions: totalQuestions,
                    p_percentage: percentage,
                    p_qualified_for_leaderboard:
                        qualifiedForLeaderboard
                }
            );

        if (error) {
            console.error(
                "MATH 101 result save error:",
                error
            );

            return null;
        }

        return data;

    } catch (error) {

        console.error(
            "MATH 101 Supabase error:",
            error
        );

        return null;
    }
}


/* =========================================
   SUBMIT QUIZ
========================================= */

async function submitQuiz(automatic = false) {

    if (quizSubmitted) return;

    quizSubmitted = true;

    clearInterval(timerInterval);

    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    questions.forEach((question, index) => {

        const selected = userAnswers[index];

        if (!selected) {
            unanswered++;
        } else if (selected === question.answer) {
            correct++;
        } else {
            wrong++;
        }
    });

    const total = questions.length;

    const percentage =
        Math.round((correct / total) * 100);

    const qualifiedForLeaderboard =
        percentage >= PASS_MARK;

    if (!QUIZ_CONFIG.allowRetake) {
        localStorage.setItem(COMPLETION_KEY, "true");
    }

    const resultId = await saveQuizResult(
        studentName,
        correct,
        total,
        percentage,
        qualifiedForLeaderboard
    );

    if (resultId) {
        localStorage.setItem(RESULT_ID_KEY, resultId);
    }

    const saveSuccessful = Boolean(resultId);

    let leaderboardOpen = false;

    try {

        const { data, error } =
            await supabaseClient
                .from("leaderboard_settings")
                .select("leaderboard_enabled, pass_mark")
                .eq("quiz_id", QUIZ_ID)
                .single();

        if (!error && data) {
            leaderboardOpen =
                data.leaderboard_enabled === true;
        }

    } catch (error) {

        console.error(
            "MATH 101 leaderboard error:",
            error
        );
    }

    quizSection.classList.add("hidden");

    resultSection.classList.remove("hidden");

    if (!leaderboardOpen) {

        showLockedResult(
            saveSuccessful
                ? "Your MATH 101 result has been submitted successfully. The leaderboard is currently closed. Your score will become visible when the leaderboard is opened."
                : "Your quiz has been completed, but your result could not be confirmed on the server. Please contact CONQUERORS LABS."
        );

        return;
    }

    showNormalResult(
        correct,
        wrong,
        unanswered,
        total,
        percentage,
        automatic,
        saveSuccessful
    );
}


/* =========================================
   NORMAL RESULT
========================================= */

function showNormalResult(
    correct,
    wrong,
    unanswered,
    total,
    percentage,
    automatic,
    saveSuccessful
) {

    const icon =
        resultSection.querySelector(".result-icon");

    const label =
        resultSection.querySelector(".result-label");

    icon.textContent = "✓";

    icon.classList.remove("hidden");

    label.textContent = "QUIZ COMPLETE";

    label.classList.remove("hidden");

    document.getElementById("resultScore").textContent =
        `${correct}/${total}`;

    document.getElementById("resultScore")
        .classList.remove("hidden");

    document.getElementById("resultPercentage").textContent =
        `${percentage}%`;

    document.getElementById("resultPercentage")
        .classList.remove("hidden");

    document.getElementById("correctCount").textContent =
        correct;

    document.getElementById("wrongCount").textContent =
        wrong;

    document.getElementById("unansweredCount").textContent =
        unanswered;

    document.querySelector(".result-stats")
        .classList.remove("hidden");

    const resultMessage =
        document.getElementById("resultMessage");

    if (automatic) {

        resultMessage.textContent =
            "Time is up. Your quiz has been submitted automatically.";

    } else if (percentage >= 80) {

        resultMessage.textContent =
            "🔥 Strong performance. But don't stop here — review every mistake.";

    } else if (percentage >= 60) {

        resultMessage.textContent =
            "Good attempt. Your corrections are where the real learning begins.";

    } else {

        resultMessage.textContent =
            "The questions exposed some weak spots. Study the corrections and attack them again.";
    }

    if (saveSuccessful) {
        resultMessage.textContent +=
            " Your result has been recorded.";
    }

    reviewBtn.classList.remove("hidden");

    if (QUIZ_CONFIG.allowRetake) {
        retakeBtn.classList.remove("hidden");
    } else {
        retakeBtn.classList.add("hidden");
    }
}


/* =========================================
   LOCKED RESULT
========================================= */

function showLockedResult(message) {

    resultSection
        .querySelector(".result-icon")
        .classList.add("hidden");

    resultSection
        .querySelector(".result-label")
        .classList.add("hidden");

    document.getElementById("resultScore")
        .classList.add("hidden");

    document.getElementById("resultPercentage")
        .classList.add("hidden");

    document.querySelector(".result-stats")
        .classList.add("hidden");

    reviewBtn.classList.add("hidden");

    retakeBtn.classList.add("hidden");

    reviewSection.classList.add("hidden");

    document.getElementById("resultMessage").textContent =
        message;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   REVIEW
========================================= */

reviewBtn.addEventListener("click", () => {

    reviewSection.classList.toggle("hidden");

    if (!reviewSection.classList.contains("hidden")) {

        renderReview();

        reviewSection.scrollIntoView({
            behavior: "smooth"
        });
    }
});


function renderReview() {

    reviewContainer.innerHTML = "";

    questions.forEach((question, index) => {

        const selected = userAnswers[index];

        const correct =
            selected === question.answer;

        const card = document.createElement("div");

        card.className =
            `review-card ${correct ? "correct" : "wrong"}`;

        const number = document.createElement("div");

        number.className = "review-question-number";

        number.textContent =
            `QUESTION ${index + 1}`;

        const questionText = document.createElement("div");

        questionText.className = "review-question";

        questionText.textContent = question.question;

        const selectedAnswer = selected
            ? `${selected}. ${question.options[selected.charCodeAt(0) - 65]}`
            : "Not answered";

        const correctAnswer =
            `${question.answer}. ${question.options[question.answer.charCodeAt(0) - 65]}`;

        const yourAnswer = document.createElement("div");

        yourAnswer.className = "review-answer";

        const yourLabel = document.createElement("strong");
        yourLabel.textContent = "Your answer: ";

        yourAnswer.appendChild(yourLabel);
        yourAnswer.appendChild(
            document.createTextNode(selectedAnswer)
        );

        const answer = document.createElement("div");

        answer.className = "review-answer";

        const answerLabel = document.createElement("strong");
        answerLabel.textContent = "Correct answer: ";

        answer.appendChild(answerLabel);
        answer.appendChild(
            document.createTextNode(correctAnswer)
        );

        const correction = document.createElement("div");

        correction.className = "review-correction";

        const correctionLabel = document.createElement("strong");
        correctionLabel.textContent = "🧠 JOT THIS: ";

        correction.appendChild(correctionLabel);
        correction.appendChild(
            document.createTextNode(question.explanation)
        );

        card.appendChild(number);
        card.appendChild(questionText);
        card.appendChild(yourAnswer);
        card.appendChild(answer);
        card.appendChild(correction);

        reviewContainer.appendChild(card);
    });
}


/* =========================================
   ALREADY COMPLETED
========================================= */

function showAlreadyCompleted() {

    quizSection.classList.add("hidden");

    resultSection.classList.remove("hidden");

    const icon =
        resultSection.querySelector(".result-icon");

    const label =
        resultSection.querySelector(".result-label");

    icon.textContent = "🔒";

    icon.classList.remove("hidden");

    label.textContent = "ATTEMPT COMPLETED";

    label.classList.remove("hidden");

    document.getElementById("resultScore").textContent =
        "LOCKED";

    document.getElementById("resultScore")
        .classList.remove("hidden");

    document.getElementById("resultPercentage").textContent = "";

    document.querySelector(".result-stats")
        .classList.add("hidden");

    document.getElementById("resultMessage").textContent =
        "You have already completed this MATH 101 Differentiation CBT on this browser/device. Retakes are currently disabled.";

    reviewBtn.classList.add("hidden");

    retakeBtn.classList.add("hidden");
}


/* =========================================
   RETAKE
========================================= */

retakeBtn.addEventListener("click", () => {

    if (!QUIZ_CONFIG.allowRetake) {
        return;
    }

    localStorage.removeItem(COMPLETION_KEY);

    location.reload();
});
