/* =================================================
   CONQUERORS LABS
   BIO 101 CBT — BIOENERGETICS
================================================= */

/* =================================================
   EASY-EDIT QUIZ CONFIGURATION
================================================= */

const QUIZ_CONFIG = {
    title: "BIO 101 — Bioenergetics",

    // New question set: version 6.
    quizVersion: 7,

    // Keep this unchanged to retain the existing leaderboard.
    quizId: "bio101-cell-biology",

    timeLimit: 60,
    maxQuestions: 30,
    passMark: 50,
    allowRetake: false,

    questions: [

        // =========================================
        // PART 1: INTRODUCTION TO BIOENERGETICS
        // =========================================

        {
            id: 1,
            question: "What is the primary focus of bioenergetics?",
            options: [
                "The study of cellular structure and organelles",
                "The study of energy changes and transformations in living cells",
                "The chemical synthesis of DNA and RNA",
                "The measurement of internal cell temperature"
            ],
            answer: "The study of energy changes and transformations in living cells",
            explanation: "Bioenergetics is the study of energy changes and energy transformations occurring in living organisms and cells."
        },

        {
            id: 2,
            question: "Which of the following correctly pairs a metabolic process with its correct energy and ATP characteristic?",
            options: [
                "Catabolism: synthesis of compounds, uses ATP",
                "Anabolism: breakdown of molecules, releases energy",
                "Catabolism: breakdown of molecules, makes ATP",
                "Anabolism: breakdown of molecules, makes ATP"
            ],
            answer: "Catabolism: breakdown of molecules, makes ATP",
            explanation: "Catabolism involves the breakdown of complex molecules into simpler ones and generally releases energy that can be captured in ATP. Anabolism builds complex molecules and generally requires energy."
        },

        {
            id: 3,
            question: "Which of the following statements about cellular energy charge are true?\n\nI. It acts like a fuel gauge reflecting the ATP to ADP ratio.\nII. A higher amount of ADP compared to ATP signals the cell to make ATP through oxidative phosphorylation.\nIII. Healthy cells keep their formal energy charge strictly between 0 and 0.2.",
            options: [
                "I and II only",
                "II and III only",
                "I and III only",
                "I, II, and III"
            ],
            answer: "I and II only",
            explanation: "Energy charge reflects the relative amounts of ATP, ADP and AMP and indicates the energy status of a cell. A high ADP level signals increased demand for ATP production. The normal cellular energy charge is generally high, around 0.8–0.95, not 0–0.2."
        },

        {
            id: 4,
            question: "What does a negative change in Gibbs free energy (ΔG < 0) indicate about a chemical reaction?",
            options: [
                "The reaction is non-spontaneous and endergonic",
                "The reaction is at chemical equilibrium",
                "The reaction is spontaneous and exergonic",
                "The reaction requires a net input of thermal energy"
            ],
            answer: "The reaction is spontaneous and exergonic",
            explanation: "A negative ΔG indicates that a reaction is thermodynamically favorable or spontaneous under the specified conditions and releases free energy."
        },

        {
            id: 5,
            question: "Which of the following factors does the change in free energy (ΔG) actually predict?",
            options: [
                "The exact speed of the chemical reaction",
                "The feasibility or spontaneity of the reaction",
                "The specific activation energy barrier height",
                "The exact concentration of cellular enzymes"
            ],
            answer: "The feasibility or spontaneity of the reaction",
            explanation: "ΔG predicts the thermodynamic favorability or spontaneity of a reaction, not its rate. Reaction rate depends largely on activation energy and kinetics."
        },

        // =========================================
        // PART 2: THERMODYNAMICS
        // =========================================

        {
            id: 6,
            question: "Why are living cells described as isothermal systems?",
            options: [
                "They operate at a constant temperature and pressure",
                "They generate their own internal body heat through friction",
                "They fluctuate wildly in temperature depending on their environment",
                "They rely strictly on heat flow to perform biological work"
            ],
            answer: "They operate at a constant temperature and pressure",
            explanation: "Living cells generally function under relatively constant temperature and pressure conditions, making them approximately isothermal systems."
        },

        {
            id: 7,
            question: "Which of the following describe energy flow in photosynthetic versus heterotrophic cells?\n\nI. Photosynthetic cells capture absorbed solar radiation.\nII. Heterotrophic cells obtain free energy from nutrient molecules like food.\nIII. Both cell types ultimately transform free energy into ATP and other energy-rich compounds.",
            options: [
                "I and II only",
                "I and III only",
                "II and III only",
                "I, II, and III"
            ],
            answer: "I, II, and III",
            explanation: "Photosynthetic cells capture solar energy, while heterotrophic cells obtain energy from nutrient molecules. Both types convert available free energy into ATP and other forms of usable chemical energy."
        },

        {
            id: 8,
            question: "What does the second law of thermodynamics state regarding natural processes?",
            options: [
                "Energy can be freely created or destroyed within a closed system.",
                "The total entropy (disorder) of the universe always increases.",
                "The entropy of a local living cell always decreases without any energy expenditure.",
                "All chemical reactions must release 100% of their energy as usable work."
            ],
            answer: "The total entropy (disorder) of the universe always increases.",
            explanation: "The second law states that the entropy of an isolated system tends to increase during spontaneous processes. Living organisms can maintain or decrease local entropy by releasing heat and increasing entropy in their surroundings."
        },

        {
            id: 9,
            question: "Which characteristics apply to an exothermic process?\n\nI. It produces and releases heat.\nII. It has a negative enthalpy change (ΔH < 0).\nIII. It absorbs heat from the surroundings.",
            options: [
                "I and II only",
                "II and III only",
                "I and III only",
                "I, II, and III"
            ],
            answer: "I and II only",
            explanation: "An exothermic process releases heat to the surroundings and therefore has a negative enthalpy change, ΔH < 0."
        },

        {
            id: 10,
            question: "In the Gibbs equation (ΔG = ΔH − TΔS), what units must temperature (T) always be measured in?",
            options: [
                "Degrees Celsius (°C)",
                "Fahrenheit (°F)",
                "Kelvin (K)",
                "Calories (cal)"
            ],
            answer: "Kelvin (K)",
            explanation: "Temperature in the Gibbs free-energy equation must be expressed on the absolute temperature scale, Kelvin."
        },

        {
            id: 11,
            question: "Under which conditions of enthalpy (ΔH) and entropy change (ΔS) is a reaction always spontaneous at any temperature?",
            options: [
                "ΔH is positive and ΔS is negative",
                "ΔH is negative and ΔS is positive",
                "ΔH is positive and ΔS is positive",
                "ΔH is negative and ΔS is negative"
            ],
            answer: "ΔH is negative and ΔS is positive",
            explanation: "From ΔG = ΔH − TΔS, a negative ΔH and positive ΔS both favor a negative ΔG at every temperature."
        },

        // =========================================
        // PART 3: REDOX AND ENERGY
        // =========================================

        {
            id: 12,
            question: "What does a more negative redox potential (E) signify about a chemical compound?",
            options: [
                "It strongly grabs electrons and acts as a powerful oxidizing agent.",
                "It gives up electrons easily and acts as a strong reducing agent.",
                "It has zero tendency to participate in electron transfer.",
                "It represents an ionic bond with high activation energy."
            ],
            answer: "It gives up electrons easily and acts as a strong reducing agent.",
            explanation: "A more negative reduction potential indicates a greater tendency for the reduced form to donate electrons. Such substances are strong reducing agents."
        },

        {
            id: 13,
            question: "In bioenergetics, what does the ratio of NAD⁺ to NADH + H⁺ describe?",
            options: [
                "The overall cellular temperature",
                "The availability of NAD⁺ for catabolic metabolism",
                "The total amount of stored structural proteins",
                "The mechanical work capacity of cell membranes"
            ],
            answer: "The availability of NAD⁺ for catabolic metabolism",
            explanation: "The NAD⁺/NADH ratio reflects the redox state of the cell and the availability of oxidized NAD⁺ to accept electrons during catabolic reactions."
        },

        {
            id: 14,
            question: "Which of the following features are characteristic of exergonic reactions?\n\nI. Gibbs free energy change is negative (ΔG < 0).\nII. Reactants sit at a higher free-energy level than products.\nIII. They are typically anabolic and absorb energy.",
            options: [
                "I and II only",
                "II and III only",
                "I and III only",
                "I, II, and III"
            ],
            answer: "I and II only",
            explanation: "Exergonic reactions have negative ΔG and release free energy as reactants move from a higher free-energy state to a lower one. They are generally associated with catabolism rather than anabolism."
        },

        {
            id: 15,
            question: "How do enzymes affect the activation energy and free energy change of a reaction?",
            options: [
                "They lower the activation energy hump and change ΔG.",
                "They lower the activation energy hump but never change ΔG.",
                "They raise the activation energy hump to slow down spontaneous processes.",
                "They supply extra free energy to drive endergonic reactions directly."
            ],
            answer: "They lower the activation energy hump but never change ΔG.",
            explanation: "Enzymes catalyze reactions by lowering the activation energy required to reach the transition state. They do not change the overall ΔG or equilibrium position of the reaction."
        },

        {
            id: 16,
            question: "How do cells successfully drive an unfavorable (endergonic) reaction forward?",
            options: [
                "By increasing the environmental temperature around the cell",
                "By coupling it with an exergonic reaction, such as ATP hydrolysis, so the overall sum of free energy is negative",
                "By completely removing the activation energy barrier without any energy source",
                "By relying entirely on passive diffusion of heat"
            ],
            answer: "By coupling it with an exergonic reaction, such as ATP hydrolysis, so the overall sum of free energy is negative",
            explanation: "Cells couple endergonic reactions to favorable exergonic reactions such as ATP hydrolysis. If the combined ΔG is negative, the overall process can proceed spontaneously."
        },

        // =========================================
        // PART 4: HIGH-ENERGY COMPOUNDS
        // =========================================

        {
            id: 17,
            question: "What is the standard free energy of hydrolysis threshold that defines a \"high-energy\" compound at pH 7.0?",
            options: [
                "Releases at least 1 kcal/mol",
                "Releases at least 3 kcal/mol",
                "Releases at least 7 kcal/mol (approximately 29 kJ/mol)",
                "Releases at least 20 kcal/mol"
            ],
            answer: "Releases at least 7 kcal/mol (approximately 29 kJ/mol)",
            explanation: "High-energy compounds are commonly defined in biochemical contexts as compounds whose hydrolysis releases a large amount of free energy, approximately 7 kcal/mol or more under the stated standard biochemical conditions."
        },

        {
            id: 18,
            question: "Which of the following represents a correct classification and example of a high-energy compound?\n\nI. Pyrophosphate: ATP\nII. Enol phosphate: Phosphoenolpyruvate (PEP)\nIII. Thiol ester: Acetyl CoA",
            options: [
                "I and II only",
                "II and III only",
                "I and III only",
                "I, II, and III"
            ],
            answer: "II and III only",
            explanation: "PEP is an enol phosphate and acetyl-CoA contains a high-energy thioester bond. ATP is a phosphoanhydride compound rather than a pyrophosphate."
        },

        {
            id: 19,
            question: "Why does ATP sit in the \"middle\" of the high-energy compound energy ladder?",
            options: [
                "It cannot accept or donate phosphate groups under any cellular condition.",
                "It can easily accept a phosphate from higher-energy donors and donate a phosphate to lower-energy acceptors.",
                "It has the highest free energy release of all known biological molecules.",
                "It is chemically inert and unreactive with cellular enzymes."
            ],
            answer: "It can easily accept a phosphate from higher-energy donors and donate a phosphate to lower-energy acceptors.",
            explanation: "ATP has an intermediate phosphoryl-transfer potential. It can be synthesized using phosphate donors with higher transfer potential and can transfer phosphate to compounds with lower transfer potential."
        },

        // =========================================
        // PART 5: ATP STRUCTURE AND FUNCTION
        // =========================================

        {
            id: 20,
            question: "What chemical components make up the structure of an ATP molecule?",
            options: [
                "Guanine, deoxyribose sugar, and two phosphate groups",
                "Adenine, ribose sugar, and three phosphate groups",
                "Cytosine, glucose, and a sulfate group",
                "Uracil, ribose sugar, and a single phosphate group"
            ],
            answer: "Adenine, ribose sugar, and three phosphate groups",
            explanation: "ATP is composed of the nitrogenous base adenine, the five-carbon sugar ribose, and three phosphate groups."
        },

        {
            id: 21,
            question: "In the chemical structure of ATP, where are the base and the phosphate groups attached to the ribose sugar?",
            options: [
                "Base on the 1' carbon; phosphate groups on the 5' carbon",
                "Base on the 5' carbon; phosphate groups on the 1' carbon",
                "Both base and phosphate groups attach to the 3' carbon",
                "Base on the 2' carbon; phosphate groups on the 4' carbon"
            ],
            answer: "Base on the 1' carbon; phosphate groups on the 5' carbon",
            explanation: "The adenine base is attached to the 1′ carbon of ribose through an N-glycosidic bond, while the phosphate chain is attached to the 5′ carbon."
        },

        {
            id: 22,
            question: "What type of bond connects the first phosphate group to the ribose sugar in ATP, compared to the bonds between the outer phosphate groups?",
            options: [
                "An ester bond holds the first phosphate, while high-energy phosphoanhydride bonds connect the outer phosphates",
                "High-energy bonds hold the sugar, while ester bonds connect the outer phosphates",
                "All three phosphate groups are attached via thioester bonds",
                "Hydrogen bonds connect both the sugar and all phosphate groups"
            ],
            answer: "An ester bond holds the first phosphate, while high-energy phosphoanhydride bonds connect the outer phosphates",
            explanation: "The α-phosphate is linked to ribose by a phosphoester bond, while the α–β and β–γ phosphate linkages are phosphoanhydride bonds."
        },

        {
            id: 23,
            question: "What is the standard free energy of hydrolysis (ΔG°′) for the conversion of ATP to ADP and inorganic phosphate (Pi)?",
            options: [
                "-12.0 kJ/mol",
                "-30.5 kJ/mol (-7.3 kcal/mol)",
                "-45.6 kJ/mol",
                "0.0 kJ/mol"
            ],
            answer: "-30.5 kJ/mol (-7.3 kcal/mol)",
            explanation: "Under standard biochemical conditions, ATP hydrolysis to ADP and Pi has a standard free-energy change of approximately −30.5 kJ/mol, or −7.3 kcal/mol."
        },

        {
            id: 24,
            question: "Which of the following are recognized as the three main biological functions of ATP in living cells?\n\nI. Active transport of ions through cell membranes (e.g., Na⁺/K⁺ pump)\nII. Synthesis of chemical compounds and macromolecules (anabolism)\nIII. Mechanical work such as muscle contraction and flagella movement",
            options: [
                "I and II only",
                "II and III only",
                "I and III only",
                "I, II, and III"
            ],
            answer: "I, II, and III",
            explanation: "ATP provides energy for active transport, drives biosynthetic reactions, and powers mechanical work such as muscle contraction and movement of cellular structures."
        },

        {
            id: 25,
            question: "How do physiological conditions inside a living cell affect the actual free energy change (ΔG) of ATP hydrolysis compared to the standard value (ΔG°′)?",
            options: [
                "The actual free energy change is much more negative (around -50 to -65 kJ/mol) because cellular ATP/ADP ratios are far above equilibrium.",
                "The actual free energy change becomes positive, halting all cell work.",
                "The actual free energy change drops to exactly zero.",
                "The actual free energy change matches standard conditions precisely."
            ],
            answer: "The actual free energy change is much more negative (around -50 to -65 kJ/mol) because cellular ATP/ADP ratios are far above equilibrium.",
            explanation: "Inside cells, ATP concentrations and ATP/ADP ratios differ substantially from standard biochemical conditions. Consequently, ATP hydrolysis commonly has a more negative actual ΔG than the standard value of −30.5 kJ/mol."
        },

        // =========================================
        // PART 6: NERNST EQUATION AND PHOSPHOCREATINE
        // =========================================

        {
            id: 26,
            question: "Which of the following statements regarding the Nernst redox equation and its parameters are true?",
            options: [
                "The standard Nernst equation uses the ratio of oxidized form over reduced form.",
                "The term n represents the total temperature in Kelvin.",
                "The constant 0.0592 is derived from 2.303RT/F at 0°C.",
                "Redox potential is measured exclusively in units of calories."
            ],
            answer: "The standard Nernst equation uses the ratio of oxidized form over reduced form.",
            explanation: "The Nernst equation relates electrode potential to the ratio of oxidized and reduced species. The term n represents the number of electrons transferred, while 0.0592 V is associated with 2.303RT/F at approximately 25°C, not 0°C."
        },

        {
            id: 27,
            question: "What is the role of phosphocreatine in muscle tissue?",
            options: [
                "It acts as a permanent structural protein for muscle fibers.",
                "It serves as a short-term backup compound that quickly re-phosphorylates ADP to ATP during sudden activity.",
                "It functions as the primary electron acceptor for glycolysis.",
                "It permanently stores glucose as glycogen."
            ],
            answer: "It serves as a short-term backup compound that quickly re-phosphorylates ADP to ATP during sudden activity.",
            explanation: "Phosphocreatine provides a rapid source of phosphate for ATP regeneration. Creatine kinase transfers the phosphate group from phosphocreatine to ADP, producing ATP during periods of high energy demand."
        },

        {
            id: 28,
            question: "Which of the following represents a correct conversion or relationship?",
            options: [
                "1 kcal = 4.184 kJ",
                "Absolute temperature K = 273 - °C",
                "Standard free energy is calculated as ΔG°′ = +nFΔE°′",
                "High-energy cut-off is precisely 7 cal/mol"
            ],
            answer: "1 kcal = 4.184 kJ",
            explanation: "One kilocalorie is equal to approximately 4.184 kilojoules. The Kelvin conversion is K = °C + 273.15, and the relationship between free energy and redox potential uses ΔG°′ = −nFΔE°′."
        },

        // =========================================
        // PART 7: THERMODYNAMIC APPLICATIONS
        // =========================================

        {
            id: 29,
            question: "Why can an endothermic reaction (ΔH > 0) still be spontaneous under certain conditions?",
            options: [
                "If the temperature is absolute zero (0 K)",
                "If the increase in entropy (ΔS) is large enough to make the -TΔS term dominate, resulting in a negative ΔG",
                "If an enzyme completely eliminates the enthalpy of the system",
                "Endothermic reactions can never be spontaneous under any circumstance"
            ],
            answer: "If the increase in entropy (ΔS) is large enough to make the -TΔS term dominate, resulting in a negative ΔG",
            explanation: "From ΔG = ΔH − TΔS, an endothermic reaction can still have a negative ΔG if the positive entropy change is sufficiently large, particularly at an appropriate temperature."
        },

        {
            id: 30,
            question: "Which correction or clarification is noted regarding the common misconceptions in bioenergetics slides?",
            options: [
                "Spontaneous reactions always occur instantaneously without delay.",
                "Both exergonic and endergonic reactions require an activation-energy barrier to proceed.",
                "ATP synthase creates ATP directly from raw AMP without intermediate steps.",
                "High-energy compounds liberate less energy than standard ATP."
            ],
            answer: "Both exergonic and endergonic reactions require an activation-energy barrier to proceed.",
            explanation: "Spontaneity and reaction rate are different concepts. Even a thermodynamically favorable reaction can require an activation-energy barrier before it proceeds at an appreciable rate. Enzymes lower this activation energy without changing ΔG."
        }

    ]
};


/* =================================================
   DO NOT EDIT BELOW THIS LINE
================================================= */


/* =========================================
   VERSIONED LOCAL STORAGE KEYS
========================================= */

const COMPLETION_KEY =
    `conquerorsLabs_BIO101_completed_v${QUIZ_CONFIG.quizVersion}`;

const RESULT_ID_KEY =
    `conquerorsLabs_BIO101_result_id_v${QUIZ_CONFIG.quizVersion}`;

const questions =
    QUIZ_CONFIG.questions.slice(
        0,
        QUIZ_CONFIG.maxQuestions
    );


/* =========================================
   QUIZ STATE
========================================= */

let currentQuestion = 0;

let userAnswers =
    new Array(questions.length).fill(null);

let timeRemaining =
    QUIZ_CONFIG.timeLimit * 60;

let timerInterval = null;

let quizSubmitted = false;

let quizStarted = false;

let studentName = "";


/* =========================================
   HTML ELEMENTS
========================================= */

const nameScreen =
    document.getElementById("nameScreen");

const studentNameInput =
    document.getElementById("studentName");

const startQuizBtn =
    document.getElementById("startQuizBtn");

const quizMain =
    document.getElementById("quizMain");

const quizTitle =
    document.getElementById("quizTitle");

const timer =
    document.getElementById("timer");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const questionCounter =
    document.getElementById("questionCounter");

const optionsContainer =
    document.getElementById("optionsContainer");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const submitBtn =
    document.getElementById("submitBtn");

const questionNavigator =
    document.getElementById("questionNavigator");

const answeredCount =
    document.getElementById("answeredCount");

const resultSection =
    document.getElementById("resultSection");

const resultScore =
    document.getElementById("resultScore");

const resultPercentage =
    document.getElementById("resultPercentage");

const resultMessage =
    document.getElementById("resultMessage");

const reviewContainer =
    document.getElementById("reviewContainer");

const reviewBtn =
    document.getElementById("reviewBtn");

const homeBtn =
    document.getElementById("homeBtn");

const retakeBtn =
    document.getElementById("retakeBtn");


/* =========================================
   INITIAL PAGE STATE
========================================= */

if (questions.length === 0) {

    alert(
        "No questions have been added to this CBT yet."
    );

} else if (
    !QUIZ_CONFIG.allowRetake &&
    localStorage.getItem(COMPLETION_KEY) === "true"
) {

    showAlreadyCompleted();

} else {

    if (quizMain) {
        quizMain.style.display = "none";
    }

}


/* =========================================
   START CBT
========================================= */

if (startQuizBtn) {

    startQuizBtn.addEventListener(
        "click",
        () => {

            const enteredName =
                studentNameInput.value.trim();

            if (!enteredName) {

                studentNameInput.focus();

                studentNameInput.style.borderColor =
                    "#ff7373";

                return;

            }

            if (enteredName.length < 2) {

                studentNameInput.focus();

                studentNameInput.style.borderColor =
                    "#ff7373";

                return;

            }

            studentName = enteredName;

            studentNameInput.style.borderColor = "";

            nameScreen.style.display = "none";

            quizMain.style.display = "block";

            initializeQuiz();

        }
    );

}


/* =========================================
   ENTER KEY
========================================= */

if (studentNameInput) {

    studentNameInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                event.preventDefault();

                startQuizBtn.click();

            }

        }
    );

}


/* =========================================
   INITIALIZE QUIZ
========================================= */

function initializeQuiz() {

    quizStarted = true;

    quizTitle.textContent =
        QUIZ_CONFIG.title;

    createQuestionNavigator();

    showQuestion();

    startTimer();

}


/* =========================================
   ANTI-TAB / PAGE-LEAVE PROTECTION
========================================= */

/*
   Once the actual quiz has started:

   - Switching browser tabs submits the quiz.
   - Leaving the browser/app submits the quiz.
   - Navigating away from the page submits the quiz.

   quizSubmitted prevents duplicate submissions.
*/

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.visibilityState === "hidden" &&
            quizStarted &&
            !quizSubmitted
        ) {

            submitQuiz();

        }

    }
);


/*
   Additional protection for page navigation
   or the page being hidden/unloaded.
*/

window.addEventListener(
    "pagehide",
    () => {

        if (
            quizStarted &&
            !quizSubmitted
        ) {

            submitQuiz();

        }

    }
);


/* =========================================
   ALREADY COMPLETED
========================================= */

function showAlreadyCompleted() {

    if (nameScreen)
        nameScreen.style.display = "none";

    if (quizMain)
        quizMain.style.display = "block";

    const questionCard =
        document.querySelector(".question-card");

    const navigation =
        document.querySelector(".navigation");

    const navigatorCard =
        document.querySelector(".navigator-card");

    if (questionCard)
        questionCard.style.display = "none";

    if (navigation)
        navigation.style.display = "none";

    if (navigatorCard)
        navigatorCard.style.display = "none";

    if (submitBtn)
        submitBtn.style.display = "none";

    if (resultSection) {

        resultSection.style.display = "block";

        resultScore.textContent = "✓";

        resultPercentage.textContent = "";

        resultMessage.textContent =
            "You have already completed this CBT. Only one attempt is allowed.";

    }

    if (reviewBtn)
        reviewBtn.style.display = "none";

    if (retakeBtn)
        retakeBtn.style.display = "none";

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const question =
        questions[currentQuestion];

    questionNumber.textContent =
        `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;

    questionText.textContent =
        question.question;

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const percentage =
        ((currentQuestion + 1) / questions.length) * 100;

    progressPercent.textContent =
        `${Math.round(percentage)}%`;

    progressFill.style.width =
        `${percentage}%`;

    optionsContainer.innerHTML = "";

    question.options.forEach(
        (option, index) => {

            const optionButton =
                document.createElement("button");

            optionButton.className = "option";

            if (
                userAnswers[currentQuestion] === option
            ) {
                optionButton.classList.add("selected");
            }

            const letter =
                String.fromCharCode(65 + index);

            const optionLetter =
                document.createElement("span");

            optionLetter.className =
                "option-letter";

            optionLetter.textContent =
                letter;

            const optionText =
                document.createElement("span");

            optionText.className =
                "option-text";

            optionText.textContent =
                option;

            optionButton.appendChild(optionLetter);
            optionButton.appendChild(optionText);

            optionButton.addEventListener(
                "click",
                () => selectAnswer(option)
            );

            optionsContainer.appendChild(
                optionButton
            );

        }
    );

    previousBtn.disabled =
        currentQuestion === 0;

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Finish →"
            : "Next →";

    updateNavigator();

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(answer) {

    if (quizSubmitted)
        return;

    userAnswers[currentQuestion] = answer;

    showQuestion();

}


/* =========================================
   NEXT
========================================= */

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        () => {

            if (
                currentQuestion <
                questions.length - 1
            ) {

                currentQuestion++;

                showQuestion();

            } else {

                submitQuiz();

            }

        }
    );

}


/* =========================================
   PREVIOUS
========================================= */

if (previousBtn) {

    previousBtn.addEventListener(
        "click",
        () => {

            if (currentQuestion > 0) {

                currentQuestion--;

                showQuestion();

            }

        }
    );

}


/* =========================================
   QUESTION NAVIGATOR
========================================= */

function createQuestionNavigator() {

    questionNavigator.innerHTML = "";

    questions.forEach(
        (question, index) => {

            const button =
                document.createElement("button");

            button.className =
                "question-dot";

            button.textContent =
                index + 1;

            button.title =
                `Question ${index + 1}`;

            button.addEventListener(
                "click",
                () => {

                    if (quizSubmitted)
                        return;

                    currentQuestion = index;

                    showQuestion();

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
            ".question-dot"
        );

    buttons.forEach(
        (button, index) => {

            button.classList.remove(
                "current",
                "answered"
            );

            if (index === currentQuestion)
                button.classList.add("current");

            if (userAnswers[index] !== null)
                button.classList.add("answered");

        }
    );

    const answered =
        userAnswers.filter(
            answer => answer !== null
        ).length;

    answeredCount.textContent =
        `${answered}`;

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    updateTimerDisplay();

    timerInterval =
        setInterval(
            () => {

                if (timeRemaining <= 0) {

                    clearInterval(timerInterval);

                    submitQuiz(true);

                    return;

                }

                timeRemaining--;

                updateTimerDisplay();

            },
            1000
        );

}


function updateTimerDisplay() {

    const minutes =
        Math.floor(timeRemaining / 60);

    const seconds =
        timeRemaining % 60;

    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeRemaining <= 300) {

        timer.style.color = "#ff7373";

    }

}


/* =========================================
   SUBMIT BUTTON
========================================= */

if (submitBtn) {

    submitBtn.addEventListener(
        "click",
        () => {

            const unanswered =
                userAnswers.filter(
                    answer => answer === null
                ).length;

            if (unanswered > 0) {

                const proceed =
                    confirm(
                        `You have ${unanswered} unanswered question(s). Submit anyway?`
                    );

                if (!proceed)
                    return;

            }

            submitQuiz();

        }
    );

}


/* =========================================
   SUBMIT QUIZ
========================================= */

async function submitQuiz(timeUp = false) {

    if (quizSubmitted)
        return;

    quizSubmitted = true;

    clearInterval(timerInterval);

    let score = 0;

    questions.forEach(
        (question, index) => {

            if (
                userAnswers[index] ===
                question.answer
            ) {
                score++;
            }

        }
    );

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );

    const qualifiedForLeaderboard =
        percentage >= QUIZ_CONFIG.passMark;


    /* =====================================
       ONE ATTEMPT MODE
    ===================================== */

    if (!QUIZ_CONFIG.allowRetake) {

        localStorage.setItem(
            COMPLETION_KEY,
            "true"
        );

    }


    /* =====================================
       SAVE RESULT
    ===================================== */

    const resultId =
        await saveQuizResult(
            score,
            percentage,
            qualifiedForLeaderboard
        );


    /* =====================================
       SAVE FAILED
    ===================================== */

    if (!resultId) {

        showLockedResult(
            "Your quiz was completed, but your result could not be saved. Please contact the administrator."
        );

        return;

    }


    /* =====================================
       STORE RESULT ID
    ===================================== */

    localStorage.setItem(
        RESULT_ID_KEY,
        resultId
    );


    /* =====================================
       CHECK LEADERBOARD SETTINGS
    ===================================== */

    const leaderboardSettings =
        await getLeaderboardSettings();


    if (!leaderboardSettings) {

        showLockedResult(
            "Your quiz was submitted successfully. Your result is temporarily locked while the leaderboard is being prepared."
        );

        return;

    }


    const leaderboardIsEnabled =
        leaderboardSettings.leaderboard_enabled === true ||
        leaderboardSettings.leaderboard_enabled === "true";


    /* =====================================
       LEADERBOARD LOCKED
    ===================================== */

    if (!leaderboardIsEnabled) {

        showLockedResult(
            "Your quiz has been submitted successfully. Your result and leaderboard position are currently locked. Results will be available when the leaderboard is opened."
        );

        return;

    }


    /* =====================================
       LEADERBOARD OPEN
    ===================================== */

    showResults(
        score,
        percentage,
        timeUp
    );

}


/* =========================================
   GET LEADERBOARD SETTINGS
========================================= */

async function getLeaderboardSettings() {

    try {

        const { data, error } =
            await supabaseClient
                .from("leaderboard_settings")
                .select(
                    "quiz_id, leaderboard_enabled, pass_mark"
                )
                .eq(
                    "quiz_id",
                    QUIZ_CONFIG.quizId
                )
                .single();

        if (error) {

            console.error(
                "Leaderboard settings error:",
                error
            );

            return null;

        }

        return {

            ...data,

            leaderboard_enabled:
                data.leaderboard_enabled === true ||
                data.leaderboard_enabled === "true"

        };

    } catch (error) {

        console.error(
            "Leaderboard settings JavaScript error:",
            error
        );

        return null;

    }

}


/* =========================================
   SAVE RESULT
========================================= */

async function saveQuizResult(
    score,
    percentage,
    qualifiedForLeaderboard
) {

    try {

        const { data, error } =
            await supabaseClient.rpc(
                "submit_quiz_result",
                {
                    p_student_name:
                        studentName,

                    p_quiz_id:
                        QUIZ_CONFIG.quizId,

                    p_quiz_title:
                        QUIZ_CONFIG.title,

                    p_score:
                        score,

                    p_total_questions:
                        questions.length,

                    p_percentage:
                        percentage,

                    p_qualified_for_leaderboard:
                        qualifiedForLeaderboard
                }
            );

        if (error) {

            console.error(
                "DATABASE ERROR:",
                error
            );

            return null;

        }

        console.log(
            "DATABASE INSERT SUCCESSFUL!",
            data
        );

        return data;

    } catch (error) {

        console.error(
            "JAVASCRIPT ERROR:",
            error
        );

        return null;

    }

}


/* =========================================
   SHOW LOCKED RESULT
========================================= */

function showLockedResult(message) {

    const questionCard =
        document.querySelector(".question-card");

    const navigation =
        document.querySelector(".navigation");

    const navigatorCard =
        document.querySelector(".navigator-card");

    if (questionCard)
        questionCard.style.display = "none";

    if (navigation)
        navigation.style.display = "none";

    if (navigatorCard)
        navigatorCard.style.display = "none";

    if (submitBtn)
        submitBtn.style.display = "none";

    if (resultSection)
        resultSection.style.display = "block";

    if (resultScore)
        resultScore.textContent = "🔒";

    if (resultPercentage)
        resultPercentage.textContent = "RESULT LOCKED";

    if (resultMessage)
        resultMessage.textContent = message;

    if (reviewBtn)
        reviewBtn.style.display = "none";

    if (reviewContainer)
        reviewContainer.innerHTML = "";

    if (retakeBtn)
        retakeBtn.style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   SHOW RESULTS
========================================= */

function showResults(
    score,
    percentage,
    timeUp
) {

    const questionCard =
        document.querySelector(".question-card");

    const navigation =
        document.querySelector(".navigation");

    const navigatorCard =
        document.querySelector(".navigator-card");

    if (questionCard)
        questionCard.style.display = "none";

    if (navigation)
        navigation.style.display = "none";

    if (navigatorCard)
        navigatorCard.style.display = "none";

    if (submitBtn)
        submitBtn.style.display = "none";

    if (resultSection)
        resultSection.style.display = "block";

    if (resultScore)
        resultScore.textContent =
            `${score} / ${questions.length}`;

    if (resultPercentage)
        resultPercentage.textContent =
            `${percentage}%`;

    if (resultMessage) {

        if (timeUp) {

            resultMessage.textContent =
                "Time is up. Your answers have been submitted.";

        } else {

            resultMessage.textContent =
                getResultMessage(percentage);

        }

    }

    if (retakeBtn) {

        retakeBtn.style.display =
            QUIZ_CONFIG.allowRetake
                ? "inline-flex"
                : "none";

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   RESULT MESSAGE
========================================= */

function getResultMessage(percentage) {

    if (percentage >= 80)
        return "Excellent work. Keep pushing.";

    if (percentage >= 60)
        return "Good effort. Review your corrections and keep improving.";

    if (percentage >= 40)
        return "You're getting there. Use the corrections to strengthen your weak areas.";

    return "Keep studying. Every correction is another opportunity to improve.";

}


/* =========================================
   REVIEW ANSWERS
========================================= */

if (reviewBtn) {

    reviewBtn.addEventListener(
        "click",
        () => {

            reviewContainer.innerHTML = "";

            questions.forEach(
                (question, index) => {

                    const userAnswer =
                        userAnswers[index];

                    const correct =
                        userAnswer === question.answer;

                    const review =
                        document.createElement("div");

                    review.className =
                        "review-item";

                    const questionElement =
                        document.createElement("p");

                    questionElement.className =
                        "review-question";

                    questionElement.textContent =
                        `${index + 1}. ${question.question}`;

                    const userAnswerElement =
                        document.createElement("p");

                    userAnswerElement.className =
                        `review-answer ${
                            correct
                                ? "review-correct"
                                : "review-wrong"
                        }`;

                    userAnswerElement.textContent =
                        `Your answer: ${
                            userAnswer ?? "Not answered"
                        }`;

                    const correctAnswerElement =
                        document.createElement("p");

                    correctAnswerElement.className =
                        "review-answer review-correct";

                    correctAnswerElement.textContent =
                        `Correct answer: ${question.answer}`;

                    const explanationElement =
                        document.createElement("p");

                    explanationElement.className =
                        "review-explanation";

                    explanationElement.textContent =
                        question.explanation;

                    review.appendChild(questionElement);
                    review.appendChild(userAnswerElement);
                    review.appendChild(correctAnswerElement);
                    review.appendChild(explanationElement);

                    reviewContainer.appendChild(review);

                }
            );

            reviewContainer.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

}


/* =========================================
   RETAKE BUTTON
========================================= */

if (retakeBtn) {

    retakeBtn.addEventListener(
        "click",
        () => {

            if (!QUIZ_CONFIG.allowRetake)
                return;

            location.reload();

        }
    );

}


/* =========================================
   BACK TO HOME
========================================= */

if (homeBtn) {

    homeBtn.addEventListener(
        "click",
        () => {

            window.location.href = "index.html";

        }
    );

}