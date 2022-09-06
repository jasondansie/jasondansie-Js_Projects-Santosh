'use strict';

/**
Calculate the sum of the grades array and store it in a variable called sum.

/**
 *
 */
 let grades = [10, 5, 15, 20]

 // calculate the sum of these grades

 let sum = 0;
 grades.reduce((total, current) => {
    sum = total + current;
    return sum;
}, 0);

console.log("sum: ", sum);
