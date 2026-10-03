/* =========================================
   CONQUERORS LABS
   CHM 101 CBT
========================================= */


/* =========================================
   QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {

    title:
        "CHM 101 — THERMOCHEMISTRY",

    timeLimit:
        20,

    maxQuestions:
        100,

    allowRetake:
        true,


    /* =====================================
       QUESTIONS
    ====================================== */

    questions: [

        {
            id: 1,

            question:
                "What is the SI unit of energy?",

            options: [
                "Newton (N)",
                "Joule (J)",
                "Calorie (cal)",
                "Watt (W)"
            ],

            answer:
                "Joule (J)",

            explanation:
                "The joule (J) is the SI unit of energy. One joule equals one newton-metre."
        },


        {
            id: 2,

            question:
                "Which type of thermodynamic system allows the exchange of both matter and energy with its surroundings?",

            options: [
                "Closed system",
                "Isolated system",
                "Open system",
                "Adiabatic system"
            ],

            answer:
                "Open system",

            explanation:
                "An open system exchanges both matter and energy with its surroundings."
        },


        {
            id: 3,

            question:
                "Which of the following is an intensive thermodynamic property?",

            options: [
                "Mass",
                "Volume",
                "Temperature",
                "Internal energy"
            ],

            answer:
                "Temperature",

            explanation:
                "An intensive property does not depend on the amount of substance present."
        },


        {
            id: 4,

            question:
                "What is the conversion factor between calories and joules?",

            options: [
                "1 cal = 1 J",
                "1 cal = 4.184 J",
                "1 cal = 2.54 J",
                "1 cal = 1000 J"
            ],

            answer:
                "1 cal = 4.184 J",

            explanation:
                "One thermochemical calorie is equivalent to 4.184 joules."
        },


        {
            id: 5,

            question:
                "In thermodynamics, in which direction does heat spontaneously flow between objects at different temperatures?",

            options: [
                "From a colder object to a warmer object",
                "From a warmer object to a colder object",
                "Only from objects with equal temperatures",
                "Only when external work is applied"
            ],

            answer:
                "From a warmer object to a colder object",

            explanation:
                "Heat spontaneously flows from a higher-temperature object to a lower-temperature object until thermal equilibrium is reached."
        },


        {
            id: 6,

            question:
                "What does a negative enthalpy change (ΔH < 0) indicate for a chemical reaction?",

            options: [
                "An endothermic reaction that absorbs heat",
                "An exothermic reaction that releases heat",
                "A cyclic process with no net energy change",
                "An isothermal process at constant volume"
            ],

            answer:
                "An exothermic reaction that releases heat",

            explanation:
                "A negative ΔH indicates that the reaction releases heat to the surroundings at constant pressure."
        },


        {
            id: 7,

            question:
                "According to the First Law of Thermodynamics, how is the change in internal energy expressed in terms of heat (q) and work (w)?",

            options: [
                "ΔE = q - w",
                "ΔE = q + w",
                "ΔE = q × w",
                "ΔE = w / q"
            ],

            answer:
                "ΔE = q + w",

            explanation:
                "Using the chemistry sign convention, ΔE = q + w, where q is heat transferred to the system and w is work done on the system."
        },


        {
            id: 8,

            question:
                "Which thermodynamic process occurs at constant pressure, where ΔP = 0?",

            options: [
                "Isothermal process",
                "Adiabatic process",
                "Isobaric process",
                "Isochoric process"
            ],

            answer:
                "Isobaric process",

            explanation:
                "An isobaric process occurs at constant pressure."
        },


        {
            id: 9,

            question:
                "Which formula calculates the heat required to change the temperature of a substance of mass m and specific heat capacity C?",

            options: [
                "q = mCΔT",
                "w = -PΔV",
                "ΔE = q - w",
                "Ek = ½mv²"
            ],

            answer:
                "q = mCΔT",

            explanation:
                "The equation q = mCΔT is used to calculate heat transferred when a substance changes temperature without a phase change."
        },


        {
            id: 10,

            question:
                "Which of the following is a state function?",

            options: [
                "Work (w)",
                "Heat (q)",
                "Change in internal energy (ΔE)",
                "Path length"
            ],

            answer:
                "Change in internal energy (ΔE)",

            explanation:
                "Internal energy is a state function because its change depends only on the initial and final states of the system."
        },


        {
            id: 11,

            question:
                "What is the standard enthalpy of formation of a pure element in its standard state?",

            options: [
                "1 kJ/mol",
                "Zero",
                "Dependent on its heat capacity",
                "Always negative"
            ],

            answer:
                "Zero",

            explanation:
                "The standard enthalpy of formation of an element in its standard state is defined as zero."
        },


        {
            id: 12,

            question:
                "In a bomb calorimeter, how is the heat of reaction related to the heat absorbed by the calorimeter?",

            options: [
                "q_rxn = q_cal",
                "q_rxn = -q_cal = -C_calΔT",
                "q_rxn = mCΔT",
                "q_rxn = q_cal + q_rxn"
            ],

            answer:
                "q_rxn = -q_cal = -C_calΔT",

            explanation:
                "Assuming no heat is lost to the surroundings, the heat of the reaction is equal in magnitude and opposite in sign to the heat absorbed by the calorimeter."
        },


        {
            id: 13,

            question:
                "What defines a cyclic thermodynamic process?",

            options: [
                "A process in which temperature remains constant",
                "A process in which no heat is exchanged",
                "A process in which the system returns to its initial state",
                "An expansion against zero external pressure"
            ],

            answer:
                "A process in which the system returns to its initial state",

            explanation:
                "In a complete cycle, the system returns to its initial state. Therefore, the net change in internal energy is zero."
        },


        {
            id: 14,

            question:
                "What does Hess's Law state about the enthalpy change of a reaction?",

            options: [
                "The overall enthalpy change equals the sum of the enthalpy changes of the individual steps",
                "The enthalpy change is always zero at absolute zero",
                "Reactants and products always have equal enthalpies",
                "Heat and work are state functions"
            ],

            answer:
                "The overall enthalpy change equals the sum of the enthalpy changes of the individual steps",

            explanation:
                "Because enthalpy is a state function, the overall enthalpy change is independent of the reaction pathway."
        },


        {
            id: 15,

            question:
                "For an isothermal reversible expansion of an ideal gas, which expression calculates the work using the chemistry sign convention?",

            options: [
                "w = -PΔV",
                "w = -nRT ln(V₂/V₁)",
                "w = -P_ex(V₂ - V₁)",
                "w = 0"
            ],

            answer:
                "w = -nRT ln(V₂/V₁)",

            explanation:
                "For a reversible isothermal expansion of an ideal gas, w = -nRT ln(V₂/V₁). Expansion gives a negative value for work done on the system."
        },


        {
            id: 16,

            question:
                "How is the internal energy of a system defined at the microscopic level?",

            options: [
                "The sum of the kinetic and potential energies of its constituent particles",
                "Only the translational kinetic energy of gas molecules",
                "The total heat transferred during an isobaric process",
                "External pressure multiplied by the change in volume"
            ],

            answer:
                "The sum of the kinetic and potential energies of its constituent particles",

            explanation:
                "Internal energy includes the microscopic kinetic and potential energies of the particles that make up the system."
        },


        {
            id: 17,

            question:
                "Using the chemistry sign convention, what is the sign of work when the surroundings do work on the system?",

            options: [
                "Negative",
                "Positive",
                "Zero",
                "Always dependent on temperature"
            ],

            answer:
                "Positive",

            explanation:
                "When work is done on the system, energy enters the system through work, so work is assigned a positive sign using the chemistry convention."
        },


        {
            id: 18,

            question:
                "What happens to ΔH when a thermochemical equation is reversed?",

            options: [
                "It is multiplied by the stoichiometric coefficient",
                "It remains unchanged",
                "Its sign is reversed",
                "It becomes zero"
            ],

            answer:
                "Its sign is reversed",

            explanation:
                "Reversing a thermochemical equation reverses the direction of the reaction, so the sign of ΔH also changes."
        },


        {
            id: 19,

            question:
                "How is the standard enthalpy change of a reaction calculated using standard enthalpies of formation?",

            options: [
                "ΔH° = ΣΔH°f(reactants) - ΣΔH°f(products)",
                "ΔH° = ΣΔH°f(products) - ΣΔH°f(reactants)",
                "ΔH° = ΣΔH°f(products) × ΣΔH°f(reactants)",
                "ΔH° = -Σ(ΔH°f(products) + ΔH°f(reactants))"
            ],

            answer:
                "ΔH° = ΣΔH°f(products) - ΣΔH°f(reactants)",

            explanation:
                "The standard enthalpy change is calculated by subtracting the sum of the reactants' standard enthalpies of formation from the sum for the products, using the appropriate stoichiometric coefficients."
        },


        {
            id: 20,

            question:
                "During an irreversible expansion against constant external pressure, which expression gives the pressure-volume work using the chemistry sign convention?",

            options: [
                "dw = -P dV",
                "w = -nRT ln(P₁/P₂)",
                "w = -P_ex(V_f - V_i)",
                "w = -∫ from V_i to V_f P dV"
            ],

            answer:
                "w = -P_ex(V_f - V_i)",

            explanation:
                "For expansion against a constant external pressure, work is calculated as w = -P_ex(V_f - V_i). Since the volume increases during expansion, the work is negative."
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
    new Array(
        questions.length
    ).fill(null);


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
    document.getElementById(
        "quizTitle"
    );


const timer =
    document.getElementById(
        "timer"
    );


const timerBox =
    document.querySelector(
        ".timer-box"
    );


const progressText =
    document.getElementById(
        "progressText"
    );


const answeredText =
    document.getElementById(
        "answeredText"
    );


const progressBar =
    document.getElementById(
        "progressBar"
    );


const questionNumber =
    document.getElementById(
        "questionNumber"
    );


const questionText =
    document.getElementById(
        "questionText"
    );


const optionsContainer =
    document.getElementById(
        "optionsContainer"
    );


const previousBtn =
    document.getElementById(
        "previousBtn"
    );


const nextBtn =
    document.getElementById(
        "nextBtn"
    );


const questionNavigator =
    document.getElementById(
        "questionNavigator"
    );


const submitBtn =
    document.getElementById(
        "submitBtn"
    );


const questionArea =
    document.getElementById(
        "questionArea"
    );


const navigatorCard =
    document.querySelector(
        ".navigator-card"
    );


const resultSection =
    document.getElementById(
        "resultSection"
    );


const resultScore =
    document.getElementById(
        "resultScore"
    );


const resultPercentage =
    document.getElementById(
        "resultPercentage"
    );


const resultMessage =
    document.getElementById(
        "resultMessage"
    );


const correctCount =
    document.getElementById(
        "correctCount"
    );


const wrongCount =
    document.getElementById(
        "wrongCount"
    );


const unansweredCount =
    document.getElementById(
        "unansweredCount"
    );


const reviewBtn =
    document.getElementById(
        "reviewBtn"
    );


const retakeBtn =
    document.getElementById(
        "retakeBtn"
    );


const reviewSection =
    document.getElementById(
        "reviewSection"
    );


const reviewContainer =
    document.getElementById(
        "reviewContainer"
    );


const submitModal =
    document.getElementById(
        "submitModal"
    );


const modalText =
    document.getElementById(
        "modalText"
    );


const cancelSubmitBtn =
    document.getElementById(
        "cancelSubmitBtn"
    );


const confirmSubmitBtn =
    document.getElementById(
        "confirmSubmitBtn"
    );


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


    if (!question) {
        return;
    }


    questionNumber.textContent =
        currentQuestion + 1;


    questionText.textContent =
        question.question;


    optionsContainer.innerHTML =
        "";


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


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
                document.createElement(
                    "span"
                );


            letter.className =
                "option-letter";


            letter.textContent =
                String.fromCharCode(
                    65 + index
                );


            const text =
                document.createElement(
                    "span"
                );


            text.className =
                "option-text";


            text.textContent =
                option;


            button.appendChild(
                letter
            );


            button.appendChild(
                text
            );


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

    if (quizSubmitted) {
        return;
    }


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
   BUILD NAVIGATOR
========================================= */

function buildNavigator() {

    questionNavigator.innerHTML =
        "";


    questions.forEach(
        (_, index) => {

            const button =
                document.createElement(
                    "button"
                );


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
            answer =>
                answer !== null
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
                answer =>
                    answer === null
            ).length;


        if (unanswered > 0) {

            modalText.textContent =
                `You still have ${unanswered} unanswered question${
                    unanswered === 1
                        ? ""
                        : "s"
                }. Are you sure you want to submit?`;

        } else {

            modalText.textContent =
                `You have answered all ${questions.length} questions. Are you ready to submit?`;

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

    if (quizSubmitted) {
        return;
    }


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


            if (
                userAnswer === null
            ) {

                unanswered++;

            } else if (
                userAnswer ===
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


    /* =====================================
       SAVE COMPLETION
    ====================================== */

    if (
        !QUIZ_CONFIG.allowRetake
    ) {

        localStorage.setItem(
            COMPLETION_KEY,
            "true"
        );

    }


    /* =====================================
       RESULTS
    ====================================== */

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


    if (
        QUIZ_CONFIG.allowRetake
    ) {

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


            let statusClass;


            if (
                userAnswer === null
            ) {

                statusClass =
                    "unanswered";

            } else if (
                isCorrect
            ) {

                statusClass =
                    "correct";

            } else {

                statusClass =
                    "wrong";

            }


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                `review-card ${statusClass}`;


            const number =
                document.createElement(
                    "div"
                );


            number.className =
                "review-question-number";


            number.textContent =
                `QUESTION ${index + 1}`;


            const questionElement =
                document.createElement(
                    "div"
                );


            questionElement.className =
                "review-question";


            questionElement.textContent =
                question.question;


            /* =================================
               YOUR ANSWER
            ================================== */

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


            const yourValue =
                document.createTextNode(
                    userAnswer ??
                    "Not answered"
                );


            yourAnswer.appendChild(
                yourLabel
            );


            yourAnswer.appendChild(
                yourValue
            );


            /* =================================
               CORRECT ANSWER
            ================================== */

            const correctAnswer =
                document.createElement(
                    "div"
                );


            correctAnswer.className =
                "review-answer";


            const correctLabel =
                document.createElement(
                    "strong"
                );


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


            /* =================================
               EXPLANATION
            ================================== */

            const correction =
                document.createElement(
                    "div"
                );


            correction.className =
                "review-correction";


            correction.textContent =
                `💡 Explanation: ${question.explanation}`;


            /* =================================
               BUILD CARD
            ================================== */

            card.appendChild(
                number
            );


            card.appendChild(
                questionElement
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
   ALREADY COMPLETED
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