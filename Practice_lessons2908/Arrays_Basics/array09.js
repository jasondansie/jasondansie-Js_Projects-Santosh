'use strict';

/**
Complete the function sumGrades such that it returns the sum of all the grades
it receives as a parameter.

/**
 * @param {number[]} grades
 */
function sumGrades(grades) {
    let finalGrade = 0;
    grades.forEach(grade => {
        finalGrade += grade;
    });
    return finalGrade;
}

// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54
