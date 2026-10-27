/* =================================================
   CONQUERORS LABS
   BIO 101 CBT — CELL BIOLOGY II
================================================= */

/* =================================================
   EASY-EDIT QUIZ CONFIGURATION
================================================= */

const QUIZ_CONFIG = {
    title: "BIO 101 — Cell Biology II",

    // New question set: version 5.
    quizVersion: 5,

    // Keep this unchanged to retain the existing leaderboard.
    quizId: "bio101-cell-biology",

    timeLimit: 60,
    maxQuestions: 30,
    passMark: 50,
    allowRetake: false,

    questions: [

        // =========================================
        // PART 1: BIOLOGICAL ORGANIZATION
        // =========================================

        {
            id: 1,
            question: "What is the correct hierarchical order of biological organization from simplest to most complex?",
            options: [
                "Organ, Tissue, Cell, Organ System",
                "Cell, Tissue, Organ, Organ System",
                "Tissue, Cell, Organ System, Organ",
                "Organ System, Organ, Cell, Tissue"
            ],
            answer: "Cell, Tissue, Organ, Organ System",
            explanation: "The correct order is cell → tissue → organ → organ system. Cells form tissues, different tissues combine to form organs, and organs work together in organ systems."
        },

        {
            id: 2,
            question: "Which organism is commonly cited as an example of a colonial organism whose individual cells may survive independently when separated?",
            options: [
                "Amoeba",
                "Volvox",
                "Paramecium",
                "Hydra"
            ],
            answer: "Volvox",
            explanation: "Volvox is a colonial green alga. Its cells live together in an organized colony, although the degree of independence varies among species and cell types."
        },

        {
            id: 3,
            question: "What does the Colonial Theory propose about the evolution of multicellular organisms?",
            options: [
                "Multicellular organisms evolved from single-celled organisms through random mutations alone.",
                "Cooperation among cells of the same species led to the development of multicellular organisms.",
                "Tissues can survive independently after separation from a multicellular organism.",
                "Organs function completely independently of organ systems."
            ],
            answer: "Cooperation among cells of the same species led to the development of multicellular organisms.",
            explanation: "The colonial theory proposes that multicellular organisms evolved from groups or colonies of unicellular organisms. Increasing cooperation and specialization among cells contributed to multicellularity."
        },

        {
            id: 4,
            question: "A group of connected cells with similar structures working together to perform a particular function is known as a:",
            options: [
                "Organ",
                "Tissue",
                "Organ system",
                "Colony"
            ],
            answer: "Tissue",
            explanation: "A tissue consists of cells organized to perform particular functions. Different tissues can combine to form an organ."
        },

        {
            id: 5,
            question: "Which organ functions as part of both the endocrine system and the digestive system?",
            options: [
                "Liver",
                "Pancreas",
                "Kidney",
                "Spleen"
            ],
            answer: "Pancreas",
            explanation: "The pancreas has an endocrine function because it releases hormones such as insulin and glucagon into the blood. It also has an exocrine digestive function because it releases digestive enzymes into the small intestine."
        },

        // =========================================
        // PART 2: EXTRACELLULAR FLUID AND ELEMENTS
        // =========================================

        {
            id: 6,
            question: "Cells in multicellular organisms are surrounded by a fluid called:",
            options: [
                "Cytosol",
                "Intracellular fluid",
                "Extracellular fluid (ECF)",
                "Nucleoplasm"
            ],
            answer: "Extracellular fluid (ECF)",
            explanation: "Extracellular fluid is outside the cells. It includes interstitial fluid and blood plasma and provides the environment through which nutrients, gases and waste products are exchanged."
        },

        {
            id: 7,
            question: "Trace elements such as copper, zinc and manganese are important in the body primarily because they contribute to:",
            options: [
                "Providing structural rigidity to bones",
                "Enzyme activity",
                "Maintaining osmotic balance as the principal extracellular ions",
                "Fat storage"
            ],
            answer: "Enzyme activity",
            explanation: "Copper, zinc and manganese serve as cofactors for various enzymes. They are required in small quantities for normal biochemical reactions and cellular functions."
        },

        {
            id: 8,
            question: "According to the classification used in this course material, how many major ways do cells exchange materials with the extracellular fluid?",
            options: [
                "Three",
                "Four",
                "Five",
                "Six"
            ],
            answer: "Five",
            explanation: "The expected answer in this question set is five. The exact number can depend on how a course groups transport processes, so use the specific classification taught in your lecture notes."
        },

        // =========================================
        // PART 3: EPITHELIAL TISSUE
        // =========================================

        {
            id: 9,
            question: "How are epithelial tissues primarily classified according to the number of cell layers?",
            options: [
                "Simple and stratified",
                "Squamous, cuboidal and columnar",
                "Loose and dense",
                "Voluntary and involuntary"
            ],
            answer: "Simple and stratified",
            explanation: "Simple epithelium has one cell layer, whereas stratified epithelium has two or more layers. Squamous, cuboidal and columnar describe cell shapes rather than the number of layers."
        },

        {
            id: 10,
            question: "Epithelial cells that are flattened, thin and spread out are described as:",
            options: [
                "Cuboidal",
                "Columnar",
                "Squamous",
                "Transitional"
            ],
            answer: "Squamous",
            explanation: "Squamous epithelial cells are thin and flattened, resembling scales. Their shape allows efficient diffusion and filtration in locations such as alveoli and parts of the kidney."
        },

        // =========================================
        // PART 4: CONNECTIVE TISSUE
        // =========================================

        {
            id: 11,
            question: "Which connective tissue supports epithelia and forms a network around blood vessels, nerves and some internal organs?",
            options: [
                "Adipose tissue",
                "Loose connective tissue",
                "Bone tissue",
                "Hyaline cartilage"
            ],
            answer: "Loose connective tissue",
            explanation: "Loose connective tissue supports and binds surrounding tissues. It is commonly found beneath epithelia and around blood vessels, nerves and organs."
        },

        {
            id: 12,
            question: "Which connective tissue provides tensile strength and support in structures such as tendons and ligaments?",
            options: [
                "Loose connective tissue",
                "Fibrous connective tissue",
                "Adipose tissue",
                "Cartilage"
            ],
            answer: "Fibrous connective tissue",
            explanation: "Dense fibrous connective tissue contains abundant collagen fibres. Tendons connect muscles to bones, while ligaments connect bones to other bones and help stabilize joints."
        },

        {
            id: 13,
            question: "What are the mature cells found in cartilage called?",
            options: [
                "Osteocytes",
                "Adipocytes",
                "Chondrocytes",
                "Fibroblasts"
            ],
            answer: "Chondrocytes",
            explanation: "Chondrocytes are mature cartilage cells. They occupy spaces called lacunae and help maintain the cartilage extracellular matrix."
        },

        {
            id: 14,
            question: "Which substance is a major component of the proteoglycans found in cartilage extracellular matrix?",
            options: [
                "Hydroxyapatite",
                "Chondroitin sulfate",
                "Haemoglobin",
                "Fibrinogen"
            ],
            answer: "Chondroitin sulfate",
            explanation: "Chondroitin sulfate is a glycosaminoglycan found in cartilage proteoglycans. Together with collagen and other matrix components, it helps cartilage resist compression and retain water."
        },

        // =========================================
        // PART 5: BONE TISSUE
        // =========================================

        {
            id: 15,
            question: "In mature bone, which calcium phosphate mineral gives the extracellular matrix much of its hardness?",
            options: [
                "Chondroitin sulfate",
                "Hydroxyapatite",
                "Calcium carbonate",
                "Keratin"
            ],
            answer: "Hydroxyapatite",
            explanation: "Hydroxyapatite is a calcium phosphate mineral deposited in bone matrix. It combines with collagen and other matrix components to give bone strength and rigidity."
        },

        {
            id: 16,
            question: "Which bone cells are primarily responsible for producing collagen and new bone matrix?",
            options: [
                "Osteoclasts",
                "Osteocytes",
                "Osteoblasts",
                "Osteogenic cells"
            ],
            answer: "Osteoblasts",
            explanation: "Osteoblasts synthesize osteoid, the organic portion of bone matrix, which subsequently becomes mineralized. Osteocytes maintain bone tissue, while osteoclasts resorb bone."
        },

        {
            id: 17,
            question: "What is the main function of osteoclasts in bone tissue?",
            options: [
                "Form new bone matrix",
                "Act as stem cells for bone repair",
                "Resorb bone and release its minerals",
                "Maintain mature bone tissue"
            ],
            answer: "Resorb bone and release its minerals",
            explanation: "Osteoclasts break down bone matrix during bone resorption. This supports bone remodeling and helps regulate the release of minerals such as calcium into the bloodstream."
        },

        // =========================================
        // PART 6: ADIPOSE TISSUE AND BLOOD
        // =========================================

        {
            id: 18,
            question: "Adipose tissue consists largely of cells called adipocytes that are specialized primarily for:",
            options: [
                "Mineral storage",
                "Fat storage",
                "Oxygen transport",
                "Producing electrical impulses"
            ],
            answer: "Fat storage",
            explanation: "Adipocytes store energy in the form of triglycerides. Adipose tissue also provides insulation, cushioning and endocrine signals that influence metabolism."
        },

        {
            id: 19,
            question: "If the same amount of stored chemical energy were stored as carbohydrates instead of fat, approximately how much extra body mass might be required under the comparison used in this course material?",
            options: [
                "About 10 kg",
                "About 25 kg",
                "About 45 kg",
                "About 100 kg"
            ],
            answer: "About 45 kg",
            explanation: "The expected answer in this question set is approximately 45 kg. The exact estimate depends on the assumed energy stores, the energy density of the substances and how much associated water is included in the comparison."
        },

        {
            id: 20,
            question: "What is the fluid extracellular matrix in which blood cells are suspended called?",
            options: [
                "Interstitial fluid",
                "Lymph",
                "Plasma",
                "Serum"
            ],
            answer: "Plasma",
            explanation: "Blood plasma is the liquid component of blood in which red blood cells, white blood cells and platelets are suspended. Serum is the fluid remaining after blood has clotted."
        },

        {
            id: 21,
            question: "What is the approximate lifespan of a normal human red blood cell (erythrocyte)?",
            options: [
                "30 days",
                "60 days",
                "90 days",
                "120 days"
            ],
            answer: "120 days",
            explanation: "A normal human red blood cell circulates for approximately 120 days before it is removed, mainly by macrophages in the spleen, liver and other reticuloendothelial tissues."
        },

        {
            id: 22,
            question: "Platelets circulating in blood plasma are best described as:",
            options: [
                "Specialized nucleated cells",
                "Membrane-bound fragments derived from megakaryocytes",
                "Variants of white blood cells",
                "Protein crystals"
            ],
            answer: "Membrane-bound fragments derived from megakaryocytes",
            explanation: "Platelets are small, membrane-bound cell fragments released by megakaryocytes in the bone marrow. They lack a nucleus and are important in blood clotting and haemostasis."
        },

        // =========================================
        // PART 7: MUSCLE TISSUE
        // =========================================

        {
            id: 23,
            question: "Muscle contraction depends primarily on the interaction between which two proteins?",
            options: [
                "Collagen and elastin",
                "Actin and myosin",
                "Thrombin and fibrinogen",
                "Albumin and globulin"
            ],
            answer: "Actin and myosin",
            explanation: "Actin and myosin interact to generate force during muscle contraction. Their sliding interaction is regulated by calcium and associated proteins."
        },

        {
            id: 24,
            question: "Skeletal muscle cells are elongated, cylindrical and are commonly called:",
            options: [
                "Muscle fibres",
                "Spindle cells",
                "Intercalated discs",
                "Glial cells"
            ],
            answer: "Muscle fibres",
            explanation: "Skeletal muscle cells are long, cylindrical and multinucleated. Because of their elongated shape, they are commonly referred to as muscle fibres."
        },

        {
            id: 25,
            question: "What is the specialized junction connecting adjacent cardiac muscle cells called?",
            options: [
                "Neuromuscular junction",
                "Intercalated disc",
                "Node of Ranvier",
                "Z-line"
            ],
            answer: "Intercalated disc",
            explanation: "Intercalated discs connect adjacent cardiac muscle cells. They contain structures that provide mechanical attachment and electrical communication, allowing the heart muscle to contract in a coordinated manner."
        },

        {
            id: 26,
            question: "How are smooth muscle cells typically described?",
            options: [
                "Long, striated and multinucleated",
                "Short, branched and striated",
                "Spindle-shaped and non-striated",
                "Large, flat squamous cells"
            ],
            answer: "Spindle-shaped and non-striated",
            explanation: "Smooth muscle cells are typically spindle-shaped, have a single centrally located nucleus and lack the visible striations characteristic of skeletal and cardiac muscle."
        },

        // =========================================
        // PART 8: NERVOUS TISSUE
        // =========================================

        {
            id: 27,
            question: "What is a major function of glial cells in nervous tissue?",
            options: [
                "Transmit electrical signals along long distances as their primary role",
                "Support neurons, provide metabolic assistance and help maintain electrical insulation",
                "Produce red blood cells",
                "Contract to move body parts"
            ],
            answer: "Support neurons, provide metabolic assistance and help maintain electrical insulation",
            explanation: "Glial cells support and protect neurons, regulate their environment and provide metabolic assistance. Some glial cells, such as oligodendrocytes and Schwann cells, form myelin around axons."
        },

        {
            id: 28,
            question: "What is the principal function of dendrites in a typical neuron?",
            options: [
                "Convert electrical signals to chemical signals for muscle cells",
                "Receive incoming signals and convey their effects toward the cell body",
                "Form the myelin sheath around the axon",
                "Release neurotransmitters from the terminal branches as their main function"
            ],
            answer: "Receive incoming signals and convey their effects toward the cell body",
            explanation: "Dendrites receive signals from other cells. These inputs produce changes in the neuron's membrane potential that are integrated with other inputs and can influence whether an action potential is generated."
        },

        // =========================================
        // PART 9: ORGAN SYSTEMS AND CELL STRUCTURE
        // =========================================

        {
            id: 29,
            question: "How many major organ systems are commonly identified in humans?",
            options: [
                "Nine",
                "Ten",
                "Eleven",
                "Twelve"
            ],
            answer: "Eleven",
            explanation: "Human anatomy is commonly organized into eleven major organ systems. The exact grouping can vary slightly between textbooks, but eleven is the standard answer in many introductory biology courses."
        },

        {
            id: 30,
            question: "What are the three major parts of a typical human cell?",
            options: [
                "Cell membrane, nucleus and cytoplasm",
                "Cell wall, cell membrane and nucleus",
                "Mitochondria, nucleus and cytoplasm",
                "Ribosome, cytoplasm and membrane"
            ],
            answer: "Cell membrane, nucleus and cytoplasm",
            explanation: "A typical human cell has a plasma membrane, cytoplasm and nucleus. The plasma membrane forms the boundary, the cytoplasm contains the cytosol and organelles, and the nucleus houses most of the cell's genetic material."
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