"use strict";

/**
Write a function named greaterNum that:
takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works
(e.g. "The greater number of 5 and 10 is 10.").


/**
 * @param {numbers} 
 */

function greaterNum(num1, num2)
 {
    let biggestNumer = 0;

    if (num1 > num2) 
    {
        biggestNumer = num1;
    } 
    else
    {
        biggestNumer = num2;
    }

    return `The greater number of ${num1} and ${num2} is ${biggestNumer}.`
 }

console.log(greaterNum(5, 10));
console.log(greaterNum(56, 10));
console.log(greaterNum(67, 93));
