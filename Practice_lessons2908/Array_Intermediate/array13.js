'use strict';

/**
Complete the function getFreezingTemperatures such that it returns an array containing
the freezing temperatures (the temperatures that are below 0).

/**
 * @param {number[]} temperatures
 */
function getPositiveTemperatures(temperatures) {
    let freezingTemperatures = temperatures.filter(function(temperature){
        return temperature < 0;  
     });
     
     return freezingTemperatures;
}

// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]
