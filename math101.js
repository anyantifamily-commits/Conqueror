/* =========================================
   CONQUERORS LABS
   MATH 101 — SEQUENCE & SERIES
   QUIZ ENGINE — VERSION 5
========================================= */


/* =========================================
   QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {
    title: "MATH 101 — Sequence & Series",
    quizId: "math101",
    quizVersion: 5,
    timeLimit: 30,
    maxQuestions: 25,
    allowRetake: false,
    passMark: 50,

    questions: [

        // =====================================
        // PART 1: ARITHMETIC PROGRESSION
        // =====================================

        {
            id: 1,
            question: "What is the 15th term of the arithmetic progression: 7, 13, 19, 25, ...?",
            options: [
                "85",
                "91",
                "97",
                "103"
            ],
            answer: "B",
            explanation: "For an AP, Tₙ = a + (n − 1)d. Here a = 7, d = 6 and n = 15. Therefore T₁₅ = 7 + 14(6) = 91."
        },

        {
            id: 2,
            question: "Find the sum of the first 20 terms of the arithmetic series: 4 + 9 + 14 + 19 + ...",
            options: [
                "990",
                "1010",
                "1030",
                "1050"
            ],
            answer: "C",
            explanation: "Here a = 4, d = 5 and n = 20. T₂₀ = 4 + 19(5) = 99. Therefore S₂₀ = 20/2 × (4 + 99) = 10 × 103 = 1030."
        },

        {
            id: 3,
            question: "In a geometric progression, the first term is 3 and the common ratio is 2. What is the 7th term?",
            options: [
                "96",
                "192",
                "384",
                "768"
            ],
            answer: "B",
            explanation: "For a GP, Tₙ = arⁿ⁻¹. Therefore T₇ = 3(2⁶) = 3 × 64 = 192."
        },

        {
            id: 4,
            question: "The 4th term of an AP is 14 and the 10th term is 32. What is the common difference?",
            options: [
                "2",
                "3",
                "4",
                "6"
            ],
            answer: "B",
            explanation: "T₄ = a + 3d = 14 and T₁₀ = a + 9d = 32. Subtracting gives 6d = 18, so d = 3."
        },

        {
            id: 5,
            question: "Which of the following statements are true for the geometric progression 81, 27, 9, 3, ...? I. The common ratio is 1/3. II. The 6th term is 1/3. III. The sum to infinity is 121.5.",
            options: [
                "I and II only",
                "I and III only",
                "II and III only",
                "I, II, and III"
            ],
            answer: "D",
            explanation: "The common ratio is 1/3. T₆ = 81(1/3)⁵ = 1/3. Also, S∞ = 81/(1 − 1/3) = 121.5. Therefore all three statements are true."
        },

        {
            id: 6,
            question: "If x + 1, 3x − 2, and 4x + 1 are three consecutive terms of an arithmetic progression, what is the value of x?",
            options: [
                "2",
                "4",
                "6",
                "8"
            ],
            answer: "C",
            explanation: "For three consecutive AP terms, twice the middle term equals the sum of the first and third: 2(3x − 2) = (x + 1) + (4x + 1). Solving gives x = 6."
        },

        {
            id: 7,
            question: "Find the sum to infinity of the geometric series: 16 + 8 + 4 + 2 + ...",
            options: [
                "30",
                "32",
                "36",
                "64"
            ],
            answer: "B",
            explanation: "S∞ = a/(1 − r). Here a = 16 and r = 1/2. Therefore S∞ = 16/(1 − 1/2) = 32."
        },

        {
            id: 8,
            question: "How many terms of the arithmetic progression 5, 9, 13, 17, ... are needed to give a sum of 230?",
            options: [
                "8",
                "9",
                "10",
                "11"
            ],
            answer: "C",
            explanation: "Using Sₙ = n/2[2a + (n − 1)d], we get 230 = n/2[10 + 4(n − 1)] = n(2n + 3). Solving gives n = 10."
        },

        {
            id: 9,
            question: "The 3rd term of a GP is 12 and the 6th term is 96. What is the first term?",
            options: [
                "2",
                "3",
                "4",
                "6"
            ],
            answer: "B",
            explanation: "T₃ = ar² = 12 and T₆ = ar⁵ = 96. Dividing gives r³ = 8, so r = 2. Therefore a(2²) = 12, giving a = 3."
        },

        {
            id: 10,
            question: "Insert three arithmetic means between 6 and 26.",
            options: [
                "10, 15, 20",
                "11, 16, 21",
                "12, 16, 20",
                "10, 14, 18"
            ],
            answer: "B",
            explanation: "There are five terms in total: 6, _, _, _, 26. The common difference is (26 − 6)/4 = 5. Therefore the three arithmetic means are 11, 16 and 21."
        },


        // =====================================
        // PART 2: GEOMETRIC PROGRESSION
        // =====================================

        {
            id: 11,
            question: "Which of the following sequences are geometric progressions? I. 2, −6, 18, −54, ... II. 1, 4, 9, 16, ... III. 5, 5, 5, 5, ...",
            options: [
                "I only",
                "I and II only",
                "I and III only",
                "I, II, and III"
            ],
            answer: "C",
            explanation: "Sequence I has common ratio −3. Sequence II does not have a constant ratio. Sequence III has common ratio 1. Therefore I and III only are geometric progressions."
        },

        {
            id: 12,
            question: "The sum of the first n terms of an AP is given by Sₙ = 3n² + 2n. What is the 5th term of this progression?",
            options: [
                "29",
                "32",
                "65",
                "85"
            ],
            answer: "A",
            explanation: "T₅ = S₅ − S₄. S₅ = 3(25) + 10 = 85, while S₄ = 3(16) + 8 = 56. Therefore T₅ = 85 − 56 = 29."
        },

        {
            id: 13,
            question: "If k − 2, k + 2, and k + 10 form a geometric progression, find the value of k.",
            options: [
                "−6",
                "2",
                "6",
                "8"
            ],
            answer: "A",
            explanation: "For three consecutive GP terms, (k + 2)² = (k − 2)(k + 10). Expanding and simplifying gives 4k + 24 = 0, so k = −6."
        },

        {
            id: 14,
            question: "What is the sum of all multiples of 4 between 10 and 98?",
            options: [
                "1144",
                "1188",
                "1200",
                "1232"
            ],
            answer: "B",
            explanation: "The multiples are 12, 16, 20, ..., 96. This is an AP with a = 12, l = 96 and d = 4. There are 22 terms. S = 22/2(12 + 96) = 11 × 108 = 1188."
        },

        {
            id: 15,
            question: "A geometric progression has a first term of 10 and a sum to infinity of 25. What is its common ratio?",
            options: [
                "2/5",
                "3/5",
                "1/2",
                "4/5"
            ],
            answer: "A",
            explanation: "Using S∞ = a/(1 − r), 25 = 10/(1 − r). Therefore 1 − r = 2/5, giving r = 3/5."
        },

        {
            id: 16,
            question: "Which of the following conditions must hold for a geometric series with first term a (a ≠ 0) and common ratio r to converge to a finite sum to infinity? I. |r| < 1 II. −1 < r < 1 III. r > 1",
            options: [
                "I only",
                "II only",
                "I and II only",
                "I and III only"
            ],
            answer: "C",
            explanation: "A geometric series converges to a finite sum when |r| < 1. This is equivalent to −1 < r < 1. Therefore I and II are both correct."
        },

        {
            id: 17,
            question: "In an AP, the sum of the 2nd and 5th terms is 23, and the 7th term is 22. Find the first term.",
            options: [
                "2",
                "4",
                "6",
                "8"
            ],
            answer: "B",
            explanation: "Let the first term be a and common difference be d. Then a₂ + a₅ = (a + d) + (a + 4d) = 2a + 5d = 23. Also a₇ = a + 6d = 22. Solving gives d = 3 and a = 4."
        },

        {
            id: 18,
            question: "Find the sum of the first 6 terms of the geometric progression: 2, 6, 18, 54, ...",
            options: [
                "486",
                "728",
                "729",
                "1456"
            ],
            answer: "B",
            explanation: "Here a = 2, r = 3 and n = 6. S₆ = a(r⁶ − 1)/(r − 1) = 2(729 − 1)/2 = 728."
        },

        {
            id: 19,
            question: "What is the positive geometric mean between 8 and 32?",
            options: [
                "12",
                "16",
                "20",
                "24"
            ],
            answer: "B",
            explanation: "The geometric mean G satisfies G² = 8 × 32 = 256. Therefore G = √256 = 16."
        },

        {
            id: 20,
            question: "A ball dropped from a height of 20 m rebounds to 3/4 of its previous height on each bounce. What is the total vertical distance the ball travels before coming to rest?",
            options: [
                "80 m",
                "120 m",
                "140 m",
                "160 m"
            ],
            answer: "C",
            explanation: "The first drop is 20 m. The upward and downward rebound distances form a GP beginning with 15 m and ratio 3/4. Total distance = 20 + 2[15/(1 − 3/4)] = 20 + 120 = 140 m."
        },


        // =====================================
        // PART 3: MIXED AP & GP PROBLEMS
        // =====================================

        {
            id: 21,
            question: "Which of the following are true about an arithmetic progression with first term a and common difference d? I. Tₙ − Tₙ₋₁ = d for all n > 1. II. If d = 0, the sequence is both an AP and a GP (provided a ≠ 0). III. The sum of terms equidistant from the beginning and end is constant.",
            options: [
                "I and II only",
                "I and III only",
                "II and III only",
                "I, II, and III"
            ],
            answer: "D",
            explanation: "All three statements are true. Consecutive AP terms differ by d, a constant non-zero sequence with d = 0 has GP ratio 1, and equidistant terms in an AP have a constant sum."
        },

        {
            id: 22,
            question: "The 2nd term of a GP is −6 and the 5th term is 48. Find the common ratio.",
            options: [
                "−2",
                "2",
                "−3",
                "3"
            ],
            answer: "A",
            explanation: "T₂ = ar = −6 and T₅ = ar⁴ = 48. Dividing gives r³ = 48/(−6) = −8. Therefore r = −2."
        },

        {
            id: 23,
            question: "How many terms are in the arithmetic progression: 11, 15, 19, ..., 95?",
            options: [
                "20",
                "21",
                "22",
                "23"
            ],
            answer: "B",
            explanation: "Using Tₙ = a + (n − 1)d, 95 = 11 + (n − 1)4. Thus 84 = 4(n − 1), so n − 1 = 21 and n = 22."
        },

        {
            id: 24,
            question: "The sum of three numbers in an AP is 27, and their product is 504. What are the three numbers?",
            options: [
                "4, 9, 14",
                "6, 9, 12",
                "7, 9, 11",
                "5, 9, 13"
            ],
            answer: "A",
            explanation: "For three AP terms with sum 27, the middle term is 9. Let the terms be 9 − d, 9, 9 + d. Their product is 9(81 − d²) = 504, giving d² = 25 and d = 5. Therefore the numbers are 4, 9 and 14."
        },

        {
            id: 25,
            question: "Express the recurring decimal 0.̅45 (0.454545...) as a fraction in its simplest form using an infinite geometric series.",
            options: [
                "9/20",
                "5/11",
                "4/9",
                "45/100"
            ],
            answer: "B",
            explanation: "0.454545... = 0.45 + 0.0045 + 0.000045 + ... This is a GP with a = 0.45 and r = 0.01. Therefore S∞ = 0.45/(1 − 0.01) = 0.45/0.99 = 45/99 = 5/11."
        }

    ]
};


/* =========================================
   SETTINGS
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

        const letter =
            String.fromCharCode(65 + index);

        const option =
            document.createElement("button");

        option.type = "button";
        option.className = "option";

        if (
            userAnswers[currentQuestion] === letter
        ) {
            option.classList.add("selected");
        }

        const optionLetter =
            document.createElement("span");

        optionLetter.className =
            "option-letter";

        optionLetter.textContent =
            letter;

        const text =
            document.createElement("span");

        text.className =
            "option-text";

        text.textContent =
            optionText;

        option.appendChild(optionLetter);
        option.appendChild(text);

        option.addEventListener(
            "click",
            () => {

                if (quizSubmitted) return;

                userAnswers[currentQuestion] =
                    letter;

                showQuestion();
                updateProgress();
                renderNavigator();
            }
        );

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

prevBtn.addEventListener(
    "click",
    () => {

        if (
            currentQuestion > 0 &&
            !quizSubmitted
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
                questions.length - 1 &&
            !quizSubmitted
        ) {
            currentQuestion++;

            showQuestion();
            renderNavigator();
        }
    }
);


function updateNavigationButtons() {

    prevBtn.disabled =
        currentQuestion === 0 ||
        quizSubmitted;

    nextBtn.disabled =
        currentQuestion ===
            questions.length - 1 ||
        quizSubmitted;
}


/* =========================================
   QUESTION NAVIGATOR
========================================= */

function renderNavigator() {

    questionNavigator.innerHTML = "";

    questions.forEach((_, index) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "question-number-btn";

        button.textContent =
            index + 1;

        if (userAnswers[index]) {
            button.classList.add("answered");
        }

        if (index === currentQuestion) {
            button.classList.add("current");
        }

        button.addEventListener(
            "click",
            () => {

                if (quizSubmitted) return;

                currentQuestion =
                    index;

                showQuestion();
                renderNavigator();
            }
        );

        questionNavigator.appendChild(button);
    });
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

    timerInterval =
        setInterval(() => {

            if (quizSubmitted) {

                clearInterval(
                    timerInterval
                );

                return;
            }

            timeRemaining--;

            updateTimerDisplay();

            if (timeRemaining <= 0) {

                clearInterval(
                    timerInterval
                );

                submitQuiz(true);
            }

        }, 1000);
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

    if (timeRemaining <= 60) {

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

        if (quizSubmitted) return;

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

        openNameModal();
    }
);


/* =========================================
   NAME MODAL
========================================= */

function openNameModal() {

    studentNameInput.value = "";

    nameError.style.display =
        "none";

    nameModal.classList.remove(
        "hidden"
    );

    setTimeout(() => {

        studentNameInput.focus();

    }, 100);
}


cancelName.addEventListener(
    "click",
    () => {

        nameModal.classList.add(
            "hidden"
        );
    }
);


confirmName.addEventListener(
    "click",
    () => {

        if (quizSubmitted) return;

        const name =
            studentNameInput.value.trim();

        if (!name) {

            nameError.style.display =
                "block";

            studentNameInput.focus();

            return;
        }

        studentName =
            name.substring(0, 60);

        nameModal.classList.add(
            "hidden"
        );

        submitQuiz(false);
    }
);


studentNameInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            confirmName.click();
        }
    }
);


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
                        studentName ||
                        "Anonymous",

                    p_quiz_id:
                        QUIZ_ID,

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

async function submitQuiz(
    automatic = false
) {

    if (quizSubmitted) return;

    quizSubmitted = true;

    clearInterval(
        timerInterval
    );

    submitBtn.disabled = true;
    prevBtn.disabled = true;
    nextBtn.disabled = true;

    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    questions.forEach(
        (question, index) => {

            const selected =
                userAnswers[index];

            if (!selected) {

                unanswered++;

            } else if (
                selected ===
                question.answer
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
        percentage >= PASS_MARK;

    if (
        !QUIZ_CONFIG.allowRetake
    ) {

        localStorage.setItem(
            COMPLETION_KEY,
            "true"
        );
    }

    const resultId =
        await saveQuizResult(
            studentName,
            correct,
            total,
            percentage,
            qualifiedForLeaderboard
        );

    if (resultId) {

        localStorage.setItem(
            RESULT_ID_KEY,
            resultId
        );
    }

    const saveSuccessful =
        Boolean(resultId);

    let leaderboardOpen =
        false;

    try {

        const { data, error } =
            await supabaseClient
                .from(
                    "leaderboard_settings"
                )
                .select(
                    "leaderboard_enabled, pass_mark"
                )
                .eq(
                    "quiz_id",
                    QUIZ_ID
                )
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

    quizSection.classList.add(
        "hidden"
    );

    resultSection.classList.remove(
        "hidden"
    );

    if (!leaderboardOpen) {

        showLockedResult(
            saveSuccessful
                ? "Your MATH 101 Sequence & Series result has been submitted successfully. The leaderboard is currently closed. Your score will become visible when the leaderboard is opened."
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
        resultSection.querySelector(
            ".result-icon"
        );

    const label =
        resultSection.querySelector(
            ".result-label"
        );

    icon.textContent = "✓";

    icon.classList.remove(
        "hidden"
    );

    label.textContent =
        "QUIZ COMPLETE";

    label.classList.remove(
        "hidden"
    );

    document.getElementById(
        "resultScore"
    ).textContent =
        `${correct}/${total}`;

    document.getElementById(
        "resultScore"
    ).classList.remove(
        "hidden"
    );

    document.getElementById(
        "resultPercentage"
    ).textContent =
        `${percentage}%`;

    document.getElementById(
        "resultPercentage"
    ).classList.remove(
        "hidden"
    );

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

    document.querySelector(
        ".result-stats"
    ).classList.remove(
        "hidden"
    );

    const resultMessage =
        document.getElementById(
            "resultMessage"
        );

    if (automatic) {

        resultMessage.textContent =
            "Time is up. Your quiz has been submitted automatically.";

    } else if (
        percentage >= 80
    ) {

        resultMessage.textContent =
            "🔥 Strong performance. But don't stop here — review every mistake.";

    } else if (
        percentage >= 60
    ) {

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

    reviewBtn.classList.remove(
        "hidden"
    );

    if (
        QUIZ_CONFIG.allowRetake
    ) {

        retakeBtn.classList.remove(
            "hidden"
        );

    } else {

        retakeBtn.classList.add(
            "hidden"
        );
    }
}


/* =========================================
   LOCKED RESULT
========================================= */

function showLockedResult(
    message
) {

    resultSection
        .querySelector(
            ".result-icon"
        )
        .classList.add(
            "hidden"
        );

    resultSection
        .querySelector(
            ".result-label"
        )
        .classList.add(
            "hidden"
        );

    document.getElementById(
        "resultScore"
    ).classList.add(
        "hidden"
    );

    document.getElementById(
        "resultPercentage"
    ).classList.add(
        "hidden"
    );

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

    reviewSection.classList.add(
        "hidden"
    );

    document.getElementById(
        "resultMessage"
    ).textContent =
        message;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
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

    reviewContainer.innerHTML =
        "";

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

            const yourLabel =
                document.createElement(
                    "strong"
                );

            yourLabel.textContent =
                "Your answer: ";

            yourAnswer.appendChild(
                yourLabel
            );

            yourAnswer.appendChild(
                document.createTextNode(
                    selectedAnswer
                )
            );

            const answer =
                document.createElement(
                    "div"
                );

            answer.className =
                "review-answer";

            const answerLabel =
                document.createElement(
                    "strong"
                );

            answerLabel.textContent =
                "Correct answer: ";

            answer.appendChild(
                answerLabel
            );

            answer.appendChild(
                document.createTextNode(
                    correctAnswer
                )
            );

            const correction =
                document.createElement(
                    "div"
                );

            correction.className =
                "review-correction";

            const correctionLabel =
                document.createElement(
                    "strong"
                );

            correctionLabel.textContent =
                "🧠 JOT THIS: ";

            correction.appendChild(
                correctionLabel
            );

            correction.appendChild(
                document.createTextNode(
                    question.explanation
                )
            );

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

    const icon =
        resultSection.querySelector(
            ".result-icon"
        );

    const label =
        resultSection.querySelector(
            ".result-label"
        );

    icon.textContent = "🔒";

    icon.classList.remove(
        "hidden"
    );

    label.textContent =
        "ATTEMPT COMPLETED";

    label.classList.remove(
        "hidden"
    );

    document.getElementById(
        "resultScore"
    ).textContent =
        "LOCKED";

    document.getElementById(
        "resultScore"
    ).classList.remove(
        "hidden"
    );

    document.getElementById(
        "resultPercentage"
    ).textContent =
        "";

    document.querySelector(
        ".result-stats"
    ).classList.add(
        "hidden"
    );

    document.getElementById(
        "resultMessage"
    ).textContent =
        "You have already completed this MATH 101 Sequence & Series CBT on this browser/device. Retakes are currently disabled.";

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