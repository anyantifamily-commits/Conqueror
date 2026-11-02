
/* =========================================
   CONQUERORS LABS
   CHM 101 — MATTER, ENERGY & THERMODYNAMICS
========================================= */

const QUIZ_CONFIG = {
    title: "CHM 101 — Matter, Energy & Thermodynamics",

    quizVersion: 3,
    timeLimit: 20,
    maxQuestions: 30,
    allowRetake: false,

    quizId: "chm101-atomic-structure",
    passMark: 50,

    questions: [
        {
            id: 1,
            question: "What is the SI unit of energy?",
            options: ["Calorie", "Newton", "Joule", "Watt"],
            answer: "Joule",
            explanation: "The joule (J) is the SI unit of energy. A calorie is a non-SI unit, a newton measures force, and a watt measures power."
        },
        {
            id: 2,
            question: "Which equation describes the kinetic energy of an object of mass m moving with velocity v?",
            options: ["Ek = mgh", "Ek = ½mv²", "Ek = ½mv", "Ek = mv²"],
            answer: "Ek = ½mv²",
            explanation: "Kinetic energy is given by Ek = ½mv², where m is mass and v is velocity."
        },
        {
            id: 3,
            question: "Which thermodynamic system allows both matter and energy to cross its boundary?",
            options: ["Closed system", "Isolated system", "Open system", "Adiabatic system"],
            answer: "Open system",
            explanation: "An open system exchanges both matter and energy with its surroundings."
        },
        {
            id: 4,
            question: "The universe is considered which type of thermodynamic system?",
            options: ["Open system", "Closed system", "Isolated system", "Isothermal system"],
            answer: "Isolated system",
            explanation: "The universe is treated as an isolated system because it has no surroundings with which to exchange matter or energy."
        },
        {
            id: 5,
            question: "Which of the following is an intensive thermodynamic property?",
            options: ["Mass", "Volume", "Boiling point", "Internal energy"],
            answer: "Boiling point",
            explanation: "Boiling point is an intensive property because it does not depend on the amount of substance present."
        },
        {
            id: 6,
            question: "Which of the following is an extensive thermodynamic property?",
            options: ["Temperature", "Density", "Enthalpy", "Refractive index"],
            answer: "Enthalpy",
            explanation: "Enthalpy is extensive because its value depends on the amount of substance in the system."
        },
        {
            id: 7,
            question: "Which thermodynamic process occurs at constant temperature?",
            options: ["Adiabatic", "Isobaric", "Isochoric", "Isothermal"],
            answer: "Isothermal",
            explanation: "An isothermal process occurs at constant temperature, so the temperature change is zero."
        },
        {
            id: 8,
            question: "A thermodynamic process in which no heat is exchanged with the surroundings is called:",
            options: ["Cyclic process", "Adiabatic process", "Isothermal process", "Isobaric process"],
            answer: "Adiabatic process",
            explanation: "An adiabatic process involves no heat transfer between the system and its surroundings; q = 0."
        },
        {
            id: 9,
            question: "What is the change in internal energy of a system after a complete cyclic process?",
            options: ["Greater than zero", "Less than zero", "Zero", "Infinite"],
            answer: "Zero",
            explanation: "Internal energy is a state function. Since a cyclic process returns the system to its initial state, its net change in internal energy is zero."
        },
        {
            id: 10,
            question: "Which of the following is a path function rather than a state function?",
            options: ["Internal energy", "Enthalpy", "Work", "Volume"],
            answer: "Work",
            explanation: "Work depends on the path taken between two states. Internal energy, enthalpy and volume are state functions."
        },
        {
            id: 11,
            question: "Which expression represents the First Law of Thermodynamics using the chemistry sign convention?",
            options: ["ΔE = q − w", "ΔE = q + w", "ΔE = w − q", "ΔE = q/w"],
            answer: "ΔE = q + w",
            explanation: "The First Law is ΔE = q + w, where q is heat absorbed by the system and w is work done on the system."
        },
        {
            id: 12,
            question: "When heat enters a thermodynamic system from its surroundings, what is the sign of q?",
            options: ["Positive (+q)", "Negative (−q)", "Zero", "Dependent only on pressure"],
            answer: "Positive (+q)",
            explanation: "Heat absorbed by the system is assigned a positive sign under the chemistry sign convention."
        },
        {
            id: 13,
            question: "According to the chemistry sign convention, what is the sign of work done by the system on its surroundings?",
            options: ["Positive (+w)", "Negative (−w)", "Zero", "Undefined"],
            answer: "Negative (−w)",
            explanation: "Work done by the system is negative because energy leaves the system through work."
        },
        {
            id: 14,
            question: "What is the expression for expansion or compression work against constant external pressure?",
            options: ["W = −PexΔV", "W = PexΔV", "W = −nRT ln V", "W = PV/T"],
            answer: "W = −PexΔV",
            explanation: "At constant external pressure, work is W = −PexΔV. Expansion gives negative work, while compression gives positive work."
        },
        {
            id: 15,
            question: "What is the work done during free expansion against zero external pressure?",
            options: ["+1 J", "−PΔV", "Zero", "nRT"],
            answer: "Zero",
            explanation: "For free expansion, external pressure is zero. Since W = −PexΔV, the work done is zero."
        },
        {
            id: 16,
            question: "Which expression gives the work done during the reversible isothermal expansion of an ideal gas?",
            options: [
                "W = −PΔV",
                "W = −nRT ln(V₂/V₁)",
                "W = −CΔT",
                "W = mcΔT"
            ],
            answer: "W = −nRT ln(V₂/V₁)",
            explanation: "For a reversible isothermal expansion of an ideal gas, work is W = −nRT ln(V₂/V₁), using the chemistry sign convention."
        },
        {
            id: 17,
            question: "A gas absorbs 35.0 J of heat and does 15.0 J of work. What is its change in internal energy?",
            options: ["+50.0 J", "−20.0 J", "+20.0 J", "−50.0 J"],
            answer: "+20.0 J",
            explanation: "Using ΔE = q + w, heat absorbed is +35.0 J and work done by the gas is −15.0 J. Therefore, ΔE = 35.0 − 15.0 = +20.0 J."
        },
        {
            id: 18,
            question: "Specific heat capacity is the heat required to raise the temperature of:",
            options: [
                "One mole of a substance by one kelvin",
                "One gram of a substance by one degree Celsius or kelvin",
                "One litre of a substance by one degree Celsius",
                "One kilogram of a substance by ten degrees Celsius"
            ],
            answer: "One gram of a substance by one degree Celsius or kelvin",
            explanation: "Specific heat capacity is the heat required to raise the temperature of a unit mass of a substance by one degree. The gram-based option is the common chemistry convention."
        },
        {
            id: 19,
            question: "Which equation relates heat transferred to mass, specific heat capacity and temperature change?",
            options: ["q = mCΔT", "q = mΔT/C", "q = C + mΔT", "q = C/(mΔT)"],
            answer: "q = mCΔT",
            explanation: "The heat equation is q = mCΔT, where m is mass, C is specific heat capacity and ΔT is the temperature change."
        },
        {
            id: 20,
            question: "What is the direct conversion of a solid into a gas without passing through the liquid state called?",
            options: ["Melting", "Condensation", "Sublimation", "Deposition"],
            answer: "Sublimation",
            explanation: "Sublimation is the direct change from solid to gas. Deposition is the reverse process."
        },
        {
            id: 21,
            question: "Is vaporization an endothermic or exothermic process?",
            options: [
                "Endothermic; heat enters the system",
                "Exothermic; heat leaves the system",
                "Neither endothermic nor exothermic",
                "Adiabatic"
            ],
            answer: "Endothermic; heat enters the system",
            explanation: "Vaporization requires energy to overcome intermolecular attractions, so heat is absorbed by the substance."
        },
        {
            id: 22,
            question: "What thermodynamic quantity represents the heat exchanged during a process at constant pressure?",
            options: ["Internal energy", "Enthalpy change (ΔH)", "Work function", "Entropy"],
            answer: "Enthalpy change (ΔH)",
            explanation: "At constant pressure, the heat exchanged is equal to the enthalpy change, provided only pressure-volume work occurs."
        },
        {
            id: 23,
            question: "Which apparatus measures the heat gained or lost during a physical or chemical process?",
            options: ["Barometer", "Thermostat", "Calorimeter", "Manometer"],
            answer: "Calorimeter",
            explanation: "A calorimeter is used to measure heat changes during physical and chemical processes."
        },
        {
            id: 24,
            question: "In a bomb calorimeter, which operates at constant volume, what is the relationship between the heat of the system and the heat of the calorimeter?",
            options: [
                "qsystem = +100 kJ",
                "qsystem = 0",
                "qsystem = −qcalorimeter",
                "qsystem = qwater"
            ],
            answer: "qsystem = −qcalorimeter",
            explanation: "Assuming the calorimeter is insulated, heat lost by the reacting system is gained by the calorimeter, and vice versa. Their heat changes are equal in magnitude and opposite in sign."
        },
        {
            id: 25,
            question: "What happens to the enthalpy change when a thermochemical equation is reversed?",
            options: [
                "It is multiplied by two",
                "It remains unchanged",
                "Its sign is reversed",
                "It becomes zero"
            ],
            answer: "Its sign is reversed",
            explanation: "Reversing a reaction reverses the direction of heat transfer, so the sign of its enthalpy change also reverses."
        },
        {
            id: 26,
            question: "If all coefficients in a balanced thermochemical equation are multiplied by two, what happens to ΔH?",
            options: [
                "It is divided by two",
                "It is multiplied by two",
                "It is squared",
                "It remains unchanged"
            ],
            answer: "It is multiplied by two",
            explanation: "Enthalpy is an extensive property. Multiplying the reaction equation by two also doubles its enthalpy change."
        },
        {
            id: 27,
            question: "What does Hess's Law state?",
            options: [
                "Energy can be created in multi-step reactions",
                "The enthalpy change of an overall reaction equals the sum of the enthalpy changes of its steps",
                "Heat transfer depends strictly on the path taken",
                "Pressure is inversely proportional to volume in every cyclic process"
            ],
            answer: "The enthalpy change of an overall reaction equals the sum of the enthalpy changes of its steps",
            explanation: "Hess's Law follows from enthalpy being a state function. The overall enthalpy change is the sum of the changes for the individual steps."
        },
        {
            id: 28,
            question: "Which pressure and temperature are commonly used as standard conditions in introductory thermochemistry?",
            options: [
                "0 atm and 0°C",
                "1 atm and 25°C",
                "2 atm and 100°C",
                "10 atm and 298 K"
            ],
            answer: "1 atm and 25°C",
            explanation: "Many introductory chemistry texts use 1 atm and 298 K (25°C) as standard conditions. Modern standard pressure is 1 bar, so follow the convention specified in your course."
        },
        {
            id: 29,
            question: "What is the standard enthalpy of formation of an element in its standard state?",
            options: ["+1 kJ/mol", "−1 kJ/mol", "Zero", "Undefined"],
            answer: "Zero",
            explanation: "The standard enthalpy of formation of an element in its most stable standard state is defined as zero."
        },
        {
            id: 30,
            question: "How is the standard enthalpy change of a reaction calculated using standard enthalpies of formation?",
            options: [
                "ΣΔH°f(reactants) − ΣΔH°f(products)",
                "ΣΔH°f(products) − ΣΔH°f(reactants)",
                "ΣΔH°f(products) × ΣΔH°f(reactants)",
                "ΣΔH°f(products) / ΣΔH°f(reactants)"
            ],
            answer: "ΣΔH°f(products) − ΣΔH°f(reactants)",
            explanation: "The standard enthalpy change is calculated by subtracting the sum of the standard enthalpies of formation of the reactants from that of the products, including balanced equation coefficients."
        }
    ]
};


/* =========================================
   COMPLETION LOCK
   Increase quizVersion to allow a new attempt.
========================================= */

const COMPLETION_KEY =
    `conquerorsLabs_CHM101_completed_v${QUIZ_CONFIG.quizVersion}`;


/* =========================================
   RESULT ID
========================================= */

const RESULT_ID_KEY =
    `conquerorsLabs_CHM101_result_id_v${QUIZ_CONFIG.quizVersion}`;


/* =========================================
   QUIZ STATE
========================================= */

const questions =
    QUIZ_CONFIG.questions.slice(0, QUIZ_CONFIG.maxQuestions);

let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);
let timeRemaining = QUIZ_CONFIG.timeLimit * 60;
let timerInterval = null;
let quizSubmitted = false;
let pendingSubmission = false;


/* =========================================
   DOM ELEMENTS
========================================= */

const quizTitle = document.getElementById("quizTitle");
const timer = document.getElementById("timer");
const timerBox = document.querySelector(".timer-box");
const progressText = document.getElementById("progressText");
const answeredText = document.getElementById("answeredText");
const progressBar = document.getElementById("progressBar");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const questionNavigator = document.getElementById("questionNavigator");
const submitBtn = document.getElementById("submitBtn");
const questionArea = document.getElementById("questionArea");
const navigatorCard = document.querySelector(".navigator-card");
const resultSection = document.getElementById("resultSection");
const resultScore = document.getElementById("resultScore");
const resultPercentage = document.getElementById("resultPercentage");
const resultMessage = document.getElementById("resultMessage");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const unansweredCount = document.getElementById("unansweredCount");
const reviewBtn = document.getElementById("reviewBtn");
const retakeBtn = document.getElementById("retakeBtn");
const reviewSection = document.getElementById("reviewSection");
const reviewContainer = document.getElementById("reviewContainer");
const submitModal = document.getElementById("submitModal");
const modalText = document.getElementById("modalText");
const cancelSubmitBtn = document.getElementById("cancelSubmitBtn");
const confirmSubmitBtn = document.getElementById("confirmSubmitBtn");


/* =========================================
   NAME MODAL ELEMENTS
========================================= */

const nameModal = document.getElementById("nameModal");
const studentNameInput = document.getElementById("studentNameInput");
const nameError = document.getElementById("nameError");
const cancelNameBtn = document.getElementById("cancelNameBtn");
const continueNameBtn = document.getElementById("continueNameBtn");


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    if (quizTitle) {
        quizTitle.textContent = QUIZ_CONFIG.title;
    }

    if (questions.length === 0) {
        alert("No questions have been added to this CBT yet.");
        return;
    }

    if (
        !QUIZ_CONFIG.allowRetake &&
        localStorage.getItem(COMPLETION_KEY) === "true"
    ) {
        showAlreadyCompleted();
        return;
    }

    initializeQuiz();
});


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
    const question = questions[currentQuestion];
    if (!question) return;

    questionNumber.textContent = currentQuestion + 1;
    questionText.textContent = question.question;
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "option";

        if (answers[currentQuestion] === option) {
            button.classList.add("selected");
        }

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const text = document.createElement("span");
        text.className = "option-text";
        text.textContent = option;

        button.appendChild(letter);
        button.appendChild(text);

        button.addEventListener("click", () => {
            selectAnswer(option);
        });

        optionsContainer.appendChild(button);
    });

    previousBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === questions.length - 1;

    updateNavigator();
    updateProgress();
}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(option) {
    if (quizSubmitted || pendingSubmission) return;

    answers[currentQuestion] = option;
    renderQuestion();
}


/* =========================================
   NEXT / PREVIOUS
========================================= */

nextBtn.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
        scrollToQuestion();
    }
});

previousBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        scrollToQuestion();
    }
});

function scrollToQuestion() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


/* =========================================
   QUESTION NAVIGATOR
========================================= */

function buildNavigator() {
    questionNavigator.innerHTML = "";

    questions.forEach((_, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "question-number-btn";
        button.textContent = index + 1;

        button.addEventListener("click", () => {
            if (quizSubmitted || pendingSubmission) return;

            currentQuestion = index;
            renderQuestion();
            scrollToQuestion();
        });

        questionNavigator.appendChild(button);
    });
}

function updateNavigator() {
    const buttons = questionNavigator.querySelectorAll(".question-number-btn");

    buttons.forEach((button, index) => {
        button.classList.toggle("answered", answers[index] !== null);
        button.classList.toggle("current", index === currentQuestion);
    });
}


/* =========================================
   PROGRESS
========================================= */

function updateProgress() {
    const answered = answers.filter(answer => answer !== null).length;
    const total = questions.length;
    const percentage = ((currentQuestion + 1) / total) * 100;

    progressText.textContent = `Question ${currentQuestion + 1} of ${total}`;
    answeredText.textContent = `${answered} answered`;
    progressBar.style.width = `${percentage}%`;
}


/* =========================================
   TIMER
========================================= */

function startTimer() {
    clearInterval(timerInterval);
    if (quizSubmitted || timeRemaining <= 0) return;

    updateTimerDisplay();

    timerInterval = setInterval(() => {
        if (quizSubmitted) {
            clearInterval(timerInterval);
            return;
        }

        if (pendingSubmission) return;

        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            autoSubmit();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    if (timer) {
        timer.textContent =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    if (timerBox) {
        timerBox.classList.remove("warning", "danger");

        if (timeRemaining <= 300 && timeRemaining > 60) {
            timerBox.classList.add("warning");
        }

        if (timeRemaining <= 60) {
            timerBox.classList.add("danger");
        }
    }
}


/* =========================================
   SUBMIT BUTTON
========================================= */

submitBtn.addEventListener("click", () => {
    if (quizSubmitted || pendingSubmission) return;

    const unanswered = answers.filter(answer => answer === null).length;

    if (unanswered > 0) {
        modalText.textContent =
            `You still have ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}. Are you sure you want to submit?`;
    } else {
        modalText.textContent =
            `You have answered all ${questions.length} questions. Are you ready to submit?`;
    }

    submitModal.classList.remove("hidden");
});

cancelSubmitBtn.addEventListener("click", () => {
    submitModal.classList.add("hidden");
});

confirmSubmitBtn.addEventListener("click", () => {
    submitModal.classList.add("hidden");
    submitQuiz();
});


/* =========================================
   AUTO SUBMIT
========================================= */

function autoSubmit() {
    alert("Time is up! Your CBT will now be submitted automatically.");
    submitQuiz();
}


/* =========================================
   SUBMIT QUIZ
========================================= */

async function submitQuiz() {
    if (quizSubmitted || pendingSubmission) return;

    pendingSubmission = true;
    clearInterval(timerInterval);

    openNameModal();
}


/* =========================================
   OPEN NAME MODAL
========================================= */

function openNameModal() {
    if (nameError) nameError.classList.add("hidden");
    if (studentNameInput) studentNameInput.value = "";

    nameModal.classList.remove("hidden");

    setTimeout(() => {
        studentNameInput.focus();
    }, 100);
}


/* =========================================
   CANCEL NAME
========================================= */

cancelNameBtn.addEventListener("click", () => {
    if (quizSubmitted) return;

    nameModal.classList.add("hidden");
    pendingSubmission = false;

    if (timeRemaining > 0) {
        startTimer();
    }
});


/* =========================================
   CONTINUE NAME
========================================= */

continueNameBtn.addEventListener("click", () => {
    processNameSubmission();
});

studentNameInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        event.preventDefault();
        processNameSubmission();
    }
});


/* =========================================
   PROCESS NAME SUBMISSION
========================================= */

async function processNameSubmission() {
    if (quizSubmitted) return;

    const studentName = studentNameInput.value.trim();

    if (!studentName) {
        nameError.textContent = "Please enter your name.";
        nameError.classList.remove("hidden");
        studentNameInput.focus();
        return;
    }

    nameError.classList.add("hidden");
    continueNameBtn.disabled = true;
    continueNameBtn.textContent = "SAVING...";

    const correct = calculateCorrectAnswers();
    const total = questions.length;
    const unanswered = calculateUnanswered();
    const wrong = total - correct - unanswered;
    const percentage = Math.round((correct / total) * 100);
    const qualifiedForLeaderboard = percentage >= QUIZ_CONFIG.passMark;

    const resultId = await saveQuizResult(
        studentName,
        correct,
        total,
        percentage,
        qualifiedForLeaderboard
    );

    if (!resultId) {
        continueNameBtn.disabled = false;
        continueNameBtn.textContent = "CONTINUE";

        nameError.textContent =
            "Your result could not be saved. Please try again.";
        nameError.classList.remove("hidden");

        pendingSubmission = false;

        if (timeRemaining > 0) startTimer();
        return;
    }

    localStorage.setItem(RESULT_ID_KEY, resultId);

    quizSubmitted = true;
    pendingSubmission = false;

    if (!QUIZ_CONFIG.allowRetake) {
        localStorage.setItem(COMPLETION_KEY, "true");
    }

    clearInterval(timerInterval);
    nameModal.classList.add("hidden");

    const leaderboardSettings = await getLeaderboardSettings();

    if (!leaderboardSettings) {
        showLockedResult(
            "Your quiz was submitted successfully. Your result is temporarily locked while the leaderboard is being prepared. Please join the Conquerors Labs WhatsApp channel to be notified when results are released. Thank you 🌹"
        );
        return;
    }

    const leaderboardIsEnabled =
        leaderboardSettings.leaderboard_enabled === true ||
        leaderboardSettings.leaderboard_enabled === "true";

    if (!leaderboardIsEnabled) {
        showLockedResult(
            "Your quiz has been submitted successfully. Your result and leaderboard position are currently locked. Results will be available when the leaderboard is opened. Please join the Conquerors Labs WhatsApp channel for updates 🌹"
        );
        return;
    }

    showResults(correct, wrong, unanswered, percentage);
}


/* =========================================
   CALCULATE SCORES
========================================= */

function calculateCorrectAnswers() {
    let correct = 0;

    questions.forEach((question, index) => {
        if (answers[index] === question.answer) {
            correct++;
        }
    });

    return correct;
}

function calculateUnanswered() {
    return answers.filter(answer => answer === null).length;
}


/* =========================================
   SAVE QUIZ RESULT TO SUPABASE
========================================= */

async function saveQuizResult(
    studentName,
    score,
    totalQuestions,
    percentage,
    qualifiedForLeaderboard
) {
    try {
        const { data, error } = await supabaseClient.rpc(
            "submit_quiz_result",
            {
                p_student_name: studentName,
                p_quiz_id: QUIZ_CONFIG.quizId,
                p_quiz_title: QUIZ_CONFIG.title,
                p_score: score,
                p_total_questions: totalQuestions,
                p_percentage: percentage,
                p_qualified_for_leaderboard: qualifiedForLeaderboard
            }
        );

        if (error) {
            console.error("Quiz result save error:", error);
            return false;
        }

        if (!data) {
            console.error("Quiz result save error: No result ID returned.");
            return false;
        }

        return data;
    } catch (error) {
        console.error("Quiz result JavaScript error:", error);
        return false;
    }
}


/* =========================================
   GET LEADERBOARD SETTINGS
========================================= */

async function getLeaderboardSettings() {
    try {
        const { data, error } = await supabaseClient
            .from("leaderboard_settings")
            .select("quiz_id, leaderboard_enabled, pass_mark")
            .eq("quiz_id", QUIZ_CONFIG.quizId)
            .single();

        if (error) {
            console.error("Leaderboard settings error:", error);
            return null;
        }

        return {
            ...data,
            leaderboard_enabled:
                data.leaderboard_enabled === true ||
                data.leaderboard_enabled === "true"
        };
    } catch (error) {
        console.error("Leaderboard settings JavaScript error:", error);
        return null;
    }
}


/* =========================================
   SHOW RESULTS
========================================= */

function showResults(correct, wrong, unanswered, percentage) {
    correctCount.textContent = correct;
    wrongCount.textContent = wrong;
    unansweredCount.textContent = unanswered;

    resultScore.textContent = `${correct} / ${questions.length}`;
    resultPercentage.textContent = `${percentage}%`;
    resultMessage.textContent = getResultMessage(percentage);

    questionArea.classList.add("hidden");
    navigatorCard.classList.add("hidden");
    submitBtn.classList.add("hidden");

    resultSection.classList.remove("hidden");
    reviewBtn.classList.remove("hidden");
    retakeBtn.classList.add("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
}


/* =========================================
   LOCKED RESULT
========================================= */

function showLockedResult(message) {
    questionArea.classList.add("hidden");
    navigatorCard.classList.add("hidden");
    submitBtn.classList.add("hidden");

    resultSection.classList.remove("hidden");

    resultScore.textContent = "🔒";
    resultPercentage.textContent = "";
    resultMessage.textContent = message;

    if (reviewBtn) reviewBtn.classList.add("hidden");
    if (retakeBtn) retakeBtn.classList.add("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
}


/* =========================================
   RESULT MESSAGE
========================================= */

function getResultMessage(percentage) {
    if (percentage >= 90) {
        return "Outstanding! You conquered CHM 101 at a very high level. 🔥";
    }

    if (percentage >= 80) {
        return "Excellent performance! Your thermodynamics foundation is strong. 🧪";
    }

    if (percentage >= 70) {
        return "Great job! You have a solid grasp of the concepts. Keep sharpening it.";
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

reviewBtn.addEventListener("click", () => {
    generateReview();

    reviewSection.classList.remove("hidden");
    reviewSection.scrollIntoView({ behavior: "smooth" });
});


/* =========================================
   GENERATE ANSWER REVIEW
========================================= */

function generateReview() {
    reviewContainer.innerHTML = "";

    questions.forEach((question, index) => {
        const userAnswer = answers[index];
        const isCorrect = userAnswer === question.answer;

        const card = document.createElement("div");
        card.className = `review-card ${isCorrect ? "correct" : "wrong"}`;

        const number = document.createElement("div");
        number.className = "review-question-number";
        number.textContent = `QUESTION ${index + 1}`;

        const questionText = document.createElement("div");
        questionText.className = "review-question";
        questionText.textContent = question.question;

        const yourAnswer = document.createElement("div");
        yourAnswer.className = "review-answer";

        const yourLabel = document.createElement("strong");
        yourLabel.textContent = "Your answer: ";

        yourAnswer.appendChild(yourLabel);
        yourAnswer.appendChild(
            document.createTextNode(userAnswer ?? "Not answered")
        );

        const correctAnswer = document.createElement("div");
        correctAnswer.className = "review-answer";

        const correctLabel = document.createElement("strong");
        correctLabel.textContent = "Correct answer: ";

        correctAnswer.appendChild(correctLabel);
        correctAnswer.appendChild(
            document.createTextNode(question.answer)
        );

        const correction = document.createElement("div");
        correction.className = "review-correction";
        correction.textContent = `💡 Explanation: ${question.explanation}`;

        card.appendChild(number);
        card.appendChild(questionText);
        card.appendChild(yourAnswer);
        card.appendChild(correctAnswer);
        card.appendChild(correction);

        reviewContainer.appendChild(card);
    });
}


/* =========================================
   RETAKE
========================================= */

retakeBtn.addEventListener("click", () => {
    if (!QUIZ_CONFIG.allowRetake) return;

    localStorage.removeItem(COMPLETION_KEY);
    location.reload();
});


/* =========================================
   ALREADY COMPLETED SCREEN
========================================= */

function showAlreadyCompleted() {
    quizSubmitted = true;

    if (questionArea) questionArea.classList.add("hidden");
    if (navigatorCard) navigatorCard.classList.add("hidden");
    if (submitBtn) submitBtn.classList.add("hidden");
    if (resultSection) resultSection.classList.remove("hidden");

    if (resultScore) resultScore.textContent = "✓";
    if (resultPercentage) resultPercentage.textContent = "";

    if (resultMessage) {
        resultMessage.textContent =
            "You have already completed this CBT. Only one attempt is allowed.";
    }

    if (reviewBtn) reviewBtn.classList.add("hidden");
    if (retakeBtn) retakeBtn.classList.add("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
}
