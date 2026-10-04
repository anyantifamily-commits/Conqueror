/* =========================================
   CONQUERORS LABS
   CGPA CALCULATOR
========================================= */


/* =========================================
   GRADE SYSTEM
========================================= */

const GRADE_POINTS = {

    A: 5,

    B: 4,

    C: 3,

    D: 2,

    E: 1,

    F: 0

};


/* =========================================
   ELEMENTS
========================================= */

const courseList =
    document.getElementById("courseList");

const addCourseButton =
    document.getElementById("addCourseButton");

const calculateButton =
    document.getElementById("calculateButton");

const resetButton =
    document.getElementById("resetButton");

const totalUnitsElement =
    document.getElementById("totalUnits");

const totalPointsElement =
    document.getElementById("totalPoints");

const gpaElement =
    document.getElementById("gpaValue");

const semesterList =
    document.getElementById("semesterList");

const addSemesterButton =
    document.getElementById("addSemesterButton");

const cgpaElement =
    document.getElementById("cgpaValue");


/* =========================================
   COURSE COUNTER
========================================= */

let courseNumber = 0;


/* =========================================
   SEMESTER COUNTER
========================================= */

let semesterNumber = 0;


/* =========================================
   CREATE COURSE
========================================= */

function addCourse(
    courseName = "",
    unit = "",
    grade = ""
) {

    courseNumber++;


    const row =
        document.createElement("div");

    row.className = "course-row";

    row.dataset.course =
        courseNumber;


    row.innerHTML = `

        <input
            type="text"
            class="course-input"
            placeholder="Course name"
            value="${courseName}"
            aria-label="Course name"
        >


        <input
            type="number"
            class="unit-input"
            placeholder="0"
            min="0"
            step="1"
            value="${unit}"
            aria-label="Course unit"
        >


        <select
            class="grade-input"
            aria-label="Course grade"
        >

            <option value="">
                Grade
            </option>

            <option value="A"
                ${grade === "A" ? "selected" : ""}>
                A
            </option>

            <option value="B"
                ${grade === "B" ? "selected" : ""}>
                B
            </option>

            <option value="C"
                ${grade === "C" ? "selected" : ""}>
                C
            </option>

            <option value="D"
                ${grade === "D" ? "selected" : ""}>
                D
            </option>

            <option value="E"
                ${grade === "E" ? "selected" : ""}>
                E
            </option>

            <option value="F"
                ${grade === "F" ? "selected" : ""}>
                F
            </option>

        </select>


        <div class="point-display">
            0.00
        </div>


        <button
            type="button"
            class="remove-course"
            aria-label="Remove course"
        >
            ×
        </button>

    `;


    courseList.appendChild(row);


    /* =================================
       INPUT EVENTS
    ================================= */

    const unitInput =
        row.querySelector(".unit-input");

    const gradeInput =
        row.querySelector(".grade-input");


    unitInput.addEventListener(
        "input",
        () => {

            updateCoursePoint(row);

            calculateGPA();

        }
    );


    gradeInput.addEventListener(
        "change",
        () => {

            updateCoursePoint(row);

            calculateGPA();

        }
    );


    /* =================================
       REMOVE COURSE
    ================================= */

    const removeButton =
        row.querySelector(".remove-course");


    removeButton.addEventListener(
        "click",
        () => {

            row.remove();

            calculateGPA();

        }
    );


    updateCoursePoint(row);

}


/* =========================================
   UPDATE COURSE POINT
========================================= */

function updateCoursePoint(row) {

    const unitInput =
        row.querySelector(".unit-input");

    const gradeInput =
        row.querySelector(".grade-input");

    const pointDisplay =
        row.querySelector(".point-display");


    const unit =
        Number(unitInput.value) || 0;


    const grade =
        gradeInput.value;


    const gradePoint =
        GRADE_POINTS[grade];


    if (
        !grade ||
        gradePoint === undefined ||
        unit <= 0
    ) {

        pointDisplay.textContent =
            "0.00";

        return;

    }


    const weightedPoint =
        unit * gradePoint;


    pointDisplay.textContent =
        weightedPoint.toFixed(2);

}


/* =========================================
   CALCULATE GPA
========================================= */

function calculateGPA() {

    const rows =
        courseList.querySelectorAll(
            ".course-row"
        );


    let totalUnits = 0;

    let totalPoints = 0;


    rows.forEach(row => {

        const unitInput =
            row.querySelector(".unit-input");

        const gradeInput =
            row.querySelector(".grade-input");


        const unit =
            Number(unitInput.value) || 0;


        const grade =
            gradeInput.value;


        const gradePoint =
            GRADE_POINTS[grade];


        if (
            unit > 0 &&
            gradePoint !== undefined
        ) {

            totalUnits += unit;

            totalPoints +=
                unit * gradePoint;

        }

    });


    let gpa = 0;


    if (totalUnits > 0) {

        gpa =
            totalPoints / totalUnits;

    }


    /* =================================
       DISPLAY RESULTS
    ================================= */

    totalUnitsElement.textContent =
        totalUnits;


    totalPointsElement.textContent =
        totalPoints.toFixed(2);


    gpaElement.textContent =
        gpa.toFixed(2);


    /* =================================
       VISUAL GPA FEEDBACK
    ================================= */

    updateGPAAppearance(gpa);


    return {

        totalUnits,

        totalPoints,

        gpa

    };

}


/* =========================================
   GPA VISUAL FEEDBACK
========================================= */

function updateGPAAppearance(gpa) {

    const highlightBox =
        document.querySelector(
            ".summary-box.highlight"
        );


    if (!highlightBox) return;


    if (gpa >= 4.5) {

        highlightBox.style.boxShadow =
            "0 0 30px rgba(141,226,181,0.12)";

    }

    else if (gpa >= 3.5) {

        highlightBox.style.boxShadow =
            "0 0 25px rgba(141,226,181,0.07)";

    }

    else {

        highlightBox.style.boxShadow =
            "none";

    }

}


/* =========================================
   ADD SEMESTER
========================================= */

function addSemester(
    semesterName = "",
    semesterGPA = "",
    semesterUnits = ""
) {

    semesterNumber++;


    const row =
        document.createElement("div");

    row.className =
        "semester-row";

    row.dataset.semester =
        semesterNumber;


    row.innerHTML = `

        <input
            type="text"
            class="semester-name"
            placeholder="Semester ${semesterNumber}"
            value="${semesterName}"
            aria-label="Semester name"
        >


        <input
            type="number"
            class="semester-gpa"
            placeholder="GPA"
            min="0"
            max="5"
            step="0.01"
            value="${semesterGPA}"
            aria-label="Semester GPA"
        >


        <input
            type="number"
            class="semester-units"
            placeholder="Units"
            min="0"
            step="1"
            value="${semesterUnits}"
            aria-label="Semester units"
        >


        <button
            type="button"
            class="remove-semester"
            aria-label="Remove semester"
        >
            ×
        </button>

    `;


    semesterList.appendChild(row);


    /* =================================
       INPUT EVENTS
    ================================= */

    const gpaInput =
        row.querySelector(".semester-gpa");

    const unitsInput =
        row.querySelector(".semester-units");


    gpaInput.addEventListener(
        "input",
        calculateCGPA
    );


    unitsInput.addEventListener(
        "input",
        calculateCGPA
    );


    /* =================================
       REMOVE SEMESTER
    ================================= */

    const removeButton =
        row.querySelector(".remove-semester");


    removeButton.addEventListener(
        "click",
        () => {

            row.remove();

            calculateCGPA();

        }
    );


    calculateCGPA();

}


/* =========================================
   CALCULATE CGPA
========================================= */

function calculateCGPA() {

    const rows =
        semesterList.querySelectorAll(
            ".semester-row"
        );


    let totalSemesterUnits = 0;

    let totalWeightedGPA = 0;


    rows.forEach(row => {

        const gpaInput =
            row.querySelector(".semester-gpa");

        const unitsInput =
            row.querySelector(".semester-units");


        let gpa =
            Number(gpaInput.value) || 0;


        let units =
            Number(unitsInput.value) || 0;


        /* Prevent invalid GPA values */

        if (gpa < 0) {

            gpa = 0;

        }


        if (gpa > 5) {

            gpa = 5;

        }


        if (units < 0) {

            units = 0;

        }


        if (
            units > 0 &&
            gpa >= 0
        ) {

            totalSemesterUnits +=
                units;


            totalWeightedGPA +=
                gpa * units;

        }

    });


    let cgpa = 0;


    if (totalSemesterUnits > 0) {

        cgpa =
            totalWeightedGPA /
            totalSemesterUnits;

    }


    cgpaElement.textContent =
        cgpa.toFixed(2);

}


/* =========================================
   RESET CALCULATOR
========================================= */

function resetCalculator() {

    /* Remove all courses */

    courseList.innerHTML = "";


    /* Remove all semesters */

    semesterList.innerHTML = "";


    courseNumber = 0;

    semesterNumber = 0;


    /* Reset GPA display */

    totalUnitsElement.textContent =
        "0";

    totalPointsElement.textContent =
        "0.00";

    gpaElement.textContent =
        "0.00";


    cgpaElement.textContent =
        "0.00";


    const highlightBox =
        document.querySelector(
            ".summary-box.highlight"
        );


    if (highlightBox) {

        highlightBox.style.boxShadow =
            "none";

    }


    /* Recreate starter rows */

    addCourse();

    addCourse();

    addCourse();

    addSemester();

}


/* =========================================
   BUTTON EVENTS
========================================= */

if (addCourseButton) {

    addCourseButton.addEventListener(
        "click",
        () => {

            addCourse();

        }
    );

}


if (calculateButton) {

    calculateButton.addEventListener(
        "click",
        () => {

            const result =
                calculateGPA();


            calculateCGPA();


            /* Small visual feedback */

            calculateButton.textContent =
                "CALCULATED ✓";


            setTimeout(
                () => {

                    calculateButton.innerHTML =
                        `CALCULATE GPA <span>→</span>`;

                },
                1200
            );

        }
    );

}


if (resetButton) {

    resetButton.addEventListener(
        "click",
        resetCalculator
    );

}


if (addSemesterButton) {

    addSemesterButton.addEventListener(
        "click",
        () => {

            addSemester();

        }
    );

}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* Starter courses */

        addCourse();

        addCourse();

        addCourse();


        /* Starter semester */

        addSemester();

    }
);