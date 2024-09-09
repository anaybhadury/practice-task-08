/**
 * GENERATE A RANDOM NUMBER BETWEEN 10 TO 20.
 */

function getRandomNumber (min, max){
    return Math.floor(Math.random() * (max-min+1))+min;
}
let result = getRandomNumber(10, 20);
console.log(result);