/* =================================================
   CONQUERORS LABS
   BIO 101 CBT — EMBRYOLOGY
================================================= */


/* =================================================
   ✏️ EASY-EDIT QUIZ CONFIGURATION
================================================= */

const QUIZ_CONFIG = {

    title: "BIO 101 — Embryology",

    /*
       IMPORTANT:
       Change ONLY this number when you replace
       this quiz with a completely new question set.

       Example:
       Current set = 2
       Next new set = 3
       Next one = 4
    */
    quizVersion: 3,

    /*
       DO NOT CHANGE THIS unless you intentionally
       want to create a completely separate leaderboard.
    */
    quizId: "bio101-cell-biology",

    timeLimit: 20,

    maxQuestions: 35,

    passMark: 50,

    allowRetake: false,


    /* =============================================
       35 BIO 101 — EMBRYOLOGY QUESTIONS
    ============================================= */

    questions: [

        {
            id: 1,
            question: "What is the primary definition of embryology?",
            options: [
                "The study of aging and senescence",
                "The study of developmental events that occur during the prenatal stage",
                "The study of postnatal human anatomy",
                "The study of genetic mutations exclusively"
            ],
            answer: "The study of developmental events that occur during the prenatal stage",
            explanation: "Embryology is the study of developmental events that occur during the prenatal stage."
        },

        {
            id: 2,
            question: "How long does the embryonic period last compared to the fetal period?",
            options: [
                "Embryonic: first 8 weeks; Fetal: remaining 30 weeks",
                "Embryonic: first 12 weeks; Fetal: remaining 28 weeks",
                "Embryonic: first 4 weeks; Fetal: remaining 36 weeks",
                "Embryonic: first 20 weeks; Fetal: remaining 20 weeks"
            ],
            answer: "Embryonic: first 8 weeks; Fetal: remaining 30 weeks",
            explanation: "The embryonic period lasts approximately the first 8 weeks after fertilization, followed by the fetal period."
        },

        {
            id: 3,
            question: "What is the single mono-nucleated cell produced by the fusion of a spermatozoon and a mature ovum called?",
            options: [
                "Morula",
                "Blastocyst",
                "Zygote",
                "Gastrula"
            ],
            answer: "Zygote",
            explanation: "The zygote is the single cell formed when a spermatozoon fuses with a mature ovum."
        },

        {
            id: 4,
            question: "Which enzyme is released by the sperm to allow penetration of the zona pellucida and cell membrane surrounding the ovum?",
            options: [
                "Amylase",
                "Hyaluronidase",
                "Lipase",
                "Pepsin"
            ],
            answer: "Hyaluronidase",
            explanation: "Hyaluronidase helps sperm penetrate the surrounding cells and contributes to the process of fertilization."
        },

        {
            id: 5,
            question: "What is the most common site of conception in the female reproductive tract?",
            options: [
                "Uterine cavity",
                "Cervical canal",
                "Ampulla of the fallopian tube",
                "Ovary surface"
            ],
            answer: "Ampulla of the fallopian tube",
            explanation: "The ampulla of the uterine or fallopian tube is the most common site of fertilization."
        },

        {
            id: 6,
            question: "How many total chromosomes does a normal human somatic cell contain?",
            options: [
                "23",
                "44",
                "46",
                "48"
            ],
            answer: "46",
            explanation: "A normal human somatic cell contains 46 chromosomes arranged in 23 pairs."
        },

        {
            id: 7,
            question: "Which parent's sex chromosomes determine the sex of the developing child?",
            options: [
                "The mother",
                "The father",
                "Both contribute equally to sex determination",
                "Neither; it is determined randomly post-fertilization"
            ],
            answer: "The father",
            explanation: "The mother contributes an X chromosome, while the father contributes either X or Y, determining chromosomal sex."
        },

        {
            id: 8,
            question: "What phrase describes the series of rapid mitotic divisions without cell growth that immediately follow fertilization?",
            options: [
                "Cleavage",
                "Gastrulation",
                "Neurulation",
                "Maturation"
            ],
            answer: "Cleavage",
            explanation: "Cleavage consists of rapid mitotic divisions of the zygote without an increase in overall size."
        },

        {
            id: 9,
            question: "Approximately how many days post-fertilization does the morula enter the uterine cavity?",
            options: [
                "1 day",
                "2 days",
                "4 days",
                "7 days"
            ],
            answer: "4 days",
            explanation: "The morula reaches the uterine cavity at approximately the fourth day after fertilization."
        },

        {
            id: 10,
            question: "What is a cluster of cells resembling a mulberry formed during early cleavage called?",
            options: [
                "Blastocyst",
                "Morula",
                "Gastrula",
                "Placenta"
            ],
            answer: "Morula",
            explanation: "The morula is a solid ball of cells formed during early cleavage and resembles a mulberry."
        },

        {
            id: 11,
            question: "What are the two distinct cell types that emerge in a late blastocyst?",
            options: [
                "Ectoderm and Endoderm",
                "Trophoblast and Inner cell mass (embryoblast)",
                "Cytotrophoblast and Syncytiotrophoblast",
                "Epiblast and Hypoblast"
            ],
            answer: "Trophoblast and Inner cell mass (embryoblast)",
            explanation: "The late blastocyst consists mainly of the outer trophoblast and the inner cell mass, also called the embryoblast."
        },

        {
            id: 12,
            question: "Which hormone is produced by the trophoblasts starting on day 6 to maintain the corpus luteum and prevent menstruation?",
            options: [
                "Estrogen",
                "Progesterone",
                "Human chorionic gonadotropin (hCG)",
                "Oxytocin"
            ],
            answer: "Human chorionic gonadotropin (hCG)",
            explanation: "hCG produced by trophoblastic tissue maintains the corpus luteum, allowing progesterone production to continue."
        },

        {
            id: 13,
            question: "On which day after fertilization is the process of implantation typically completed?",
            options: [
                "3rd to 4th day",
                "6th day",
                "10th to 11th day",
                "20th day"
            ],
            answer: "10th to 11th day",
            explanation: "Implantation is generally completed by approximately the 10th to 11th day after fertilization."
        },

        {
            id: 14,
            question: "What name is given to the deeper type of penetration where the human blastocyst is covered on all sides by the endometrium?",
            options: [
                "Superficial implantation",
                "Interstitial implantation",
                "Ectopic implantation",
                "Tubal implantation"
            ],
            answer: "Interstitial implantation",
            explanation: "Interstitial implantation occurs when the blastocyst becomes completely embedded within the endometrium."
        },

        {
            id: 15,
            question: "During gastrulation, a single-layered blastula is reorganized into what structure?",
            options: [
                "Bilaminar disc",
                "Trilaminar structure known as the gastrula",
                "Neural tube",
                "Morula"
            ],
            answer: "Trilaminar structure known as the gastrula",
            explanation: "Gastrulation reorganizes the embryo into a trilaminar structure containing the three primary germ layers."
        },

        {
            id: 16,
            question: "What are the three primary germ layers formed during gastrulation?",
            options: [
                "Ectoderm, mesoderm, endoderm",
                "Trophoblast, epiblast, hypoblast",
                "Amnion, chorion, yolk sac",
                "Sclerotome, myotome, dermatome"
            ],
            answer: "Ectoderm, mesoderm, endoderm",
            explanation: "The three primary germ layers are ectoderm, mesoderm, and endoderm."
        },

        {
            id: 17,
            question: "Which embryonic structure gives rise to the nervous system, including the brain and spinal cord?",
            options: [
                "Notochord",
                "Neural tube",
                "Primitive streak",
                "Yolk sac"
            ],
            answer: "Neural tube",
            explanation: "The neural tube develops into the central nervous system, including the brain and spinal cord."
        },

        {
            id: 18,
            question: "Around what day does the mesoderm form as a third layer between the epiblast and hypoblast?",
            options: [
                "Day 8",
                "Day 10",
                "Day 16",
                "Day 21"
            ],
            answer: "Day 16",
            explanation: "During gastrulation, mesoderm develops around the third week, approximately day 16."
        },

        {
            id: 19,
            question: "What paired mesodermal bodies develop on either side of the developing neural tube to give rise to the skeleton and muscle tissue?",
            options: [
                "Somites",
                "Villi",
                "Pharyngeal arches",
                "Lacunae"
            ],
            answer: "Somites",
            explanation: "Somites are paired blocks of paraxial mesoderm that contribute to the axial skeleton and skeletal muscles."
        },

        {
            id: 20,
            question: "What layer of the decidua is in direct contact with the base of the blastocyst and becomes the maternal portion of the placenta?",
            options: [
                "Decidua parietalis",
                "Decidua capsularis",
                "Decidua basalis",
                "Decidua vera"
            ],
            answer: "Decidua basalis",
            explanation: "The decidua basalis lies beneath the implanted blastocyst and forms the maternal component of the placenta."
        },

        {
            id: 21,
            question: "During which week of embryonic life are the four limb buds considered most vulnerable to teratogens?",
            options: [
                "Week 3",
                "Week 5",
                "Week 7",
                "Week 8"
            ],
            answer: "Week 5",
            explanation: "The limb buds develop during the embryonic period and are particularly susceptible to teratogens during this stage."
        },

        {
            id: 22,
            question: "How is the size of an embryo or young fetus measured during the first half of pregnancy?",
            options: [
                "Crown-heel length (CHL)",
                "Crown-rump length (CRL)",
                "Total body weight",
                "Biparietal diameter"
            ],
            answer: "Crown-rump length (CRL)",
            explanation: "Crown-rump length is commonly used to measure the size of an embryo or young fetus during early pregnancy."
        },

        {
            id: 23,
            question: "What rule is used to calculate the age of a fetus in lunar months from its length in centimeters?",
            options: [
                "Naegele's rule",
                "Haase's rule (length divided by 5)",
                "Rule of nines",
                "McDonald's rule"
            ],
            answer: "Haase's rule (length divided by 5)",
            explanation: "Haase's rule uses fetal length to estimate fetal age in lunar months during the appropriate stage of development."
        },

        {
            id: 24,
            question: "What is the approximate duration of a single lunar month in the context of pregnancy calculation?",
            options: [
                "20 days",
                "28 days",
                "30 days",
                "31 days"
            ],
            answer: "28 days",
            explanation: "A lunar month in obstetric calculations is approximately 28 days, or four weeks."
        },

        {
            id: 25,
            question: "By the end of which lunar month have all major organ systems formed in the embryo/fetus?",
            options: [
                "First lunar month",
                "Second lunar month",
                "Third lunar month",
                "Fifth lunar month"
            ],
            answer: "Third lunar month",
            explanation: "By the end of the third lunar month, the major organ systems have formed, although they continue to mature."
        },

        {
            id: 26,
            question: "What cheesy, white substance covers the skin of the fetus around the sixth lunar month?",
            options: [
                "Lanugo",
                "Vernix caseosa",
                "Brown fat",
                "Surfactant"
            ],
            answer: "Vernix caseosa",
            explanation: "Vernix caseosa is a white, cheesy protective substance covering the fetal skin."
        },

        {
            id: 27,
            question: "What is the function of the brown fat present in the neck and sternal area of a developing fetus?",
            options: [
                "Oxygen transport",
                "Heat production",
                "Waste filtration",
                "Bone ossification"
            ],
            answer: "Heat production",
            explanation: "Brown fat produces heat through thermogenesis and helps the newborn maintain body temperature."
        },

        {
            id: 28,
            question: "What fine, soft body hair becomes visible on the fetus during the sixth lunar month?",
            options: [
                "Vernix",
                "Lanugo",
                "Cilia",
                "Scalp hair"
            ],
            answer: "Lanugo",
            explanation: "Lanugo is the fine, soft hair that develops over the fetal body during prenatal development."
        },

        {
            id: 29,
            question: "What structures are contained within the fully formed umbilical cord?",
            options: [
                "One umbilical artery and two umbilical veins",
                "Two umbilical arteries and one umbilical vein",
                "Two umbilical arteries and two umbilical veins",
                "One umbilical artery and one umbilical vein"
            ],
            answer: "Two umbilical arteries and one umbilical vein",
            explanation: "A normal umbilical cord contains two umbilical arteries and one umbilical vein."
        },

        {
            id: 30,
            question: "During which week of development do the eyelid folds fuse, remaining closed until the seventh month?",
            options: [
                "Fourth week",
                "Sixth week",
                "Eighth week",
                "Tenth week"
            ],
            answer: "Eighth week",
            explanation: "The eyelids develop and fuse during the embryonic period, remaining closed until approximately the seventh month."
        },

        {
            id: 31,
            question: "What germ layer gives rise to the epithelial lining and glands of the digestive and respiratory tracts?",
            options: [
                "Ectoderm",
                "Mesoderm",
                "Endoderm",
                "Neural crest"
            ],
            answer: "Endoderm",
            explanation: "Endoderm gives rise to much of the epithelial lining and glands of the digestive and respiratory systems."
        },

        {
            id: 32,
            question: "What is the approximate weight of the embryo at the end of the fourth week of life?",
            options: [
                "5 mg",
                "50 mg",
                "1000 mg",
                "3400 g"
            ],
            answer: "5 mg",
            explanation: "The embryo weighs only a few milligrams at the end of the fourth week, approximately 5 mg."
        },

        {
            id: 33,
            question: "When do fetal movements (quickening) typically begin to be felt by the mother?",
            options: [
                "End of the 3rd lunar month",
                "End of the 5th lunar month",
                "End of the 7th lunar month",
                "End of the 9th lunar month"
            ],
            answer: "End of the 5th lunar month",
            explanation: "Quickening, or the mother's perception of fetal movement, typically begins around the fifth lunar month."
        },

        {
            id: 34,
            question: "What layer of the trophoblast is responsible for producing the hormone hCG?",
            options: [
                "Syncytiotrophoblast",
                "Cytotrophoblast",
                "Amnion",
                "Chorionic plate"
            ],
            answer: "Syncytiotrophoblast",
            explanation: "The syncytiotrophoblast produces human chorionic gonadotropin (hCG), which helps maintain the corpus luteum during early pregnancy."
        },

        {
            id: 35,
            question: "What is the term for the bleeding that sometimes occurs around the 13th day after fertilization due to increased blood flow into the lacunar space?",
            options: [
                "Menstrual bleeding",
                "Implantation bleeding",
                "Breakthrough bleeding",
                "Decidual hemorrhage"
            ],
            answer: "Implantation bleeding",
            explanation: "Implantation bleeding may occur around the time implantation becomes established and is associated with vascular changes in the endometrium."
        }

    ]

};


/* =================================================
   🔒 DO NOT EDIT BELOW THIS LINE
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

    document.querySelector(".question-card").style.display =
        "none";

    document.querySelector(".navigation").style.display =
        "none";

    document.querySelector(".navigator-card").style.display =
        "none";

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


/* =========================================
   PREVIOUS
========================================= */

previousBtn.addEventListener(
    "click",
    () => {

        if (currentQuestion > 0) {

            currentQuestion--;

            showQuestion();

        }

    }
);


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
            "🔥 DATABASE INSERT SUCCESSFUL!",
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

    document.querySelector(
        ".question-card"
    ).style.display = "none";

    document.querySelector(
        ".navigation"
    ).style.display = "none";

    document.querySelector(
        ".navigator-card"
    ).style.display = "none";


    if (submitBtn)
        submitBtn.style.display = "none";


    if (resultSection)
        resultSection.style.display = "block";


    if (resultScore)
        resultScore.textContent = "🔒";


    if (resultPercentage)
        resultPercentage.textContent =
            "RESULT LOCKED";


    if (resultMessage)
        resultMessage.textContent =
            message;


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

    document.querySelector(
        ".question-card"
    ).style.display = "none";


    document.querySelector(
        ".navigation"
    ).style.display = "none";


    document.querySelector(
        ".navigator-card"
    ).style.display = "none";


    submitBtn.style.display = "none";


    resultSection.style.display = "block";


    resultScore.textContent =
        `${score} / ${questions.length}`;


    resultPercentage.textContent =
        `${percentage}%`;


    if (timeUp) {

        resultMessage.textContent =
            "Time is up. Your answers have been submitted.";

    } else {

        resultMessage.textContent =
            getResultMessage(percentage);

    }


    if (retakeBtn) {

        if (QUIZ_CONFIG.allowRetake) {

            retakeBtn.style.display =
                "inline-flex";

        } else {

            retakeBtn.style.display =
                "none";

        }

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


                review.appendChild(
                    questionElement
                );

                review.appendChild(
                    userAnswerElement
                );

                review.appendChild(
                    correctAnswerElement
                );

                review.appendChild(
                    explanationElement
                );


                reviewContainer.appendChild(
                    review
                );

            }
        );


        reviewContainer.scrollIntoView({
            behavior: "smooth"
        });

    }
);


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

homeBtn.addEventListener(
    "click",
    () => {

        window.location.href =
            "index.html";

    }
);
