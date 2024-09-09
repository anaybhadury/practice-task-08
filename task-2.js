/**
 * YOU ARE GIVEN AN ARRAY OF NUMBERS. COUNT HOW MANY TIMES THE A NUMBER IS REPEATED IN THE ARRAY.
 * SAMPLE-INPUT: NUMBERS = [5, 6, 11, 12, 98, 5]
 * FIND: 5
 * OUTPUT: 2
 * SAMPLE-INPUT: 
 * NUMBERS = [5, 6, 11, 12, 98, 5]
 * FIND: 25
 * OUTPUT: 0
 */

// var numbers = [5, 6, 11, 12, 98, 5];
// let index = numbers.filter(number => number === 5).length;
// console.log(index);

// var numbers = [5, 6, 11, 12, 98, 5];
// var find = numbers.filter(number => number === 25).length;
// console.log(find);

/**
 * YOU HAVE A SOME ARRAY AND SIMILER TYPES OF NUMBER HAVE HOW DEFIND 
 * INPUT NUMBERS = [4, 3, 2, 3, 4, 6, 6, 5, 6];
 * FIND = 3
 * OUTPUT = 2;
 */

let numbers = [4, 3, 2, 3, 4, 6, 6, 5, 6];
let findOut = numbers.filter(number => number === 6).length
console.log(findOut);
