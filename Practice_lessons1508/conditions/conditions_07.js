"use strict";

/**
Write a function named pluralize that:
takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".

/**
 * @param {string}
 */

function pluralize(noun, number) 
{
    switch (number) {
        case 0:
            if (noun == "sheep") 
            {
                return `${number} ${noun}`;
            } 
            else if(noun == "goose")
            {
                return `${number} geese`;
            }
            else if(noun == "mouse")
            {
                return `${number} mice`;
            }
            else
            {
                return `${number} ${noun}'s`;
            }
           
            break;
        
        case 1:
           return `${number} ${noun}`;
            break;

        default:
            if (noun == "sheep") 
            {
                return `${number} ${noun}`;
            } 
            else if(noun == "goose")
            {
                return `${number} geese`;
            }
            else if(noun == "mouse")
            {
                return `${number} mice`;
            }
            else
            {
                return `${number} ${noun}'s`;
            }
            
            break;
    }

}

console.log("I have " + pluralize("cat", 0));
console.log("I have " + pluralize("bird", 1));
console.log("I have " + pluralize("dog", 2));
console.log("I have " + pluralize("sheep", 1));
console.log("I have " + pluralize("sheep", 100));
console.log("I have " + pluralize("mouse", 1));
console.log("I have " + pluralize("mouse", 42));
console.log("I have " + pluralize("goose", 1));
console.log("I have " + pluralize("goose", 5));
console.log("I have " + pluralize("goose", 0));
console.log("I have " + pluralize("mouse", 0));
console.log("I have " + pluralize("sheep", 0));
