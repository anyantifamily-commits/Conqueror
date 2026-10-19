/* =========================================
   CONQUERORS LABS — LEADERBOARD
========================================= */

const QUIZZES = {
    "bio101-cell-biology": {
        title: "BIO 101",
        settingsQuizId: "bio101-cell-biology",
        databaseQuizId: "bio101-cell-biology",
        resultKey: "conquerorsLabs_BIO101_result_id_v4"
    },

    "chm101": {
        title: "CHM 101",
        settingsQuizId: "chm101",
        databaseQuizId: "chm101-atomic-structure",
        resultKey: "conquerorsLabs_CHM101_result_id_v2"
    },

    "chm101-atomic-structure": {
        title: "CHM 101",
        settingsQuizId: "chm101",
        databaseQuizId: "chm101-atomic-structure",
        resultKey: "conquerorsLabs_CHM101_result_id_v2"
    },

    "phy101": {
        title: "PHY 101",
        settingsQuizId: "phy101",
        databaseQuizId: "phy101",
        resultKey: "conquerorsLabs_PHY101_result_id_v3"
    },

    "math101": {
        title: "MATH 101",
        settingsQuizId: "math101",
        databaseQuizId: "math101",
        resultKey: "conquerorsLabs_MATH101_result_id_v2"
    }
};

let currentQuizId = "bio101-cell-biology";
let leaderboardRequestNumber = 0;

const quizTitle = document.getElementById("quizTitle");
const quizStatus = document.getElementById("quizStatus");
const passMark = document.getElementById("passMark");
const topThree = document.getElementById("topThree");
const rankingList = document.getElementById("rankingList");
const emptyState = document.getElementById("emptyState");
const lockedState = document.getElementById("lockedState");

const personalResult = document.getElementById("personalResult");
const personalResultHeading =
    document.getElementById("personalResultHeading");
const personalResultIcon =
    document.getElementById("personalResultIcon");
const personalResultMessage =
    document.getElementById("personalResultMessage");
const personalResultDescription =
    document.getElementById("personalResultDescription");
const personalScore = document.getElementById("personalScore");
const personalPercentage =
    document.getElementById("personalPercentage");
const personalRank = document.getElementById("personalRank");
const personalRankStat = document.getElementById("personalRankStat");

const courseButtons = document.querySelectorAll(".course-button");

document.addEventListener("DOMContentLoaded", () => {
    setupCourseButtons();

    const initialButton = Array.from(courseButtons).find(
        button => button.dataset.quiz === currentQuizId
    );

    if (initialButton) {
        updateActiveButton(initialButton);
    }

    loadLeaderboard(currentQuizId);
});

/* COURSE BUTTONS */

function setupCourseButtons() {
    courseButtons.forEach(button => {
        button.addEventListener("click", () => {
            const quizId = button.dataset.quiz;

            if (!quizId) {
                console.error(
                    "[Leaderboard] Button is missing its data-quiz attribute."
                );
                return;
            }

            currentQuizId = quizId;
            updateActiveButton(button);
            loadLeaderboard(quizId);
        });
    });
}

function updateActiveButton(activeButton) {
    courseButtons.forEach(button => {
        button.classList.toggle("active", button === activeButton);
    });
}

/* LOAD LEADERBOARD */

async function loadLeaderboard(quizId) {
    const requestNumber = ++leaderboardRequestNumber;
    const quiz = QUIZZES[quizId];

    resetLeaderboardDisplay();

    console.log("[Leaderboard] Selected button ID:", quizId);

    if (!quiz) {
        showError(`Course ID "${quizId}" is not configured in QUIZZES.`);
        return;
    }

    quizTitle.textContent = quiz.title;

    const settingsQuizId = quiz.settingsQuizId || quiz.databaseQuizId;
    const databaseQuizId = quiz.databaseQuizId;

    console.log("[Leaderboard] Settings quiz ID:", settingsQuizId);
    console.log("[Leaderboard] Results quiz ID:", databaseQuizId);

    if (
        typeof supabaseClient === "undefined" ||
        !supabaseClient
    ) {
        showError(
            "Supabase is unavailable. Check supabase.js and its script order."
        );
        return;
    }

    quizStatus.textContent = "Loading leaderboard...";

    try {
        const {
            data: settings,
            error: settingsError
        } = await supabaseClient
            .from("leaderboard_settings")
            .select(
                "quiz_id, quiz_title, leaderboard_enabled, pass_mark"
            )
            .eq("quiz_id", settingsQuizId)
            .maybeSingle();

        if (requestNumber !== leaderboardRequestNumber) return;

        console.log("[Leaderboard] Settings:", settings);
        console.log("[Leaderboard] Settings error:", settingsError);

        if (settingsError) {
            showError(`Settings error: ${settingsError.message}`);
            return;
        }

        if (!settings) {
            showLocked(
                `No leaderboard settings found for "${settingsQuizId}".`
            );
            return;
        }

        quizTitle.textContent = quiz.title;

        const currentPassMark = Number(settings.pass_mark ?? 50);
        passMark.textContent = `${currentPassMark}%`;

        const enabled =
            settings.leaderboard_enabled === true ||
            settings.leaderboard_enabled === "true";

        if (!enabled) {
            showLocked(
                `The ${quiz.title} leaderboard is currently locked.`
            );
            return;
        }

        quizStatus.textContent = "Fetching the conquerors...";

        const {
            data,
            error
        } = await supabaseClient.rpc("get_quiz_leaderboard", {
            target_quiz_id: databaseQuizId
        });

        if (requestNumber !== leaderboardRequestNumber) return;

        console.log("[Leaderboard] RPC quiz ID:", databaseQuizId);
        console.log("[Leaderboard] Returned students:", data);
        console.log("[Leaderboard] RPC error:", error);

        if (error) {
            showError(`Leaderboard query failed: ${error.message}`);
            return;
        }

        if (!Array.isArray(data)) {
            showError("The leaderboard returned an unexpected response.");
            return;
        }

        if (data.length === 0) {
            quizStatus.textContent = "No qualifying students yet.";
            showEmpty();
        } else {
            quizStatus.textContent =
                `${data.length} conqueror${data.length === 1 ? "" : "s"} ranked`;

            renderTopThree(data);
            renderRanking(data);
        }

        await loadPersonalResult(
            quiz,
            currentPassMark,
            requestNumber
        );

    } catch (error) {
        if (requestNumber !== leaderboardRequestNumber) return;

        console.error("[Leaderboard] Loading exception:", error);

        showError(
            `Leaderboard error: ${error.message || String(error)}`
        );
    }
}

/* PERSONAL RESULT */

async function loadPersonalResult(
    quiz,
    currentPassMark,
    requestNumber
) {
    hidePersonalResult();

    const storedResultId = localStorage.getItem(quiz.resultKey);

    if (!storedResultId) return;

    try {
        const {
            data,
            error
        } = await supabaseClient.rpc("get_my_quiz_result", {
            target_result_id: storedResultId
        });

        if (requestNumber !== leaderboardRequestNumber) return;

        console.log("[Leaderboard] Personal result:", data);
        console.log("[Leaderboard] Personal result error:", error);

        if (error || !data) return;

        const result = Array.isArray(data) ? data[0] : data;

        if (!result) return;

        if (result.quiz_id !== quiz.databaseQuizId) return;

        displayPersonalResult(result, currentPassMark);

    } catch (error) {
        console.error(
            "[Leaderboard] Personal result exception:",
            error
        );
    }
}

function displayPersonalResult(result, currentPassMark) {
    const score = Number(result.score ?? 0);
    const totalQuestions = Number(result.total_questions ?? 0);
    const percentage = Number(result.percentage ?? 0);
    const rank = Number(result.rank ?? 0);

    personalScore.textContent = `${score} / ${totalQuestions}`;
    personalPercentage.textContent =
        `${formatPercentage(percentage)}%`;

    personalRank.textContent = rank > 0 ? `#${rank}` : "-";
    personalRankStat.hidden = percentage < currentPassMark;

    if (percentage < currentPassMark) {
        personalResultHeading.textContent = "You Didn't Qualify";
        personalResultIcon.textContent = "×";
        personalResultMessage.textContent =
            "You didn't qualify for the leaderboard.";
        personalResultDescription.textContent =
            `A minimum score of ${formatPercentage(currentPassMark)}% is required.`;

    } else if (rank >= 1 && rank <= 50) {
        personalResultHeading.textContent = "You Made the Top 50";
        personalResultIcon.textContent = "✓";
        personalResultMessage.textContent =
            `You made the Top 50 at rank #${rank}.`;
        personalResultDescription.textContent =
            "Your result has been recorded on this course leaderboard.";

    } else {
        personalResultHeading.textContent = "You Passed";
        personalResultIcon.textContent = "✓";
        personalResultMessage.textContent =
            "You passed, but did not make the Top 50.";
        personalResultDescription.textContent =
            "Keep studying and aim higher on your next attempt.";
    }

    personalResult.hidden = false;
}

function hidePersonalResult() {
    if (personalResult) personalResult.hidden = true;
}

/* RESET */

function resetLeaderboardDisplay() {
    if (topThree) topThree.replaceChildren();
    if (rankingList) rankingList.replaceChildren();

    if (emptyState) emptyState.hidden = true;
    if (lockedState) lockedState.hidden = true;

    hidePersonalResult();

    if (quizStatus) quizStatus.textContent = "Loading leaderboard...";
    if (passMark) passMark.textContent = "50%";
}

/* TOP THREE */

function renderTopThree(data) {
    const first = data.find(student => Number(student.rank) === 1);
    const second = data.find(student => Number(student.rank) === 2);
    const third = data.find(student => Number(student.rank) === 3);

    if (second) topThree.appendChild(createTopCard(second, "second"));
    if (first) topThree.appendChild(createTopCard(first, "first"));
    if (third) topThree.appendChild(createTopCard(third, "third"));
}

function getRankIcon(rank) {
    if (rank === 1) return "scholar-supreme.png";
    if (rank === 2) return "book-conqueror.png";
    if (rank === 3) return "general-of-book.png";
    return "";
}

function createTopCard(student, position) {
    const card = document.createElement("div");
    card.className = `top-card ${position}`;

    const rank = Number(student.rank);
    const title = student.title || getRankTitle(rank);
    const rankIcon = getRankIcon(rank);

    const medal = document.createElement("div");
    medal.className = "medal";

    if (rankIcon) {
        const image = document.createElement("img");
        image.src = rankIcon;
        image.alt = title;
        image.className = "rank-emblem";
        medal.appendChild(image);
    }

    const positionLabel = document.createElement("span");
    positionLabel.className = "top-position";
    positionLabel.textContent = `${getOrdinal(rank)} PLACE`;

    const name = document.createElement("div");
    name.className = "top-name";
    name.textContent = student.student_name ?? "Student";

    const titleElement = document.createElement("div");
    titleElement.className = "top-title";
    titleElement.textContent = title;

    const score = document.createElement("div");
    score.className = "top-score";
    score.append(document.createTextNode(formatPercentage(student.percentage)));

    const percent = document.createElement("span");
    percent.textContent = "%";
    score.appendChild(percent);

    card.append(medal, positionLabel, name, titleElement, score);

    return card;
}

/* REMAINING RANKS */

function renderRanking(data) {
    data
        .filter(student => Number(student.rank) > 3)
        .forEach(student => {
            rankingList.appendChild(createRankCard(student));
        });
}

function createRankCard(student) {
    const card = document.createElement("div");
    const rank = Number(student.rank);

    card.className = "rank-card";

    if (rank === 1) card.classList.add("rank-one");
    else if (rank === 2) card.classList.add("rank-two");
    else if (rank === 3) card.classList.add("rank-three");

    const title = student.title || getRankTitle(rank);

    const rankNumber = document.createElement("div");
    rankNumber.className = "rank-number";
    rankNumber.textContent = `#${rank}`;

    const info = document.createElement("div");
    info.className = "rank-info";

    const name = document.createElement("div");
    name.className = "rank-name";
    name.textContent = student.student_name ?? "Student";

    const titleElement = document.createElement("div");
    titleElement.className = "rank-title";
    titleElement.textContent = title;

    info.append(name, titleElement);

    const score = document.createElement("div");
    score.className = "rank-score";

    const percentage = document.createElement("strong");
    percentage.textContent = `${formatPercentage(student.percentage)}%`;

    const details = document.createElement("span");
    details.textContent =
        `${student.score ?? "-"} / ${student.total_questions ?? "-"}`;

    score.append(percentage, details);
    card.append(rankNumber, info, score);

    return card;
}

/* TITLES AND FORMATTING */

function getRankTitle(rank) {
    if (rank === 1) return "Scholar Supreme";
    if (rank === 2) return "Book Conqueror";
    if (rank === 3) return "General of Book";
    return "Conqueror";
}

function getOrdinal(number) {
    if (number % 100 >= 11 && number % 100 <= 13) {
        return `${number}TH`;
    }

    switch (number % 10) {
        case 1: return `${number}ST`;
        case 2: return `${number}ND`;
        case 3: return `${number}RD`;
        default: return `${number}TH`;
    }
}

function formatPercentage(value) {
    const number = Number(value);

    if (!Number.isFinite(number)) return "0";

    return number.toFixed(2).replace(/\.00$/, "");
}

/* STATES */

function showEmpty() {
    if (topThree) topThree.replaceChildren();
    if (rankingList) rankingList.replaceChildren();

    if (emptyState) emptyState.hidden = false;
    if (lockedState) lockedState.hidden = true;
}

function showLocked(message) {
    if (topThree) topThree.replaceChildren();
    if (rankingList) rankingList.replaceChildren();

    if (emptyState) emptyState.hidden = true;
    if (lockedState) lockedState.hidden = false;

    hidePersonalResult();

    if (quizStatus) quizStatus.textContent = message;

    const heading = lockedState?.querySelector("h3");
    const paragraph = lockedState?.querySelector("p");

    if (heading) heading.textContent = "Leaderboard unavailable";
    if (paragraph) paragraph.textContent = message;
}

function showError(message) {
    console.error("[Leaderboard] Error:", message);

    if (topThree) topThree.replaceChildren();
    if (rankingList) rankingList.replaceChildren();

    if (emptyState) emptyState.hidden = true;
    if (lockedState) lockedState.hidden = false;

    hidePersonalResult();

    if (quizStatus) quizStatus.textContent = message;

    const heading = lockedState?.querySelector("h3");
    const paragraph = lockedState?.querySelector("p");

    if (heading) heading.textContent = "Unable to load leaderboard";
    if (paragraph) paragraph.textContent = message;
}