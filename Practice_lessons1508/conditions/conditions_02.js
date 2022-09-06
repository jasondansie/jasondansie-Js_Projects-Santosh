/**
Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).
Note that the age is provided by the user in a text box (which you can try in the browser tab).
However, when the text box is empty, the function returns NaN. We need to fix that and make it show 0 instead of NaN.

Tests:
Implements getNextAge()
Handles empty text box

 * @param {string} age
 */
function getNextAge(age) 
{
    
    if (age == "") 
    {
        console.log(`The age give was empty.`)
        console.log(`The age is 0.`)
        return 0;
    }

    ageInt = parseInt(age);

    if(ageInt > 0)
    {
        console.log(`The age next year is ${ageInt += 1}.`)
        return ageInt += 1;
    }
    else
    {
        console.log(`The age next year is ${ageInt += 1}.`)
        return 0;
    }
}

getNextAge(prompt(`Enter a number: `)); 