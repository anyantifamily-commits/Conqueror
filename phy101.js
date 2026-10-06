
/* =========================================
CONQUERORS LABS
PHY 101 CBT
========================================= */

/* =========================================
QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {

    title:
        "PHY 101 — Projectile & Circular Motion",

    /* NEW QUESTION SET VERSION */
    quizVersion:
        2,

    /* KEEP THIS UNCHANGED */
    quizId:
        "phy101",

    timeLimit:
        30,

    maxQuestions:
        40,

    allowRetake:
        false,

    passMark:
        50,


    /* =====================================
       QUESTIONS
    ===================================== */

    questions: [

        /* =====================================
           PART A — PROJECTILE MOTION
        ===================================== */

        {
            id: 1,
            question:
                "What is the path followed by a projectile moving under the influence of gravity alone?",
            options: [
                "A straight line",
                "A circle",
                "A parabola",
                "An ellipse"
            ],
            answer:
                "A parabola",
            explanation:
                "Ignoring air resistance, a projectile has constant horizontal velocity and constant downward acceleration, producing a parabolic trajectory."
        },

        {
            id: 2,
            question:
                "What is the horizontal acceleration (aₓ) of a projectile, ignoring air resistance?",
            options: [
                "9.8 m/s²",
                "Zero",
                "-9.8 m/s²",
                "Equal to its initial speed"
            ],
            answer:
                "Zero",
            explanation:
                "When air resistance is neglected, gravity acts vertically, so the horizontal acceleration of the projectile is zero."
        },

        {
            id: 3,
            question:
                "What is the vertical acceleration (aᵧ) of a projectile near Earth's surface?",
            options: [
                "Zero",
                "-g (approximately 9.8 m/s² downward)",
                "Positive 9.8 m/s² upward",
                "Equal to horizontal velocity"
            ],
            answer:
                "-g (approximately 9.8 m/s² downward)",
            explanation:
                "The projectile experiences a constant downward acceleration due to gravity, approximately 9.8 m/s² near Earth's surface."
        },

        {
            id: 4,
            question:
                "When splitting a launch vector of size u at an angle θ above the horizontal, what is the horizontal component (uₓ)?",
            options: [
                "u sinθ",
                "u tanθ",
                "u cosθ",
                "u / cosθ"
            ],
            answer:
                "u cosθ",
            explanation:
                "When θ is measured from the horizontal, the horizontal component is uₓ = u cosθ."
        },

        {
            id: 5,
            question:
                "What is the initial vertical component (uᵧ) of a projectile launched with speed u at angle θ?",
            options: [
                "u cosθ",
                "u sinθ",
                "u / sinθ",
                "Zero"
            ],
            answer:
                "u sinθ",
            explanation:
                "When θ is measured from the horizontal, the initial vertical component is uᵧ = u sinθ."
        },

        {
            id: 6,
            question:
                "What single variable serves as the link between the horizontal and vertical motions of a projectile?",
            options: [
                "Mass (m)",
                "Time (t)",
                "Range (R)",
                "Height (H)"
            ],
            answer:
                "Time (t)",
            explanation:
                "Horizontal and vertical motions occur simultaneously, and time provides the common parameter connecting their equations."
        },

        {
            id: 7,
            question:
                "What is the vertical velocity (vᵧ) at the very top of a projectile's path?",
            options: [
                "Maximum",
                "Equal to u cosθ",
                "Zero",
                "-9.8 m/s"
            ],
            answer:
                "Zero",
            explanation:
                "At the highest point, the projectile momentarily stops moving upward, so its vertical velocity is zero."
        },

        {
            id: 8,
            question:
                "What is the formula for the time taken to reach the top (tᵤₚ) for a level-ground projectile?",
            options: [
                "u sinθ / g",
                "2u sinθ / g",
                "u² sinθ / 2g",
                "g / (u sinθ)"
            ],
            answer:
                "u sinθ / g",
            explanation:
                "At maximum height vᵧ = 0. Using vᵧ = u sinθ − gt gives tᵤₚ = u sinθ / g."
        },

        {
            id: 9,
            question:
                "What is the formula for the total time of flight (T) on level ground?",
            options: [
                "u sinθ / g",
                "2u sinθ / g",
                "u² sin2θ / g",
                "√(2h/g)"
            ],
            answer:
                "2u sinθ / g",
            explanation:
                "For a projectile that lands at the same height from which it was launched, the total flight time is T = 2u sinθ / g."
        },

        {
            id: 10,
            question:
                "What is the formula for the maximum height (H) of a level-ground projectile?",
            options: [
                "u² sin²θ / 2g",
                "u sinθ / g",
                "u² sin2θ / g",
                "2u² sinθ / g"
            ],
            answer:
                "u² sin²θ / 2g",
            explanation:
                "The maximum height is H = u² sin²θ / 2g, obtained from the vertical motion equation."
        },

        {
            id: 11,
            question:
                "What is the formula for the horizontal range (R) of a projectile on level ground?",
            options: [
                "u cosθ / g",
                "u² sin²θ / g",
                "u² sin2θ / g",
                "2u sinθ / g"
            ],
            answer:
                "u² sin2θ / g",
            explanation:
                "For level-ground projectile motion, the horizontal range is R = u² sin2θ / g."
        },

        {
            id: 12,
            question:
                "Why do complementary angles such as 30° and 60° yield the same horizontal range?",
            options: [
                "Because their cosine values are equal",
                "Because sin2θ = sin(180° − 2θ)",
                "Because gravity cancels out at those angles",
                "Because the flight time is identical"
            ],
            answer:
                "Because sin2θ = sin(180° − 2θ)",
            explanation:
                "Complementary angles produce supplementary double angles, and supplementary angles have equal sine values."
        },

        {
            id: 13,
            question:
                "Which launch angle gives the maximum range on level ground?",
            options: [
                "30°",
                "45°",
                "60°",
                "90°"
            ],
            answer:
                "45°",
            explanation:
                "Range is proportional to sin2θ, which reaches its maximum value of 1 when 2θ = 90°, giving θ = 45°."
        },

        {
            id: 14,
            question:
                "What equation represents the path equation (trajectory) of a projectile?",
            options: [
                "y = x tanθ − gx² / (2u² cos²θ)",
                "y = ut − ½gt²",
                "R = u² sin2θ / g",
                "vᵧ = u sinθ − gt"
            ],
            answer:
                "y = x tanθ − gx² / (2u² cos²θ)",
            explanation:
                "Eliminating time between the horizontal and vertical displacement equations gives the parabolic trajectory equation."
        },

        {
            id: 15,
            question:
                "For an object thrown horizontally from a height h, what determines the total fall time?",
            options: [
                "Only the horizontal speed u",
                "Only the height h",
                "Both mass and height",
                "The launch angle"
            ],
            answer:
                "Only the height h",
            explanation:
                "For horizontal projection, the initial vertical velocity is zero and the fall time is determined by h and g, not the horizontal speed."
        },

        {
            id: 16,
            question:
                "What formula calculates the fall time t for a horizontal projection from a height h?",
            options: [
                "t = h / g",
                "t = √(h/g)",
                "t = √(2h/g)",
                "t = 2h / u"
            ],
            answer:
                "t = √(2h/g)",
            explanation:
                "The vertical displacement equation is h = ½gt², giving t = √(2h/g)."
        },

        {
            id: 17,
            question:
                "What is the vertical speed on impact (vᵧ) for an object thrown horizontally from height h after time t?",
            options: [
                "gt",
                "½gt²",
                "u cosθ",
                "√(2gh)"
            ],
            answer:
                "gt",
            explanation:
                "Since the initial vertical velocity is zero, the vertical velocity after time t is vᵧ = gt downward."
        },

        {
            id: 18,
            question:
                "If one ball is dropped and another is thrown horizontally from the exact same height, which lands first?",
            options: [
                "The dropped ball",
                "The horizontally thrown ball",
                "They land at the exact same time",
                "Whichever has greater mass"
            ],
            answer:
                "They land at the exact same time",
            explanation:
                "Both balls have the same initial vertical velocity and experience the same gravitational acceleration, so they fall for the same time."
        },

        {
            id: 19,
            question:
                "At the very top of a projectile's flight, what is its acceleration?",
            options: [
                "Zero",
                "9.8 m/s² downward",
                "Equal to horizontal velocity",
                "Maximum upward acceleration"
            ],
            answer:
                "9.8 m/s² downward",
            explanation:
                "The vertical velocity is zero at the top, but gravity continues to act. Therefore acceleration remains approximately 9.8 m/s² downward."
        },

        {
            id: 20,
            question:
                "Which of the following is a common mistake in projectile motion problems?",
            options: [
                "Resolving vectors into components",
                "Using the standard level-ground range formula for a cliff or roof problem",
                "Checking calculator modes",
                "Treating horizontal and vertical motions independently"
            ],
            answer:
                "Using the standard level-ground range formula for a cliff or roof problem",
            explanation:
                "The level-ground range formula assumes equal launch and landing heights. It cannot be used directly when the projectile lands at a different height."
        },


        /* =====================================
           PART B — CIRCULAR MOTION
        ===================================== */

        {
            id: 21,
            question:
                "What defines uniform circular motion?",
            options: [
                "Motion along a circle at constant velocity",
                "Motion along a circle at constant speed",
                "Motion along a straight line with changing acceleration",
                "Motion with zero acceleration"
            ],
            answer:
                "Motion along a circle at constant speed",
            explanation:
                "Uniform circular motion has constant speed, although the velocity changes continuously because its direction changes."
        },

        {
            id: 22,
            question:
                "Even though speed is constant in uniform circular motion, why is there acceleration?",
            options: [
                "Because the magnitude of velocity changes continuously",
                "Because the direction of velocity changes continuously",
                "Because mass increases with rotation speed",
                "Because gravity pulls outward"
            ],
            answer:
                "Because the direction of velocity changes continuously",
            explanation:
                "Acceleration is the rate of change of velocity. Even at constant speed, continuously changing direction means the velocity changes."
        },

        {
            id: 23,
            question:
                "How do you convert revolutions per minute (rpm) to radians per second (ω)?",
            options: [
                "Multiply by π / 180",
                "Multiply by 2π / 60",
                "Divide by 60",
                "Multiply by 60 / 2π"
            ],
            answer:
                "Multiply by 2π / 60",
            explanation:
                "One revolution equals 2π radians and one minute equals 60 seconds, so rpm × 2π/60 gives rad/s."
        },

        {
            id: 24,
            question:
                "What is the formula relating arc length s, radius r, and angular displacement θ in radians?",
            options: [
                "s = r / θ",
                "s = θ / r",
                "s = rθ",
                "s = r²θ"
            ],
            answer:
                "s = rθ",
            explanation:
                "For angular displacement measured in radians, arc length is s = rθ."
        },

        {
            id: 25,
            question:
                "What does the period (T) represent in rotational motion?",
            options: [
                "The number of revolutions per second",
                "The time for one complete revolution",
                "The angle swept out per second",
                "The tangential distance traveled"
            ],
            answer:
                "The time for one complete revolution",
            explanation:
                "The period is the time required for one complete cycle or revolution."
        },

        {
            id: 26,
            question:
                "What is the SI unit for frequency (f)?",
            options: [
                "Radians",
                "Meters per second",
                "Hertz (Hz)",
                "Revolutions per minute"
            ],
            answer:
                "Hertz (Hz)",
            explanation:
                "Frequency is measured in hertz, where 1 Hz represents one cycle per second."
        },

        {
            id: 27,
            question:
                "What is the relationship between frequency (f) and period (T)?",
            options: [
                "f = T²",
                "f = 1/T",
                "f = 2πT",
                "f = T / 2π"
            ],
            answer:
                "f = 1/T",
            explanation:
                "Frequency is the reciprocal of the period: f = 1/T."
        },

        {
            id: 28,
            question:
                "Which of the following is NOT a correct formula for centripetal acceleration (a_c)?",
            options: [
                "v² / r",
                "ω²r",
                "4π²r / T²",
                "mr / ω²"
            ],
            answer:
                "mr / ω²",
            explanation:
                "Centripetal acceleration is a_c = v²/r = ω²r = 4π²r/T². The expression mr/ω² does not have the correct form."
        },

        {
            id: 29,
            question:
                "Where does centripetal acceleration always point?",
            options: [
                "Tangent to the circle",
                "Toward the center of the circle",
                "Away from the center of the circle",
                "Vertically upward"
            ],
            answer:
                "Toward the center of the circle",
            explanation:
                "Centripetal acceleration is directed radially inward toward the center of the circular path."
        },

        {
            id: 30,
            question:
                "What real force supplies the centripetal force for a stone whirled on a string?",
            options: [
                "Gravity",
                "Friction",
                "Tension in the string",
                "Normal force"
            ],
            answer:
                "Tension in the string",
            explanation:
                "For a stone moving in a horizontal circle on a string, the inward tension provides the required centripetal force."
        },

        {
            id: 31,
            question:
                "What real force supplies the centripetal force for a car traveling along a flat, unbanked curved road?",
            options: [
                "Normal force",
                "Friction between tyres and road",
                "Air resistance",
                "Engine thrust"
            ],
            answer:
                "Friction between tyres and road",
            explanation:
                "Static friction between the tyres and road acts toward the center of the curve and supplies the centripetal force."
        },

        {
            id: 32,
            question:
                "What real force supplies the centripetal force for a satellite orbiting Earth?",
            options: [
                "Electrostatic attraction",
                "Tension",
                "Gravitational attraction",
                "Normal force"
            ],
            answer:
                "Gravitational attraction",
            explanation:
                "Earth's gravitational attraction provides the inward force required for orbital motion."
        },

        {
            id: 33,
            question:
                "Is centrifugal force a real outward force acting on an object in an inertial reference frame?",
            options: [
                "Yes, it pulls objects outward",
                "No, it is a perceived sensation due to inertia when a frame turns",
                "Yes, it balances gravity",
                "Yes, it equals mg"
            ],
            answer:
                "No, it is a perceived sensation due to inertia when a frame turns",
            explanation:
                "In an inertial reference frame there is no real outward centrifugal force. The apparent outward effect is associated with inertia or with using a rotating reference frame."
        },

        {
            id: 34,
            question:
                "What is the formula for the maximum safe speed on a flat unbanked curve?",
            options: [
                "√(μrg)",
                "μrg",
                "√(rg/μ)",
                "v² / rg"
            ],
            answer:
                "√(μrg)",
            explanation:
                "At the limiting speed, friction provides the centripetal force: μmg = mv²/r, giving vₘₐₓ = √(μrg)."
        },

        {
            id: 35,
            question:
                "What is the formula for the ideal banking angle of a curve where no friction is needed?",
            options: [
                "sinθ = rg / v²",
                "tanθ = v² / (rg)",
                "cosθ = v / rg",
                "tanθ = rg / v"
            ],
            answer:
                "tanθ = v² / (rg)",
            explanation:
                "For ideal banking without friction, resolving the normal force gives tanθ = v²/(rg)."
        },

        {
            id: 36,
            question:
                "According to satellite orbital formulas, what happens to orbital speed as orbital radius increases?",
            options: [
                "It increases",
                "It remains constant",
                "It decreases",
                "It drops immediately to zero"
            ],
            answer:
                "It decreases",
            explanation:
                "For a circular orbit, v = √(GM/r), so orbital speed decreases as orbital radius increases."
        },

        {
            id: 37,
            question:
                "At the very top of a vertical circle, what is the correct equation relating tension T, weight mg, mass m, speed v, and radius r?",
            options: [
                "T − mg = mv²/r",
                "T + mg = mv²/r",
                "mg − T = mv²/r",
                "T = mv²/r"
            ],
            answer:
                "T + mg = mv²/r",
            explanation:
                "At the top of the circle, both tension and weight act toward the center, so their sum provides the centripetal force."
        },

        {
            id: 38,
            question:
                "At the bottom of a vertical circle, what is the correct force equation?",
            options: [
                "T + mg = mv²/r",
                "T − mg = mv²/r",
                "mg − T = mv²/r",
                "T = mg"
            ],
            answer:
                "T − mg = mv²/r",
            explanation:
                "At the bottom, tension acts toward the center while weight acts away from the center, so T − mg = mv²/r."
        },

        {
            id: 39,
            question:
                "What is the minimum speed at the top of a vertical circle for a string to stay taut?",
            options: [
                "√(2gr)",
                "√(gr)",
                "√(5gr)",
                "gr"
            ],
            answer:
                "√(gr)",
            explanation:
                "At the minimum speed the tension becomes zero at the top, so mg = mv²/r, giving v = √(gr)."
        },

        {
            id: 40,
            question:
                "Does centripetal force perform work on an object in uniform circular motion?",
            options: [
                "Yes, it continuously increases kinetic energy",
                "Yes, it matches the work done by gravity",
                "No, because the force is perpendicular to the velocity",
                "No, unless the object is on a banked curve"
            ],
            answer:
                "No, because the force is perpendicular to the velocity",
            explanation:
                "In uniform circular motion, centripetal force is perpendicular to the instantaneous velocity, so its work done is zero."
        }

    ]

};


/* =========================================
COMPLETION LOCK
========================================= */

const COMPLETION_KEY =
    `conquerorsLabs_PHY101_completed_v${QUIZ_CONFIG.quizVersion}`;


/* =========================================
RESULT ID
========================================= */

const RESULT_ID_KEY =
    `conquerorsLabs_PHY101_result_id_v${QUIZ_CONFIG.quizVersion}`;


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

let timerInterval = null;

let quizSubmitted = false;

let pendingSubmission = false;


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

const nameModal =
    document.getElementById("nameModal");

const studentNameInput =
    document.getElementById("studentNameInput");

const nameError =
    document.getElementById("nameError");

const cancelNameBtn =
    document.getElementById("cancelNameBtn");

const continueNameBtn =
    document.getElementById("continueNameBtn");


/* =========================================
INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        quizTitle.textContent =
            QUIZ_CONFIG.title;


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

    if (
        quizSubmitted ||
        pendingSubmission
    ) {

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

                    if (pendingSubmission)
                        return;

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

    clearInterval(
        timerInterval
    );


    updateTimerDisplay();


    timerInterval =
        setInterval(
            () => {

                if (
                    quizSubmitted ||
                    pendingSubmission
                ) {

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

        if (
            quizSubmitted ||
            pendingSubmission
        ) {

            return;

        }


        const unanswered =
            answers.filter(
                answer => answer === null
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

    if (
        quizSubmitted ||
        pendingSubmission
    ) {

        return;

    }


    alert(
        "Time is up! Your CBT will now be submitted."
    );


    submitQuiz();

}


/* =========================================
SUBMIT QUIZ
========================================= */

function submitQuiz() {

    if (
        quizSubmitted ||
        pendingSubmission
    ) {

        return;

    }


    pendingSubmission = true;


    clearInterval(
        timerInterval
    );


    openNameModal();

}


/* =========================================
OPEN NAME MODAL
========================================= */

function openNameModal() {

    nameError.classList.add(
        "hidden"
    );


    studentNameInput.value =
        "";


    nameModal.classList.remove(
        "hidden"
    );


    setTimeout(
        () => {

            studentNameInput.focus();

        },
        100
    );

}


/* =========================================
CANCEL NAME
========================================= */

cancelNameBtn.addEventListener(
    "click",
    () => {

        nameModal.classList.add(
            "hidden"
        );


        pendingSubmission = false;


        if (
            timeRemaining > 0 &&
            !quizSubmitted
        ) {

            startTimer();

        }

    }
);


/* =========================================
CONTINUE NAME
========================================= */

continueNameBtn.addEventListener(
    "click",
    () => {

        processNameSubmission();

    }
);


/* =========================================
ENTER KEY
========================================= */

studentNameInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            processNameSubmission();

        }

    }
);


/* =========================================
PROCESS NAME SUBMISSION
========================================= */

async function processNameSubmission() {

    const studentName =
        studentNameInput.value.trim();


    if (!studentName) {

        nameError.textContent =
            "Please enter your name.";

        nameError.classList.remove(
            "hidden"
        );

        studentNameInput.focus();

        return;

    }


    if (studentName.length < 2) {

        nameError.textContent =
            "Please enter at least 2 characters.";

        nameError.classList.remove(
            "hidden"
        );

        studentNameInput.focus();

        return;

    }


    continueNameBtn.disabled =
        true;

    continueNameBtn.textContent =
        "SAVING...";


    let correct = 0;

    let wrong = 0;

    let unanswered = 0;


    questions.forEach(
        (question, index) => {

            const userAnswer =
                answers[index];


            if (
                userAnswer === null
            ) {

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


    const qualifiedForLeaderboard =
        percentage >=
        QUIZ_CONFIG.passMark;


    const resultId =
        await saveQuizResult(
            studentName,
            correct,
            total,
            percentage,
            qualifiedForLeaderboard
        );


    if (!resultId) {

        continueNameBtn.disabled =
            false;

        continueNameBtn.textContent =
            "CONTINUE";

        return;

    }


    localStorage.setItem(
        RESULT_ID_KEY,
        resultId
    );


    quizSubmitted =
        true;

    pendingSubmission =
        false;


    clearInterval(
        timerInterval
    );


    if (
        !QUIZ_CONFIG.allowRetake
    ) {

        localStorage.setItem(
            COMPLETION_KEY,
            "true"
        );

    }


    nameModal.classList.add(
        "hidden"
    );


    continueNameBtn.disabled =
        false;

    continueNameBtn.textContent =
        "CONTINUE";


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


    const leaderboardSettings =
        await getLeaderboardSettings();


    if (!leaderboardSettings) {

        showLockedResult(
            "Your quiz was submitted successfully, but the leaderboard is temporarily unavailable."
        );

        return;

    }


    const leaderboardIsEnabled =
        leaderboardSettings.leaderboard_enabled === true ||
        leaderboardSettings.leaderboard_enabled === "true";


    if (!leaderboardIsEnabled) {

        showLockedResult(
            "Your quiz has been submitted successfully. Your result and leaderboard position are currently locked. Results will be available when the leaderboard is opened."
        );

        return;

    }


    resultMessage.textContent =
        getResultMessage(
            percentage
        );


    showResults();

}


/* =========================================
SAVE QUIZ RESULT
========================================= */

async function saveQuizResult(
    studentName,
    score,
    totalQuestions,
    percentage,
    qualifiedForLeaderboard
) {

    try {

        const {
            data,
            error
        } =
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
                        totalQuestions,

                    p_percentage:
                        percentage,

                    p_qualified_for_leaderboard:
                        qualifiedForLeaderboard
                }
            );


        if (error) {

            console.error(
                "Quiz result save error:",
                error
            );


            alert(
                "Your result could not be saved. Please check your internet connection and try again."
            );


            return null;

        }


        if (!data) {

            console.error(
                "Quiz result save error: No result ID returned."
            );


            alert(
                "Your result could not be saved correctly. Please try again."
            );


            return null;

        }


        return data;

    } catch (error) {

        console.error(
            "Quiz result JavaScript error:",
            error
        );


        alert(
            "Something went wrong while saving your result."
        );


        return null;

    }

}


/* =========================================
GET LEADERBOARD SETTINGS
========================================= */

async function getLeaderboardSettings() {

    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from(
                    "leaderboard_settings"
                )
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
SHOW RESULTS
========================================= */

function showResults() {

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
SHOW LOCKED RESULT
========================================= */

function showLockedResult(message) {

    questionArea.classList.add(
        "hidden"
    );

    navigatorCard.classList.add(
        "hidden"
    );

    submitBtn.classList.add(
        "hidden"
    );


    resultScore.classList.add(
        "hidden"
    );

    resultPercentage.classList.add(
        "hidden"
    );


    correctCount
        .closest(".result-stats")
        .classList.add(
            "hidden"
        );


    resultSection
        .querySelector(".result-icon")
        .classList.add(
            "hidden"
        );


    resultSection
        .querySelector(".result-label")
        .classList.add(
            "hidden"
        );


    reviewBtn.classList.add(
        "hidden"
    );


    retakeBtn.classList.add(
        "hidden"
    );


    reviewSection.classList.add(
        "hidden"
    );


    resultMessage.textContent =
        message;


    resultSection.classList.remove(
        "hidden"
    );


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

    if (
        percentage >= 90
    ) {

        return "Outstanding! You absolutely conquered this PHY 101 set. ⚡🔥";

    }


    if (
        percentage >= 80
    ) {

        return "Excellent performance! Your understanding of projectile and circular motion is strong. ⚡";

    }


    if (
        percentage >= 70
    ) {

        return "Great job! You have a solid grasp of the concepts. Keep sharpening your calculations.";

    }


    if (
        percentage >= 60
    ) {

        return "Good attempt. Review the corrections carefully and lock in the formulas.";

    }


    if (
        percentage >= 50
    ) {

        return "You have a foundation to build on. Study the corrections and attack the weak areas.";

    }


    return "This is your starting point. Review every correction, rebuild the concepts, and come back stronger.";

}


/* =========================================
REVIEW
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


            const yourLabel =
                document.createElement("strong");

            yourLabel.textContent =
                "Your answer: ";


            yourAnswer.appendChild(
                yourLabel
            );


            yourAnswer.appendChild(
                document.createTextNode(
                    userAnswer ??
                    "Not answered"
                )
            );


            const correctAnswer =
                document.createElement("div");

            correctAnswer.className =
                "review-answer";


            const correctLabel =
                document.createElement("strong");

            correctLabel.textContent =
                "Correct answer: ";


            correctAnswer.appendChild(
                correctLabel
            );


            correctAnswer.appendChild(
                document.createTextNode(
                    question.answer
                )
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
