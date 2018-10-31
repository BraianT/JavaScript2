'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// Add your code here
/*const hoursPayment = tasks.map(function (hours) {
  return hours.duration / 60  // takes all values of duration and converts them into Hours
}) .filter(function(hours) {
  return hours >= 2   // filters tasks of 2 hours or longer
}) .map(function(hours) {
  return hours * 125 / 10 // multiply to SEK value, and then divedes by Euro value
}) .reduce(function(sum, hours) {
  return sum+= hours
}, 0) // gets the total earned in euros
*/
const hoursPayment = tasks.map( (hours)=>  hours.duration / 60 ) 
.filter((hours) => hours >= 2 ) 
.map((hours) =>  hours * 125 / 10 ) 
.reduce((sum, hours) => sum+= hours, 0) 

console.log(hoursPayment)