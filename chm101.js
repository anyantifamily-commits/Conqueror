
/* =========================================
   CONQUERORS LABS
   CHM 101 — CHEMICAL KINETICS
========================================= */

const QUIZ_CONFIG = {
    title: "CHM 101 — Chemical Kinetics",

    quizVersion: 3,
    timeLimit: 20,
    maxQuestions: 25,
    allowRetake: false,

    quizId: "chm101-atomic-structure",
    passMark: 50,

    questions: [

        {
            id: 1,
            question: "For the gaseous reaction 3X + Y → 2Z, how does the rate of disappearance of X relate to the overall reaction rate?",
            options: [
                "It is equal to the overall reaction rate.",
                "It is equal to three times the reaction rate.",
                "It is equal to one-third of the reaction rate.",
                "It is equal to twice the reaction rate."
            ],
            answer: "It is equal to three times the reaction rate.",
            explanation: "For 3X + Y → 2Z, the overall reaction rate is -(1/3)Δ[X]/Δt. Therefore, the rate of disappearance of X is three times the overall reaction rate."
        },

        {
            id: 2,
            question: "What are the correct units for the rate constant (k) of a third-order overall reaction when concentration is expressed in mol L⁻¹ and time in seconds?",
            options: [
                "s⁻¹",
                "L mol⁻¹ s⁻¹",
                "L² mol⁻² s⁻¹",
                "mol L⁻¹ s⁻¹"
            ],
            answer: "L² mol⁻² s⁻¹",
            explanation: "For an nth-order reaction, the units of k are concentration^(1−n) time⁻¹. For a third-order reaction, the units are L² mol⁻² s⁻¹."
        },

        {
            id: 3,
            question: "In a kinetic study, doubling the concentration of reactant A increases the initial reaction rate by a factor of 8, while keeping other conditions constant. What is the order of the reaction with respect to A?",
            options: ["1", "2", "3", "0"],
            answer: "3",
            explanation: "Rate ∝ [A]ⁿ. Therefore, 8 = 2ⁿ. Since 2³ = 8, the reaction is third order with respect to A."
        },

        {
            id: 4,
            question: "Which of the following graphical plots yields a straight line with a slope equal to −k for a first-order chemical reaction?",
            options: [
                "[A] versus time",
                "ln[A] versus time",
                "1/[A] versus time",
                "log(rate) versus log[A]"
            ],
            answer: "ln[A] versus time",
            explanation: "The integrated first-order rate equation is ln[A] = ln[A]₀ − kt. A plot of ln[A] against time produces a straight line with a slope of −k."
        },

        {
            id: 5,
            question: "How does the half-life of a zero-order reaction behave as the initial concentration of the reactant is increased?",
            options: [
                "It remains constant regardless of the initial concentration.",
                "It increases inversely proportional to the initial concentration.",
                "It decreases as the initial concentration rises.",
                "It increases directly proportional to the initial concentration."
            ],
            answer: "It increases directly proportional to the initial concentration.",
            explanation: "For a zero-order reaction, t½ = [A]₀/(2k). Therefore, the half-life increases directly with the initial concentration."
        },

        {
            id: 6,
            question: "A radioactive isotope undergoes first-order decay with a half-life of 15 minutes. What fraction of the original sample remains after 60 minutes?",
            options: [
                "1/4",
                "1/8",
                "1/16",
                "1/32"
            ],
            answer: "1/16",
            explanation: "60 minutes represents four half-lives (60/15 = 4). The remaining fraction is (1/2)⁴ = 1/16."
        },

        {
            id: 7,
            question: "Which of the following requirements is NOT one of the three core conditions specified by collision theory for a successful chemical reaction?",
            options: [
                "Colliding particles must maintain a neutral electrical charge.",
                "Particles must physically collide with one another.",
                "Collisions must possess kinetic energy greater than or equal to Ea.",
                "Colliding molecules must have the proper spatial orientation."
            ],
            answer: "Colliding particles must maintain a neutral electrical charge.",
            explanation: "Successful collisions require sufficient energy to overcome the activation energy and proper spatial orientation. The particles do not have to be electrically neutral."
        },

        {
            id: 8,
            question: "What is the physical meaning of the peak in a potential energy profile diagram for an elementary reaction?",
            options: [
                "The stable intermediate product",
                "The transition state or activated complex",
                "The total enthalpy change (ΔH)",
                "The ground-state reactant energy level"
            ],
            answer: "The transition state or activated complex",
            explanation: "The peak represents the transition state or activated complex, which is the high-energy arrangement formed as reactants are converted into products."
        },

        {
            id: 9,
            question: "Which of the following operational factors changes the value of the rate constant (k) for a given chemical reaction?",
            options: [
                "Increasing the initial concentration of reactants",
                "Decreasing the system volume for gaseous components",
                "Increasing the system temperature",
                "Increasing the surface area of a solid reactant"
            ],
            answer: "Increasing the system temperature",
            explanation: "Temperature changes the rate constant according to the Arrhenius equation. Concentration, volume and surface area can affect reaction rate without necessarily changing the rate constant."
        },

        {
            id: 10,
            question: "In an Arrhenius plot of ln k versus 1/T, what physical property does the slope of the resulting straight line represent?",
            options: [
                "−Ea/R",
                "+Ea/R",
                "−Ea × R",
                "ln A"
            ],
            answer: "−Ea/R",
            explanation: "The Arrhenius equation in linear form is ln k = ln A − (Ea/R)(1/T). Therefore, the slope is −Ea/R."
        },

        {
            id: 11,
            question: "What is the primary function of a catalyst in a chemical reaction?",
            options: [
                "To shift the chemical equilibrium position toward products",
                "To supply extra thermal energy to the reactants",
                "To provide an alternative reaction pathway with a lower activation energy",
                "To make a non-spontaneous thermodynamic reaction spontaneous"
            ],
            answer: "To provide an alternative reaction pathway with a lower activation energy",
            explanation: "A catalyst provides an alternative reaction pathway with a lower activation energy. It does not change the equilibrium constant or the overall thermodynamic feasibility of a reaction."
        },

        {
            id: 12,
            question: "Which term describes a species that is produced in an early step of a reaction mechanism and consumed in a subsequent step without appearing in the overall balanced equation?",
            options: [
                "Catalyst",
                "Reaction intermediate",
                "Transition state",
                "Inhibitor"
            ],
            answer: "Reaction intermediate",
            explanation: "A reaction intermediate is formed in one step and consumed in a later step. It does not appear in the overall balanced equation."
        },

        {
            id: 13,
            question: "In a multi-step reaction mechanism, how does the slowest step dictate the overall reaction rate?",
            options: [
                "It acts as the rate-determining step, and its rate law matches the overall experimental rate law.",
                "It dictates the overall stoichiometry of the reaction.",
                "It determines the standard enthalpy change of the system.",
                "It consumes all the catalysts present in the mixture."
            ],
            answer: "It acts as the rate-determining step, and its rate law matches the overall experimental rate law.",
            explanation: "The slowest step is commonly called the rate-determining step because it limits the speed of the overall reaction. The experimentally observed rate law must be consistent with the complete reaction mechanism."
        },

        {
            id: 14,
            question: "What is the molecularity of an elementary bimolecular reaction step?",
            options: [
                "1",
                "2",
                "3",
                "0"
            ],
            answer: "2",
            explanation: "A bimolecular elementary step involves two reacting species. Its molecularity is therefore two."
        },

        {
            id: 15,
            question: "If an exothermic reaction has a forward activation energy (Ea,forward) of 60 kJ mol⁻¹ and a reverse activation energy (Ea,reverse) of 90 kJ mol⁻¹, what is the enthalpy change (ΔH) for the forward reaction?",
            options: [
                "+30 kJ mol⁻¹",
                "−30 kJ mol⁻¹",
                "+150 kJ mol⁻¹",
                "−150 kJ mol⁻¹"
            ],
            answer: "−30 kJ mol⁻¹",
            explanation: "ΔH = Ea(forward) − Ea(reverse) = 60 − 90 = −30 kJ mol⁻¹. The negative value confirms that the forward reaction is exothermic."
        },

        {
            id: 16,
            question: "Which category of catalysis is exemplified by the Haber process, where gaseous reactants pass over a solid iron surface?",
            options: [
                "Homogeneous catalysis",
                "Heterogeneous catalysis",
                "Autocatalysis",
                "Enzyme-mediated catalysis"
            ],
            answer: "Heterogeneous catalysis",
            explanation: "The Haber process uses gaseous nitrogen and hydrogen with a solid iron catalyst. Since the reactants and catalyst are in different phases, it is heterogeneous catalysis."
        },

        {
            id: 17,
            question: "What happens to the rate of a first-order chemical reaction if the reactant concentration is tripled?",
            options: [
                "The rate increases by a factor of 3.",
                "The rate increases by a factor of 9.",
                "The rate remains completely unchanged.",
                "The rate decreases by a factor of 3."
            ],
            answer: "The rate increases by a factor of 3.",
            explanation: "For a first-order reaction, rate = k[A]. Tripling the reactant concentration therefore triples the reaction rate."
        },

        {
            id: 18,
            question: "Which of the following describes a pseudo-first-order reaction?",
            options: [
                "A reaction that has a negative reaction order.",
                "A reaction whose order can only be found theoretically from balanced equations.",
                "A reaction that is inherently second-order overall, but made to behave as first-order because one reactant is in massive excess.",
                "A reaction that proceeds exclusively via unimolecular elementary steps."
            ],
            answer: "A reaction that is inherently second-order overall, but made to behave as first-order because one reactant is in massive excess.",
            explanation: "When one reactant is present in large excess, its concentration changes negligibly during the reaction. It can be treated as constant, making the observed rate law appear first-order."
        },

        {
            id: 19,
            question: "What is the primary reason why a small increase in temperature produces a dramatic increase in reaction rate?",
            options: [
                "It significantly expands the fraction of molecules possessing kinetic energy greater than or equal to Ea.",
                "It drastically reduces the overall enthalpy of the reaction.",
                "It alters the stoichiometric coefficients of the balanced equation.",
                "It increases molecular mass and density."
            ],
            answer: "It significantly expands the fraction of molecules possessing kinetic energy greater than or equal to Ea.",
            explanation: "Increasing temperature raises the fraction of molecules with energy equal to or greater than the activation energy. This increases the number of effective collisions."
        },

        {
            id: 20,
            question: "In second-order kinetics described by 1/[A] = 1/[A]₀ + kt, what does the graphical plot of 1/[A] versus time produce?",
            options: [
                "A curved decay line",
                "A straight line with a negative slope equal to −k",
                "A straight line with a positive slope equal to +k",
                "A horizontal line parallel to the time axis"
            ],
            answer: "A straight line with a positive slope equal to +k",
            explanation: "The integrated second-order equation is 1/[A] = 1/[A]₀ + kt. A plot of 1/[A] against time gives a straight line with a positive slope equal to k."
        },

        {
            id: 21,
            question: "Which of the following statements regarding enzyme catalysis is correct?",
            options: [
                "Enzymes alter the thermodynamic equilibrium constant of a biochemical transformation.",
                "At very high substrate concentrations, enzyme-catalyzed reaction rates reach saturation and become effectively zero-order with respect to the substrate.",
                "Enzymes operate with peak efficiency at any extreme pH and high temperature.",
                "Enzymes increase activation energy barriers to slow down metabolic pathways."
            ],
            answer: "At very high substrate concentrations, enzyme-catalyzed reaction rates reach saturation and become effectively zero-order with respect to the substrate.",
            explanation: "At substrate saturation, nearly all enzyme active sites are occupied. The reaction rate approaches Vmax and becomes independent of further increases in substrate concentration."
        },

        {
            id: 22,
            question: "How is the half-life (t½) of a first-order reaction mathematically related to its rate constant (k)?",
            options: [
                "t½ = [A]₀/(2k)",
                "t½ = 1/(k[A]₀)",
                "t½ = 0.693/k",
                "t½ = 0.693 × k"
            ],
            answer: "t½ = 0.693/k",
            explanation: "For a first-order reaction, t½ = ln 2/k = 0.693/k. Its half-life is independent of the initial concentration."
        },

        {
            id: 23,
            question: "What term is used to describe a reaction where one of the products acts as a catalyst for the reaction itself, causing the reaction to start slowly and then accelerate as product accumulates?",
            options: [
                "Chain termination",
                "Autocatalysis",
                "Heterogeneous poisoning",
                "Photo-oxidation"
            ],
            answer: "Autocatalysis",
            explanation: "Autocatalysis occurs when a product of a reaction catalyses that same reaction. As the product accumulates, the reaction rate can increase."
        },

        {
            id: 24,
            question: "Which of the following actions will decrease the activation energy (Ea) of a chemical reaction?",
            options: [
                "Increasing reactant concentration",
                "Adding an appropriate catalyst",
                "Increasing the system temperature",
                "Elevating the external pressure of gaseous reactants"
            ],
            answer: "Adding an appropriate catalyst",
            explanation: "A catalyst provides an alternative pathway with a lower activation energy. Increasing temperature, concentration or pressure does not itself lower the activation energy."
        },

        {
            id: 25,
            question: "In the Arrhenius equation k = A e^(−Ea/RT), what does the pre-exponential factor (A) represent?",
            options: [
                "The fraction of molecules with sufficient activation energy",
                "The exact enthalpy change of the transition state",
                "The frequency factor, accounting for collision frequency and spatial orientation probability",
                "The universal gas constant multiplied by absolute temperature"
            ],
            answer: "The frequency factor, accounting for collision frequency and spatial orientation probability",
            explanation: "The pre-exponential factor, A, is the frequency factor. In collision theory, it accounts for collision frequency and the probability of suitable molecular orientation."
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
        return "Outstanding! You conquered CHM 101 Chemical Kinetics at a very high level. 🔥";
    }

    if (percentage >= 80) {
        return "Excellent performance! Your Chemical Kinetics foundation is strong. 🧪";
    }

    if (percentage >= 70) {
        return "Great job! You have a solid grasp of Chemical Kinetics. Keep sharpening it.";
    }

    if (percentage >= 60) {
        return "Good attempt. Review the corrections carefully and strengthen your weaker areas.";
    }

    if (percentage >= 50) {
        return "You have a foundation to build on. Use the corrections to master Chemical Kinetics.";
    }

    return "This is your starting point. Review the corrections, learn from your mistakes, and come back stronger.";
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
