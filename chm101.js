/* =========================================
   CONQUERORS LABS
   CHM 101 CBT
========================================= */


/* =========================================
   QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {

    // =====================================
    // QUIZ INFORMATION
    // =====================================

    title:
        "CHM 101 — Atomic Theory & Cathode Rays",

    timeLimit:
        60,

    /*
        Maximum number the quiz engine can
        support in the future.

        This quiz currently contains 50.
    */
    maxQuestions:
        100,

    /*
        false = one attempt only
        true  = retakes allowed
    */
    allowRetake:
        false,


    // =====================================
    // QUESTIONS
    // =====================================

    questions: [

        {
            id: 1,

            question:
                "At about 400 B.C., which Greek philosopher proposed the hypothesis that matter is composed of small particles?",

            options: [
                "Aristotle",
                "Democritus",
                "Dalton",
                "Thomson"
            ],

            answer:
                "Democritus",

            explanation:
                "Democritus proposed around 400 B.C. that matter was composed of tiny indivisible particles called atomos."
        },

        {
            id: 2,

            question:
                "What does the word atomos literally mean in Greek?",

            options: [
                "Smallest particle",
                "Invisible ray",
                "Indivisible",
                "Sub-atomic"
            ],

            answer:
                "Indivisible",

            explanation:
                "The Greek word atomos means indivisible or uncuttable."
        },

        {
            id: 3,

            question:
                "According to early classical atomic theory, matter is made up of tiny, indivisible particles called:",

            options: [
                "Electrons",
                "Positrons",
                "Quarks",
                "Atoms"
            ],

            answer:
                "Atoms",

            explanation:
                "Early atomic theory proposed that matter consists of tiny indivisible particles called atoms."
        },

        {
            id: 4,

            question:
                "The idea that atoms can neither be created nor destroyed corresponds directly to which chemical law?",

            options: [
                "Law of Conservation of Mass",
                "Law of Definite Proportions",
                "Law of Multiple Proportions",
                "Law of Constant Composition"
            ],

            answer:
                "Law of Conservation of Mass",

            explanation:
                "The idea that matter is neither created nor destroyed during a chemical reaction corresponds to conservation of mass."
        },

        {
            id: 5,

            question:
                "Which chemical law states that atoms of elements combine to form compounds in small whole-number ratios?",

            options: [
                "Law of Conservation of Energy",
                "Law of Multiple Proportions",
                "Law of Definite Composition",
                "Law of Partial Pressures"
            ],

            answer:
                "Law of Multiple Proportions",

            explanation:
                "The Law of Multiple Proportions states that when two elements form more than one compound, the masses of one element that combine with a fixed mass of the other are in small whole-number ratios."
        },

        {
            id: 6,

            question:
                "According to Dalton's original principles, all atoms of a given single element are:",

            options: [
                "Different in mass but identical in chemical properties",
                "Identical in mass and chemical properties",
                "Variable in atomic number",
                "Divisible into isotopes"
            ],

            answer:
                "Identical in mass and chemical properties",

            explanation:
                "Dalton originally proposed that atoms of the same element are identical in mass and chemical properties. Modern atomic theory modifies the mass part because isotopes exist."
        },

        {
            id: 7,

            question:
                "How does modern atomic theory modify Dalton's view on the indivisibility of the atom?",

            options: [
                "Atoms cannot be divided under any circumstances",
                "Atoms are composed of solid, continuous spheres",
                "Atoms can be sub-divided into sub-atomic particles",
                "Atoms are made only of light waves"
            ],

            answer:
                "Atoms can be sub-divided into sub-atomic particles",

            explanation:
                "Modern atomic theory recognizes that atoms contain sub-atomic particles such as electrons, protons and neutrons."
        },

        {
            id: 8,

            question:
                "Which of the following is NOT a sub-atomic particle?",

            options: [
                "Electron",
                "Proton",
                "Meson",
                "Tachyon"
            ],

            answer:
                "Tachyon",

            explanation:
                "Electron, proton and meson are recognized particles in particle physics. A tachyon is a hypothetical particle."
        },

        {
            id: 9,

            question:
                "The discovery of radioactivity disproves which classical principle of atomic theory?",

            options: [
                "Atoms combine in whole-number ratios",
                "Atoms can neither be created nor destroyed",
                "Cathode rays travel in straight lines",
                "Atoms are spherical"
            ],

            answer:
                "Atoms can neither be created nor destroyed",

            explanation:
                "Radioactive decay demonstrates that atoms of radioactive elements can spontaneously transform into other nuclei while emitting radiation."
        },

        {
            id: 10,

            question:
                "In the nuclear decay equation ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He + γ, what particle is emitted alongside Thorium and gamma rays?",

            options: [
                "Electron",
                "Alpha particle (⁴₂He)",
                "Neutron",
                "Positron"
            ],

            answer:
                "Alpha particle (⁴₂He)",

            explanation:
                "The helium nucleus ⁴₂He is an alpha particle."
        },

        {
            id: 11,

            question:
                "The existence of isotopes contradicts which classical atomic principle?",

            options: [
                "Atoms combine in small whole-number ratios",
                "All matter is made up of tiny particles",
                "Atoms of the same element are identical in mass",
                "Atoms cannot be destroyed"
            ],

            answer:
                "Atoms of the same element are identical in mass",

            explanation:
                "Isotopes are atoms of the same element with different mass numbers, so atoms of the same element are not necessarily identical in mass."
        },

        {
            id: 12,

            question:
                "Isotopes are defined as atoms of the same element having:",

            options: [
                "Same mass number, different atomic numbers",
                "Same atomic number, different mass numbers",
                "Same charge, different electron count",
                "Same physical properties, different chemical properties"
            ],

            answer:
                "Same atomic number, different mass numbers",

            explanation:
                "Isotopes have the same number of protons, giving them the same atomic number, but different numbers of neutrons and therefore different mass numbers."
        },

        {
            id: 13,

            question:
                "Which of the following represents a set of naturally occurring isotopes of oxygen?",

            options: [
                "¹⁴O, ¹⁵O, and ¹⁶O",
                "¹⁶O, ¹⁷O, and ¹⁸O",
                "¹⁵O, ¹⁶O, and ¹⁷O",
                "¹⁶O, ¹⁸O, and ²⁰O"
            ],

            answer:
                "¹⁶O, ¹⁷O, and ¹⁸O",

            explanation:
                "The three naturally occurring isotopes of oxygen are oxygen-16, oxygen-17 and oxygen-18."
        },

        {
            id: 14,

            question:
                "What phenomenon allows giant molecules containing thousands of covalently bonded atoms to exist?",

            options: [
                "Radioactivity",
                "Catenation",
                "Ionization",
                "Electrolysis"
            ],

            answer:
                "Catenation",

            explanation:
                "Catenation is the ability of an element, especially carbon, to form covalent bonds with itself and create chains, rings and large structures."
        },

        {
            id: 15,

            question:
                "What is the correct chemical formula for sucrose?",

            options: [
                "C₆H₁₂O₆",
                "C₁₂H₂₂O₁₁",
                "C₁₂O₂₂H₁₁",
                "C₁₁H₂₂O₁₂"
            ],

            answer:
                "C₁₂H₂₂O₁₁",

            explanation:
                "Sucrose has the molecular formula C₁₂H₂₂O₁₁."
        },

        {
            id: 16,

            question:
                "Who passed high-voltage electrical discharge through gases at low pressure in the 1870s?",

            options: [
                "J.J. Thomson",
                "William Crookes",
                "John Dalton",
                "Ernest Rutherford"
            ],

            answer:
                "William Crookes",

            explanation:
                "William Crookes investigated electrical discharges through gases at low pressure using what became known as Crookes tubes."
        },

        {
            id: 17,

            question:
                "Cathode rays originate from which electrode in a discharge tube?",

            options: [
                "Anode (positive electrode)",
                "Cathode (negative electrode)",
                "Neutral plate",
                "Vacuum pump nozzle"
            ],

            answer:
                "Cathode (negative electrode)",

            explanation:
                "Cathode rays originate from the negatively charged cathode in a discharge tube."
        },

        {
            id: 18,

            question:
                "Cathode rays travel across a discharge tube and strike which electrode?",

            options: [
                "Cathode",
                "Anode",
                "Grid",
                "Filament"
            ],

            answer:
                "Anode",

            explanation:
                "Cathode rays originate at the cathode and travel across the tube toward the anode."
        },

        {
            id: 19,

            question:
                "What device is connected to a gas discharge tube to produce a low-pressure vacuum?",

            options: [
                "High voltage generator",
                "Vacuum pump",
                "Deflection plate",
                "Magnetic coil"
            ],

            answer:
                "Vacuum pump",

            explanation:
                "A vacuum pump removes gas from the discharge tube, reducing its internal pressure."
        },

        {
            id: 20,

            question:
                "When an opaque object such as a metal cross is placed in the path of cathode rays, a distinct shadow is formed. What property does this prove?",

            options: [
                "Cathode rays are positively charged",
                "Cathode rays travel in straight lines",
                "Cathode rays have zero mass",
                "Cathode rays are electromagnetic waves"
            ],

            answer:
                "Cathode rays travel in straight lines",

            explanation:
                "The sharp shadow demonstrates that cathode rays propagate in straight lines when no external field deflects them."
        },

        {
            id: 21,

            question:
                "What physical effect is observed when cathode rays strike a light paddle wheel placed in their path?",

            options: [
                "The paddle wheel glows in the dark",
                "The paddle wheel remains stationary",
                "The paddle wheel rotates",
                "The paddle wheel melts immediately"
            ],

            answer:
                "The paddle wheel rotates",

            explanation:
                "Cathode rays can cause a light paddle wheel to rotate, demonstrating that the rays carry momentum."
        },

        {
            id: 22,

            question:
                "The mechanical movement of a light paddle wheel inside a discharge tube proves that cathode rays possess:",

            options: [
                "Electric charges only",
                "Momentum and kinetic energy",
                "Radioactivity",
                "High frequency electromagnetic radiation"
            ],

            answer:
                "Momentum and kinetic energy",

            explanation:
                "The mechanical effect on the paddle wheel indicates that cathode rays possess momentum and kinetic energy."
        },

        {
            id: 23,

            question:
                "When an electric field is applied across a discharge tube, a beam of cathode rays deflects towards the:",

            options: [
                "Negative plate",
                "Positive plate",
                "South magnetic pole",
                "Grounded terminal"
            ],

            answer:
                "Positive plate",

            explanation:
                "Cathode rays consist of negatively charged electrons, so they are attracted toward the positive plate."
        },

        {
            id: 24,

            question:
                "The deflection of cathode rays towards a positive electric plate confirms that they are:",

            options: [
                "Positively charged",
                "Negatively charged",
                "Uncharged",
                "Photons"
            ],

            answer:
                "Negatively charged",

            explanation:
                "A negatively charged particle is attracted toward a positive electric plate."
        },

        {
            id: 25,

            question:
                "The essential characteristics and behavior of cathode rays depend on:",

            options: [
                "The material of the electrode only",
                "The nature of the gas inside the tube only",
                "Both the electrode material and the gas nature",
                "Neither the electrode material nor the nature of the gas"
            ],

            answer:
                "Neither the electrode material nor the nature of the gas",

            explanation:
                "Cathode rays have the same essential nature regardless of the electrode material or gas used, supporting the conclusion that they are electrons."
        },

        {
            id: 26,

            question:
                "Cathode rays are capable of penetrating thin sheets of which of the following materials?",

            options: [
                "Thick lead plates",
                "Aluminium or gold foil",
                "Platinum sheet",
                "Copper block"
            ],

            answer:
                "Aluminium or gold foil",

            explanation:
                "Cathode rays can penetrate very thin sheets of materials such as aluminium or gold."
        },

        {
            id: 27,

            question:
                "Who measured the mass-to-charge ratio (m/e) for electrons in 1897?",

            options: [
                "William Crookes",
                "Sir J.J. Thomson",
                "Robert Millikan",
                "James Chadwick"
            ],

            answer:
                "Sir J.J. Thomson",

            explanation:
                "J.J. Thomson used electric and magnetic fields to determine the electron's charge-to-mass ratio in 1897."
        },

        {
            id: 28,

            question:
                "In the presence of a uniform magnetic field applied perpendicularly, electrons follow a path shaped like:",

            options: [
                "A straight vertical line",
                "The arc of a circle",
                "A parabolic curve towards the anode",
                "A stationary point"
            ],

            answer:
                "The arc of a circle",

            explanation:
                "A charged particle moving perpendicular to a uniform magnetic field experiences a magnetic force perpendicular to its velocity, producing circular motion."
        },

        {
            id: 29,

            question:
                "When both electric and magnetic fields are applied simultaneously and balanced precisely, what happens to the cathode ray beam?",

            options: [
                "It deflects at an angle of 90°",
                "The electrostatic and magnetic forces cancel out, allowing it to travel undeflected",
                "It bends back towards the cathode",
                "It loses velocity and stops moving"
            ],

            answer:
                "The electrostatic and magnetic forces cancel out, allowing it to travel undeflected",

            explanation:
                "When the electric and magnetic forces are equal and opposite, the net force is zero and the beam travels undeflected."
        },

        {
            id: 30,

            question:
                "What is the formula for the electrostatic force (F) exerted on an electron in an electric field of strength E?",

            options: [
                "F = E / e",
                "F = E e",
                "F = E B v",
                "F = m v² / r"
            ],

            answer:
                "F = E e",

            explanation:
                "The magnitude of the electric force on a charge in an electric field is F = qE. For an electron, the magnitude is F = eE."
        },

        {
            id: 31,

            question:
                "What is the expression for the magnetic force (F) acting on an electron moving with velocity v in a magnetic field B?",

            options: [
                "F = B e v",
                "F = B / e v",
                "F = E B e",
                "F = m e / v"
            ],

            answer:
                "F = B e v",

            explanation:
                "For perpendicular velocity and magnetic field, the magnitude of magnetic force is F = qvB. For an electron, its magnitude is Bev."
        },

        {
            id: 32,

            question:
                "Equating electric force and magnetic force for an undeflected beam yields which relationship?",

            options: [
                "E e = B e v",
                "E / e = B v",
                "E B = e v",
                "E e v = B"
            ],

            answer:
                "E e = B e v",

            explanation:
                "For an undeflected beam, electric force and magnetic force have equal magnitudes: eE = Bev."
        },

        {
            id: 33,

            question:
                "Rearranging E e = B e v gives the velocity (v) of an electron as:",

            options: [
                "v = B / E",
                "v = E / B",
                "v = E · B",
                "v = E² B"
            ],

            answer:
                "v = E / B",

            explanation:
                "Starting from eE = Bev, cancel e and divide by B to obtain v = E/B."
        },

        {
            id: 34,

            question:
                "The centrifugal force (F) required for an electron of mass m moving at velocity v to maintain a circular arc of radius r is:",

            options: [
                "F = m v r",
                "F = m v² / r",
                "F = m r / v²",
                "F = m² v / r"
            ],

            answer:
                "F = m v² / r",

            explanation:
                "The required centripetal force for circular motion is F = mv²/r."
        },

        {
            id: 35,

            question:
                "Equating magnetic force (B e v) and centrifugal force (m v² / r) yields which expression for charge-to-mass ratio (e/m)?",

            options: [
                "e / m = v / (B r)",
                "e / m = B r / v",
                "e / m = v² B r",
                "e / m = B v / r"
            ],

            answer:
                "e / m = v / (B r)",

            explanation:
                "Equating Bev = mv²/r and cancelling one v gives Be = mv/r. Rearranging gives e/m = v/(Br)."
        },

        {
            id: 36,

            question:
                "Substituting v = E / B into e / m = v / (B r) results in which final formula for the specific charge of an electron?",

            options: [
                "e / m = E / (B r²)",
                "e / m = E / (B² r)",
                "e / m = E² / (B r)",
                "e / m = B² / (E r)"
            ],

            answer:
                "e / m = E / (B² r)",

            explanation:
                "Substituting v = E/B into e/m = v/(Br) gives e/m = (E/B)/(Br) = E/(B²r)."
        },

        {
            id: 37,

            question:
                "What is the experimentally determined charge-to-mass ratio (e/m) of an electron?",

            options: [
                "1.602 × 10⁻¹⁹ C/kg",
                "9.109 × 10⁻³¹ C/kg",
                "1.7586 × 10¹¹ C/kg",
                "3.00 × 10⁸ C/kg"
            ],

            answer:
                "1.7586 × 10¹¹ C/kg",

            explanation:
                "The magnitude of the electron charge-to-mass ratio is approximately 1.7586 × 10¹¹ C/kg."
        },

        {
            id: 38,

            question:
                "What are the SI units for the specific charge (e/m) of an electron?",

            options: [
                "C · kg",
                "C / kg",
                "N / C",
                "J / kg"
            ],

            answer:
                "C / kg",

            explanation:
                "Specific charge is charge divided by mass, so its SI unit is coulomb per kilogram (C/kg)."
        },

        {
            id: 39,

            question:
                "In cathode ray tube deflection experiments, angular displacements are measured on a scale in degrees relative to an undeflected beam at:",

            options: [
                "0°",
                "45°",
                "90°",
                "180°"
            ],

            answer:
                "0°",

            explanation:
                "The undeflected beam provides the reference direction and is assigned an angular displacement of 0°."
        },

        {
            id: 40,

            question:
                "Democritus' proposal regarding the atomic structure of matter was originally categorized as a:",

            options: [
                "Proven physical law",
                "Mathematical proof",
                "Hypothesis",
                "Direct empirical measurement"
            ],

            answer:
                "Hypothesis",

            explanation:
                "Democritus' atomic idea was a philosophical hypothesis rather than an experimentally established scientific theory."
        },

        {
            id: 41,

            question:
                "The Law of Constant Composition aligns directly with which classical postulate?",

            options: [
                "Atoms cannot be destroyed in chemical reactions",
                "Atoms of the same element are identical in mass and chemical properties",
                "Atoms are divisible into sub-atomic components",
                "Matter consists largely of empty space"
            ],

            answer:
                "Atoms of the same element are identical in mass and chemical properties",

            explanation:
                "Constant composition is consistent with the classical idea that a given element is composed of identical atoms that combine in fixed proportions."
        },

        {
            id: 42,

            question:
                "The oxygen isotopes ¹⁶O, ¹⁷O, and ¹⁸O share the same:",

            options: [
                "Mass number",
                "Atomic number",
                "Number of neutrons",
                "Nuclear mass"
            ],

            answer:
                "Atomic number",

            explanation:
                "All oxygen atoms have 8 protons, so oxygen isotopes have the same atomic number but different numbers of neutrons."
        },

        {
            id: 43,

            question:
                "Carbon forms long chains and complex ring networks through catenation because:",

            options: [
                "It readily emits alpha particles",
                "Atoms link together to form large structures containing many units",
                "It has an unstable nucleus",
                "It produces cathode rays under high voltage"
            ],

            answer:
                "Atoms link together to form large structures containing many units",

            explanation:
                "Catenation is the ability of atoms of an element, especially carbon, to bond with one another to form chains and rings."
        },

        {
            id: 44,

            question:
                "High-voltage discharge experiments in Crookes tubes must be performed under what pressure condition?",

            options: [
                "Extremely high gas pressure",
                "Low gas pressure",
                "Standard atmospheric pressure",
                "Zero gravity"
            ],

            answer:
                "Low gas pressure",

            explanation:
                "Crookes tube experiments use gas at low pressure so that electrical discharge and cathode rays can be observed."
        },

        {
            id: 45,

            question:
                "Which fundamental sub-atomic particle was discovered via cathode ray deflection experiments?",

            options: [
                "Proton",
                "Electron",
                "Neutron",
                "Positron"
            ],

            answer:
                "Electron",

            explanation:
                "J.J. Thomson's cathode ray experiments established that cathode rays consisted of negatively charged particles called electrons."
        },

        {
            id: 46,

            question:
                "In the absence of external electric or magnetic fields, cathode rays propagate in a:",

            options: [
                "Circular loop",
                "Straight line",
                "Parabolic curve",
                "Spiral path"
            ],

            answer:
                "Straight line",

            explanation:
                "Cathode rays travel in straight lines when no external electric or magnetic field acts to deflect them."
        },

        {
            id: 47,

            question:
                "In an electric field, a negatively charged electron is electrostatic repelled by the:",

            options: [
                "Positive plate",
                "Negative plate",
                "Anode",
                "Fluorescent detector"
            ],

            answer:
                "Negative plate",

            explanation:
                "Like charges repel. Because an electron is negatively charged, it is repelled by a negatively charged plate."
        },

        {
            id: 48,

            question:
                "In J.J. Thomson's charge-to-mass experiment, electron velocity v can be determined directly because:",

            options: [
                "Both the electric field strength E and magnetic field strength B are measurable parameters",
                "The mass of the electron was already known",
                "The radius of curvature r is always zero",
                "The speed of light is used as a fixed constant"
            ],

            answer:
                "Both the electric field strength E and magnetic field strength B are measurable parameters",

            explanation:
                "For crossed electric and magnetic fields producing an undeflected beam, v = E/B. Therefore the electron velocity can be determined from the measured field strengths."
        },

        {
            id: 49,

            question:
                "The force exerted on an electron by a vertical electric field acts in which direction relative to the deflection caused by a magnetic field?",

            options: [
                "In the exact same direction",
                "In the opposite direction",
                "At a 45° angle",
                "Parallel to the beam velocity"
            ],

            answer:
                "In the opposite direction",

            explanation:
                "In Thomson's crossed-field arrangement, the electric and magnetic forces are arranged in opposite directions so they can cancel when balanced."
        },

        {
            id: 50,

            question:
                "Which nuclear equation correctly illustrates alpha emission?",

            options: [
                "²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He + γ",
                "²³⁸₉₂U → ²³⁴₉₂Th + ¹₀n + γ",
                "²³⁸₉₂U → ²³⁸₉₁Pa + ⁰₋₁e",
                "²³⁸₉₂U → ²²⁶₈₈Ra + ¹²₄C"
            ],

            answer:
                "²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He + γ",

            explanation:
                "Alpha emission releases a helium nucleus, ⁴₂He. The parent nucleus therefore loses 4 units of mass number and 2 units of atomic number."
        }

    ]

};


/* =========================================
   COMPLETION LOCK
========================================= */

const COMPLETION_KEY =
    "conquerorsLabs_CHM101_completed";


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

let timerInterval =
    null;

let quizSubmitted =
    false;


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

        if (quizTitle) {
            quizTitle.textContent =
                QUIZ_CONFIG.title;
        }


        if (questions.length === 0) {

            alert(
                "No questions have been added to this CBT yet."
            );

            return;
        }


        /*
            One-attempt lock.
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
   NAVIGATOR
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


    let correct =
        0;

    let wrong =
        0;

    let unanswered =
        0;


    questions.forEach(
        (question, index) => {

            const userAnswer =
                answers[index];


            if (userAnswer === null) {

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
        Save completion before showing
        the result.
    */

    if (!QUIZ_CONFIG.allowRetake) {

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


    if (QUIZ_CONFIG.allowRetake) {

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

        return "Outstanding! You conquered CHM 101 at a very high level. 🔥";

    }


    if (percentage >= 80) {

        return "Excellent performance! Your CHM 101 foundation is looking strong. 🧪";

    }


    if (percentage >= 70) {

        return "Great job! You have a solid grasp of the material. Keep sharpening it.";

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


            const yourAnswerLabel =
                document.createElement("strong");

            yourAnswerLabel.textContent =
                "Your answer: ";


            const yourAnswerValue =
                document.createTextNode(
                    userAnswer ??
                    "Not answered"
                );


            yourAnswer.appendChild(
                yourAnswerLabel
            );

            yourAnswer.appendChild(
                yourAnswerValue
            );


            const correctAnswer =
                document.createElement("div");

            correctAnswer.className =
                "review-answer";


            const correctLabel =
                document.createElement("strong");

            correctLabel.textContent =
                "Correct answer: ";


            const correctValue =
                document.createTextNode(
                    question.answer
                );


            correctAnswer.appendChild(
                correctLabel
            );

            correctAnswer.appendChild(
                correctValue
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
   ALREADY COMPLETED SCREEN
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