
/* =========================================
   CONQUERORS LABS
   MATH 101 — POLYNOMIALS
   QUIZ ENGINE — VERSION 3
========================================= */


/* =========================================
   QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {
    title: "MATH 101 — Polynomials",
    quizId: "math101",
    quizVersion: 3,
    timeLimit: 30,
    maxQuestions: 25,
    allowRetake: false,
    passMark: 50,

    questions: [

        // =====================================
        // PART 1: BASIC OPERATIONS
        // =====================================

        {
            id: 1,
            question: "What is the degree of the product P(x)Q(x), where P(x) = 3x³ − 2x + 1 and Q(x) = 4x² + 5x − 7?",
            options: ["5", "6", "8", "9"],
            answer: "A",
            explanation: "The degree of a product of nonzero polynomials is the sum of their degrees. Therefore, deg(PQ) = 3 + 2 = 5."
        },

        {
            id: 2,
            question: "What is the leading coefficient of P(x) = 5 − 2x² + 7x⁴ − x³?",
            options: ["5", "−2", "7", "−1"],
            answer: "C",
            explanation: "Arrange the polynomial in descending powers: 7x⁴ − x³ − 2x² + 5. The leading term is 7x⁴, so its coefficient is 7."
        },

        {
            id: 3,
            question: "Expand and simplify (2x − 3)(x² + 3x − 1).",
            options: [
                "2x³ + 3x² − 11x + 3",
                "2x³ + 3x² − 11x − 3",
                "2x³ − 3x² + 9x + 3",
                "2x³ + 9x² − 11x + 3"
            ],
            answer: "A",
            explanation: "Expanding gives 2x³ + 6x² − 2x − 3x² − 9x + 3. Combining like terms gives 2x³ + 3x² − 11x + 3."
        },


        // =====================================
        // PART 2: REMAINDER AND FACTOR THEOREMS
        // =====================================

        {
            id: 4,
            question: "What is the remainder when P(x) = x³ − 4x² + 2x − 5 is divided by (x − 3)?",
            options: ["−10", "−8", "−2", "4"],
            answer: "B",
            explanation: "By the Remainder Theorem, the remainder is P(3). P(3) = 27 − 36 + 6 − 5 = −8."
        },

        {
            id: 5,
            question: "Find the remainder when P(x) = 2x⁴ − 3x² + 5x − 1 is divided by (x + 1).",
            options: ["−7", "−5", "−1", "3"],
            answer: "A",
            explanation: "By the Remainder Theorem, the remainder is P(−1). This gives 2(1) − 3(1) − 5 − 1 = −7."
        },

        {
            id: 6,
            question: "If (x − 2) is a factor of P(x) = x³ − kx² + 3x − 2, find k.",
            options: ["1", "2", "3", "4"],
            answer: "C",
            explanation: "By the Factor Theorem, P(2) = 0. Thus 8 − 4k + 6 − 2 = 0, so 12 − 4k = 0 and k = 3."
        },

        {
            id: 7,
            question: "If (x + 1) is a factor of P(x) = x³ + ax² − 5x + 3, find a.",
            options: ["−9", "−7", "3", "7"],
            answer: "B",
            explanation: "Since (x + 1) is a factor, P(−1) = 0. Therefore, −1 + a + 5 + 3 = 0, giving a + 7 = 0 and a = −7."
        },

        {
            id: 8,
            question: "A polynomial P(x) leaves a remainder of 4 when divided by (x − 1) and −2 when divided by (x + 2). Find the remainder when divided by (x − 1)(x + 2).",
            options: [
                "2x + 2",
                "2x − 2",
                "x + 3",
                "x − 3"
            ],
            answer: "A",
            explanation: "The remainder must be linear, R(x) = Ax + B. Since R(1) = 4, A + B = 4. Since R(−2) = −2, −2A + B = −2. Subtracting gives 3A = 6, so A = 2 and B = 2. Hence R(x) = 2x + 2."
        },


        // =====================================
        // PART 3: VIETA'S FORMULAS
        // =====================================

        {
            id: 9,
            question: "What is the sum of the roots of 3x² − 12x + 5 = 0?",
            options: ["−4", "4", "5/3", "−5/3"],
            answer: "B",
            explanation: "For ax² + bx + c = 0, the sum of the roots is −b/a. Therefore, the sum is −(−12)/3 = 4."
        },

        {
            id: 10,
            question: "What is the product of the roots of 2x³ − 6x² + 4x − 8 = 0?",
            options: ["−4", "4", "−2", "2"],
            answer: "B",
            explanation: "For ax³ + bx² + cx + d = 0, the product of the three roots is −d/a. Therefore, the product is −(−8)/2 = 4."
        },

        {
            id: 11,
            question: "If α and β are the roots of x² − 5x + 3 = 0, find 1/α + 1/β.",
            options: ["5/3", "3/5", "−5/3", "−3/5"],
            answer: "A",
            explanation: "Using Vieta's formulas, α + β = 5 and αβ = 3. Thus 1/α + 1/β = (α + β)/(αβ) = 5/3."
        },

        {
            id: 12,
            question: "If α, β and γ are the roots of x³ − 7x² + 14x − 8 = 0, find α² + β² + γ².",
            options: ["21", "35", "49", "77"],
            answer: "A",
            explanation: "Vieta's formulas give α + β + γ = 7 and αβ + βγ + γα = 14. Therefore, α² + β² + γ² = (α + β + γ)² − 2(αβ + βγ + γα) = 49 − 28 = 21."
        },

        {
            id: 13,
            question: "Which quadratic equation has roots that are twice the roots of x² − 4x + 3 = 0?",
            options: [
                "x² − 8x + 6 = 0",
                "x² − 8x + 12 = 0",
                "x² − 4x + 12 = 0",
                "2x² − 8x + 6 = 0"
            ],
            answer: "B",
            explanation: "The original roots have sum 4 and product 3. Doubling both roots makes their sum 8 and product 12. The required equation is x² − 8x + 12 = 0."
        },


        // =====================================
        // PART 4: RATIONAL ROOTS AND COMPLEX ROOTS
        // =====================================

        {
            id: 14,
            question: "According to the Rational Root Theorem, which option is a potential rational root of 2x³ − 3x² + 5x − 3 = 0?",
            options: ["2/3", "1/2", "4/3", "3/4"],
            answer: "B",
            explanation: "Possible rational roots have numerators that divide the constant term and denominators that divide the leading coefficient. The candidates include ±1, ±3, ±1/2 and ±3/2. Therefore, 1/2 is a possible rational root."
        },

        {
            id: 15,
            question: "A polynomial with real coefficients has 3 − 2i as a root. Which other root must it have?",
            options: [
                "−3 + 2i",
                "−3 − 2i",
                "3 + 2i",
                "2 − 3i"
            ],
            answer: "C",
            explanation: "For a polynomial with real coefficients, every non-real complex root occurs with its complex conjugate. The conjugate of 3 − 2i is 3 + 2i."
        },

        {
            id: 16,
            question: "A monic cubic polynomial with real coefficients has roots 2 and 1 + i. Find its constant term.",
            options: ["−4", "4", "−2", "2"],
            answer: "A",
            explanation: "Because the coefficients are real, 1 − i must also be a root. The product of the roots is 2(1 + i)(1 − i) = 2(2) = 4. For a monic cubic, the constant term is the negative of the product, so it is −4."
        },

        {
            id: 17,
            question: "What is the maximum possible number of positive real roots of P(x) = x⁴ − 3x³ + 2x² − 5x + 1 according to Descartes' Rule of Signs?",
            options: ["1", "2", "3", "4"],
            answer: "D",
            explanation: "The signs of the coefficients are +, −, +, −, +, giving four sign changes. Descartes' Rule of Signs permits at most four positive real roots, counting multiplicity."
        },


        // =====================================
        // PART 5: PARTIAL FRACTIONS
        // =====================================

        {
            id: 18,
            question: "What is the correct form of the partial fraction decomposition of (2x + 1)/[(x − 2)(x + 3)]?",
            options: [
                "A/(x − 2) + B/(x + 3)",
                "A/(x − 2) + (Bx + C)/(x + 3)",
                "(Ax + B)/(x − 2) + C/(x + 3)",
                "A/(x − 2)² + B/(x + 3)"
            ],
            answer: "A",
            explanation: "The denominator contains two distinct linear factors. Each factor requires a constant numerator, giving A/(x − 2) + B/(x + 3)."
        },

        {
            id: 19,
            question: "When (5x + 7)/[(x + 1)(x + 3)] = A/(x + 1) + B/(x + 3), find A.",
            options: ["1", "2", "3", "4"],
            answer: "A",
            explanation: "Multiplying through gives 5x + 7 = A(x + 3) + B(x + 1). Setting x = −1 gives 2 = 2A, so A = 1."
        },

        {
            id: 20,
            question: "What is the correct form of the partial fraction decomposition of (x² + 3)/[(x − 1)²(x + 2)]?",
            options: [
                "A/(x − 1) + B/(x − 1)² + C/(x + 2)",
                "A/(x − 1) + (Bx + C)/(x − 1)² + D/(x + 2)",
                "(Ax + B)/(x − 1)² + C/(x + 2)",
                "A/(x − 1)² + B/(x + 2)"
            ],
            answer: "A",
            explanation: "For a repeated linear factor (x − 1)², include terms for both powers: A/(x − 1) and B/(x − 1)². The distinct linear factor (x + 2) contributes C/(x + 2)."
        },


        // =====================================
        // PART 6: POLYNOMIAL IDENTITIES AND PROPERTIES
        // =====================================

        {
            id: 21,
            question: "What is the sum of all coefficients in the expansion of P(x) = (2x² − 3x + 2)⁴?",
            options: ["0", "1", "16", "81"],
            answer: "B",
            explanation: "The sum of coefficients of a polynomial is P(1). Here P(1) = (2 − 3 + 2)⁴ = 1⁴ = 1."
        },

        {
            id: 22,
            question: "If a polynomial satisfies P(−x) = P(x) for every real x, what type of polynomial is it?",
            options: [
                "Odd polynomial",
                "Even polynomial",
                "Invertible polynomial",
                "Orthogonal polynomial"
            ],
            answer: "B",
            explanation: "An even polynomial satisfies P(−x) = P(x). An odd polynomial instead satisfies P(−x) = −P(x)."
        },

        {
            id: 23,
            question: "Find the quotient when x³ − 3x² + 3x − 1 is divided by (x − 1).",
            options: [
                "x² + 2x + 1",
                "x² − 2x + 1",
                "x² − 3x + 1",
                "x² + 1"
            ],
            answer: "B",
            explanation: "The numerator is (x − 1)³. Dividing by (x − 1) gives (x − 1)² = x² − 2x + 1."
        },

        {
            id: 24,
            question: "For what values of m does x² − mx + 9 = 0 have real and equal roots?",
            options: [
                "m = ±3",
                "m = ±6",
                "m = 9",
                "m = 0"
            ],
            answer: "B",
            explanation: "Real and equal roots require the discriminant to be zero. Thus (−m)² − 4(1)(9) = 0, so m² − 36 = 0 and m = ±6."
        },

        {
            id: 25,
            question: "How many real linear factors does P(x) = x³ − 1 have when factored completely over the real numbers?",
            options: ["0", "1", "2", "3"],
            answer: "B",
            explanation: "Factor x³ − 1 = (x − 1)(x² + x + 1). The quadratic factor has discriminant 1 − 4 = −3, so it has no real roots. Therefore, there is one real linear factor, x − 1."
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
                ? "Your MATH 101 Polynomials result has been submitted successfully. The leaderboard is currently closed. Your score will become visible when the leaderboard is opened."
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
        "You have already completed this MATH 101 Polynomials CBT on this browser/device. Retakes are currently disabled.";

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
