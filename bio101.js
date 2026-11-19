/* =================================================
   CONQUERORS LABS
   GES 107 CBT — REPRODUCTIVE HEALTH, STIs, DRUGS & MANKIND
================================================= */

/* =================================================
   EASY-EDIT QUIZ CONFIGURATION
================================================= */

const QUIZ_CONFIG = {
    title: "GES 107 — Reproductive Health, STIs, Drugs & Mankind",

    // New question set: version 7.
    quizVersion: 7,

    // Keep this unchanged to retain the existing leaderboard.
    quizId: "bio101-cell-biology",

    timeLimit: 20,
    maxQuestions: 30,
    passMark: 50,
    allowRetake: false,

    questions: [

        // =========================================
        // PART 1: REPRODUCTIVE HEALTH
        // =========================================

        {
            id: 1,
            question: "What is meant by reproductive health?",
            options: [
                "The absence of reproductive organs in an individual",
                "A state of complete physical, mental and social well-being in matters relating to the reproductive system",
                "The ability to produce children at any age",
                "The treatment of only sexually transmitted infections"
            ],
            answer: "A state of complete physical, mental and social well-being in matters relating to the reproductive system",
            explanation: "Reproductive health refers to complete physical, mental and social well-being in all matters relating to the reproductive system, its functions and processes."
        },

        {
            id: 2,
            question: "Which of the following is an important component of reproductive health?",
            options: [
                "Access to accurate information and appropriate reproductive healthcare",
                "Avoidance of all medical examinations",
                "Having as many children as possible",
                "Using antibiotics whenever pregnancy is suspected"
            ],
            answer: "Access to accurate information and appropriate reproductive healthcare",
            explanation: "Reproductive health includes access to accurate information, appropriate healthcare, family planning, prevention of STIs and services related to pregnancy and childbirth."
        },

        {
            id: 3,
            question: "Which of the following is a primary function of the female reproductive system?",
            options: [
                "Production of sperm only",
                "Production of ova and provision of an environment for fertilization and fetal development",
                "Production of red blood cells",
                "Digestion of reproductive hormones"
            ],
            answer: "Production of ova and provision of an environment for fertilization and fetal development",
            explanation: "The female reproductive system produces ova and provides the structures and environment necessary for fertilization, implantation and development of the fetus."
        },

        {
            id: 4,
            question: "What is ovulation?",
            options: [
                "The implantation of an embryo into the uterus",
                "The release of a mature ovum from an ovary",
                "The fusion of sperm and ovum",
                "The shedding of the uterine lining"
            ],
            answer: "The release of a mature ovum from an ovary",
            explanation: "Ovulation is the release of a mature egg or ovum from an ovarian follicle, usually around the middle of the menstrual cycle."
        },

        {
            id: 5,
            question: "What is menstruation?",
            options: [
                "The release of sperm from the testes",
                "The shedding of the uterine lining when pregnancy has not occurred",
                "The fertilization of an ovum",
                "The implantation of a fertilized egg"
            ],
            answer: "The shedding of the uterine lining when pregnancy has not occurred",
            explanation: "Menstruation occurs when the uterine endometrium is shed following the decline of reproductive hormones when pregnancy has not occurred."
        },

        {
            id: 6,
            question: "Which hormone is primarily responsible for stimulating ovulation?",
            options: [
                "Insulin",
                "Luteinizing hormone (LH)",
                "Thyroxine",
                "Adrenaline"
            ],
            answer: "Luteinizing hormone (LH)",
            explanation: "A surge in luteinizing hormone, or LH, triggers ovulation during the menstrual cycle."
        },

        {
            id: 7,
            question: "Which of the following best describes fertilization in humans?",
            options: [
                "Fusion of a sperm cell with an ovum to form a zygote",
                "Division of the uterus into two chambers",
                "Release of an ovum from the ovary",
                "Attachment of sperm to the uterine wall"
            ],
            answer: "Fusion of a sperm cell with an ovum to form a zygote",
            explanation: "Fertilization occurs when a sperm fuses with an ovum, producing a diploid zygote that can develop into an embryo."
        },

        {
            id: 8,
            question: "Which of the following is generally considered a healthy reproductive-health practice?",
            options: [
                "Ignoring unusual genital symptoms",
                "Seeking appropriate medical care when reproductive symptoms or infections occur",
                "Sharing prescribed antibiotics with friends",
                "Avoiding all reproductive-health information"
            ],
            answer: "Seeking appropriate medical care when reproductive symptoms or infections occur",
            explanation: "Early assessment and appropriate medical care can help prevent complications from reproductive conditions and sexually transmitted infections."
        },

        // =========================================
        // PART 2: FAMILY PLANNING & CONTRACEPTION
        // =========================================

        {
            id: 9,
            question: "What is the major purpose of family planning?",
            options: [
                "To prevent all pregnancies permanently",
                "To help individuals and couples decide freely and responsibly the number and spacing of their children",
                "To determine the sex of every child",
                "To eliminate the need for antenatal care"
            ],
            answer: "To help individuals and couples decide freely and responsibly the number and spacing of their children",
            explanation: "Family planning enables individuals and couples to determine the number and spacing of children and supports reproductive autonomy and health."
        },

        {
            id: 10,
            question: "Which contraceptive method also provides significant protection against many sexually transmitted infections when used correctly?",
            options: [
                "Male condom",
                "Oral contraceptive pill",
                "Intrauterine device",
                "Calendar method"
            ],
            answer: "Male condom",
            explanation: "Condoms provide contraception and also reduce the risk of transmission of many STIs when used correctly and consistently."
        },

        {
            id: 11,
            question: "Which of the following is a hormonal contraceptive method?",
            options: [
                "Condom",
                "Oral contraceptive pill",
                "Diaphragm",
                "Copper intrauterine device"
            ],
            answer: "Oral contraceptive pill",
            explanation: "Oral contraceptive pills contain reproductive hormones that primarily prevent ovulation and may also alter cervical mucus and the uterine lining."
        },

        {
            id: 12,
            question: "Which statement about contraceptive methods is correct?",
            options: [
                "No contraceptive method has any possible limitations.",
                "Different contraceptive methods have different effectiveness, benefits, risks and suitability.",
                "Contraception always causes infertility.",
                "Contraception protects against every STI."
            ],
            answer: "Different contraceptive methods have different effectiveness, benefits, risks and suitability.",
            explanation: "Contraceptive methods differ in effectiveness, duration, mechanism, side effects, contraindications and protection against STIs."
        },

        // =========================================
        // PART 3: SEXUALLY TRANSMITTED INFECTIONS
        // =========================================

        {
            id: 13,
            question: "What are sexually transmitted infections (STIs)?",
            options: [
                "Infections transmitted only through contaminated food",
                "Infections that can be transmitted through sexual contact and, in some cases, through blood or from mother to child",
                "Infections that affect only the reproductive organs of males",
                "Infections caused exclusively by poor nutrition"
            ],
            answer: "Infections that can be transmitted through sexual contact and, in some cases, through blood or from mother to child",
            explanation: "STIs are infections commonly transmitted through sexual contact. Some can also spread through blood exposure or from an infected mother to her baby during pregnancy or childbirth."
        },

        {
            id: 14,
            question: "Which of the following is a bacterial sexually transmitted infection?",
            options: [
                "HIV infection",
                "Gonorrhea",
                "Genital herpes",
                "Genital warts caused by HPV"
            ],
            answer: "Gonorrhea",
            explanation: "Gonorrhea is caused by the bacterium Neisseria gonorrhoeae. HIV, herpes and HPV are caused by viruses."
        },

        {
            id: 15,
            question: "Which organism causes gonorrhea?",
            options: [
                "Neisseria gonorrhoeae",
                "Treponema pallidum",
                "HIV",
                "Candida albicans"
            ],
            answer: "Neisseria gonorrhoeae",
            explanation: "Gonorrhea is caused by the bacterium Neisseria gonorrhoeae."
        },

        {
            id: 16,
            question: "Which organism causes syphilis?",
            options: [
                "Neisseria gonorrhoeae",
                "Treponema pallidum",
                "Human papillomavirus",
                "Hepatitis B virus"
            ],
            answer: "Treponema pallidum",
            explanation: "Syphilis is a sexually transmitted infection caused by the bacterium Treponema pallidum."
        },

        {
            id: 17,
            question: "Which of the following statements about HIV is correct?",
            options: [
                "HIV is caused by a bacterium.",
                "HIV primarily attacks cells of the immune system.",
                "HIV can be cured by taking antibiotics for one week.",
                "HIV is transmitted through ordinary handshakes."
            ],
            answer: "HIV primarily attacks cells of the immune system.",
            explanation: "Human immunodeficiency virus (HIV) attacks immune-system cells, particularly CD4 T lymphocytes. Antiretroviral therapy can suppress the virus but does not currently eradicate HIV from the body."
        },

        {
            id: 18,
            question: "Which of the following is NOT a usual route of HIV transmission?",
            options: [
                "Unprotected sexual exposure",
                "Sharing contaminated needles",
                "Transmission from an infected mother to her child under certain circumstances",
                "Sharing food with an infected person"
            ],
            answer: "Sharing food with an infected person",
            explanation: "HIV is not transmitted through ordinary sharing of food, casual contact, hugging or handshakes. Transmission occurs through specific exposure to infected body fluids."
        },

        {
            id: 19,
            question: "Which sexually transmitted infection is strongly associated with cervical cancer?",
            options: [
                "Human papillomavirus (HPV)",
                "Gonorrhea",
                "Chlamydia only",
                "Trichomoniasis"
            ],
            answer: "Human papillomavirus (HPV)",
            explanation: "Persistent infection with certain high-risk types of human papillomavirus is a major cause of cervical cancer."
        },

        {
            id: 20,
            question: "Which of the following is an effective way to reduce the risk of sexually transmitted infections?",
            options: [
                "Using condoms correctly and consistently",
                "Taking antibiotics after every sexual encounter without medical advice",
                "Assuming a person has no STI because they look healthy",
                "Sharing medication with sexual partners"
            ],
            answer: "Using condoms correctly and consistently",
            explanation: "Correct and consistent condom use reduces the risk of many STIs. Testing, vaccination where available, mutual testing and reducing exposure to infected partners are also important preventive measures."
        },

        // =========================================
        // PART 4: DRUGS & MANKIND
        // =========================================

        {
            id: 21,
            question: "What is a drug in the broad pharmacological sense?",
            options: [
                "Only an illegal substance",
                "A substance that can alter the functions or processes of a living organism",
                "Any substance that must be injected",
                "A substance used exclusively for recreation"
            ],
            answer: "A substance that can alter the functions or processes of a living organism",
            explanation: "A drug is a substance that can modify physiological or psychological processes in an organism. Drugs may be medicines, recreational substances or other psychoactive compounds."
        },

        {
            id: 22,
            question: "What is drug abuse?",
            options: [
                "The appropriate use of a medicine exactly as prescribed",
                "The harmful or improper use of a drug, including use in ways or amounts that can cause harm",
                "The storage of medicine in a pharmacy",
                "Taking a drug only after consulting a healthcare professional"
            ],
            answer: "The harmful or improper use of a drug, including use in ways or amounts that can cause harm",
            explanation: "Drug abuse refers to harmful or inappropriate patterns of drug use that can cause physical, psychological, social or other adverse consequences."
        },

        {
            id: 23,
            question: "What is drug dependence?",
            options: [
                "A complete inability to remember the name of a drug",
                "A state in which a person may experience a strong need for a drug and may develop physical or psychological symptoms when it is stopped",
                "The process of manufacturing a drug",
                "The normal digestion of a medicine"
            ],
            answer: "A state in which a person may experience a strong need for a drug and may develop physical or psychological symptoms when it is stopped",
            explanation: "Drug dependence can involve physical and/or psychological dependence, including symptoms that occur when drug use is reduced or stopped."
        },

        {
            id: 24,
            question: "Which of the following is an example of a stimulant drug?",
            options: [
                "Caffeine",
                "Alcohol",
                "Diazepam",
                "Heroin"
            ],
            answer: "Caffeine",
            explanation: "Caffeine is a central nervous system stimulant. Alcohol is primarily a depressant, while diazepam is a sedative/anxiolytic and heroin is an opioid."
        },

        {
            id: 25,
            question: "Which of the following is generally classified as a central nervous system depressant?",
            options: [
                "Alcohol",
                "Caffeine",
                "Amphetamine",
                "Cocaine"
            ],
            answer: "Alcohol",
            explanation: "Alcohol depresses central nervous system activity, particularly at higher doses. Caffeine, amphetamines and cocaine are stimulants."
        },

        {
            id: 26,
            question: "Which of the following can be a consequence of prolonged harmful drug use?",
            options: [
                "Improved physical health in every case",
                "Dependence, organ damage and impaired social functioning",
                "Permanent immunity against infectious diseases",
                "Guaranteed improvement in academic performance"
            ],
            answer: "Dependence, organ damage and impaired social functioning",
            explanation: "Prolonged harmful drug use can result in dependence, damage to organs such as the liver and heart, mental-health problems and disruption of social and academic functioning."
        },

        // =========================================
        // PART 5: DRUGS, SOCIETY & HUMAN HEALTH
        // =========================================

        {
            id: 27,
            question: "Why can substance abuse become a public-health problem?",
            options: [
                "Because it affects only the individual who uses the substance",
                "Because it can affect individuals, families, communities and healthcare systems",
                "Because all medicines are automatically dangerous",
                "Because drug use never has social consequences"
            ],
            answer: "Because it can affect individuals, families, communities and healthcare systems",
            explanation: "Substance abuse can cause illness, injuries, dependence, family problems, reduced productivity, accidents, crime and increased healthcare and social costs."
        },

        {
            id: 28,
            question: "Which approach is most appropriate when someone is suspected of having a substance-use disorder?",
            options: [
                "Publicly humiliating the person",
                "Encouraging appropriate professional assessment and evidence-based treatment",
                "Giving the person another person's prescription",
                "Forcing the person to stop without any support"
            ],
            answer: "Encouraging appropriate professional assessment and evidence-based treatment",
            explanation: "Substance-use disorders are health conditions that may require professional assessment, counselling, medical treatment, rehabilitation and social support."
        },

        {
            id: 29,
            question: "Which of the following best describes the relationship between reproductive health and substance abuse?",
            options: [
                "Substance abuse has no possible effect on reproductive health.",
                "Some substances can negatively affect fertility, pregnancy, sexual function and fetal development.",
                "All drugs improve fertility when used regularly.",
                "Only antibiotics can affect reproductive health."
            ],
            answer: "Some substances can negatively affect fertility, pregnancy, sexual function and fetal development.",
            explanation: "Certain drugs and substances can interfere with reproductive hormones, fertility, sexual function, pregnancy outcomes and fetal development."
        },

        {
            id: 30,
            question: "Which statement best reflects a comprehensive approach to reproductive health, STI prevention and drug-related health?",
            options: [
                "Health education, responsible decision-making, prevention and timely professional care are important.",
                "Treatment should only begin after severe symptoms appear.",
                "STIs can always be identified by appearance alone.",
                "Drug-related problems should be ignored because they are purely personal issues."
            ],
            answer: "Health education, responsible decision-making, prevention and timely professional care are important.",
            explanation: "A comprehensive approach combines accurate health education, safer decisions, prevention, appropriate screening and vaccination where available, early treatment, and professional support for substance-related problems."
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