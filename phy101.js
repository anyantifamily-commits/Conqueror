
/* =========================================
CONQUERORS LABS
PHY 101 CBT
========================================= */

/* =========================================
QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {

    title:
        "PHY 101-- Motion",

    /* NEW QUESTION SET VERSION */
    quizVersion:
        3,

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

    // SECTION 1 — FOUNDATIONS, SCALARS & VECTORS

    {
        id: 1,
        question: "A person walks 50 m due West and then 120 m due North in 100 s. What are the total distance and displacement magnitude?",
        options: [
            "Distance = 170 m, Displacement = 130 m",
            "Distance = 130 m, Displacement = 170 m",
            "Distance = 170 m, Displacement = 70 m",
            "Distance = 70 m, Displacement = 130 m"
        ],
        answer: "Distance = 170 m, Displacement = 130 m",
        explanation: "Distance = 50 + 120 = 170 m. The perpendicular displacement components give √(50² + 120²) = 130 m."
    },
    {
        id: 2,
        question: "An athlete runs around a rectangular track measuring 100 m by 50 m. She completes two full laps and ends at her starting point in 120 s. What are her total displacement and average velocity?",
        options: [
            "Displacement = 600 m, Average velocity = 5 m/s",
            "Displacement = 300 m, Average velocity = 2.5 m/s",
            "Displacement = 0 m, Average velocity = 0 m/s",
            "Displacement = 0 m, Average velocity = 5 m/s"
        ],
        answer: "Displacement = 0 m, Average velocity = 0 m/s",
        explanation: "Returning to the starting point means displacement is zero. Average velocity equals displacement divided by time, so it is 0/120 = 0 m/s."
    },
    {
        id: 3,
        question: "Which group contains ONLY vector quantities?",
        options: [
            "Speed, Distance, Time",
            "Displacement, Velocity, Acceleration",
            "Distance, Velocity, Acceleration",
            "Speed, Displacement, Acceleration"
        ],
        answer: "Displacement, Velocity, Acceleration",
        explanation: "Displacement, velocity and acceleration have both magnitude and direction. Speed, distance and time are scalars."
    },
    {
        id: 4,
        question: "A driver travels 150 km. The first 75 km is travelled at 50 km/h and the second 75 km at 75 km/h. What is the average speed?",
        options: [
            "62.5 km/h",
            "60.0 km/h",
            "58.3 km/h",
            "65.0 km/h"
        ],
        answer: "60.0 km/h",
        explanation: "Time = 75/50 + 75/75 = 1.5 + 1 = 2.5 h. Average speed = 150/2.5 = 60 km/h."
    },
    {
        id: 5,
        question: "Converting 108 km/h into m/s yields:",
        options: [
            "25 m/s",
            "30 m/s",
            "36 m/s",
            "388.8 m/s"
        ],
        answer: "30 m/s",
        explanation: "Convert km/h to m/s by multiplying by 5/18: 108 × 5/18 = 30 m/s."
    },

    // SECTION 2 — ACCELERATION & SIGN CONVENTIONS

    {
        id: 6,
        question: "A sports car accelerates uniformly from rest to 28 m/s in 7 s. What is its acceleration?",
        options: [
            "2 m/s²",
            "4 m/s²",
            "196 m/s²",
            "0.25 m/s²"
        ],
        answer: "4 m/s²",
        explanation: "Acceleration = (v − u)/t = (28 − 0)/7 = 4 m/s²."
    },
    {
        id: 7,
        question: "A train moving at 35 m/s brakes to a complete halt in 10 s. What is its acceleration?",
        options: [
            "+3.5 m/s²",
            "−3.5 m/s²",
            "−0.28 m/s²",
            "+350 m/s²"
        ],
        answer: "−3.5 m/s²",
        explanation: "Taking the initial direction as positive, a = (0 − 35)/10 = −3.5 m/s²."
    },
    {
        id: 8,
        question: "An object has negative velocity (v < 0) and negative acceleration (a < 0). What happens to its motion?",
        options: [
            "It slows down while moving backward",
            "It speeds up while moving backward",
            "It slows down while moving forward",
            "It speeds up while moving forward"
        ],
        answer: "It speeds up while moving backward",
        explanation: "Velocity and acceleration have the same sign, so the object's speed increases. The negative velocity indicates motion in the negative direction."
    },

    // SECTION 3 — GRAPHS OF MOTION

    {
        id: 9,
        question: "The slope of a position-time (x-t) graph represents:",
        options: [
            "Acceleration",
            "Distance",
            "Velocity",
            "Displacement"
        ],
        answer: "Velocity",
        explanation: "The slope of a position-time graph is change in position divided by change in time, which is average velocity."
    },
    {
        id: 10,
        question: "What does the signed area under a velocity-time (v-t) graph represent?",
        options: [
            "Acceleration",
            "Speed",
            "Displacement",
            "Rate of change of acceleration"
        ],
        answer: "Displacement",
        explanation: "Integrating velocity over time gives displacement. Areas below the time axis contribute negative displacement."
    },
    {
        id: 11,
        question: "A body accelerates from rest to 12 m/s in 3 s, moves at 12 m/s for 5 s, then decelerates uniformly to rest in 2 s. What is its total displacement?",
        options: [
            "90 m",
            "72 m",
            "60 m",
            "84 m"
        ],
        answer: "90 m",
        explanation: "The v-t graph areas are ½(3)(12) = 18 m, (5)(12) = 60 m, and ½(2)(12) = 12 m. Total displacement = 18 + 60 + 12 = 90 m."
    },
    {
        id: 12,
        question: "The signed area under an acceleration-time (a-t) graph gives:",
        options: [
            "Total displacement",
            "Change in velocity",
            "Instantaneous speed",
            "Average position"
        ],
        answer: "Change in velocity",
        explanation: "Integrating acceleration over time gives the change in velocity, Δv."
    },

    // SECTION 4 — SUVAT EQUATIONS

    {
        id: 13,
        question: "A bus starts from rest and accelerates uniformly at 1.5 m/s² for 12 s. How far does it travel?",
        options: [
            "18 m",
            "108 m",
            "216 m",
            "54 m"
        ],
        answer: "108 m",
        explanation: "Using s = ut + ½at², with u = 0: s = ½(1.5)(12²) = 108 m."
    },
    {
        id: 14,
        question: "A car travelling at 30 m/s brakes uniformly to rest over 90 m. What is the magnitude of its deceleration?",
        options: [
            "5 m/s²",
            "10 m/s²",
            "3.33 m/s²",
            "15 m/s²"
        ],
        answer: "5 m/s²",
        explanation: "Using v² = u² + 2as: 0 = 30² + 2a(90), so a = −5 m/s². The deceleration magnitude is 5 m/s²."
    },
    {
        id: 15,
        question: "An airplane accelerates from 40 m/s to 100 m/s over 1,400 m. How long does this take under constant acceleration?",
        options: [
            "14 s",
            "20 s",
            "28 s",
            "35 s"
        ],
        answer: "20 s",
        explanation: "For constant acceleration, average velocity = (u + v)/2 = 70 m/s. Therefore t = s/average velocity = 1400/70 = 20 s."
    },
    {
        id: 16,
        question: "A particle starts from rest with constant acceleration 4 m/s². What distance does it travel during the fourth second only?",
        options: [
            "32 m",
            "18 m",
            "14 m",
            "16 m"
        ],
        answer: "14 m",
        explanation: "The distance in the fourth second is s(4) − s(3). Since s = ½at², this is 2(16) − 2(9) = 32 − 18 = 14 m."
    },
    {
        id: 17,
        question: "Car X passes stationary Car Y at 15 m/s. At that instant, Y starts from rest and accelerates at 3 m/s². How long until Y catches X?",
        options: [
            "5 s",
            "10 s",
            "15 s",
            "20 s"
        ],
        answer: "10 s",
        explanation: "Their displacements from the meeting point are 15t for X and ½(3)t² = 1.5t² for Y. Equating them gives t(1.5t − 15) = 0, so the later meeting occurs at t = 10 s."
    },
    {
        id: 18,
        question: "Which SUVAT equation is useful when acceleration is neither given nor required?",
        options: [
            "v = u + at",
            "s = ut + ½at²",
            "s = ½(u + v)t",
            "v² = u² + 2as"
        ],
        answer: "s = ½(u + v)t",
        explanation: "This equation relates displacement, initial velocity, final velocity and time without requiring acceleration."
    },

    // SECTION 5 — FREE FALL

    {
        id: 19,
        question: "A stone is dropped from rest and hits the ground after 5 s. Taking g = 9.8 m/s², how tall is the tower?",
        options: [
            "49 m",
            "122.5 m",
            "245 m",
            "98 m"
        ],
        answer: "122.5 m",
        explanation: "For a dropped object, h = ½gt² = ½(9.8)(5²) = 122.5 m."
    },
    {
        id: 20,
        question: "A ball is thrown vertically upward at 29.4 m/s. Taking g = 9.8 m/s², what is its maximum height above its launch point?",
        options: [
            "44.1 m",
            "88.2 m",
            "29.4 m",
            "14.7 m"
        ],
        answer: "44.1 m",
        explanation: "At maximum height v = 0. Using v² = u² − 2gh gives h = u²/(2g) = 29.4²/19.6 = 44.1 m."
    },
    {
        id: 21,
        question: "An object is thrown upward from a 50 m cliff at 20 m/s. Taking g = 9.8 m/s² and upward as positive, which equation models its position when it reaches the ground?",
        options: [
            "4.9t² − 20t − 50 = 0",
            "4.9t² + 20t − 50 = 0",
            "9.8t² − 20t + 50 = 0",
            "4.9t² − 20t + 50 = 0"
        ],
        answer: "4.9t² − 20t − 50 = 0",
        explanation: "Relative to the launch point, the ground is at s = −50 m. Using s = ut − ½gt² gives −50 = 20t − 4.9t², which rearranges to 4.9t² − 20t − 50 = 0."
    },
    {
        id: 22,
        question: "A ball dropped from rest from height h hits the ground with speed v. If it is dropped from height 4h, what is its impact speed?",
        options: [
            "2v",
            "4v",
            "8v",
            "16v"
        ],
        answer: "2v",
        explanation: "From v² = 2gh, impact speed is proportional to √h. Increasing the height to 4h doubles the speed."
    },
    {
        id: 23,
        question: "At the maximum height of a vertically projected object's trajectory, its velocity and acceleration are respectively:",
        options: [
            "v = 0, a = 0",
            "v = 0, a = 9.8 m/s² downward",
            "v = 9.8 m/s, a = 0",
            "v = 9.8 m/s, a = 9.8 m/s² downward"
        ],
        answer: "v = 0, a = 9.8 m/s² downward",
        explanation: "The vertical velocity is momentarily zero at the top, but gravitational acceleration remains approximately 9.8 m/s² downward."
    },

    // SECTION 6 — CALCULUS OF MOTION

    {
        id: 24,
        question: "The position of a particle is x(t) = 4t³ − 5t² + 3t − 2. What is its acceleration at t = 2 s?",
        options: [
            "38 m/s²",
            "24 m/s²",
            "38 m/s",
            "19 m/s²"
        ],
        answer: "38 m/s²",
        explanation: "Differentiate position twice: v(t) = 12t² − 10t + 3 and a(t) = 24t − 10. At t = 2 s, a = 48 − 10 = 38 m/s²."
    },
    {
        id: 25,
        question: "A particle has velocity v(t) = 6t² − 4t + 1. If x(0) = 3 m, what is its position at t = 3 s?",
        options: [
            "36 m",
            "39 m",
            "42 m",
            "27 m"
        ],
        answer: "42 m",
        explanation: "Integrating velocity gives x(t) = 2t³ − 2t² + t + C. Since x(0) = 3, C = 3. Thus x(3) = 54 − 18 + 3 + 3 = 42 m."
    },
    {
        id: 26,
        question: "An object's acceleration is a(t) = 12t − 6. If v(0) = 5 m/s and x(0) = 0 m, what is its position at t = 2 s?",
        options: [
            "14 m",
            "10 m",
            "22 m",
            "18 m"
        ],
        answer: "14 m",
        explanation: "Integrating acceleration gives v(t) = 6t² − 6t + 5. Integrating again gives x(t) = 2t³ − 3t² + 5t, using x(0) = 0. Hence x(2) = 16 − 12 + 10 = 14 m."
    },
    {
        id: 27,
        question: "Find the displacement from t = 1 s to t = 4 s if v(t) = 3t² + 2t.",
        options: [
            "63 m",
            "78 m",
            "80 m",
            "24 m"
        ],
        answer: "78 m",
        explanation: "Displacement = ∫(3t² + 2t)dt from 1 to 4 = [t³ + t²]₁⁴ = (64 + 16) − (1 + 1) = 78 m."
    },
    {
        id: 28,
        question: "A particle's position is x(t) = t³ − 6t² + 9t. At what times is it momentarily at rest?",
        options: [
            "t = 0 s and t = 3 s",
            "t = 1 s and t = 3 s",
            "t = 2 s and t = 4 s",
            "t = 1 s and t = 6 s"
        ],
        answer: "t = 1 s and t = 3 s",
        explanation: "Velocity is v(t) = 3t² − 12t + 9 = 3(t − 1)(t − 3). Setting v = 0 gives t = 1 s and t = 3 s."
    },
    {
        id: 29,
        question: "To find acceleration from a velocity equation, and velocity from an acceleration equation, you must respectively:",
        options: [
            "Integrate; Differentiate",
            "Differentiate; Integrate",
            "Integrate; Integrate",
            "Differentiate; Differentiate"
        ],
        answer: "Differentiate; Integrate",
        explanation: "Acceleration is the derivative of velocity with respect to time. Velocity is obtained by integrating acceleration with respect to time, including an integration constant when needed."
    },

    // SECTION 7 — PROJECTILE MOTION

    {
        id: 30,
        question: "A projectile is launched at 40 m/s at 30° above the horizontal on level ground. Taking g = 9.8 m/s², what is its time of flight?",
        options: [
            "2.04 s",
            "4.08 s",
            "3.53 s",
            "8.16 s"
        ],
        answer: "4.08 s",
        explanation: "Time of flight T = 2u sinθ/g = 2(40)sin30°/9.8 = 40/9.8 ≈ 4.08 s."
    },
    {
        id: 31,
        question: "A package is thrown horizontally at 20 m/s from a 49 m cliff. Taking g = 9.8 m/s², how far from the base does it land?",
        options: [
            "31.6 m",
            "63.2 m",
            "100 m",
            "44.3 m"
        ],
        answer: "63.2 m",
        explanation: "Fall time t = √(2h/g) = √(98/9.8) = √10 ≈ 3.162 s. Horizontal distance = vt = 20√10 ≈ 63.2 m."
    },
    {
        id: 32,
        question: "A projectile launched at 35° on level ground achieves range R. Which other launch angle at the same speed gives the same range?",
        options: [
            "45°",
            "55°",
            "65°",
            "70°"
        ],
        answer: "55°",
        explanation: "For equal launch and landing heights, complementary launch angles give equal ranges. The complementary angle to 35° is 90° − 35° = 55°."
    },
    {
        id: 33,
        question: "At the highest point of a projectile's parabolic trajectory on level ground, its speed is equal to:",
        options: [
            "0",
            "u sinθ",
            "u cosθ",
            "u"
        ],
        answer: "u cosθ",
        explanation: "At the highest point, vertical velocity is zero while horizontal velocity remains u cosθ, so the speed is u cosθ."
    },
    {
        id: 34,
        question: "A cannonball is fired at 60° with a speed of 100 m/s on level ground. Taking g = 10 m/s², what is its maximum height?",
        options: [
            "125 m",
            "250 m",
            "375 m",
            "500 m"
        ],
        answer: "375 m",
        explanation: "Maximum height H = u²sin²θ/(2g) = 10000(3/4)/20 = 375 m."
    },

    // SECTION 8 — RELATIVE MOTION

    {
        id: 35,
        question: "Car A moves East at 80 km/h and Car B moves West at 50 km/h. What is the velocity of A relative to B?",
        options: [
            "30 km/h East",
            "130 km/h East",
            "30 km/h West",
            "130 km/h West"
        ],
        answer: "130 km/h East",
        explanation: "Taking East as positive, vA = +80 km/h and vB = −50 km/h. Relative velocity vA/B = vA − vB = 80 − (−50) = 130 km/h East."
    },
    {
        id: 36,
        question: "A boat crosses a 150 m wide river directly across at 5 m/s relative to still water. The current is 3.5 m/s. How far downstream does it drift?",
        options: [
            "105 m",
            "75 m",
            "150 m",
            "30 m"
        ],
        answer: "105 m",
        explanation: "Crossing time = 150/5 = 30 s. Downstream drift = current speed × time = 3.5 × 30 = 105 m."
    },
    {
        id: 37,
        question: "For a boat heading directly across a river, the time to cross depends only on:",
        options: [
            "The boat's speed in still water and the river current speed",
            "The width of the river and the river current speed",
            "The boat's speed in still water and the width of the river",
            "The resultant velocity vector magnitude only"
        ],
        answer: "The boat's speed in still water and the width of the river",
        explanation: "When the boat points directly across, its across-river velocity component equals its speed relative to still water. Crossing time is width divided by that component; the current affects downstream drift, not crossing time."
    },

    // SECTION 9 — UNIFORM CIRCULAR MOTION

    {
        id: 38,
        question: "A mass moves in a horizontal circle of radius 0.8 m, completing one revolution in 2 s. What is its centripetal acceleration approximately?",
        options: [
            "2.51 m/s²",
            "7.90 m/s²",
            "15.79 m/s²",
            "3.95 m/s²"
        ],
        answer: "7.90 m/s²",
        explanation: "Centripetal acceleration ac = 4π²r/T² = 4π²(0.8)/2² = 0.8π² ≈ 7.90 m/s²."
    },
    {
        id: 39,
        question: "A car travels at a constant speed of 20 m/s around a flat circular track of radius 100 m. What is its centripetal acceleration?",
        options: [
            "0 m/s²",
            "2 m/s²",
            "4 m/s²",
            "0.2 m/s²"
        ],
        answer: "4 m/s²",
        explanation: "Centripetal acceleration ac = v²/r = 20²/100 = 4 m/s²."
    },
    {
        id: 40,
        question: "In uniform circular motion, the angle between instantaneous velocity and centripetal acceleration is always:",
        options: [
            "0°",
            "45°",
            "90°",
            "180°"
        ],
        answer: "90°",
        explanation: "Instantaneous velocity is tangent to the circle while centripetal acceleration points toward its centre. These directions are perpendicular."
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
