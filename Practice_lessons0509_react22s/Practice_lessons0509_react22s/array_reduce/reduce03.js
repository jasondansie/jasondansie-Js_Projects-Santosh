'use strict';

/**
Complete the function such that it returns the sum of the numbers it receives as a parameter.
/**
 *
 */

 /**
 * @param {number[]} numbers
 */
let sum = 0;
const sumNumbers = numbers => {
    
    numbers.reduce((total, current) => {
        sum = total + current;
        return sum;
    }, 0);
    return sum;
}

// Sample usage - do not modify
console.log(sumNumbers([10, 20, 30])) // 60
console.log(sumNumbers([2, 4, 2, 10])) // 18
