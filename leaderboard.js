/* =========================================
   CONQUERORS LABS
   LEADERBOARD SYSTEM
========================================= */


/* =========================================
   QUIZ CONFIGURATIONS
========================================= */

const QUIZZES = {

    "bio101-cell-biology": {
        title: "BIO 101",
        resultKey: "conquerorsLabs_BIO101_result_id_v3"
    },

    "chm101": {
        title: "CHM 101",
        resultKey: "conquerorsLabs_CHM101_result_id"
    },

    "phy101": {
        title: "PHY 101",
        resultKey: "conquerorsLabs_PHY101_result_id_v2"
    },

    "math101": {
        title: "MATH 101",
        resultKey: "conquerorsLabs_MATH101_result_id_v2"
    }

};


/* =========================================
   CURRENT QUIZ
========================================= */

let currentQuizId =
    "bio101-cell-biology";


/* =========================================
   DOM ELEMENTS
========================================= */

const quizTitle =
    document.getElementById("quizTitle");

const quizStatus =
    document.getElementById("quizStatus");

const passMark =
    document.getElementById("passMark");

const topThree =
    document.getElementById("topThree");

const rankingList =
    document.getElementById("rankingList");

const emptyState =
    document.getElementById("emptyState");

const lockedState =
    document.getElementById("lockedState");

const personalResult =
    document.getElementById("personalResult");

const personalResultHeading =
    document.getElementById("personalResultHeading");

const personalResultIcon =
    document.getElementById("personalResultIcon");

const personalResultMessage =
    document.getElementById("personalResultMessage");

const personalResultDescription =
    document.getElementById("personalResultDescription");

const personalScore =
    document.getElementById("personalScore");

const personalPercentage =
    document.getElementById("personalPercentage");

const personalRank =
    document.getElementById("personalRank");

const personalRankStat =
    document.getElementById("personalRankStat");

const courseButtons =
    document.querySelectorAll(".course-button");


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupCourseButtons();

        loadLeaderboard(
            currentQuizId
        );

    }
);


/* =========================================
   COURSE BUTTONS
========================================= */

function setupCourseButtons() {

    courseButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const quizId =
                        button.dataset.quiz;


                    if (
                        quizId ===
                        currentQuizId
                    ) {

                        return;

                    }


                    currentQuizId =
                        quizId;


                    updateActiveButton(
                        button
                    );


                    loadLeaderboard(
                        currentQuizId
                    );

                }
            );

        }
    );

}


/* =========================================
   ACTIVE COURSE BUTTON
========================================= */

function updateActiveButton(
    activeButton
) {

    courseButtons.forEach(
        button => {

            button.classList.remove(
                "active"
            );

        }
    );


    activeButton.classList.add(
        "active"
    );

}


/* =========================================
   LOAD LEADERBOARD
========================================= */

async function loadLeaderboard(
    quizId
) {

    resetLeaderboardDisplay();


    const quiz =
        QUIZZES[quizId];


    if (!quiz) {

        showError(
            "This course has not been configured yet."
        );

        return;

    }


    quizTitle.textContent =
        quiz.title;


    quizStatus.textContent =
        "Loading leaderboard...";


    try {

        /* =====================================
           GET LEADERBOARD SETTINGS
        ====================================== */

        const {
            data: settings,
            error: settingsError
        } = await supabaseClient

            .from(
                "leaderboard_settings"
            )

            .select(
                "quiz_id, quiz_title, leaderboard_enabled, pass_mark"
            )

            .eq(
                "quiz_id",
                quizId
            )

            .maybeSingle();


        if (settingsError) {

            console.error(
                "Leaderboard settings error:",
                settingsError
            );


            showError(
                "Unable to load leaderboard settings."
            );

            return;

        }


        /* =====================================
           COURSE HAS NO SETTINGS
        ====================================== */

        if (!settings) {

            showLocked(
                "This leaderboard has not been prepared yet."
            );

            return;

        }


        /* =====================================
           PASS MARK
        ====================================== */

        const currentPassMark =
            Number(
                settings.pass_mark ?? 50
            );


        passMark.textContent =
            `${currentPassMark}%`;


        /* =====================================
           LEADERBOARD LOCK
        ====================================== */

        const enabled =
            settings.leaderboard_enabled === true ||
            settings.leaderboard_enabled === "true";


        if (!enabled) {

            showLocked(
                "The leaderboard for this course is currently locked."
            );

            return;

        }


        /* =====================================
           GET PUBLIC TOP 50
        ====================================== */

        quizStatus.textContent =
            "Fetching the conquerors...";


        const {
            data,
            error
        } = await supabaseClient

            .rpc(
                "get_quiz_leaderboard",
                {
                    target_quiz_id:
                        quizId
                }
            );


        if (error) {

            console.error(
                "Leaderboard RPC error:",
                error
            );


            showError(
                "Unable to load the leaderboard."
            );

            return;

        }


        /* =====================================
           DISPLAY PUBLIC LEADERBOARD
        ====================================== */

        if (
            !data ||
            data.length === 0
        ) {

            quizStatus.textContent =
                "No students have qualified yet.";

            showEmpty();

        }

        else {

            quizStatus.textContent =
                `${data.length} conqueror${data.length === 1 ? "" : "s"} currently ranked`;


            renderTopThree(
                data
            );


            renderRanking(
                data
            );

        }


        /* =====================================
           LOAD PERSONAL RESULT
        ====================================== */

        await loadPersonalResult(
            quizId,
            currentPassMark
        );

    }

    catch (error) {

        console.error(
            "Leaderboard loading error:",
            error
        );


        showError(
            "Something went wrong while loading the leaderboard."
        );

    }

}


/* =========================================
   LOAD PERSONAL RESULT
========================================= */

async function loadPersonalResult(
    quizId,
    currentPassMark
) {

    hidePersonalResult();


    const quiz =
        QUIZZES[quizId];


    if (!quiz) {

        return;

    }


    const storedResultId =
        localStorage.getItem(
            quiz.resultKey
        );


    if (!storedResultId) {

        return;

    }


    /*
       The result ID is the UUID returned
       by submit_quiz_result() after the
       student's quiz was submitted.
    */


    try {

        const {
            data,
            error
        } = await supabaseClient

            .rpc(
                "get_my_quiz_result",
                {
                    target_result_id:
                        storedResultId
                }
            );


        if (error) {

            console.error(
                "Personal result error:",
                error
            );

            return;

        }


        if (
            !data ||
            data.length === 0
        ) {

            return;

        }


        const result =
            Array.isArray(data)
                ? data[0]
                : data;


        if (!result) {

            return;

        }


        /*
           Make absolutely sure the result
           belongs to the course currently
           being viewed.
        */

        if (
            result.quiz_id !==
            quizId
        ) {

            return;

        }


        displayPersonalResult(
            result,
            currentPassMark
        );

    }

    catch (error) {

        console.error(
            "Personal result loading error:",
            error
        );

    }

}


/* =========================================
   DISPLAY PERSONAL RESULT
========================================= */

function displayPersonalResult(
    result,
    currentPassMark
) {

    const score =
        Number(
            result.score ?? 0
        );


    const totalQuestions =
        Number(
            result.total_questions ?? 0
        );


    const percentage =
        Number(
            result.percentage ?? 0
        );


    const rank =
        Number(
            result.rank ?? 0
        );


    personalScore.textContent =
        `${score} / ${totalQuestions}`;


    personalPercentage.textContent =
        `${formatPercentage(percentage)}%`;


    personalRank.textContent =
        rank > 0
            ? `#${rank}`
            : "-";


    personalRankStat.hidden =
        percentage < currentPassMark;


    /*
       BELOW PASS MARK
    */

    if (
        percentage <
        currentPassMark
    ) {

        personalResultHeading.textContent =
            "You Didn't Qualify";


        personalResultIcon.textContent =
            "×";


        personalResultMessage.textContent =
            "You didn't qualify for the leaderboard.";


        personalResultDescription.textContent =
            `A minimum score of ${formatPercentage(currentPassMark)}% is required to qualify.`;

    }


    /*
       PASSED AND TOP 50
    */

    else if (
        rank >= 1 &&
        rank <= 50
    ) {

        personalResultHeading.textContent =
            "You Made the Top 50";


        personalResultIcon.textContent =
            "✓";


        personalResultMessage.textContent =
            `You made the Top 50 at rank #${rank}.`;


        personalResultDescription.textContent =
            "Your result has been recorded on this course leaderboard.";

    }


    /*
       PASSED BUT OUTSIDE TOP 50
    */

    else {

        personalResultHeading.textContent =
            "You Passed";


        personalResultIcon.textContent =
            "✓";


        personalResultMessage.textContent =
            "You passed the quiz, but did not make the Top 50.";


        personalResultDescription.textContent =
            "Keep studying and aim higher on your next attempt.";

    }


    personalResult.hidden =
        false;

}


/* =========================================
   HIDE PERSONAL RESULT
========================================= */

function hidePersonalResult() {

    personalResult.hidden =
        true;

}


/* =========================================
   RESET DISPLAY
========================================= */

function resetLeaderboardDisplay() {

    topThree.innerHTML = "";

    rankingList.innerHTML = "";

    emptyState.hidden = true;

    lockedState.hidden = true;

    hidePersonalResult();

    quizStatus.textContent =
        "Loading leaderboard...";

}


/* =========================================
   TOP THREE
========================================= */

function renderTopThree(
    data
) {

    const first =
        data.find(
            student =>
                Number(student.rank) === 1
        );


    const second =
        data.find(
            student =>
                Number(student.rank) === 2
        );


    const third =
        data.find(
            student =>
                Number(student.rank) === 3
        );


    if (second) {

        topThree.appendChild(
            createTopCard(
                second,
                "second"
            )
        );

    }


    if (first) {

        topThree.appendChild(
            createTopCard(
                first,
                "first"
            )
        );

    }


    if (third) {

        topThree.appendChild(
            createTopCard(
                third,
                "third"
            )
        );

    }

}


/* =========================================
   GET RANK EMBLEM
========================================= */

function getRankIcon(
    rank
) {

    if (rank === 1) {

        return "scholar-supreme.png";

    }


    if (rank === 2) {

        return "book-conqueror.png";

    }


    if (rank === 3) {

        return "general-of-book.png";

    }


    return "";

}


/* =========================================
   CREATE TOP CARD
========================================= */

function createTopCard(
    student,
    position
) {

    const card =
        document.createElement("div");


    card.className =
        `top-card ${position}`;


    const rank =
        Number(student.rank);


    const title =
        student.title ||
        getRankTitle(rank);


    const rankIcon =
        getRankIcon(rank);


    card.innerHTML = `

        <div class="medal">

            <img
                src="${rankIcon}"
                alt="${escapeHTML(title)}"
                class="rank-emblem"
            >

        </div>


        <span class="top-position">
            ${getOrdinal(rank)} PLACE
        </span>


        <div class="top-name">
            ${escapeHTML(student.student_name)}
        </div>


        <div class="top-title">
            ${escapeHTML(title)}
        </div>


        <div class="top-score">
            ${formatPercentage(student.percentage)}
            <span>%</span>
        </div>

    `;


    return card;

}


/* =========================================
   RANKING LIST
========================================= */

function renderRanking(
    data
) {

    const remaining =
        data.filter(
            student =>
                Number(student.rank) > 3
        );


    remaining.forEach(
        student => {

            rankingList.appendChild(
                createRankCard(
                    student
                )
            );

        }
    );

}


/* =========================================
   CREATE RANK CARD
========================================= */

function createRankCard(
    student
) {

    const card =
        document.createElement("div");


    const rank =
        Number(student.rank);


    card.className =
        "rank-card";


    if (rank === 1) {

        card.classList.add(
            "rank-one"
        );

    }

    else if (rank === 2) {

        card.classList.add(
            "rank-two"
        );

    }

    else if (rank === 3) {

        card.classList.add(
            "rank-three"
        );

    }


    const title =
        student.title ||
        getRankTitle(rank);


    card.innerHTML = `

        <div class="rank-number">
            #${rank}
        </div>


        <div class="rank-info">

            <div class="rank-name">
                ${escapeHTML(student.student_name)}
            </div>

            <div class="rank-title">
                ${escapeHTML(title)}
            </div>

        </div>


        <div class="rank-score">

            <strong>
                ${formatPercentage(student.percentage)}%
            </strong>

            <span>
                ${student.score ?? "-"} /
                ${student.total_questions ?? "-"}
            </span>

        </div>

    `;


    return card;

}


/* =========================================
   RANK TITLES
========================================= */

function getRankTitle(
    rank
) {

    if (rank === 1) {

        return "Scholar Supreme";

    }


    if (rank === 2) {

        return "Book Conqueror";

    }


    if (rank === 3) {

        return "General of Book";

    }


    return "Conqueror";

}


/* =========================================
   ORDINAL NUMBERS
========================================= */

function getOrdinal(
    number
) {

    if (
        number % 100 >= 11 &&
        number % 100 <= 13
    ) {

        return `${number}TH`;

    }


    switch (number % 10) {

        case 1:
            return `${number}ST`;

        case 2:
            return `${number}ND`;

        case 3:
            return `${number}RD`;

        default:
            return `${number}TH`;

    }

}


/* =========================================
   FORMAT PERCENTAGE
========================================= */

function formatPercentage(
    value
) {

    const number =
        Number(value);


    if (
        Number.isNaN(number)
    ) {

        return "0";

    }


    return number
        .toFixed(2)
        .replace(
            /\.00$/,
            ""
        );

}


/* =========================================
   EMPTY STATE
========================================= */

function showEmpty() {

    topThree.innerHTML = "";

    rankingList.innerHTML = "";

    emptyState.hidden = false;

    lockedState.hidden = true;

}


/* =========================================
   LOCKED STATE
========================================= */

function showLocked(
    message
) {

    topThree.innerHTML = "";

    rankingList.innerHTML = "";

    emptyState.hidden = true;

    lockedState.hidden = false;

    hidePersonalResult();

    quizStatus.textContent =
        message;

}


/* =========================================
   ERROR STATE
========================================= */

function showError(
    message
) {

    topThree.innerHTML = "";

    rankingList.innerHTML = "";

    emptyState.hidden = true;

    lockedState.hidden = false;

    hidePersonalResult();

    lockedState.querySelector(
        "h3"
    ).textContent =
        "Unable to load leaderboard";

    lockedState.querySelector(
        "p"
    ).textContent =
        message;

}


/* =========================================
   HTML SECURITY
========================================= */

function escapeHTML(
    value
) {

    return String(value ?? "")
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}
