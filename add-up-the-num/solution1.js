'use strict';

/**
 * Calculates the sum of integers from 1 to the given number.
 *
 * @param {number} num - The number up to which the sum is calculated. 
 * @returns {number} The sum from 1 to the given number.
 */


export function addUp(num) {
if (num < 1 || num > 1000) {
    throw new Error('You should provide any positive number between 1 and 1000');   
}
 let result = 0;
 for (let index = 1; index <= num; index++) {
    result += index; 
 }
 return result;       
}