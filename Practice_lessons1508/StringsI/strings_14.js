'use strict';
/**
Complete the function capitalize such that it capitalizes the name parameter it receives.
There's no capitalize method in JavaScript, so you have to write it yourself.

Look at the sample usage to understand what capitalization means, then look at the hints
if it's still not clear.

Tests:
returns a string
returns capitalized word

 * @param {string} word
 */
function capitalize(word) 
{
    let firstCharCapital = word[0].toUpperCase();
    
    let lowercaseWord = word.toLowerCase();
   
    let capitalizedWord = firstCharCapital + lowercaseWord.substring(1);
    return capitalizedWord;
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"
