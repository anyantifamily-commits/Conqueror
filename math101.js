/* =========================================
   CONQUERORS LABS
   MATH 101 — INTEGRAL CALCULUS
   QUIZ ENGINE — VERSION 3
========================================= */


/* =========================================
   QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {
    title: "MATH 101 — Integral Calculus",
    quizId: "math101",
    quizVersion: 4,
    timeLimit: 30,
    maxQuestions: 30,
    allowRetake: false,
    passMark: 50,

    questions: [

        // =====================================
        // PART 1: INDEFINITE INTEGRALS & BASIC POWER RULE
        // =====================================

        {
            id: 1,
            question: "What is the indefinite integral ∫x⁴ dx?",
            options: [
                "4x³ + C",
                "x⁵/5 + C",
                "5x⁵ + C",
                "x⁴/4 + C"
            ],
            answer: "B",
            explanation: "Using the power rule, increase the power by 1 and divide by the new power: ∫x⁴ dx = x⁵/5 + C."
        },

        {
            id: 2,
            question: "Evaluate ∫(3x² + 4x − 5) dx.",
            options: [
                "6x + 4 + C",
                "x³ + 2x² − 5x + C",
                "3x³ + 4x² − 5x + C",
                "x³ + 4x² − 5x + C"
            ],
            answer: "B",
            explanation: "Integrate each term separately: ∫3x²dx = x³, ∫4xdx = 2x², and ∫−5dx = −5x."
        },

        {
            id: 3,
            question: "What is ∫7 dx?",
            options: [
                "0",
                "7",
                "7x + C",
                "7x² + C"
            ],
            answer: "C",
            explanation: "The integral of a constant k is kx + C. Therefore, ∫7 dx = 7x + C."
        },

        {
            id: 4,
            question: "Find ∫1/x³ dx.",
            options: [
                "−1/(2x²) + C",
                "1/(4x⁴) + C",
                "−3/x⁴ + C",
                "ln|x³| + C"
            ],
            answer: "A",
            explanation: "Rewrite x⁻³ and apply the power rule: x⁻²/−2 + C = −1/(2x²) + C."
        },

        {
            id: 5,
            question: "Evaluate ∫√x dx.",
            options: [
                "1/(2√x) + C",
                "(2/3)x³ᐟ² + C",
                "(3/2)x³ᐟ² + C",
                "x¹ᐟ² + C"
            ],
            answer: "B",
            explanation: "Since √x = x¹ᐟ², the power rule gives x³ᐟ²/(3/2) = (2/3)x³ᐟ² + C."
        },

        {
            id: 6,
            question: "Evaluate ∫(x³ − 1/x²) dx.",
            options: [
                "x⁴/4 + 1/x + C",
                "x⁴/4 − 1/x + C",
                "3x² + 2/x³ + C",
                "x⁴/4 + ln|x²| + C"
            ],
            answer: "A",
            explanation: "Rewrite 1/x² as x⁻². Integrating gives x⁴/4 − (−x⁻¹) = x⁴/4 + 1/x + C."
        },


        // =====================================
        // PART 2: EXPONENTIAL, LOGARITHMIC &
        // TRIGONOMETRIC INTEGRALS
        // =====================================

        {
            id: 7,
            question: "What is ∫eˣ dx?",
            options: [
                "eˣ + C",
                "xeˣ⁻¹ + C",
                "eˣ⁺¹/(x + 1) + C",
                "ln(eˣ) + C"
            ],
            answer: "A",
            explanation: "The derivative of eˣ is eˣ, so its antiderivative is also eˣ + C."
        },

        {
            id: 8,
            question: "What is ∫1/x dx for x ≠ 0?",
            options: [
                "−1/x² + C",
                "1 + C",
                "ln|x| + C",
                "eˣ + C"
            ],
            answer: "C",
            explanation: "The standard reciprocal integral is ∫(1/x)dx = ln|x| + C."
        },

        {
            id: 9,
            question: "Evaluate ∫cos(x) dx.",
            options: [
                "−sin(x) + C",
                "sin(x) + C",
                "−cos(x) + C",
                "tan(x) + C"
            ],
            answer: "B",
            explanation: "Since d/dx[sin(x)] = cos(x), the integral of cos(x) is sin(x) + C."
        },

        {
            id: 10,
            question: "Evaluate ∫sin(x) dx.",
            options: [
                "cos(x) + C",
                "−cos(x) + C",
                "sin(x) + C",
                "−sin(x) + C"
            ],
            answer: "B",
            explanation: "Since d/dx[cos(x)] = −sin(x), the antiderivative of sin(x) is −cos(x) + C."
        },

        {
            id: 11,
            question: "What is ∫sec²(x) dx?",
            options: [
                "tan(x) + C",
                "−cot(x) + C",
                "sec(x)tan(x) + C",
                "2sec(x) + C"
            ],
            answer: "A",
            explanation: "The derivative of tan(x) is sec²(x), so ∫sec²(x)dx = tan(x) + C."
        },

        {
            id: 12,
            question: "Find ∫e³ˣ dx.",
            options: [
                "3e³ˣ + C",
                "(1/3)e³ˣ + C",
                "e³ˣ + C",
                "(1/4)e⁴ˣ + C"
            ],
            answer: "B",
            explanation: "Using substitution or the exponential rule, ∫e³ˣdx = (1/3)e³ˣ + C."
        },


        // =====================================
        // PART 3: DEFINITE INTEGRALS &
        // FUNDAMENTAL THEOREM OF CALCULUS
        // =====================================

        {
            id: 13,
            question: "Evaluate ∫₀³ 2x dx.",
            options: [
                "3",
                "6",
                "9",
                "18"
            ],
            answer: "C",
            explanation: "An antiderivative of 2x is x². Evaluating from 0 to 3 gives 3² − 0² = 9."
        },

        {
            id: 14,
            question: "What is the value of ∫₁² 3x² dx?",
            options: [
                "7",
                "8",
                "9",
                "12"
            ],
            answer: "A",
            explanation: "An antiderivative is x³. Therefore, [x³]₁² = 2³ − 1³ = 8 − 1 = 7."
        },

        {
            id: 15,
            question: "Evaluate ∫₀¹(x² + 1) dx.",
            options: [
                "1/3",
                "4/3",
                "2",
                "2/3"
            ],
            answer: "B",
            explanation: "Integrate to x³/3 + x. Evaluating from 0 to 1 gives 1/3 + 1 = 4/3."
        },

        {
            id: 16,
            question: "Evaluate ∫₀π sin(x) dx.",
            options: [
                "0",
                "1",
                "2",
                "−2"
            ],
            answer: "C",
            explanation: "An antiderivative of sin(x) is −cos(x). Thus −cos(π) − [−cos(0)] = 1 + 1 = 2."
        },

        {
            id: 17,
            question: "What is the value of ∫₁ᵉ (1/x) dx?",
            options: [
                "0",
                "1",
                "e",
                "e − 1"
            ],
            answer: "B",
            explanation: "The antiderivative is ln|x|. Therefore, ln(e) − ln(1) = 1 − 0 = 1."
        },

        {
            id: 18,
            question: "If ∫₀⁴ f(x) dx = 10, what is ∫₀⁴ 3f(x) dx?",
            options: [
                "10",
                "13",
                "30",
                "40"
            ],
            answer: "C",
            explanation: "By the constant multiple rule, ∫₀⁴3f(x)dx = 3∫₀⁴f(x)dx = 3(10) = 30."
        },


        // =====================================
        // PART 4: INTEGRATION BY SUBSTITUTION
        // =====================================

        {
            id: 19,
            question: "Evaluate ∫(2x + 1)⁴ dx.",
            options: [
                "(2x + 1)⁵/5 + C",
                "(2x + 1)⁵/10 + C",
                "4(2x + 1)³ + C",
                "(2x + 1)⁵/2 + C"
            ],
            answer: "B",
            explanation: "Let u = 2x + 1, so du = 2dx. Therefore, the integral is (1/2)(u⁵/5) = (2x + 1)⁵/10 + C."
        },

        {
            id: 20,
            question: "Find ∫2x cos(x²) dx.",
            options: [
                "sin(x²) + C",
                "−sin(x²) + C",
                "x²sin(x²) + C",
                "2sin(x²) + C"
            ],
            answer: "A",
            explanation: "Let u = x², so du = 2x dx. The integral becomes ∫cos(u)du = sin(u) + C = sin(x²) + C."
        },

        {
            id: 21,
            question: "Evaluate ∫xeˣ² dx.",
            options: [
                "eˣ² + C",
                "2eˣ² + C",
                "(1/2)eˣ² + C",
                "(x²/2)eˣ² + C"
            ],
            answer: "C",
            explanation: "Let u = x², so du = 2x dx. Hence ∫xeˣ²dx = (1/2)∫eᵘdu = (1/2)eˣ² + C."
        },

        {
            id: 22,
            question: "Find ∫[2x/(x² + 1)] dx.",
            options: [
                "1/(x² + 1) + C",
                "ln(x² + 1) + C",
                "2ln|x² + 1| + C",
                "(x² + 1)² + C"
            ],
            answer: "B",
            explanation: "Let u = x² + 1, so du = 2x dx. The integral becomes ∫du/u = ln|u| + C = ln(x² + 1) + C."
        },

        {
            id: 23,
            question: "Evaluate ∫sin(5x) dx.",
            options: [
                "5cos(5x) + C",
                "−(1/5)cos(5x) + C",
                "(1/5)cos(5x) + C",
                "−cos(5x) + C"
            ],
            answer: "B",
            explanation: "Let u = 5x, so du = 5dx. Therefore, ∫sin(5x)dx = −(1/5)cos(5x) + C."
        },

        {
            id: 24,
            question: "Find ∫3x²(x³ + 2)⁵ dx.",
            options: [
                "(x³ + 2)⁶/6 + C",
                "(x³ + 2)⁶ + C",
                "(x³ + 2)⁶/18 + C",
                "15x(x³ + 2)⁴ + C"
            ],
            answer: "A",
            explanation: "Let u = x³ + 2, so du = 3x²dx. Therefore, ∫u⁵du = u⁶/6 + C."
        },


        // =====================================
        // PART 5: BASIC APPLICATIONS &
        // INTEGRATION BY PARTS
        // =====================================

        {
            id: 25,
            question: "Find the area bounded by y = x², the x-axis, x = 0 and x = 3.",
            options: [
                "3",
                "9",
                "18",
                "27"
            ],
            answer: "B",
            explanation: "The area is ∫₀³x²dx = [x³/3]₀³ = 27/3 = 9."
        },

        {
            id: 26,
            question: "Find the area under y = 2x from x = 1 to x = 4.",
            options: [
                "8",
                "12",
                "15",
                "16"
            ],
            answer: "C",
            explanation: "The area is ∫₁⁴2x dx = [x²]₁⁴ = 16 − 1 = 15."
        },

        {
            id: 27,
            question: "Using integration by parts, evaluate ∫xeˣ dx.",
            options: [
                "xeˣ + C",
                "xeˣ − eˣ + C",
                "(x²/2)eˣ + C",
                "eˣ − xeˣ + C"
            ],
            answer: "B",
            explanation: "Take u = x and dv = eˣdx. Then du = dx and v = eˣ. Therefore ∫xeˣdx = xeˣ − ∫eˣdx = xeˣ − eˣ + C."
        },

        {
            id: 28,
            question: "What is the average value of f(x) = 4x on [0, 2]?",
            options: [
                "2",
                "4",
                "8",
                "16"
            ],
            answer: "B",
            explanation: "Average value = 1/(2 − 0) × ∫₀²4x dx = (1/2)[2x²]₀² = 4."
        },

        {
            id: 29,
            question: "Evaluate ∫1/(1 + x²) dx.",
            options: [
                "ln(1 + x²) + C",
                "arctan(x) + C",
                "arcsin(x) + C",
                "−1/x + C"
            ],
            answer: "B",
            explanation: "The standard inverse-trigonometric integral is ∫1/(1 + x²)dx = arctan(x) + C."
        },

        {
            id: 30,
            question: "Evaluate ∫1/√(1 − x²) dx.",
            options: [
                "arcsin(x) + C",
                "arccos(x) + C",
                "arctan(x) + C",
                "ln|√(1 − x²)| + C"
            ],
            answer: "A",
            explanation: "The standard inverse-trigonometric integral is ∫1/√(1 − x²)dx = arcsin(x) + C."
        }

    ]
};


/* =========================================
   SETTINGS — VERSION 3
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

    if (currentQuestion > 0 && !quizSubmitted) {
        currentQuestion--;
        showQuestion();
        renderNavigator();
    }
});


nextBtn.addEventListener("click", () => {

    if (
        currentQuestion < questions.length - 1 &&
        !quizSubmitted
    ) {
        currentQuestion++;
        showQuestion();
        renderNavigator();
    }
});


function updateNavigationButtons() {

    prevBtn.disabled =
        currentQuestion === 0 || quizSubmitted;

    nextBtn.disabled =
        currentQuestion === questions.length - 1 ||
        quizSubmitted;
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

        if (quizSubmitted) {
            clearInterval(timerInterval);
            return;
        }

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

    if (quizSubmitted) return;

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

    submitBtn.disabled = true;
    prevBtn.disabled = true;
    nextBtn.disabled = true;

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
                ? "Your MATH 101 Integral Calculus result has been submitted successfully. The leaderboard is currently closed. Your score will become visible when the leaderboard is opened."
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
        "You have already completed this MATH 101 Integral Calculus CBT on this browser/device. Retakes are currently disabled.";

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