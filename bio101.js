/* =================================================
   CONQUERORS LABS
   BIO 101 CBT — ENERGY METABOLISM
================================================= */

/* =================================================
   EASY-EDIT QUIZ CONFIGURATION
================================================= */

const QUIZ_CONFIG = {
    title: "BIO 101 — Energy Metabolism",

    // Increment this number for a completely new set.
    quizVersion: 4,

    // Keep this unchanged to retain the existing leaderboard.
    quizId: "bio101-cell-biology",

    timeLimit: 60,
    maxQuestions: 40,
    passMark: 50,
    allowRetake: false,

    questions: [

        // =========================================
        // PART 1: ENERGY METABOLISM
        // =========================================

        {
            id: 1,
            question: "During carbohydrate oxidation, which molecule is formed from pyruvate before it enters the Krebs cycle?",
            options: [
                "Pyruvate",
                "Acetyl coenzyme A (acetyl-CoA)",
                "Lactic acid",
                "Oxaloacetate"
            ],
            answer: "Acetyl coenzyme A (acetyl-CoA)",
            explanation: "Pyruvate is converted into acetyl-CoA by the pyruvate dehydrogenase complex. Acetyl-CoA then enters the Krebs cycle. Not every dietary fuel follows exactly the same pathway."
        },

        {
            id: 2,
            question: "The breakdown of complex energy-rich molecules into simpler molecules, usually releasing energy, is called:",
            options: [
                "Anabolism",
                "Catabolism",
                "Glycolysis",
                "Phosphorylation"
            ],
            answer: "Catabolism",
            explanation: "Catabolism breaks down complex molecules into simpler products and releases usable energy, which can be captured in ATP and reduced coenzymes."
        },

        {
            id: 3,
            question: "The process of building large, complex molecules from smaller ones is known as:",
            options: [
                "Catabolism",
                "Anabolism",
                "Hydrolysis",
                "Oxidation"
            ],
            answer: "Anabolism",
            explanation: "Anabolism is the constructive part of metabolism. It uses energy and small precursors to build molecules such as proteins and nucleic acids."
        },

        {
            id: 4,
            question: "During digestion, polysaccharides are broken down into simpler units primarily consisting of:",
            options: [
                "Amino acids",
                "Fatty acids",
                "Simple sugars",
                "Nucleotides"
            ],
            answer: "Simple sugars",
            explanation: "Digestive enzymes break polysaccharides such as starch into smaller carbohydrates, ultimately producing monosaccharides such as glucose."
        },

        {
            id: 5,
            question: "During digestion, proteins are broken down into:",
            options: [
                "Amino acids",
                "Fatty acids",
                "Simple sugars",
                "Nucleotides"
            ],
            answer: "Amino acids",
            explanation: "Proteases and peptidases break proteins into peptides and ultimately amino acids, which can be absorbed and used by the body."
        },

        {
            id: 6,
            question: "What are the main products of the digestion of dietary triglycerides?",
            options: [
                "Sugars and glycerol",
                "Fatty acids and monoacylglycerols",
                "Amino acids",
                "Nucleotides"
            ],
            answer: "Fatty acids and monoacylglycerols",
            explanation: "Pancreatic lipase mainly breaks triglycerides into free fatty acids and monoacylglycerols. Glycerol may also be produced. Cholesterol is not a normal breakdown product of triglycerides."
        },

        {
            id: 7,
            question: "Nucleic acids are digested into smaller components that include:",
            options: [
                "Nucleotides",
                "Fatty acids",
                "Amino acids",
                "Triglycerides"
            ],
            answer: "Nucleotides",
            explanation: "Nucleases break DNA and RNA into smaller units, including nucleotides. Further digestion can release nitrogenous bases, sugars and phosphate."
        },

        {
            id: 8,
            question: "Where does glycolysis take place in a eukaryotic cell?",
            options: [
                "In the mitochondrial matrix",
                "In the cytosol",
                "In the nucleus",
                "On the inner mitochondrial membrane"
            ],
            answer: "In the cytosol",
            explanation: "Glycolysis occurs in the cytosol. It converts glucose into pyruvate through a sequence of enzyme-catalysed reactions."
        },

        {
            id: 9,
            question: "The process that breaks fatty acids into two-carbon acetyl-CoA units is called:",
            options: [
                "Deamination",
                "Beta-oxidation",
                "Glycolysis",
                "Glycogenesis"
            ],
            answer: "Beta-oxidation",
            explanation: "Beta-oxidation removes two-carbon units from fatty acyl-CoA molecules, producing acetyl-CoA, NADH and FADH₂."
        },

        {
            id: 10,
            question: "Which process removes an amino group from an amino acid during amino acid catabolism?",
            options: [
                "Beta-oxidation",
                "Deamination",
                "Glycolysis",
                "Glycogenesis"
            ],
            answer: "Deamination",
            explanation: "Deamination removes an amino group from an amino acid. The remaining carbon skeleton can enter energy metabolism through different pathways, depending on the amino acid."
        },

        // =========================================
        // PART 2: GLYCOLYSIS
        // =========================================

        {
            id: 11,
            question: "How many molecules of pyruvate are produced from one molecule of glucose during glycolysis?",
            options: [
                "One",
                "Two",
                "Three",
                "Four"
            ],
            answer: "Two",
            explanation: "One six-carbon glucose molecule is split and processed to yield two three-carbon pyruvate molecules."
        },

        {
            id: 12,
            question: "Which statement correctly describes glycolysis in relation to oxygen?",
            options: [
                "It directly requires oxygen",
                "It does not directly require oxygen",
                "It occurs only inside mitochondria",
                "It occurs only during photosynthesis"
            ],
            answer: "It does not directly require oxygen",
            explanation: "Glycolysis does not use oxygen directly and can occur whether oxygen is available or not. The fate of pyruvate and the regeneration of NAD⁺ depend on cellular conditions."
        },

        {
            id: 13,
            question: "Which vitamin-derived coenzyme is directly required for the oxidation step of glycolysis?",
            options: [
                "Vitamin C-derived ascorbate",
                "Vitamin B3-derived NAD⁺",
                "Vitamin A-derived retinal",
                "Vitamin D-derived calcitriol"
            ],
            answer: "Vitamin B3-derived NAD⁺",
            explanation: "NAD⁺ is derived from niacin, vitamin B3, and accepts electrons during the glyceraldehyde-3-phosphate oxidation step of glycolysis. Thiamin, vitamin B1, is important in other energy-metabolism reactions, especially pyruvate oxidation."
        },

        {
            id: 14,
            question: "What is the product of the first phosphorylation of glucose during glycolysis?",
            options: [
                "Fructose-1,6-bisphosphate",
                "Glucose-6-phosphate",
                "Pyruvate",
                "Glyceraldehyde-3-phosphate"
            ],
            answer: "Glucose-6-phosphate",
            explanation: "Hexokinase transfers a phosphate group from ATP to glucose, forming glucose-6-phosphate and ADP."
        },

        {
            id: 15,
            question: "Which molecule is formed when fructose-6-phosphate is phosphorylated during glycolysis?",
            options: [
                "Fructose-1,6-bisphosphate",
                "Phosphoenolpyruvate",
                "3-phosphoglycerate",
                "Lactate"
            ],
            answer: "Fructose-1,6-bisphosphate",
            explanation: "Phosphofructokinase-1 uses ATP to convert fructose-6-phosphate into fructose-1,6-bisphosphate. This is a major regulatory step in glycolysis."
        },

        {
            id: 16,
            question: "What is the net ATP yield from one molecule of glucose during glycolysis?",
            options: [
                "One ATP",
                "Two ATP",
                "Three ATP",
                "Four ATP"
            ],
            answer: "Two ATP",
            explanation: "Glycolysis produces four ATP but uses two ATP in its early steps, giving a net gain of two ATP per glucose molecule."
        },

        {
            id: 17,
            question: "Which statement best describes the main products of glycolysis per glucose molecule?",
            options: [
                "Two pyruvate, two net ATP and two NADH",
                "One pyruvate, four net ATP and one NADH",
                "Two acetyl-CoA, six ATP and six FADH₂",
                "Two lactate, no ATP and no NADH"
            ],
            answer: "Two pyruvate, two net ATP and two NADH",
            explanation: "The overall products of glycolysis per glucose include two pyruvate, two net ATP, two NADH and water. The exact energy yield from later respiration depends on how reducing equivalents are transferred and used."
        },

        {
            id: 18,
            question: "When oxygen availability or mitochondrial oxidation is insufficient, pyruvate may be converted into which product in human cells?",
            options: [
                "Acetyl-CoA",
                "Lactate",
                "Citrate",
                "Oxaloacetate"
            ],
            answer: "Lactate",
            explanation: "Lactate dehydrogenase converts pyruvate into lactate while oxidising NADH to NAD⁺. This helps glycolysis continue producing ATP when oxidative metabolism cannot meet the cell's needs."
        },

        {
            id: 19,
            question: "Which enzyme catalyses the conversion of glucose into glucose-6-phosphate in glycolysis?",
            options: [
                "Phosphofructokinase-1",
                "Hexokinase",
                "Enolase",
                "Pyruvate kinase"
            ],
            answer: "Hexokinase",
            explanation: "Hexokinase catalyses the first step of glycolysis in most tissues by transferring a phosphate group from ATP to glucose."
        },

        {
            id: 20,
            question: "Which enzyme catalyses the final ATP-producing step of glycolysis, forming pyruvate?",
            options: [
                "Pyruvate kinase",
                "Hexokinase",
                "Aldolase",
                "Triose phosphate isomerase"
            ],
            answer: "Pyruvate kinase",
            explanation: "Pyruvate kinase transfers a phosphate group from phosphoenolpyruvate to ADP, producing ATP and pyruvate."
        },

        // =========================================
        // PART 3: KREBS CYCLE
        // =========================================

        {
            id: 21,
            question: "Where does the Krebs cycle occur in eukaryotic cells?",
            options: [
                "In the cytosol",
                "In the mitochondrial matrix",
                "In the nucleus",
                "On the outer cell membrane"
            ],
            answer: "In the mitochondrial matrix",
            explanation: "Most Krebs cycle reactions occur in the mitochondrial matrix. Succinate dehydrogenase is an important exception because it is embedded in the inner mitochondrial membrane."
        },

        {
            id: 22,
            question: "Acetyl-CoA combines with oxaloacetate at the start of the Krebs cycle to form:",
            options: [
                "Citrate",
                "Malate",
                "Fumarate",
                "Isocitrate"
            ],
            answer: "Citrate",
            explanation: "Citrate synthase combines the two-carbon acetyl group from acetyl-CoA with four-carbon oxaloacetate to form six-carbon citrate."
        },

        {
            id: 23,
            question: "Which molecule is formed when citrate is rearranged by aconitase?",
            options: [
                "Alpha-ketoglutarate",
                "Isocitrate",
                "Succinate",
                "Succinyl-CoA"
            ],
            answer: "Isocitrate",
            explanation: "Aconitase converts citrate into its isomer, isocitrate, through the intermediate cis-aconitate."
        },

        {
            id: 24,
            question: "During the conversion of isocitrate into alpha-ketoglutarate, which waste product is released?",
            options: [
                "Water",
                "Carbon dioxide",
                "Molecular oxygen",
                "Ammonia"
            ],
            answer: "Carbon dioxide",
            explanation: "Isocitrate dehydrogenase catalyses an oxidative decarboxylation. Carbon dioxide is released and NADH is produced."
        },

        {
            id: 25,
            question: "During the conversion of succinyl-CoA to succinate, which high-energy nucleotide is directly produced in the usual mammalian reaction?",
            options: [
                "GTP",
                "AMP",
                "Cyclic AMP",
                "UTP"
            ],
            answer: "GTP",
            explanation: "Succinyl-CoA synthetase produces GTP in the usual reaction in many mammalian tissues. Some tissue-specific forms produce ATP instead. This is an example of substrate-level phosphorylation."
        },

        {
            id: 26,
            question: "During the oxidation of succinate to fumarate, FAD is reduced to:",
            options: [
                "NADH",
                "FADH₂",
                "NADPH",
                "Acetyl-CoA"
            ],
            answer: "FADH₂",
            explanation: "Succinate dehydrogenase oxidises succinate to fumarate and transfers electrons to FAD, forming FADH₂. The enzyme is also Complex II of the electron transport chain."
        },

        {
            id: 27,
            question: "Which molecule is formed when fumarate is hydrated in the Krebs cycle?",
            options: [
                "Malate",
                "Citrate",
                "Succinate",
                "Oxaloacetate"
            ],
            answer: "Malate",
            explanation: "Fumarase adds water to fumarate, forming malate. This is a hydration reaction rather than hydrolysis."
        },

        {
            id: 28,
            question: "Which molecule is regenerated when malate is oxidised at the end of the Krebs cycle?",
            options: [
                "Oxaloacetate",
                "Pyruvate",
                "Acetyl-CoA",
                "Isocitrate"
            ],
            answer: "Oxaloacetate",
            explanation: "Malate dehydrogenase oxidises malate to oxaloacetate and produces NADH. Oxaloacetate can then combine with another acetyl-CoA molecule."
        },

        {
            id: 29,
            question: "How many turns of the Krebs cycle are needed to process the two acetyl-CoA molecules produced from one glucose molecule?",
            options: [
                "One turn",
                "Two turns",
                "Three turns",
                "Four turns"
            ],
            answer: "Two turns",
            explanation: "One glucose generally produces two pyruvate molecules, which can form two acetyl-CoA molecules. Each acetyl-CoA requires one turn of the Krebs cycle."
        },

        {
            id: 30,
            question: "How many NADH molecules are produced by the Krebs cycle itself per glucose molecule, assuming both acetyl-CoA molecules enter the cycle?",
            options: [
                "Two",
                "Four",
                "Six",
                "Eight"
            ],
            answer: "Six",
            explanation: "Each turn of the Krebs cycle produces three NADH. Since one glucose yields two acetyl-CoA molecules and therefore two turns, the cycle produces six NADH in total. Pyruvate oxidation produces additional NADH outside the cycle."
        },

        // =========================================
        // PART 4: ELECTRON TRANSPORT CHAIN
        // =========================================

        {
            id: 31,
            question: "At the end of the mitochondrial electron transport chain, molecular oxygen accepts electrons and combines with protons to form:",
            options: [
                "Carbon dioxide",
                "Water",
                "Lactic acid",
                "Glucose"
            ],
            answer: "Water",
            explanation: "Oxygen is the final electron acceptor in the mitochondrial electron transport chain. It accepts electrons and combines with protons to form water."
        },

        {
            id: 32,
            question: "Which vitamin is the precursor of the NAD⁺ and NADP⁺ coenzymes?",
            options: [
                "Thiamin (B1)",
                "Riboflavin (B2)",
                "Niacin (B3)",
                "Pantothenic acid (B5)"
            ],
            answer: "Niacin (B3)",
            explanation: "Niacin is vitamin B3 and is used to synthesise NAD⁺ and NADP⁺. These coenzymes transfer electrons in many metabolic reactions."
        },

        {
            id: 33,
            question: "Which vitamin is the precursor of flavin adenine dinucleotide (FAD)?",
            options: [
                "Riboflavin (B2)",
                "Niacin (B3)",
                "Thiamin (B1)",
                "Biotin (B7)"
            ],
            answer: "Riboflavin (B2)",
            explanation: "Riboflavin is vitamin B2 and is used to form FAD and FMN, which function as electron-carrying cofactors in metabolic reactions."
        },

        {
            id: 34,
            question: "Which coenzyme in mitochondrial Complex I accepts electrons from NADH early in the electron transport chain?",
            options: [
                "Flavin mononucleotide (FMN)",
                "Coenzyme Q",
                "Cytochrome c",
                "Cytochrome a"
            ],
            answer: "Flavin mononucleotide (FMN)",
            explanation: "FMN accepts electrons from NADH in Complex I and passes them through the complex's electron-transfer centres toward coenzyme Q."
        },

        {
            id: 35,
            question: "Which electron carrier moves within the inner mitochondrial membrane and transfers electrons from Complexes I and II to Complex III?",
            options: [
                "Cytochrome c",
                "Coenzyme Q",
                "FMN",
                "NAD⁺"
            ],
            answer: "Coenzyme Q",
            explanation: "Coenzyme Q, also called ubiquinone, is a lipid-soluble carrier that moves within the inner mitochondrial membrane and transfers electrons to Complex III."
        },

        {
            id: 36,
            question: "What structural feature do cytochromes share with haemoglobin and myoglobin?",
            options: [
                "Iron-containing heme groups",
                "Globin polypeptide chains in every case",
                "Lipid bilayers",
                "FMN groups"
            ],
            answer: "Iron-containing heme groups",
            explanation: "Cytochromes, haemoglobin and myoglobin contain heme groups with iron. Their proteins and functions differ, but the heme group is an important shared structural feature."
        },

        {
            id: 37,
            question: "Which small electron-transfer protein moves along the outer surface of the inner mitochondrial membrane from Complex III toward Complex IV?",
            options: [
                "Cytochrome b",
                "Cytochrome c",
                "Cytochrome a",
                "Cytochrome c₁"
            ],
            answer: "Cytochrome c",
            explanation: "Cytochrome c is a small, water-soluble protein that transfers electrons from Complex III to Complex IV along the membrane surface. It does not diffuse freely within the lipid bilayer."
        },

        {
            id: 38,
            question: "What is the process called in which the proton gradient drives ATP synthase to produce ATP?",
            options: [
                "Substrate-level phosphorylation",
                "Oxidative phosphorylation",
                "Photophosphorylation",
                "Glycogenolysis"
            ],
            answer: "Oxidative phosphorylation",
            explanation: "The electron transport chain establishes a proton gradient across the inner mitochondrial membrane. As protons flow back through ATP synthase, the enzyme uses that energy to produce ATP."
        },

        {
            id: 39,
            question: "Approximately how many ATP molecules are associated with the oxidation of one mitochondrial NADH under modern estimates?",
            options: [
                "One ATP",
                "Two ATP",
                "About 2.5 ATP",
                "About four ATP"
            ],
            answer: "About 2.5 ATP",
            explanation: "The modern average estimate is approximately 2.5 ATP per mitochondrial NADH. Some older textbooks use a value of 3 ATP, but the actual yield depends on cellular conditions and how electrons enter the mitochondria."
        },

        {
            id: 40,
            question: "Which process is characteristic of photosynthetic organisms rather than a normal energy-requiring process in human cells?",
            options: [
                "Mechanical work",
                "Active transport",
                "Photosynthesis",
                "Biosynthesis of cellular molecules"
            ],
            answer: "Photosynthesis",
            explanation: "Human cells use ATP for mechanical work, active transport and biosynthesis. Photosynthesis is characteristic of plants, algae and certain microorganisms; ATP is also used within photosynthetic pathways."
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

    quizTitle.textContent =
        QUIZ_CONFIG.title;

    createQuestionNavigator();

    showQuestion();

    startTimer();

}


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