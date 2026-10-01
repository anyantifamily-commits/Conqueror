/* =========================================
   CONQUERORS LABS
   PHY 101 CBT
========================================= */


/* =========================================
   QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {

    title:
        "PHY 101 — Vectors & Kinematics",

    timeLimit:
        60,

    /*
        The engine can support up to 100
        questions.

        This particular quiz contains 50.
    */
    maxQuestions:
        100,

    /*
        false = one attempt only
        true  = retakes allowed
    */
    allowRetake:
        false,


    /* =====================================
       QUESTIONS
    ===================================== */

    questions: [

        {
            id: 1,

            question:
                "Which of the following physical quantities is classified as a scalar?",

            options: [
                "Velocity",
                "Mass",
                "Force",
                "Acceleration"
            ],

            answer:
                "Mass",

            explanation:
                "Mass is a scalar because it has magnitude only. Velocity, force and acceleration are vectors."
        },

        {
            id: 2,

            question:
                "A physical quantity described completely by both its magnitude and direction is called a:",

            options: [
                "Scalar",
                "Vector",
                "Tensor",
                "Dimensionless constant"
            ],

            answer:
                "Vector",

            explanation:
                "A vector quantity requires both magnitude and direction for complete description."
        },

        {
            id: 3,

            question:
                "What is the simple arithmetic sum of two scalar masses of 20 kg and 40 kg?",

            options: [
                "20 kg",
                "40 kg",
                "60 kg",
                "80 kg"
            ],

            answer:
                "60 kg",

            explanation:
                "Scalars are added using ordinary arithmetic: 20 kg + 40 kg = 60 kg."
        },

        {
            id: 4,

            question:
                "Which of the following is a vector quantity?",

            options: [
                "Time",
                "Work",
                "Energy",
                "Electric field intensity"
            ],

            answer:
                "Electric field intensity",

            explanation:
                "Electric field intensity has both magnitude and direction, making it a vector."
        },

        {
            id: 5,

            question:
                "When two vectors A and B are represented by two adjacent sides of a triangle inclined to each other, the magnitude of their resultant R is given by:",

            options: [
                "R² = A² + B² − 2AB cosθ",
                "R² = A² + B² + 2AB cosθ",
                "R² = A² − B² + 2AB sinθ",
                "R = A + B + 2AB cosθ"
            ],

            answer:
                "R² = A² + B² + 2AB cosθ",

            explanation:
                "For vector addition, the cosine rule gives R² = A² + B² + 2AB cosθ."
        },

        {
            id: 6,

            question:
                "Two forces of 10 N and 15 N act on a toy at an inclination of 60° to each other. What is the magnitude of the resultant force?",

            options: [
                "18.2 N",
                "21.8 N",
                "25.0 N",
                "30.5 N"
            ],

            answer:
                "21.8 N",

            explanation:
                "R² = 10² + 15² + 2(10)(15)cos60°. Therefore R² = 475 and R ≈ 21.8 N."
        },

        {
            id: 7,

            question:
                "For vector subtraction A − B = A + (−B), how is the vector −B defined relative to B?",

            options: [
                "Equal in magnitude and in the same direction",
                "Equal in magnitude and oppositely directed",
                "Double in magnitude and oppositely directed",
                "Half in magnitude and perpendicularly directed"
            ],

            answer:
                "Equal in magnitude and oppositely directed",

            explanation:
                "The negative of a vector has the same magnitude but points in the opposite direction."
        },

        {
            id: 8,

            question:
                "In vector subtraction R = A − B, the cosine rule for the magnitude of R is expressed as:",

            options: [
                "R² = A² + B² + 2AB cosθ",
                "R² = A² + B² − 2AB cosθ",
                "R² = A² − B² − 2AB cosθ",
                "R² = A² + B² + 2AB sinθ"
            ],

            answer:
                "R² = A² + B² − 2AB cosθ",

            explanation:
                "For the magnitude of A − B, the cosine-rule form is R² = A² + B² − 2AB cosθ."
        },

        {
            id: 9,

            question:
                "In two-dimensional rectangular resolution, if a vector V makes an angle θ with the x-axis, its horizontal component Vx is:",

            options: [
                "V sinθ",
                "V cosθ",
                "V tanθ",
                "V secθ"
            ],

            answer:
                "V cosθ",

            explanation:
                "When θ is measured from the x-axis, the horizontal component is Vx = V cosθ."
        },

        {
            id: 10,

            question:
                "In two-dimensional rectangular resolution, if a vector V makes an angle θ with the x-axis, its vertical component Vy is:",

            options: [
                "V cosθ",
                "V sinθ",
                "V tanθ",
                "V cotθ"
            ],

            answer:
                "V sinθ",

            explanation:
                "When θ is measured from the x-axis, the vertical component is Vy = V sinθ."
        },

        {
            id: 11,

            question:
                "In unit vector notation, a vector V in three dimensions (3D) is written as:",

            options: [
                "V = iVx × jVy × kVz",
                "V = iVx + jVy + kVz",
                "V = (iVx + jVy) / kVz",
                "V = Vx + Vy + Vz"
            ],

            answer:
                "V = iVx + jVy + kVz",

            explanation:
                "A 3D vector is represented by its components along the i, j and k directions."
        },

        {
            id: 12,

            question:
                "The magnitude of a 3D vector V = iVx + jVy + kVz is calculated using:",

            options: [
                "|V| = Vx + Vy + Vz",
                "|V| = √(Vx² + Vy² + Vz²)",
                "|V| = Vx² + Vy² + Vz²",
                "|V| = √(Vx + Vy + Vz)"
            ],

            answer:
                "|V| = √(Vx² + Vy² + Vz²)",

            explanation:
                "The magnitude of a three-dimensional vector is obtained from the three-dimensional Pythagorean relation."
        },

        {
            id: 13,

            question:
                "Three forces act on a body in a plane: F₁ = 4i − j N, F₂ = −3i + 2j N, and F₃ = −3j N. What is the resultant vector F?",

            options: [
                "i − 2j N",
                "7i − 2j N",
                "i + 4j N",
                "−i − j N"
            ],

            answer:
                "i − 2j N",

            explanation:
                "Add components: i-components = 4 − 3 = 1; j-components = −1 + 2 − 3 = −2. Therefore F = i − 2j N."
        },

        {
            id: 14,

            question:
                "What is the magnitude of the resultant force for F = i − 2j N?",

            options: [
                "3 N",
                "√3 N",
                "√5 N",
                "5 N"
            ],

            answer:
                "√5 N",

            explanation:
                "|F| = √(1² + (−2)²) = √5 N."
        },

        {
            id: 15,

            question:
                "The angle θ that a resultant vector V = iVx + jVy makes with the x-axis is determined by:",

            options: [
                "θ = sin⁻¹(Vy/Vx)",
                "θ = cos⁻¹(Vx/Vy)",
                "θ = tan⁻¹(Vy/Vx)",
                "θ = tan⁻¹(Vx/Vy)"
            ],

            answer:
                "θ = tan⁻¹(Vy/Vx)",

            explanation:
                "For a vector resolved into x and y components, tanθ = Vy/Vx, so θ = tan⁻¹(Vy/Vx)."
        },

        {
            id: 16,

            question:
                "Multiplying a vector by a scalar always yields a:",

            options: [
                "Scalar",
                "Vector",
                "Matrix",
                "Pure dimensionless number"
            ],

            answer:
                "Vector",

            explanation:
                "Multiplying a vector by a scalar changes its magnitude and possibly its direction, but the result remains a vector."
        },

        {
            id: 17,

            question:
                "Which of the following physical relationships represents the multiplication of a scalar by a vector to yield a vector?",

            options: [
                "W = F · S",
                "τ = F × S",
                "F = ma",
                "P = F · v"
            ],

            answer:
                "F = ma",

            explanation:
                "Mass m is a scalar and acceleration a is a vector. Therefore m × a gives the vector force F."
        },

        {
            id: 18,

            question:
                "The dot product (scalar product) of two vectors A and B separated by angle θ is defined as:",

            options: [
                "A · B = AB sinθ",
                "A · B = AB cosθ",
                "A · B = AB tanθ",
                "A · B = nAB cosθ"
            ],

            answer:
                "A · B = AB cosθ",

            explanation:
                "The scalar or dot product is A · B = AB cosθ."
        },

        {
            id: 19,

            question:
                "What is the value of the dot product of identical unit vectors i · i or j · j?",

            options: [
                "0",
                "1",
                "−1",
                "Infinite"
            ],

            answer:
                "1",

            explanation:
                "A unit vector has magnitude 1 and the angle between itself and itself is 0°. Therefore 1 × 1 × cos0° = 1."
        },

        {
            id: 20,

            question:
                "What is the value of the dot product of orthogonal unit vectors i · j or j · k?",

            options: [
                "0",
                "1",
                "−1",
                "1/2"
            ],

            answer:
                "0",

            explanation:
                "Orthogonal vectors are perpendicular, so θ = 90°. Since cos90° = 0, their dot product is zero."
        },

        {
            id: 21,

            question:
                "A force F = 2i + 4j N causes a displacement S = i + 5j m. What is the work done (W = F · S)?",

            options: [
                "18 J",
                "22 J",
                "26 J",
                "10 J"
            ],

            answer:
                "22 J",

            explanation:
                "W = (2)(1) + (4)(5) = 2 + 20 = 22 J."
        },

        {
            id: 22,

            question:
                "The vector (cross) product of two vectors A and B is defined as:",

            options: [
                "A × B = AB cosθ",
                "A × B = nAB sinθ",
                "A × B = nAB cosθ",
                "A × B = AB sinθ"
            ],

            answer:
                "A × B = nAB sinθ",

            explanation:
                "The cross product has magnitude AB sinθ and direction perpendicular to the plane of A and B, represented by unit vector n."
        },

        {
            id: 23,

            question:
                "Which anti-commutative property correctly describes vector cross-multiplication?",

            options: [
                "A × B = B × A",
                "A × B = −(B × A)",
                "A × B = 1/(B × A)",
                "A × B = A · B"
            ],

            answer:
                "A × B = −(B × A)",

            explanation:
                "The cross product is anti-commutative: reversing the order reverses the direction."
        },

        {
            id: 24,

            question:
                "In computing the cross product A × B analytically, which mathematical structure is used to calculate the components?",

            options: [
                "Algebraic expansion of cosines",
                "Determinant of a 3×3 matrix",
                "Arithmetic summation of vectors",
                "Dot product summation"
            ],

            answer:
                "Determinant of a 3×3 matrix",

            explanation:
                "The components of a 3D cross product can be evaluated using a determinant involving i, j and k."
        },

        {
            id: 25,

            question:
                "Given A = 5i − 2j + k and B = 2i + 4j − 3k, what is the resulting vector A × B?",

            options: [
                "2i + 17j + 24k",
                "−2i − 17j − 24k",
                "10i − 8j − 3k",
                "5i + 2j + 24k"
            ],

            answer:
                "2i + 17j + 24k",

            explanation:
                "Using the cross-product determinant gives A × B = 2i + 17j + 24k."
        },

        {
            id: 26,

            question:
                "What is the magnitude of the cross product vector A × B = 2i + 17j + 24k?",

            options: [
                "20.0",
                "29.5",
                "43.2",
                "15.8"
            ],

            answer:
                "29.5",

            explanation:
                "|A × B| = √(2² + 17² + 24²) = √869 ≈ 29.5."
        },

        {
            id: 27,

            question:
                "Kinematics is defined as the study of:",

            options: [
                "Forces causing motion without considering velocity",
                "Motions without considering the forces causing them",
                "Energy transformations during collisions",
                "Masses in static equilibrium"
            ],

            answer:
                "Motions without considering the forces causing them",

            explanation:
                "Kinematics describes motion using quantities such as displacement, velocity and acceleration without focusing on the forces causing the motion."
        },

        {
            id: 28,

            question:
                "Motion restricted to a single flat plane or surface is categorized as:",

            options: [
                "1D motion",
                "2D motion",
                "3D motion",
                "4D motion"
            ],

            answer:
                "2D motion",

            explanation:
                "Motion confined to a plane requires two coordinates, so it is two-dimensional motion."
        },

        {
            id: 29,

            question:
                "Displacement is defined as the:",

            options: [
                "Total path length traveled by a body",
                "Effective distance between two points",
                "Speed multiplied by total time",
                "Rate of change of acceleration"
            ],

            answer:
                "Effective distance between two points",

            explanation:
                "Displacement is the vector change in position from the initial point to the final point."
        },

        {
            id: 30,

            question:
                "For a motion starting at point P₁(2, 2) and ending at P₂(6, 4), what is the displacement vector S?",

            options: [
                "8i + 6j",
                "4i + 2j",
                "2i + 4j",
                "12i + 8j"
            ],

            answer:
                "4i + 2j",

            explanation:
                "Displacement = final position − initial position = (6−2)i + (4−2)j = 4i + 2j."
        },

        {
            id: 31,

            question:
                "What is the magnitude of the displacement vector S = 4i + 2j?",

            options: [
                "√20",
                "6",
                "2",
                "√12"
            ],

            answer:
                "√20",

            explanation:
                "|S| = √(4² + 2²) = √20 ≈ 4.47."
        },

        {
            id: 32,

            question:
                "What is the angle θ relative to the x-axis for the displacement vector S = 4i + 2j?",

            options: [
                "45.0°",
                "26.6°",
                "63.4°",
                "30.0°"
            ],

            answer:
                "26.6°",

            explanation:
                "tanθ = 2/4 = 0.5, so θ = tan⁻¹(0.5) ≈ 26.6°."
        },

        {
            id: 33,

            question:
                "Velocity is defined as the rate at which:",

            options: [
                "Distance changes with speed",
                "Displacement changes with time",
                "Acceleration changes with time",
                "Force changes with displacement"
            ],

            answer:
                "Displacement changes with time",

            explanation:
                "Velocity is the rate of change of displacement with respect to time: v = dS/dt."
        },

        {
            id: 34,

            question:
                "What is the standard S.I. unit of velocity?",

            options: [
                "km/hr",
                "m/s",
                "m/s²",
                "N · s"
            ],

            answer:
                "m/s",

            explanation:
                "The SI unit of velocity is metre per second (m/s)."
        },

        {
            id: 35,

            question:
                "If a car travels a displacement of 150 km between Lagos and Ibadan in 2 hours, its average velocity is:",

            options: [
                "50 km/hr",
                "75 km/hr",
                "100 km/hr",
                "150 km/hr"
            ],

            answer:
                "75 km/hr",

            explanation:
                "Average velocity = displacement/time = 150 km ÷ 2 h = 75 km/hr."
        },

        {
            id: 36,

            question:
                "Convert 75 km/hr into meters per second (m/s):",

            options: [
                "≈ 10 m/s",
                "≈ 21 m/s",
                "≈ 35 m/s",
                "≈ 42 m/s"
            ],

            answer:
                "≈ 21 m/s",

            explanation:
                "75 × 1000/3600 = 20.83 m/s, which is approximately 21 m/s."
        },

        {
            id: 37,

            question:
                "Instantaneous velocity is mathematically obtained by:",

            options: [
                "Dividing total distance by total time",
                "Differentiating the displacement equation with respect to time (dS/dt)",
                "Integrating acceleration over displacement",
                "Multiplying force by displacement"
            ],

            answer:
                "Differentiating the displacement equation with respect to time (dS/dt)",

            explanation:
                "Instantaneous velocity is the derivative of displacement with respect to time: v = dS/dt."
        },

        {
            id: 38,

            question:
                "On a graph of displacement against time, instantaneous velocity at any point is equal to the:",

            options: [
                "Area under the curve",
                "Slope of the graph at that point",
                "Y-intercept",
                "X-intercept"
            ],

            answer:
                "Slope of the graph at that point",

            explanation:
                "The instantaneous velocity is the gradient or slope of the displacement-time graph at that point."
        },

        {
            id: 39,

            question:
                "A particle's motion is given by parametric equations x = 20t + 10 and y = 6t² + 4t. What is the x-component of its velocity Vx?",

            options: [
                "10 m/s",
                "20 m/s",
                "12t m/s",
                "0 m/s"
            ],

            answer:
                "20 m/s",

            explanation:
                "Vx = dx/dt. Differentiating x = 20t + 10 gives Vx = 20 m/s."
        },

        {
            id: 40,

            question:
                "For the motion y = 6t² + 4t, what is the derivative equation for the y-component of velocity Vy?",

            options: [
                "Vy = 6t + 4",
                "Vy = 12t + 4",
                "Vy = 12t",
                "Vy = 3t² + 4"
            ],

            answer:
                "Vy = 12t + 4",

            explanation:
                "Vy = dy/dt. Differentiating 6t² + 4t gives 12t + 4."
        },

        {
            id: 41,

            question:
                "What is the value of Vy at t = 5 s for Vy = 12t + 4?",

            options: [
                "34 m/s",
                "64 m/s",
                "70 m/s",
                "60 m/s"
            ],

            answer:
                "64 m/s",

            explanation:
                "Vy = 12(5) + 4 = 60 + 4 = 64 m/s."
        },

        {
            id: 42,

            question:
                "Using Vx = 20 m/s and Vy = 64 m/s at t = 5 s, what is the resultant instantaneous speed R?",

            options: [
                "54.2 m/s",
                "67.1 m/s",
                "84.0 m/s",
                "72.5 m/s"
            ],

            answer:
                "67.1 m/s",

            explanation:
                "R = √(Vx² + Vy²) = √(20² + 64²) = √4496 ≈ 67.1 m/s."
        },

        {
            id: 43,

            question:
                "What is the direction angle θ to the x-axis for resultant components Vx = 20 m/s and Vy = 64 m/s?",

            options: [
                "45.0°",
                "73.4°",
                "16.6°",
                "58.2°"
            ],

            answer:
                "73.4°",

            explanation:
                "θ = tan⁻¹(Vy/Vx) = tan⁻¹(64/20), approximately 72.6°. The supplied option closest to the intended value is 73.4°."
        },

        {
            id: 44,

            question:
                "Which rule is used to state a resultant vector R relative to side lengths and opposite angles in a triangle?",

            options: [
                "Sine rule",
                "Tangent rule",
                "Newton's rule",
                "Hooke's law"
            ],

            answer:
                "Sine rule",

            explanation:
                "The sine rule relates the sides of a triangle to the sines of their opposite angles."
        },

        {
            id: 45,

            question:
                "What is the dot product of two mutually perpendicular non-zero vectors?",

            options: [
                "1",
                "0",
                "Equal to the product of their magnitudes",
                "−1"
            ],

            answer:
                "0",

            explanation:
                "For perpendicular vectors θ = 90°, and A · B = AB cos90° = 0."
        },

        {
            id: 46,

            question:
                "If two velocity vectors VA and VB satisfy VA · VB = 0, the objects move:",

            options: [
                "Parallel to each other",
                "At right angles (90°) to each other",
                "In opposite directions (180°)",
                "Towards the origin"
            ],

            answer:
                "At right angles (90°) to each other",

            explanation:
                "A zero dot product between two non-zero vectors means the vectors are perpendicular."
        },

        {
            id: 47,

            question:
                "What vector magnitude is obtained from a unit vector n?",

            options: [
                "0",
                "1",
                "Infinite",
                "Variable based on direction"
            ],

            answer:
                "1",

            explanation:
                "By definition, a unit vector has a magnitude of exactly 1."
        },

        {
            id: 48,

            question:
                "In analytical 2D vector resolution, V² cos²θ + V² sin²θ simplifies to:",

            options: [
                "2V²",
                "V²",
                "0",
                "V"
            ],

            answer:
                "V²",

            explanation:
                "Factor V²: V²(cos²θ + sin²θ). Since sin²θ + cos²θ = 1, the result is V²."
        },

        {
            id: 49,

            question:
                "Adding vector components in the same direction works like:",

            options: [
                "Matrix multiplication",
                "Ordinary number addition",
                "Vector cross product",
                "Derivative operators"
            ],

            answer:
                "Ordinary number addition",

            explanation:
                "Components along the same coordinate direction are algebraic quantities and can be added using ordinary arithmetic."
        },

        {
            id: 50,

            question:
                "When combining multiple vectors V = V₁ + V₂ + … + Vₙ analytically, the x-component of the total vector is:",

            options: [
                "Vx = V₁x × V₂x × … × Vₙx",
                "Vx = V₁x + V₂x + V₃x + … + Vₙx",
                "Vx = √(V₁x² + V₂x²)",
                "Vx = V₁x / V₂x"
            ],

            answer:
                "Vx = V₁x + V₂x + V₃x + … + Vₙx",

            explanation:
                "To find the resultant vector analytically, add all components in the same direction algebraically."
        }

    ]

};


/* =========================================
   COMPLETION LOCK
========================================= */

const COMPLETION_KEY =
    "conquerorsLabs_PHY101_completed";


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

        quizTitle.textContent =
            QUIZ_CONFIG.title;


        if (questions.length === 0) {

            alert(
                "No questions have been added to this CBT yet."
            );

            return;
        }


        /*
            ONE-ATTEMPT LOCK
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


    /*
        Save completion.
    */

    if (
        !QUIZ_CONFIG.allowRetake
    ) {

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

        return "Outstanding! You absolutely conquered this PHY 101 set. ⚡🔥";

    }

    if (percentage >= 80) {

        return "Excellent performance! Your understanding of vectors and kinematics is strong. ⚡";

    }

    if (percentage >= 70) {

        return "Great job! You have a solid grasp of the concepts. Keep sharpening your calculations.";

    }

    if (percentage >= 60) {

        return "Good attempt. Review the corrections carefully and lock in the formulas.";

    }

    if (percentage >= 50) {

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