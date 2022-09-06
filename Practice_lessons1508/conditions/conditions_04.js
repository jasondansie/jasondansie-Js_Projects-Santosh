"use strict";

/**
Complete the function evenOrOdd such that it returns the string "even"
when the number parameter it receives is even and "odd" otherwise.

Tests
Implements evenOrOdd() for even numbers
Implements evenOrOdd() for odd numbers
/**
 * @param {string} number
 */
function evenOrOdd(number) 
{
    number = 2;
    if (number % 2 == 0) 
    {
        return "even";
    } 
    else 
    {
       return "odd"; 
    }
}

console.log("You entered an " + evenOrOdd(2) + " number.");
console.log("You entered an " + evenOrOdd(9) + " number.");
