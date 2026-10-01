/* =========================================
   CONQUERORS LABS
   MATH 101 — INDICES
   QUIZ ENGINE
========================================= */


/* =========================================
   QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {

    title: "MATH 101 — Indices",

    timeLimit: 80,

    /*
        Kept at 100 so the engine is ready
        when more questions are added later.
    */
    maxQuestions: 100,

    allowRetake: false,

    questions: [

        {
            id: 1,

            question:
`Simplify completely:

(x^(3/2)y^(-2))²
——————————————
x^(-1)y^(-3)`,

            options: [
                "x⁴y⁻¹",
                "x²y⁻¹",
                "x⁴y⁻⁷",
                "x²y⁻⁷"
            ],

            answer: "A",

            explanation:
                "First square the numerator: x³y⁻⁴. Dividing by x⁻¹y⁻³ gives x^(3−(−1))y^(−4−(−3)) = x⁴y⁻¹."
        },


        {
            id: 2,

            question:
`Simplify:

[(a⁻²b³)/(a⁴b⁻¹)]⁻²`,

            options: [
                "a¹²/b⁸",
                "b⁸/a¹²",
                "a⁻¹²/b⁸",
                "a¹²b⁸"
            ],

            answer: "A",

            explanation:
                "Inside the bracket: a⁻⁶b⁴. Raising to −2 gives a¹²b⁻⁸ = a¹²/b⁸."
        },


        {
            id: 3,

            question:
`Simplify:

(x^(2/3))³ / x⁻²`,

            options: [
                "x⁰",
                "x²",
                "x⁴",
                "x⁻⁴"
            ],

            answer: "C",

            explanation:
                "(x^(2/3))³ = x². Then x² ÷ x⁻² = x^(2−(−2)) = x⁴."
        },


        {
            id: 4,

            question:
`Simplify:

[(x^(1/2)y^(-1/3)) /
 (x^(-1/2)y^(2/3))]⁶`,

            options: [
                "x³y⁻²",
                "x⁶y⁻⁶",
                "x⁶y⁻²",
                "x³y⁻⁶"
            ],

            answer: "B",

            explanation:
                "Inside the bracket: x¹y⁻¹ = x/y. Raising to 6 gives x⁶y⁻⁶."
        },


        {
            id: 5,

            question:
`If

2ˣ = 8^(x−1),

find x.`,

            options: [
                "1/2",
                "1",
                "3/2",
                "2"
            ],

            answer: "C",

            explanation:
                "Write 8 as 2³: 2ˣ = 2^(3x−3). Therefore x = 3x−3, giving x = 3/2."
        },


        {
            id: 6,

            question:
`Solve:

3^(2x−1) = 27^(x−2).`,

            options: [
                "3",
                "4",
                "5",
                "6"
            ],

            answer: "C",

            explanation:
                "27 = 3³, so 2x−1 = 3x−6. Therefore x = 5."
        },


        {
            id: 7,

            question:
`Solve:

4^(x+1) = 8^(2x−1).`,

            options: [
                "5/4",
                "4/3",
                "3/2",
                "2"
            ],

            answer: "A",

            explanation:
                "Write both bases as powers of 2: 2^(2x+2) = 2^(6x−3). Hence 2x+2 = 6x−3, giving x = 5/4."
        },


        {
            id: 8,

            question:
`Solve:

9^(x−1) = 27^(x−2).`,

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            answer: "C",

            explanation:
                "9 = 3² and 27 = 3³. Thus 2x−2 = 3x−6, so x = 4."
        },


        {
            id: 9,

            question:
`If

2ˣ + 2^(x+1) = 24,

find x.`,

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            answer: "B",

            explanation:
                "Factor 2ˣ: 2ˣ(1+2)=24. Therefore 3(2ˣ)=24, so 2ˣ=8 and x=3."
        },


        {
            id: 10,

            question:
`If

3ˣ + 3^(x+1) = 108,

find x.`,

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            answer: "B",

            explanation:
                "Factor 3ˣ: 3ˣ(1+3)=108. Therefore 4(3ˣ)=108, so 3ˣ=27 and x=3."
        },


        {
            id: 11,

            question:
`Solve:

2^(2x) − 5(2ˣ) + 4 = 0.`,

            options: [
                "x = 0, 1",
                "x = 1, 2",
                "x = 0, 2",
                "x = 2, 4"
            ],

            answer: "C",

            explanation:
                "Let t=2ˣ. Then t²−5t+4=0, giving (t−1)(t−4)=0. Hence 2ˣ=1 or 4, so x=0 or 2."
        },


        {
            id: 12,

            question:
`Solve:

3^(2x) − 10(3ˣ) + 9 = 0.`,

            options: [
                "x = 0, 1",
                "x = 1, 2",
                "x = 0, 2",
                "x = 2, 3"
            ],

            answer: "C",

            explanation:
                "Let t=3ˣ. Then t²−10t+9=0 = (t−1)(t−9). Therefore x=0 or 2."
        },


        {
            id: 13,

            question:
`Solve:

4ˣ − 5(2ˣ) + 4 = 0.`,

            options: [
                "x = 0, 1",
                "x = 0, 2",
                "x = 1, 2",
                "x = 2, 4"
            ],

            answer: "B",

            explanation:
                "Since 4ˣ=(2ˣ)², let t=2ˣ. Then t²−5t+4=0, giving t=1 or 4. Thus x=0 or 2."
        },


        {
            id: 14,

            question:
`Solve:

9ˣ − 4(3ˣ) + 3 = 0.`,

            options: [
                "x = 0, 1",
                "x = 1, 2",
                "x = 0, 2",
                "No real solution"
            ],

            answer: "A",

            explanation:
                "Let t=3ˣ. Since 9ˣ=t², t²−4t+3=0. Hence t=1 or 3, giving x=0 or 1."
        },


        {
            id: 15,

            question:
`If

5ˣ = 25^(x−2),

find x.`,

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            answer: "D",

            explanation:
                "25=5², so x=2(x−2). Therefore x=2x−4 and x=4."
        },


        {
            id: 16,

            question:
`Solve:

2^(x+2) = 16^(x−1).`,

            options: [
                "4/3",
                "5/3",
                "2",
                "7/3"
            ],

            answer: "C",

            explanation:
                "16=2⁴, so x+2=4x−4. Hence 3x=6 and x=2."
        },


        {
            id: 17,

            question:
`Solve:

27ˣ = 9^(x+1).`,

            options: [
                "1",
                "3/2",
                "2",
                "3"
            ],

            answer: "C",

            explanation:
                "27=3³ and 9=3². Therefore 3x=2x+2, giving x=2."
        },


        {
            id: 18,

            question:
`If

4ˣ = 8,

find 2^(2x).`,

            options: [
                "8",
                "16",
                "32",
                "64"
            ],

            answer: "A",

            explanation:
                "Since 4ˣ = 2^(2x), the given equation directly tells us that 2^(2x)=8."
        },


        {
            id: 19,

            question:
`If

3ˣ = 9√3,

find x.`,

            options: [
                "3/2",
                "2",
                "5/2",
                "3"
            ],

            answer: "C",

            explanation:
                "9√3 = 3² × 3^(1/2) = 3^(5/2). Therefore x=5/2."
        },


        {
            id: 20,

            question:
`If

2ˣ = ∛16,

find x.`,

            options: [
                "4/3",
                "5/3",
                "8/3",
                "3"
            ],

            answer: "A",

            explanation:
                "∛16 = (2⁴)^(1/3) = 2^(4/3). Therefore x=4/3."
        },


        {
            id: 21,

            question:
`Simplify:

(x^(1/2) + x^(-1/2))
——————————————
x^(-1/2)`,

            options: [
                "x + 1",
                "x⁻¹ + 1",
                "x^(1/2) + 1",
                "x + x⁻¹"
            ],

            answer: "A",

            explanation:
                "Divide each term by x⁻¹/²: x^(1/2+1/2)+1 = x+1."
        },


        {
            id: 22,

            question:
`Simplify:

(x^(3/2) − x^(-1/2))
——————————————
x^(-1/2)`,

            options: [
                "x − 1",
                "x + 1",
                "x^(1/2) − 1",
                "x² − 1"
            ],

            answer: "A",

            explanation:
                "Dividing by x⁻¹/² gives x^(3/2+1/2)−1 = x−1."
        },


        {
            id: 23,

            question:
`Simplify:

(a^(5/2) − a^(1/2))
——————————————
a^(1/2)`,

            options: [
                "a² − 1",
                "a² + 1",
                "a^(3/2) − 1",
                "a³ − 1"
            ],

            answer: "A",

            explanation:
                "Divide each term by a^(1/2): a^(5/2−1/2)−1 = a²−1."
        },


        {
            id: 24,

            question:
`Simplify:

(x^(2/3) − x^(-1/3))
——————————————
x^(-1/3)`,

            options: [
                "x − 1",
                "x + 1",
                "x^(1/3) − 1",
                "x^(2/3) − 1"
            ],

            answer: "A",

            explanation:
                "x^(2/3) ÷ x^(-1/3) = x¹. The second term becomes 1. Therefore x−1."
        },


        {
            id: 25,

            question:
`If

x^(1/2) = 4,

find:

x^(3/2) + x^(-1/2).`,

            options: [
                "64",
                "257/4",
                "65/4",
                "17"
            ],

            answer: "B",

            explanation:
                "√x=4 means x=16. Then x^(3/2)=64 and x^(-1/2)=1/4. Total = 64+1/4 = 257/4."
        },


        {
            id: 26,

            question:
`If

x^(1/3) = 2,

find:

x^(4/3) − x^(-2/3).`,

            options: [
                "63/4",
                "15/4",
                "16",
                "17/4"
            ],

            answer: "A",

            explanation:
                "x^(1/3)=2. Therefore x^(4/3)=2⁴=16 and x^(-2/3)=1/2²=1/4. Result = 63/4."
        },


        {
            id: 27,

            question:
`If

a^(1/2) + a^(-1/2) = 5,

find:

a + a^(-1).`,

            options: [
                "21",
                "23",
                "25",
                "27"
            ],

            answer: "B",

            explanation:
                "Square both sides: a+a⁻¹+2=25. Therefore a+a⁻¹=23."
        },


        {
            id: 28,

            question:
`If

x^(1/2) − x^(-1/2) = 3,

find:

x + x^(-1).`,

            options: [
                "7",
                "9",
                "11",
                "13"
            ],

            answer: "C",

            explanation:
                "Squaring gives x+x⁻¹−2=9. Hence x+x⁻¹=11."
        },


        {
            id: 29,

            question:
`If

x^(1/3) + x^(-1/3) = 4,

find:

x^(2/3) + x^(-2/3).`,

            options: [
                "12",
                "14",
                "16",
                "18"
            ],

            answer: "B",

            explanation:
                "Square the given relation: x^(2/3)+x^(-2/3)+2=16. Therefore the required value is 14."
        },


        {
            id: 30,

            question:
`If

x^(1/3) − x^(-1/3) = 2,

find:

x^(2/3) + x^(-2/3).`,

            options: [
                "2",
                "4",
                "6",
                "8"
            ],

            answer: "C",

            explanation:
                "Squaring gives x^(2/3)+x^(-2/3)−2=4. Therefore the answer is 6."
        },


        {
            id: 31,

            question:
`Simplify:

(x^(1/3) + x^(-1/3))²`,

            options: [
                "x^(2/3) + x^(-2/3)",
                "x^(2/3) + 2 + x^(-2/3)",
                "x^(2/3) + 1 + x^(-2/3)",
                "x^(1/3) + 2 + x^(-1/3)"
            ],

            answer: "B",

            explanation:
                "Use (a+b)²=a²+2ab+b². Here ab=1, so the middle term is 2."
        },


        {
            id: 32,

            question:
`If

x^(1/2) + 1/x^(1/2) = 6,

find:

x + 1/x.`,

            options: [
                "32",
                "34",
                "36",
                "38"
            ],

            answer: "B",

            explanation:
                "Square both sides: x+1/x+2=36. Hence x+1/x=34."
        },


        {
            id: 33,

            question:
`If

x + 1/x = 5,

find:

x² + 1/x².`,

            options: [
                "21",
                "23",
                "25",
                "27"
            ],

            answer: "B",

            explanation:
                "Square: x²+2+x⁻²=25. Therefore x²+x⁻²=23."
        },


        {
            id: 34,

            question:
`Given

x + 1/x = 3,

find:

x³ + 1/x³.`,

            options: [
                "9",
                "15",
                "18",
                "21"
            ],

            answer: "C",

            explanation:
                "Use a³+b³=(a+b)³−3ab(a+b). Here ab=1. Thus 3³−3(1)(3)=18."
        },


        {
            id: 35,

            question:
`If

a + 1/a = 4,

find:

a² + 1/a².`,

            options: [
                "12",
                "14",
                "16",
                "18"
            ],

            answer: "B",

            explanation:
                "Square: a²+2+a⁻²=16. Therefore a²+a⁻²=14."
        },


        {
            id: 36,

            question:
`Simplify:

(2^(n+2) − 2ⁿ) / 2ⁿ.`,

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            answer: "C",

            explanation:
                "Factor 2ⁿ: 2ⁿ(4−1)/2ⁿ = 3."
        },


        {
            id: 37,

            question:
`Simplify:

(3^(n+2) + 3^(n+1)) / 3ⁿ.`,

            options: [
                "9",
                "12",
                "15",
                "18"
            ],

            answer: "B",

            explanation:
                "Divide each term by 3ⁿ: 3²+3¹ = 9+3=12."
        },


        {
            id: 38,

            question:
`Simplify:

(5^(n+1) − 5^(n−1)) / 5^(n−1).`,

            options: [
                "20",
                "24",
                "25",
                "30"
            ],

            answer: "B",

            explanation:
                "Divide term-by-term: 5²−1 = 25−1=24."
        },


        {
            id: 39,

            question:
`If

2ⁿ + 2^(n+1) + 2^(n+2) = 56,

find n.`,

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            answer: "B",

            explanation:
                "Factor 2ⁿ: 2ⁿ(1+2+4)=56. Thus 7(2ⁿ)=56, so 2ⁿ=8 and n=3."
        },


        {
            id: 40,

            question:
`If

3ⁿ + 3^(n+1) = 108,

find:

3^(n+2).`,

            options: [
                "81",
                "243",
                "729",
                "2187"
            ],

            answer: "B",

            explanation:
                "Factor 3ⁿ: 4(3ⁿ)=108, so 3ⁿ=27. Therefore 3^(n+2)=9(27)=243."
        },


        {
            id: 41,

            question:
`Solve:

2ˣ + 2⁻ˣ = 5/2.`,

            options: [
                "x = 1 only",
                "x = −1 only",
                "x = ±1",
                "x = ±2"
            ],

            answer: "C",

            explanation:
                "For x=1, 2+1/2=5/2. For x=−1, 1/2+2=5/2. Hence x=±1."
        },


        {
            id: 42,

            question:
`Solve:

3ˣ + 3⁻ˣ = 10/3.`,

            options: [
                "x = ±1",
                "x = ±2",
                "x = 1 only",
                "x = 2 only"
            ],

            answer: "A",

            explanation:
                "For x=1, 3+1/3=10/3. By symmetry x=−1 also works. Hence x=±1."
        },


        {
            id: 43,

            question:
`If

2ˣ − 2⁻ˣ = 3/2,

find x.`,

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            answer: "A",

            explanation:
                "At x=1: 2−1/2 = 3/2. Therefore x=1."
        },


        {
            id: 44,

            question:
`If

x^(1/2) = x^(-1/2) + 3,

find x.`,

            options: [
                "1",
                "4",
                "9",
                "(11 + 3√13)/2"
            ],

            answer: "D",

            explanation:
                "Let u=√x. Then u−1/u=3. Multiplying by u gives u²−3u−1=0. Since u>0, u=(3+√13)/2. Squaring gives x=(11+3√13)/2."
        },


        {
            id: 45,

            question:
`Solve:

x^(2/3) = 16.`,

            options: [
                "x = 8",
                "x = 16",
                "x = 64",
                "x = ±64"
            ],

            answer: "D",

            explanation:
                "Let t=∛x. Then t²=16, so t=±4. Therefore x=t³=±64."
        },


        {
            id: 46,

            question:
`Solve:

x^(3/2) = 27,

x > 0.`,

            options: [
                "3",
                "6",
                "9",
                "27"
            ],

            answer: "C",

            explanation:
                "Raise both sides to the power 2/3: x=27^(2/3)=9."
        },


        {
            id: 47,

            question:
`Solve:

x⁻² = 16.`,

            options: [
                "x = 1/4 only",
                "x = −1/4 only",
                "x = ±1/4",
                "x = ±4"
            ],

            answer: "C",

            explanation:
                "x⁻²=1/x²=16, so x²=1/16. Therefore x=±1/4."
        },


        {
            id: 48,

            question:
`If

x^(1/2) = y^(1/3),

which relationship follows?`,

            options: [
                "x² = y³",
                "x³ = y²",
                "x² = y³ only when x=y",
                "x³ = y³"
            ],

            answer: "B",

            explanation:
                "Raise both sides to the sixth power: x³=y²."
        },


        {
            id: 49,

            question:
`Simplify completely:

(a^(2/3)b^(-1/2))⁶
——————————————
a²b⁻³`,

            options: [
                "a²b⁰",
                "a²",
                "a⁴b⁻³",
                "a⁶b⁻⁶"
            ],

            answer: "B",

            explanation:
                "The numerator becomes a⁴b⁻³. Dividing by a²b⁻³ gives a²."
        },


        {
            id: 50,

            question:
`🔥 CHALLENGE

If

2ˣ + 2⁻ˣ = 5,

find:

2^(2x) + 2^(-2x).`,

            options: [
                "21",
                "23",
                "25",
                "27"
            ],

            answer: "B",

            explanation:
                "Square the given equation: (2ˣ+2⁻ˣ)²=25. This gives 2^(2x)+2^(-2x)+2=25. Therefore the required value is 23."
        }

    ]

};


/* =========================================
   SETTINGS
========================================= */

const COMPLETION_KEY =
    "conquerorsLabs_MATH101_completed";


const questions =
    QUIZ_CONFIG.questions.slice(
        0,
        QUIZ_CONFIG.maxQuestions
    );


/* =========================================
   STATE
========================================= */

let currentQuestion = 0;

let userAnswers =
    new Array(questions.length).fill(null);

let timeRemaining =
    QUIZ_CONFIG.timeLimit * 60;

let timerInterval = null;

let quizSubmitted = false;


/* =========================================
   ELEMENTS
========================================= */

const questionContainer =
    document.getElementById(
        "questionContainer"
    );

const questionNavigator =
    document.getElementById(
        "questionNavigator"
    );

const questionCount =
    document.getElementById(
        "questionCount"
    );

const answeredCount =
    document.getElementById(
        "answeredCount"
    );

const progressFill =
    document.getElementById(
        "progressFill"
    );

const timer =
    document.getElementById(
        "timer"
    );

const timerBox =
    document.getElementById(
        "timerBox"
    );

const prevBtn =
    document.getElementById(
        "prevBtn"
    );

const nextBtn =
    document.getElementById(
        "nextBtn"
    );

const submitBtn =
    document.getElementById(
        "submitBtn"
    );

const quizSection =
    document.getElementById(
        "quizSection"
    );

const resultSection =
    document.getElementById(
        "resultSection"
    );

const reviewSection =
    document.getElementById(
        "reviewSection"
    );

const reviewContainer =
    document.getElementById(
        "reviewContainer"
    );

const reviewBtn =
    document.getElementById(
        "reviewBtn"
    );

const retakeBtn =
    document.getElementById(
        "retakeBtn"
    );

const submitModal =
    document.getElementById(
        "submitModal"
    );

const cancelSubmit =
    document.getElementById(
        "cancelSubmit"
    );

const confirmSubmit =
    document.getElementById(
        "confirmSubmit"
    );


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    initQuiz
);


function initQuiz() {

    if (!questions.length) {

        questionContainer.innerHTML =
            "<p>No questions available.</p>";

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


    renderNavigator();

    showQuestion();

    updateProgress();

    startTimer();
}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const q =
        questions[currentQuestion];


    questionContainer.innerHTML = "";


    const card =
        document.createElement("div");

    card.className =
        "question-card";


    const number =
        document.createElement("div");

    number.className =
        "question-number";

    number.textContent =
        `QUESTION ${currentQuestion + 1}`;


    const heading =
        document.createElement("h2");

    heading.textContent =
        q.question;


    const optionsContainer =
        document.createElement("div");

    optionsContainer.className =
        "options-container";


    q.options.forEach(
        (optionText, index) => {

            const letter =
                String.fromCharCode(
                    65 + index
                );


            const option =
                document.createElement(
                    "button"
                );

            option.type = "button";

            option.className =
                "option";


            if (
                userAnswers[
                    currentQuestion
                ] === letter
            ) {

                option.classList.add(
                    "selected"
                );
            }


            const optionLetter =
                document.createElement(
                    "span"
                );

            optionLetter.className =
                "option-letter";

            optionLetter.textContent =
                letter;


            const text =
                document.createElement(
                    "span"
                );

            text.className =
                "option-text";

            text.textContent =
                optionText;


            option.appendChild(
                optionLetter
            );

            option.appendChild(
                text
            );


            option.addEventListener(
                "click",
                () => {

                    if (quizSubmitted) {
                        return;
                    }

                    userAnswers[
                        currentQuestion
                    ] = letter;

                    showQuestion();

                    updateProgress();

                    renderNavigator();
                }
            );


            optionsContainer.appendChild(
                option
            );
        }
    );


    card.appendChild(number);

    card.appendChild(heading);

    card.appendChild(
        optionsContainer
    );


    questionContainer.appendChild(
        card
    );


    updateNavigationButtons();

    updateProgress();
}


/* =========================================
   NAVIGATION
========================================= */

prevBtn.addEventListener(
    "click",
    () => {

        if (
            currentQuestion > 0
        ) {

            currentQuestion--;

            showQuestion();

            renderNavigator();
        }
    }
);


nextBtn.addEventListener(
    "click",
    () => {

        if (
            currentQuestion <
            questions.length - 1
        ) {

            currentQuestion++;

            showQuestion();

            renderNavigator();
        }
    }
);


function updateNavigationButtons() {

    prevBtn.disabled =
        currentQuestion === 0;


    nextBtn.disabled =
        currentQuestion ===
        questions.length - 1;
}


/* =========================================
   QUESTION NAVIGATOR
========================================= */

function renderNavigator() {

    questionNavigator.innerHTML = "";


    questions.forEach(
        (_, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.type = "button";

            button.className =
                "question-number-btn";

            button.textContent =
                index + 1;


            if (
                userAnswers[index]
            ) {

                button.classList.add(
                    "answered"
                );
            }


            if (
                index === currentQuestion
            ) {

                button.classList.add(
                    "current"
                );
            }


            button.addEventListener(
                "click",
                () => {

                    if (quizSubmitted) {
                        return;
                    }

                    currentQuestion =
                        index;

                    showQuestion();

                    renderNavigator();
                }
            );


            questionNavigator.appendChild(
                button
            );
        }
    );
}


/* =========================================
   PROGRESS
========================================= */

function updateProgress() {

    const answered =
        userAnswers.filter(
            answer => answer !== null
        ).length;


    const percentage =
        (answered /
            questions.length) *
        100;


    answeredCount.textContent =
        `${answered} answered`;


    questionCount.textContent =
        `Question ${
            currentQuestion + 1
        } of ${
            questions.length
        }`;


    progressFill.style.width =
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

                timeRemaining--;


                updateTimerDisplay();


                if (
                    timeRemaining <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    submitQuiz(
                        true
                    );
                }

            },
            1000
        );
}


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
   SUBMIT MODAL
========================================= */

submitBtn.addEventListener(
    "click",
    () => {

        submitModal.classList.remove(
            "hidden"
        );
    }
);


cancelSubmit.addEventListener(
    "click",
    () => {

        submitModal.classList.add(
            "hidden"
        );
    }
);


confirmSubmit.addEventListener(
    "click",
    () => {

        submitModal.classList.add(
            "hidden"
        );

        submitQuiz(false);
    }
);


/* =========================================
   SUBMIT QUIZ
========================================= */

function submitQuiz(
    automatic = false
) {

    if (quizSubmitted) {
        return;
    }


    quizSubmitted = true;


    clearInterval(
        timerInterval
    );


    let correct = 0;

    let wrong = 0;

    let unanswered = 0;


    questions.forEach(
        (question, index) => {

            const selected =
                userAnswers[index];


            if (!selected) {

                unanswered++;

            }

            else if (
                selected ===
                question.answer
            ) {

                correct++;

            }

            else {

                wrong++;
            }
        }
    );


    /*
        LOCK THE ATTEMPT
    */

    if (
        !QUIZ_CONFIG.allowRetake
    ) {

        localStorage.setItem(
            COMPLETION_KEY,
            "true"
        );
    }


    const total =
        questions.length;


    const percentage =
        Math.round(
            (correct / total) * 100
        );


    quizSection.classList.add(
        "hidden"
    );


    resultSection.classList.remove(
        "hidden"
    );


    document.getElementById(
        "resultScore"
    ).textContent =
        `${correct}/${total}`;


    document.getElementById(
        "resultPercentage"
    ).textContent =
        `${percentage}%`;


    document.getElementById(
        "correctCount"
    ).textContent =
        correct;


    document.getElementById(
        "wrongCount"
    ).textContent =
        wrong;


    document.getElementById(
        "unansweredCount"
    ).textContent =
        unanswered;


    const resultMessage =
        document.getElementById(
            "resultMessage"
        );


    if (automatic) {

        resultMessage.textContent =
            "Time is up. Your quiz has been submitted automatically.";
    }

    else if (percentage >= 80) {

        resultMessage.textContent =
            "🔥 Strong performance. But don't stop here — review every mistake.";
    }

    else if (percentage >= 60) {

        resultMessage.textContent =
            "Good attempt. Your corrections are where the real learning begins.";
    }

    else {

        resultMessage.textContent =
            "The questions exposed some weak spots. Study the corrections and attack them again.";
    }


    if (
        QUIZ_CONFIG.allowRetake
    ) {

        retakeBtn.classList.remove(
            "hidden"
        );
    }
}


/* =========================================
   REVIEW
========================================= */

reviewBtn.addEventListener(
    "click",
    () => {

        reviewSection.classList.toggle(
            "hidden"
        );


        if (
            !reviewSection.classList.contains(
                "hidden"
            )
        ) {

            renderReview();

            reviewSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
);


function renderReview() {

    reviewContainer.innerHTML = "";


    questions.forEach(
        (question, index) => {

            const selected =
                userAnswers[index];


            const correct =
                selected ===
                question.answer;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                `review-card ${
                    correct
                        ? "correct"
                        : "wrong"
                }`;


            const number =
                document.createElement(
                    "div"
                );

            number.className =
                "review-question-number";

            number.textContent =
                `QUESTION ${index + 1}`;


            const questionText =
                document.createElement(
                    "div"
                );

            questionText.className =
                "review-question";

            questionText.textContent =
                question.question;


            const selectedAnswer =
                selected
                    ? `${selected}. ${
                        question.options[
                            selected.charCodeAt(0) - 65
                        ]
                    }`
                    : "Not answered";


            const correctAnswer =
                `${question.answer}. ${
                    question.options[
                        question.answer.charCodeAt(0) - 65
                    ]
                }`;


            const yourAnswer =
                document.createElement(
                    "div"
                );

            yourAnswer.className =
                "review-answer";


            yourAnswer.innerHTML =
                `<strong>Your answer:</strong> ${selectedAnswer}`;


            const answer =
                document.createElement(
                    "div"
                );

            answer.className =
                "review-answer";


            answer.innerHTML =
                `<strong>Correct answer:</strong> ${correctAnswer}`;


            const correction =
                document.createElement(
                    "div"
                );

            correction.className =
                "review-correction";


            correction.innerHTML =
                `<strong>🧠 JOT THIS:</strong> ${question.explanation}`;


            card.appendChild(
                number
            );

            card.appendChild(
                questionText
            );

            card.appendChild(
                yourAnswer
            );

            card.appendChild(
                answer
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
   ALREADY COMPLETED
========================================= */

function showAlreadyCompleted() {

    quizSection.classList.add(
        "hidden"
    );


    resultSection.classList.remove(
        "hidden"
    );


    document.querySelector(
        ".result-icon"
    ).textContent = "🔒";


    document.querySelector(
        ".result-label"
    ).textContent =
        "ATTEMPT COMPLETED";


    document.getElementById(
        "resultScore"
    ).textContent =
        "LOCKED";


    document.getElementById(
        "resultPercentage"
    ).textContent =
        "";


    document.getElementById(
        "resultMessage"
    ).textContent =
        "You have already completed this MATH 101 CBT on this browser/device. Retakes are currently disabled.";


    document.querySelector(
        ".result-stats"
    ).classList.add(
        "hidden"
    );


    reviewBtn.classList.add(
        "hidden"
    );


    retakeBtn.classList.add(
        "hidden"
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