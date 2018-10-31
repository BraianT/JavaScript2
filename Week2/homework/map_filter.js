'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here
/* 
const newNumbers = numbers.filter(function(odd){
    return odd % 2 !== 0 // goes through numbers array and filters odd numbers
} ).map(function(odd) {
    return odd *2 // goes through  the odd numbers and multipies them times 2 
}) */

//arrow function
const newNumbers = numbers.filter((odd) => odd % 2 !== 0 ) .map ((odd) => odd *2)

/*const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers.push(numbers[i] * 2);
  }
}
*/
console.log('The doubled numbers are', newNumbers); // ==> [2, 6]