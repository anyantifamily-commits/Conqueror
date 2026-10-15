
/* =========================================
   CONQUERORS LABS
   CHM 101 — ATOMIC STRUCTURE
========================================= */

const QUIZ_CONFIG = {
    title: "CHM 101 — Atomic Structure",

    quizVersion: 2,
    timeLimit: 20,
    maxQuestions: 40,
    allowRetake: false,

    quizId: "chm101",
    passMark: 50,

    questions: [
        {
            id: 1,
            question: "Which subatomic particle carries a positive electrical charge?",
            options: ["Electron", "Proton", "Neutron", "Positron"],
            answer: "Proton",
            explanation: "A proton has a relative charge of +1 and is located in the atomic nucleus. An electron has a −1 charge, while a neutron has no net charge."
        },
        {
            id: 2,
            question: "Where is the vast majority of an atom's mass concentrated?",
            options: ["In the electron cloud", "In the nucleus", "In the valence shell", "Equally throughout the atom"],
            answer: "In the nucleus",
            explanation: "The nucleus contains protons and neutrons, which account for almost all the atom's mass. Electrons have a much smaller mass."
        },
        {
            id: 3,
            question: "Which subatomic particle has a negligible mass in ordinary mass-number calculations?",
            options: ["Proton", "Neutron", "Electron", "Alpha particle"],
            answer: "Electron",
            explanation: "An electron has about 1/1836 the mass of a proton. Mass number counts the nucleons—protons and neutrons—without including electrons."
        },
        {
            id: 4,
            question: "What does the atomic number (Z) of an element represent?",
            options: ["The total number of protons and neutrons", "The number of outer-shell electrons", "The number of protons in the nucleus", "The atom's mass in atomic mass units"],
            answer: "The number of protons in the nucleus",
            explanation: "Atomic number is the number of protons in an atom's nucleus. It identifies the element. In a neutral atom, it also equals the number of electrons."
        },
        {
            id: 5,
            question: "Isotopes of the same element differ in their number of:",
            options: ["Protons", "Electrons in neutral atoms", "Neutrons", "Electron shells"],
            answer: "Neutrons",
            explanation: "Isotopes have the same number of protons but different numbers of neutrons, so they have different mass numbers."
        },
        {
            id: 6,
            question: "Which scientist discovered the electron through cathode-ray experiments?",
            options: ["Ernest Rutherford", "J. J. Thomson", "John Dalton", "Niels Bohr"],
            answer: "J. J. Thomson",
            explanation: "J. J. Thomson's cathode-ray experiments in 1897 provided evidence for the electron as a negatively charged subatomic particle."
        },
        {
            id: 7,
            question: "What major conclusion came from Rutherford's gold-foil experiment?",
            options: ["Electrons occupy fixed circular orbits", "Atoms are indivisible solid spheres", "Atoms have a small, dense, positively charged nucleus", "Neutrons are outside the nucleus"],
            answer: "Atoms have a small, dense, positively charged nucleus",
            explanation: "Most alpha particles passed through the foil, but a few were strongly deflected. Rutherford concluded that positive charge and most atomic mass occupy a tiny nucleus."
        },
        {
            id: 8,
            question: "What is an atom or molecule called after gaining or losing electrons and acquiring a net charge?",
            options: ["Isotope", "Ion", "Isomer", "Allotrope"],
            answer: "Ion",
            explanation: "An ion is a charged atom or group of atoms. Losing electrons produces a positive ion, while gaining electrons produces a negative ion."
        },
        {
            id: 9,
            question: "What is a negatively charged ion called?",
            options: ["Cation", "Anion", "Proton", "Nucleon"],
            answer: "Anion",
            explanation: "An anion has gained electrons and therefore has more electrons than protons. A cation is positively charged."
        },
        {
            id: 10,
            question: "What is the maximum number of electrons in the first shell (n = 1)?",
            options: ["2", "8", "18", "32"],
            answer: "2",
            explanation: "The maximum shell capacity is given by 2n². For n = 1, the capacity is 2(1)² = 2 electrons."
        },
        {
            id: 11,
            question: "Which quantum number describes an electron's principal energy level or shell?",
            options: ["Principal quantum number (n)", "Azimuthal quantum number (l)", "Magnetic quantum number (mₗ)", "Spin quantum number (mₛ)"],
            answer: "Principal quantum number (n)",
            explanation: "The principal quantum number n identifies the main shell and is associated with the electron's energy and average distance from the nucleus."
        },
        {
            id: 12,
            question: "What is the general shape of an s-orbital?",
            options: ["Dumbbell-shaped", "Spherical", "Cloverleaf-shaped", "Irregular and directionless"],
            answer: "Spherical",
            explanation: "An s-orbital has spherical symmetry around the nucleus. The p-orbitals are generally dumbbell-shaped, while many d-orbitals have more complex shapes."
        },
        {
            id: 13,
            question: "What is the maximum number of electrons in a complete set of p-orbitals?",
            options: ["2", "6", "10", "14"],
            answer: "6",
            explanation: "A p-subshell contains three orbitals. Each orbital holds a maximum of two electrons, giving 3 × 2 = 6 electrons."
        },
        {
            id: 14,
            question: "Which principle states that electrons occupy the lowest available energy orbitals first?",
            options: ["Aufbau principle", "Pauli exclusion principle", "Hund's rule", "Heisenberg uncertainty principle"],
            answer: "Aufbau principle",
            explanation: "The Aufbau principle describes the general filling order of orbitals from lower to higher energy in ground-state electron configurations."
        },
        {
            id: 15,
            question: "Which rule says that orbitals of equal energy are singly occupied before electrons pair up?",
            options: ["Aufbau principle", "Pauli exclusion principle", "Hund's rule", "Octet rule"],
            answer: "Hund's rule",
            explanation: "Hund's rule states that electrons occupy degenerate orbitals singly with parallel spins before pairing, giving the lowest-energy arrangement."
        },
        {
            id: 16,
            question: "What is the ground-state electron configuration of neutral carbon (Z = 6)?",
            options: ["1s² 2s⁴", "1s² 2s² 2p²", "1s⁶", "1s² 2p⁴"],
            answer: "1s² 2s² 2p²",
            explanation: "Carbon has six electrons. Filling the orbitals in order gives 1s² 2s² 2p², for a total of 2 + 2 + 2 = 6 electrons."
        },
        {
            id: 17,
            question: "How many valence electrons does a neutral oxygen atom (Z = 8) have?",
            options: ["2", "4", "6", "8"],
            answer: "6",
            explanation: "Oxygen's electron configuration is 1s² 2s² 2p⁴. Its outer shell is n = 2 and contains 2 + 4 = 6 electrons."
        },
        {
            id: 18,
            question: "Why do main-group elements in the same periodic-table group generally have similar chemical properties?",
            options: ["They have the same total number of electrons", "They have the same number of protons", "They generally have the same number of valence electrons", "They have the same number of occupied shells"],
            answer: "They generally have the same number of valence electrons",
            explanation: "For main-group elements, the number of valence electrons strongly influences bonding and reactivity. Elements in the same group generally share the same outer-shell electron pattern."
        },
        {
            id: 19,
            question: "An atom has 6 protons, 6 neutrons, and 6 electrons. What is its mass number?",
            options: ["6", "12", "18", "0"],
            answer: "12",
            explanation: "Mass number A = protons + neutrons = 6 + 6 = 12. Electrons are not included in the mass number."
        },
        {
            id: 20,
            question: "Which neutral atom has the electron configuration 1s² 2s² 2p⁶ 3s² 3p¹?",
            options: ["Sodium (Na)", "Magnesium (Mg)", "Aluminum (Al)", "Silicon (Si)"],
            answer: "Aluminum (Al)",
            explanation: "The configuration contains 2 + 2 + 6 + 2 + 1 = 13 electrons. A neutral atom with atomic number 13 is aluminum."
        },
        {
            id: 21,
            question: "Which particles are collectively called nucleons?",
            options: ["Protons only", "Neutrons only", "Protons and neutrons", "Protons and electrons"],
            answer: "Protons and neutrons",
            explanation: "Nucleons are the particles found in the nucleus: protons and neutrons. Electrons occupy orbitals around the nucleus."
        },
        {
            id: 22,
            question: "What is the net electrical charge of a neutral, uncombined atom?",
            options: ["Positive", "Negative", "Zero", "Always equal to its group number"],
            answer: "Zero",
            explanation: "A neutral atom has equal numbers of positively charged protons and negatively charged electrons, so their charges cancel."
        },
        {
            id: 23,
            question: "Which of these basic subatomic particles was discovered after the electron and proton?",
            options: ["Electron", "Proton", "Neutron", "Photon"],
            answer: "Neutron",
            explanation: "James Chadwick discovered the neutron in 1932. It helped explain atomic mass and the existence of isotopes."
        },
        {
            id: 24,
            question: "Which type of orbital corresponds to an azimuthal quantum number l = 2?",
            options: ["s-orbital", "p-orbital", "d-orbital", "f-orbital"],
            answer: "d-orbital",
            explanation: "The azimuthal quantum number identifies subshell type: l = 0 is s, l = 1 is p, l = 2 is d, and l = 3 is f."
        },
        {
            id: 25,
            question: "According to the Pauli exclusion principle, two electrons occupying the same orbital must have:",
            options: ["The same spin", "Opposite spins", "Different principal quantum numbers", "Different orbital shapes"],
            answer: "Opposite spins",
            explanation: "Two electrons in one orbital must have opposite spins. No two electrons in an atom can have the same set of all four quantum numbers."
        },
        {
            id: 26,
            question: "Which electromagnetic radiation has the highest photon energy and shortest wavelength?",
            options: ["Radio waves", "Infrared radiation", "Visible light", "Gamma rays"],
            answer: "Gamma rays",
            explanation: "Photon energy is E = hν and wavelength is inversely related to frequency. Gamma rays have very high frequencies and very short wavelengths."
        },
        {
            id: 27,
            question: "What happens when an electron moves from a higher energy level to a lower one?",
            options: ["It absorbs a photon", "It emits a photon", "It becomes a neutron", "The atom's mass number changes"],
            answer: "It emits a photon",
            explanation: "The electron releases the energy difference between the two levels as a photon. Absorption occurs when an electron moves to a higher energy level."
        },
        {
            id: 28,
            question: "Which statement correctly defines relative atomic mass (Aᵣ)?",
            options: ["The mass of one proton in grams", "The weighted mean mass of an element's atoms relative to one-twelfth the mass of a carbon-12 atom", "The number of nucleons in the most stable isotope", "The electron mass multiplied by the atomic number"],
            answer: "The weighted mean mass of an element's atoms relative to one-twelfth the mass of a carbon-12 atom",
            explanation: "Relative atomic mass is a weighted average based on the natural abundances of an element's isotopes, compared with 1/12 of the mass of a carbon-12 atom. It has no unit."
        },
        {
            id: 29,
            question: "How many orbitals are present in a d-subshell?",
            options: ["1", "3", "5", "7"],
            answer: "5",
            explanation: "A d-subshell has five orbitals. Since each orbital can hold two electrons, a complete d-subshell can contain up to 10 electrons."
        },
        {
            id: 30,
            question: "Which element has the chemical symbol K?",
            options: ["Krypton", "Potassium", "Phosphorus", "Sodium"],
            answer: "Potassium",
            explanation: "K is the symbol for potassium, derived from its Latin name, kalium. Sodium has the symbol Na."
        },
        {
            id: 31,
            question: "An atom has 11 protons, 12 neutrons, and 10 electrons. What is its net charge?",
            options: ["+1", "−1", "0", "+2"],
            answer: "+1",
            explanation: "Net charge = protons − electrons = 11 − 10 = +1. The number of neutrons affects mass number, not electrical charge."
        },
        {
            id: 32,
            question: "The Bohr model was particularly successful in explaining the line-emission spectrum of which element?",
            options: ["Carbon", "Hydrogen", "Uranium", "Iron"],
            answer: "Hydrogen",
            explanation: "Bohr's model explains hydrogen's line spectrum using quantized electron energy levels. It is less successful for multi-electron atoms."
        },
        {
            id: 33,
            question: "What are the horizontal rows of the periodic table called?",
            options: ["Groups", "Families", "Periods", "Blocks"],
            answer: "Periods",
            explanation: "Horizontal rows are periods. Vertical columns are groups or families."
        },
        {
            id: 34,
            question: "Which group of elements is generally very unreactive because its members have filled valence shells?",
            options: ["Alkali metals", "Halogens", "Noble gases", "Transition metals"],
            answer: "Noble gases",
            explanation: "Noble gases have filled outer electron shells in their ground states, making them relatively unreactive under ordinary conditions."
        },
        {
            id: 35,
            question: "What is the general valence-shell electron configuration of Group 2 elements?",
            options: ["ns¹", "ns²", "ns² np¹", "ns² np⁵"],
            answer: "ns²",
            explanation: "Group 2 elements have two electrons in their outermost s-subshell, represented by ns². They commonly form ions with a +2 charge."
        },
        {
            id: 36,
            question: "Which species is isoelectronic with neon (10 electrons)?",
            options: ["Na⁺", "Mg", "F", "Li⁺"],
            answer: "Na⁺",
            explanation: "Sodium has 11 electrons when neutral. Na⁺ has lost one electron, leaving 10—equal to the number in neon. Neutral Mg has 12, neutral F has 9, and Li⁺ has 2."
        },
        {
            id: 37,
            question: "What property measures an atom's ability to attract shared electrons in a chemical bond?",
            options: ["Ionization energy", "Electronegativity", "Electron affinity", "Atomic radius"],
            answer: "Electronegativity",
            explanation: "Electronegativity describes how strongly an atom attracts shared bonding electrons. Ionization energy measures the energy needed to remove an electron."
        },
        {
            id: 38,
            question: "What is the energy required to remove an electron from a gaseous atom in its ground state called?",
            options: ["Electronegativity", "Lattice energy", "Ionization energy", "Activation energy"],
            answer: "Ionization energy",
            explanation: "First ionization energy is the energy required to remove one electron from each atom in one mole of gaseous atoms, forming gaseous +1 ions."
        },
        {
            id: 39,
            question: "What generally happens to atomic radius as you move down a group in the periodic table?",
            options: ["It decreases", "It increases", "It remains completely constant", "It changes randomly"],
            answer: "It increases",
            explanation: "Moving down a group adds occupied electron shells. Increased distance from the nucleus generally outweighs the increased nuclear charge, so atomic radius increases."
        },
        {
            id: 40,
            question: "Which scientist proposed that matter, including electrons, has wave-like properties?",
            options: ["Louis de Broglie", "Max Planck", "Albert Einstein", "Ernest Rutherford"],
            answer: "Louis de Broglie",
            explanation: "Louis de Broglie proposed that particles have an associated wavelength, λ = h/p. Electron diffraction later provided experimental evidence for the wave-like behaviour of electrons."
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
        return "Outstanding! You conquered CHM 101 Atomic Structure at a very high level. 🔥";
    }

    if (percentage >= 80) {
        return "Excellent performance! Your atomic structure foundation is strong. 🧪";
    }

    if (percentage >= 70) {
        return "Great job! You have a solid grasp of atomic structure. Keep sharpening it.";
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
