
/* =================================================
   ✏️ EASY-EDIT QUIZ CONFIGURATION
================================================= */

const QUIZ_CONFIG = {

    // CHANGE THE QUIZ/TOPIC TITLE HERE
    title: "BIO 101 — GENETICS",

    // TIME LIMIT IN MINUTES
    timeLimit: 20,

    // MAXIMUM NUMBER OF QUESTIONS
    maxQuestions: 100,

    // ALLOW STUDENTS TO RETAKE THE QUIZ?
    // true  = retake allowed
    // false = one attempt only
    allowRetake: false,


    /* =============================================
       QUESTIONS
    ============================================= */

    questions: [

        {
        id: 1,
        question: "What is the standard definition of a phenotype?",
        options: [
            "The complete set of genes contained within an organism",
            "The physical expression or outward appearance of a trait",
            "An alternate form of a gene located at a specific locus",
            "A sequence of three nucleotides specifying a single amino acid"
        ],
        answer: "The physical expression or outward appearance of a trait",
        explanation: "A phenotype refers to an observable characteristic of an organism, influenced by its genotype and environment."
    },
    {
        id: 2,
        question: "When the heterozygous F1 generation of a monohybrid cross self-fertilizes, what phenotypic ratio is typically observed in the F2 generation?",
        options: [
            "1:2:1",
            "9:3:3:1",
            "3:1",
            "100% dominant"
        ],
        answer: "3:1",
        explanation: "With complete dominance, crossing Aa × Aa produces a 3:1 dominant-to-recessive phenotypic ratio."
    },
    {
        id: 3,
        question: "Which experimental organism did Gregor Mendel use for his foundational genetic studies?",
        options: [
            "Fruit flies (Drosophila melanogaster)",
            "Common garden peas (Pisum sativum)",
            "Evening primroses (Oenothera)",
            "Snapdragons (Antirrhinum)"
        ],
        answer: "Common garden peas (Pisum sativum)",
        explanation: "Mendel studied garden peas because their contrasting traits were easy to observe and their crosses could be controlled."
    },
    {
        id: 4,
        question: "Which nitrogenous base is found in RNA in place of thymine in DNA?",
        options: [
            "Adenine",
            "Cytosine",
            "Guanine",
            "Uracil"
        ],
        answer: "Uracil",
        explanation: "RNA contains uracil (U), whereas DNA normally contains thymine (T)."
    },
    {
        id: 5,
        question: "What does homozygous mean in genetic terminology?",
        options: [
            "Having two different alleles for a particular characteristic",
            "Having identical alleles for a particular characteristic",
            "An allele that is masked by a dominant allele",
            "A fixed location on DNA where a gene resides"
        ],
        answer: "Having identical alleles for a particular characteristic",
        explanation: "A homozygous individual has two identical alleles at a locus, such as AA or aa."
    },
    {
        id: 6,
        question: "In standard genetic cross labeling, what does P1 represent?",
        options: [
            "The first filial generation",
            "The second filial generation",
            "The parental generation",
            "The recombinant progeny"
        ],
        answer: "The parental generation",
        explanation: "P represents the parental generation, whose offspring form the F1 generation."
    },
    {
        id: 7,
        question: "Which Mendelian principle states that alleles of different gene pairs assort independently during gamete formation?",
        options: [
            "Principle of Dominance",
            "Principle of Segregation",
            "Principle of Independent Assortment",
            "Principle of Uniformity"
        ],
        answer: "Principle of Independent Assortment",
        explanation: "Independent assortment describes how different allele pairs segregate independently when the genes are unlinked or sufficiently far apart."
    },
    {
        id: 8,
        question: "Which primary embryonic germ layer gives rise to the brain, nervous system, and epidermis?",
        options: [
            "Endoderm",
            "Mesoderm",
            "Ectoderm",
            "Trophoblast"
        ],
        answer: "Ectoderm",
        explanation: "The ectoderm forms the nervous system and epidermis, including much of the outer skin."
    },
    {
        id: 9,
        question: "When a true-breeding red snapdragon (RR) is crossed with a true-breeding white snapdragon (rr), what is expected under incomplete dominance?",
        options: [
            "100% red offspring",
            "100% white offspring",
            "100% intermediate pink offspring",
            "A 3:1 red-to-white phenotypic ratio"
        ],
        answer: "100% intermediate pink offspring",
        explanation: "All F1 offspring are Rr and pink because neither allele completely masks the other."
    },
    {
        id: 10,
        question: "How is a test cross performed to determine the genotype of an organism with a dominant phenotype?",
        options: [
            "Cross it with a homozygous dominant individual",
            "Cross it with a homozygous recessive individual",
            "Self-fertilize the F1 generation",
            "Cross two heterozygous individuals"
        ],
        answer: "Cross it with a homozygous recessive individual",
        explanation: "A test cross uses a homozygous recessive partner to reveal whether the unknown genotype is homozygous dominant or heterozygous."
    },
    {
        id: 11,
        question: "Which codons can serve as translation initiation codons in prokaryotes?",
        options: [
            "UAA, UAG, and UGA",
            "AUG and GUG",
            "CCA and GGG",
            "UAA only"
        ],
        answer: "AUG and GUG",
        explanation: "AUG is the usual start codon; GUG can also initiate translation in prokaryotes, typically inserting formylmethionine at initiation."
    },
    {
        id: 12,
        question: "What is the expected classical phenotypic ratio in the F2 generation of a dihybrid cross with independent assortment and complete dominance?",
        options: [
            "3:1",
            "1:2:1",
            "9:3:3:1",
            "12:3:1"
        ],
        answer: "9:3:3:1",
        explanation: "The four phenotype classes occur in a 9:3:3:1 ratio when two independently assorting genes show complete dominance."
    },
    {
        id: 13,
        question: "What is the primary function of human chorionic gonadotropin (hCG) during early pregnancy?",
        options: [
            "It triggers cleavage of the zygote into a morula",
            "It maintains the corpus luteum until placental hormone production is established",
            "It breaks the bond between a polypeptide and tRNA during termination",
            "It prevents multiple sperm from entering the secondary oocyte"
        ],
        answer: "It maintains the corpus luteum until placental hormone production is established",
        explanation: "hCG maintains the corpus luteum, which continues secreting progesterone to support the early pregnancy."
    },
    {
        id: 14,
        question: "Which structural genes make up the lac operon in E. coli, and what is their collective function?",
        options: [
            "Genes lacZ, lacY, and lacA, involved in lactose metabolism",
            "Genes r, o, and p, encoding transcription elongation factors",
            "Genes f, met, and tu, regulating amino acid activation",
            "Genes s, y, and g, controlling seed shape and colour"
        ],
        answer: "Genes lacZ, lacY, and lacA, involved in lactose metabolism",
        explanation: "lacZ encodes beta-galactosidase, lacY encodes lactose permease, and lacA encodes thiogalactoside transacetylase."
    },
    {
        id: 15,
        question: "According to the wobble hypothesis, which modified base at the 5' position of a tRNA anticodon can pair with A, U, or C at the 3' position of an mRNA codon?",
        options: [
            "Pseudouridine (Ψ)",
            "Inosine (I)",
            "Formylmethionine (fMet)",
            "Thymine (T)"
        ],
        answer: "Inosine (I)",
        explanation: "Inosine at the wobble position of the anticodon can pair with adenine, uracil, or cytosine in the codon."
    },
    {
        id: 16,
        question: "Which prokaryotic release factors recognize stop codons during translation termination?",
        options: [
            "RF1 recognizes UAA and UAG; RF2 recognizes UAA and UGA",
            "RF1 recognizes UGA; RF2 recognizes UAG and UAA",
            "EF-Tu recognizes all three stop codons",
            "EF-G recognizes UAA exclusively"
        ],
        answer: "RF1 recognizes UAA and UAG; RF2 recognizes UAA and UGA",
        explanation: "In bacteria, RF1 recognizes UAA and UAG, while RF2 recognizes UAA and UGA."
    },
    {
        id: 17,
        question: "In molecular genetics, how is a cistron defined?",
        options: [
            "The smallest unit of DNA capable of recombination",
            "The smallest unit of genetic material that, when changed, produces a different phenotype",
            "A DNA sequence specifying a single polypeptide chain",
            "An intervening non-coding sequence interrupting an exon"
        ],
        answer: "A DNA sequence specifying a single polypeptide chain",
        explanation: "A cistron is a functional unit of DNA that encodes a polypeptide; the term is associated with the cis-trans complementation test."
    },
    {
        id: 18,
        question: "In Mendel's seed-shape experiment, how many smooth and wrinkled seeds were recovered in the F2 generation?",
        options: [
            "315 smooth and 108 wrinkled seeds",
            "5,474 smooth and 1,850 wrinkled seeds",
            "7,324 smooth and 1,850 wrinkled seeds",
            "5,500 smooth and 1,824 wrinkled seeds"
        ],
        answer: "5,474 smooth and 1,850 wrinkled seeds",
        explanation: "Mendel recorded 5,474 round (smooth) and 1,850 wrinkled seeds, approximately a 2.96:1 ratio."
    },
    {
        id: 19,
        question: "What is the primary role of the sigma (σ) subunit in the prokaryotic RNA polymerase holoenzyme?",
        options: [
            "Editing the RNA transcript to ensure replication fidelity",
            "Recognizing promoter sequences and helping initiate transcription",
            "Forming a hairpin at the termination site",
            "Binding ribonucleoside triphosphates to elongate RNA"
        ],
        answer: "Recognizing promoter sequences and helping initiate transcription",
        explanation: "The sigma factor helps RNA polymerase recognize specific promoters and initiate transcription."
    },
    {
        id: 20,
        question: "In a complementation test, what does a mutant phenotype in a trans-heterozygote (+m2 / m1+) usually indicate?",
        options: [
            "The mutations are in different genes and complement one another",
            "The mutations are in the same gene, so functional complementation does not occur",
            "The mutations are on different chromosomes and assort independently",
            "The mutations are non-coding introns removed during splicing"
        ],
        answer: "The mutations are in the same gene, so functional complementation does not occur",
        explanation: "A mutant phenotype in trans usually indicates that both mutations affect the same cistron, preventing restoration of the normal function."
    }
];


/* =================================================
   🔒 DO NOT EDIT BELOW THIS LINE
================================================= */


/* =========================================
   ONE-ATTEMPT STORAGE KEY
========================================= */

const COMPLETION_KEY =
    "conquerorsLabs_BIO101_completed";


/* =========================================
   PREPARE QUESTIONS
========================================= */

const questions =
    QUIZ_CONFIG.questions
        .slice(0, QUIZ_CONFIG.maxQuestions);


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


/* =========================================
   HTML ELEMENTS
========================================= */

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
   INITIALIZE
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

    initializeQuiz();

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

    document.querySelector(
        ".question-card"
    ).style.display = "none";

    document.querySelector(
        ".navigation"
    ).style.display = "none";

    document.querySelector(
        ".navigator-card"
    ).style.display = "none";

    if (submitBtn) {
        submitBtn.style.display = "none";
    }

    if (resultSection) {

        resultSection.style.display =
            "block";

        resultScore.textContent =
            "✓";

        resultPercentage.textContent =
            "";

        resultMessage.textContent =
            "You have already completed this CBT. Only one attempt is allowed.";

    }

    if (reviewBtn) {
        reviewBtn.style.display = "none";
    }

    if (retakeBtn) {
        retakeBtn.style.display = "none";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const question =
        questions[currentQuestion];


    questionNumber.textContent =
        `QUESTION ${
            String(currentQuestion + 1)
                .padStart(2, "0")
        }`;


    questionText.textContent =
        question.question;


    questionCounter.textContent =
        `Question ${
            currentQuestion + 1
        } of ${
            questions.length
        }`;


    const percentage =
        (
            (currentQuestion + 1)
            /
            questions.length
        ) * 100;


    progressPercent.textContent =
        `${Math.round(percentage)}%`;


    progressFill.style.width =
        `${percentage}%`;


    optionsContainer.innerHTML = "";


    question.options.forEach(
        (option, index) => {

            const optionButton =
                document.createElement("button");


            optionButton.className =
                "option";


            if (
                userAnswers[currentQuestion]
                === option
            ) {

                optionButton.classList.add(
                    "selected"
                );

            }


            const letter =
                String.fromCharCode(
                    65 + index
                );


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


            optionButton.appendChild(
                optionLetter
            );

            optionButton.appendChild(
                optionText
            );


            optionButton.addEventListener(
                "click",
                () => {

                    selectAnswer(option);

                }
            );


            optionsContainer.appendChild(
                optionButton
            );

        }
    );


    previousBtn.disabled =
        currentQuestion === 0;


    if (
        currentQuestion
        === questions.length - 1
    ) {

        nextBtn.textContent =
            "Finish →";

    } else {

        nextBtn.textContent =
            "Next →";

    }


    updateNavigator();

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(answer) {

    if (quizSubmitted)
        return;


    userAnswers[currentQuestion] =
        answer;


    showQuestion();

}


/* =========================================
   NEXT
========================================= */

nextBtn.addEventListener(
    "click",
    () => {

        if (
            currentQuestion
            <
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


                    currentQuestion =
                        index;


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


            if (
                index === currentQuestion
            ) {

                button.classList.add(
                    "current"
                );

            }


            if (
                userAnswers[index]
                !== null
            ) {

                button.classList.add(
                    "answered"
                );

            }

        }
    );


    const answered =
        userAnswers.filter(
            answer =>
                answer !== null
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

                if (
                    timeRemaining <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );


                    submitQuiz(true);

                    return;

                }


                timeRemaining--;

                updateTimerDisplay();

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
        `${String(minutes).padStart(
            2,
            "0"
        )}:${String(seconds).padStart(
            2,
            "0"
        )}`;


    if (
        timeRemaining <= 300
    ) {

        timer.style.color =
            "#ff7373";

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
                answer =>
                    answer === null
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

function submitQuiz(timeUp = false) {

    if (quizSubmitted)
        return;


    quizSubmitted = true;


    clearInterval(
        timerInterval
    );


    let score = 0;


    questions.forEach(
        (question, index) => {

            if (
                userAnswers[index]
                === question.answer
            ) {

                score++;

            }

        }
    );


    const percentage =
        Math.round(
            (
                score
                /
                questions.length
            ) * 100
        );


    /*
       LOCK THE QUIZ AFTER SUBMISSION
       ONLY WHEN RETAKES ARE DISABLED
    */

    if (!QUIZ_CONFIG.allowRetake) {

        localStorage.setItem(
            COMPLETION_KEY,
            "true"
        );

    }


    showResults(
        score,
        percentage,
        timeUp
    );

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


    submitBtn.style.display =
        "none";


    resultSection.style.display =
        "block";


    resultScore.textContent =
        `${score} / ${questions.length}`;


    resultPercentage.textContent =
        `${percentage}%`;


    if (timeUp) {

        resultMessage.textContent =
            "Time is up. Your answers have been submitted.";

    } else {

        resultMessage.textContent =
            getResultMessage(
                percentage
            );

    }


    /*
       SHOW/HIDE RETAKE BUTTON
    */

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

    if (percentage >= 80) {

        return "Excellent work. Keep pushing.";

    }


    if (percentage >= 60) {

        return "Good effort. Review your corrections and keep improving.";

    }


    if (percentage >= 40) {

        return "You're getting there. Use the corrections to strengthen your weak areas.";

    }


    return "Keep studying. Every correction is another opportunity to improve.";

}


/* =========================================
   REVIEW ANSWERS
========================================= */

reviewBtn.addEventListener(
    "click",
    () => {

        reviewContainer.innerHTML =
            "";


        questions.forEach(
            (question, index) => {

                const userAnswer =
                    userAnswers[index];


                const correct =
                    userAnswer
                    === question.answer;


                const review =
                    document.createElement(
                        "div"
                    );


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
                        userAnswer
                        ?? "Not answered"
                    }`;


                const correctAnswerElement =
                    document.createElement("p");

                correctAnswerElement.className =
                    "review-answer review-correct";

                correctAnswerElement.textContent =
                    `Correct answer: ${
                        question.answer
                    }`;


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
