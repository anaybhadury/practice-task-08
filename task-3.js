/**
 * WRITE A FUNCTION TO COUNT THE NUMBER OF VOWELS IN A STRING.
 */

function stringFind (str){
    let smallChar = str.toLowerCase();

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for(char of smallChar){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
let result = stringFind('Bangaldesh');
console.log(result);



















// function getString(string){
//     let lowerCase = string.toLowerCase();

//     let vowels = ['a', 'e', 'i', 'o', 'u'];

//     let count = 0;

//     for(let char of lowerCase){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

// let result = getString("anay");
// console.log(result);
