/* =========================================
   CONQUERORS LABS
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   GLOBAL QUIZ SETTINGS
========================================= */

const GLOBAL_QUIZ_SETTINGS = {

    // true  = retakes allowed
    // false = one attempt only
    allowRetake: false

};


/* =========================================
   QUIZ CONFIGURATION
========================================= */

const QUIZ_CONFIG = {

    BIO101: {
        enabled: false,
        name: "BIO 101",
        url: "bio101.html"
    },

    CHM101: {
        enabled: false,
        name: "CHM 101",
        url: "chm101.html"
    },

    PHY101: {
        enabled: true,
        name: "PHY 101",
        url: "phy101.html"
    },

    MATH101: {
        enabled: false,
        name: "MATH 101",
        url: "math101.html"
    }

};


/* =========================================
   WHATSAPP CHANNEL
========================================= */

const WHATSAPP_CHANNEL_URL =
    "https://whatsapp.com/channel/0029VbDrKK130LKYXy4zMB42";


/* =========================================
   WHATSAPP GATE
========================================= */

function showWhatsAppGate(subject) {

    const quiz = QUIZ_CONFIG[subject];

    if (!quiz) return;


    /*
       Remember which quiz the student wanted.
       This allows the student to continue
       to the correct quiz after returning.
    */

    localStorage.setItem(
        "pendingQuiz",
        subject
    );


    /*
       Create the gate overlay
    */

    const overlay =
        document.createElement("div");

    overlay.id =
        "whatsappGate";

    overlay.innerHTML = `

        <div class="whatsapp-gate-card">

            <button
                class="gate-close"
                onclick="closeWhatsAppGate()"
                aria-label="Close"
            >
                ×
            </button>

            <div class="gate-icon">
                💬
            </div>

            <span class="gate-label">
                CONQUERORS COMMUNITY
            </span>

            <h2>
                Join the Conquerors
            </h2>

            <p>
                Before taking the ${quiz.name} CBT,
                join our WhatsApp Channel to receive
                new CBT announcements, challenges,
                updates and important information.
            </p>

            <a
                href="${WHATSAPP_CHANNEL_URL}"
                target="_blank"
                rel="noopener noreferrer"
                class="gate-whatsapp-button"
            >
                JOIN WHATSAPP CHANNEL
                <span>→</span>
            </a>

            <button
                class="gate-continue-button"
                onclick="continueToQuiz()"
            >
                I'VE JOINED — CONTINUE
                <span>→</span>
            </button>

            <small>
                After joining the channel, return here
                and tap “I've Joined — Continue”.
            </small>

        </div>

    `;


    document.body.appendChild(overlay);


    /*
       Prevent background scrolling
    */

    document.body.style.overflow =
        "hidden";

}


/* =========================================
   CLOSE WHATSAPP GATE
========================================= */

function closeWhatsAppGate() {

    const overlay =
        document.getElementById(
            "whatsappGate"
        );


    if (overlay) {

        overlay.remove();

    }


    document.body.style.overflow =
        "";

}


/* =========================================
   CONTINUE TO QUIZ
========================================= */

function continueToQuiz() {

    const subject =
        localStorage.getItem(
            "pendingQuiz"
        );


    if (!subject) {

        closeWhatsAppGate();

        return;

    }


    const quiz =
        QUIZ_CONFIG[subject];


    if (!quiz) {

        closeWhatsAppGate();

        return;

    }


    /*
       Remove the saved quiz
       before navigating.
    */

    localStorage.removeItem(
        "pendingQuiz"
    );


    window.location.href =
        quiz.url;

}


/* =========================================
   OPEN QUIZ
========================================= */

function openQuiz(subject) {

    const quiz =
        QUIZ_CONFIG[subject];


    if (!quiz) {

        console.error(
            "Quiz configuration not found:",
            subject
        );

        return;
    }


    if (!quiz.enabled) {

        alert(
            `${quiz.name} is currently being updated. Please check back soon.`
        );

        return;

    }


    /*
       Instead of opening the quiz immediately,
       show the WhatsApp requirement first.
    */

    showWhatsAppGate(subject);

}


/* =========================================
   APPLY QUIZ STATUS
========================================= */

function applyQuizStatus() {

    const cards =
        document.querySelectorAll(
            ".quiz-card"
        );


    cards.forEach(card => {

        const subject =
            card.dataset.subject;

        const config =
            QUIZ_CONFIG[subject];


        if (!config) return;


        const button =
            card.querySelector(
                ".quiz-button"
            );


        if (!button) return;


        if (!config.enabled) {

            card.classList.add(
                "disabled"
            );


            button.innerHTML =
                `🔒 UPDATING QUESTIONS`;


            button.disabled =
                true;


            button.onclick =
                function () {

                    alert(
                        `${config.name} is currently being updated.`
                    );

                };

        }

    });

}


/* =========================================
   LOAD WHATSAPP
========================================= */

function loadWhatsApp() {

    const button =
        document.getElementById(
            "whatsappButton"
        );


    if (!button) return;


    button.href =
        WHATSAPP_CHANNEL_URL;


    button.target =
        "_blank";


    button.rel =
        "noopener noreferrer";

}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        applyQuizStatus();

        loadWhatsApp();

    }
);
