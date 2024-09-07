/**
 * WRITE A FUNCTION TO CONVERT TEMPERATURE FROM CELSIUS TO FARENHEIT.
 */

function celsToFaren(celsius){
    return (celsius * (9 / 5)) + 32;
}
const tempCelsius = 1;
const tempFarenheit = celsToFaren(tempCelsius);
console.log(tempFarenheit);