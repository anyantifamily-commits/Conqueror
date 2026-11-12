
/* =========================================
   CONQUERORS LABS — MAIN JAVASCRIPT
========================================= */

const GLOBAL_QUIZ_SETTINGS = {
    allowRetake: false
};

/* =========================================
   QUIZ CONFIGURATION
   Preserve the existing course availability.
========================================= */

const QUIZ_CONFIG = {
    BIO101: {
        enabled: true,
        name: "BIO 101",
        url: "bio101.html"
    },

    CHM101: {
        enabled: false,
        name: "CHM 101",
        url: "chm101.html"
    },

    PHY101: {
        enabled: false,
        name: "PHY 101",
        url: "phy101.html"
    },

    MATH101: {
        enabled: false,
        name: "MATH 101 & 102",
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

    localStorage.setItem("pendingQuiz", subject);

    // Prevent duplicate overlays.
    closeWhatsAppGate();

    const overlay = document.createElement("div");
    overlay.id = "whatsappGate";

    overlay.innerHTML = `
        <div class="whatsapp-gate-card" role="dialog"
             aria-modal="true" aria-labelledby="gateTitle">

            <button
                class="gate-close"
                type="button"
                onclick="closeWhatsAppGate()"
                aria-label="Close dialog"
            >×</button>

            <div class="gate-icon">💬</div>

            <span class="gate-label">CONQUERORS COMMUNITY</span>

            <h2 id="gateTitle">Join the Conquerors</h2>

            <p>
                Before taking the ${quiz.name} CBT, join our WhatsApp
                Channel for CBT announcements, challenges, updates,
                and important information.
            </p>

            <a
                href="${WHATSAPP_CHANNEL_URL}"
                target="_blank"
                rel="noopener noreferrer"
                class="gate-whatsapp-button"
            >
                JOIN WHATSAPP CHANNEL <span>↗</span>
            </a>

            <button
                class="gate-continue-button"
                type="button"
                onclick="continueToQuiz()"
            >
                I'VE JOINED — CONTINUE <span>→</span>
            </button>

            <small>
                After joining, return here and tap
                “I've Joined — Continue”.
            </small>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            closeWhatsAppGate();
        }
    });

    const closeButton = overlay.querySelector(".gate-close");
    if (closeButton) closeButton.focus();
}

function closeWhatsAppGate() {
    const overlay = document.getElementById("whatsappGate");

    if (overlay) overlay.remove();

    document.body.style.overflow = "";
}

/* =========================================
   CONTINUE TO QUIZ
========================================= */

function continueToQuiz() {
    const subject = localStorage.getItem("pendingQuiz");
    const quiz = QUIZ_CONFIG[subject];

    if (!quiz) {
        closeWhatsAppGate();
        return;
    }

    // Recheck availability before navigating.
    if (!quiz.enabled) {
        closeWhatsAppGate();
        alert(`${quiz.name} is currently being updated. Please check back soon.`);
        return;
    }

    localStorage.removeItem("pendingQuiz");
    window.location.href = quiz.url;
}

/* =========================================
   OPEN QUIZ
========================================= */

function openQuiz(subject) {
    const quiz = QUIZ_CONFIG[subject];

    if (!quiz) {
        console.error("Quiz configuration not found:", subject);
        return;
    }

    if (!quiz.enabled) {
        alert(`${quiz.name} is currently being updated. Please check back soon.`);
        return;
    }

    showWhatsAppGate(subject);
}

/* =========================================
   APPLY COURSE STATUS
========================================= */

function applyQuizStatus() {
    document.querySelectorAll(".quiz-card").forEach(card => {
        const subject = card.dataset.subject;
        const config = QUIZ_CONFIG[subject];
        const button = card.querySelector(".quiz-button");

        if (!config || !button) return;

        if (!config.enabled) {
            card.classList.add("disabled");
            button.disabled = true;
            button.setAttribute("aria-disabled", "true");
            button.innerHTML = `
                <span>🔒 QUESTIONS UPDATING</span>
                <span class="button-arrow">•</span>
            `;
        } else {
            card.classList.remove("disabled");
            button.disabled = false;
            button.removeAttribute("aria-disabled");
            button.innerHTML = `
                <span>START CBT</span>
                <span class="button-arrow">↗</span>
            `;
        }
    });
}

/* =========================================
   WHATSAPP BUTTON
========================================= */

function loadWhatsApp() {
    const button = document.getElementById("whatsappButton");

    if (!button) return;

    button.href = WHATSAPP_CHANNEL_URL;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
}

/* =========================================
   SCROLL REVEAL ANIMATIONS
========================================= */

function initialiseRevealAnimations() {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("is-visible"));
        return;
    }

    document.documentElement.classList.add("js-reveal");

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
    });

    elements.forEach(element => observer.observe(element));
}

/* =========================================
   INITIALISE HOMEPAGE
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    applyQuizStatus();
    loadWhatsApp();
    initialiseRevealAnimations();
});
