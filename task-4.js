/**
 * WRITE A FUNCTION TO FIND THE LONGEST WORD IN A GIVEN STRING.
 * SAMPLE-INPUT: I AM LEARNING PROGRAMMING TO BECOME A PROGRAMMER
 * SAMPLE-OUTPUT: PROGRAMMING
 */
// function findLongestWord(long){
//     let words = long.split(' ');
//     let longestWord = '';

//     for(let word of words){
//         if(word.length > longestWord.length){
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// let result = findLongestWord('i am learning programming to become a programmer');
// console.log(result);

// -------------------------------

// function longestWord(long){
//     let words = long.split(' ');
//     let longested = '';
    
//     for(let word of words){
//         if(word.length > longested.length){
//             longested = word;
//         }
//     }
//     return longested;
// }
// let longest = longestWord('i am learning programming to become a programmer');
// console.log(longest);

// -----------------------------

/**
 * WRITE A FUNCTION TO FIND THE SMALLEST WORD IN A GIVEN STRING.
 * SAMPLE-INPUT: I AM LEARNING PROGRAMMING TO BECOME A PROGRAMMER
 * SAMPLE-OUTPUT: PROGRAMMING
 */
function lowestWord (low){
    let words = low.split(' ');
    let lowestedWord = words[0];

    for(let word of words){
        if(word.length < lowestedWord.length){
            lowestedWord = word;
        }
    }
    return lowestedWord;
}
let result = lowestWord('i am learning programming to become a programmer');
console.log(result);












// function findSmallestWord (small){
//     let words = small.split(' ');
//     let smallestWord = words[0];

//     for(let word of words){
//         if(word.length < smallestWord.length ){
//             smallestWord = word;
//         }
//     }
//     return smallestWord;
// }
// let result = findSmallestWord('i am learning programming to become a programmer');
// console.log(result);