'use strict';

/**
Complete the function multiplyNumbers such that it multiplies every number from the numbers parameter it receives.
/**
 *
 */

 /**
  * @param {number[]} numbers
  */
 let results = 0;

 const multiplyNumbers = numbers => {
    numbers.reduce((total, current) => {
        results = total * current;
        return results;
    }, 0);
    return results;
 }

 // Sample usage - do not modify
 console.log(multiplyNumbers([10, 20, 30])) // 6000
 console.log(multiplyNumbers([2, 4, 2, 10])) // 160
