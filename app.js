// TODO 1: Complete the function as per the definition given below (Make sure that the name of the function is 'convertArrToStr'.)

/**
 * Function to convert the given array to string
 * @param {*} arr - input array which needs to be converted to string
 * @param {*} delimiter - delimiter which separates elements of the array
 * @returns {string} array converted to string
 */
function convertArrToStr(arr,delimiter) {
    let result= "" ;   
    arr.map( element => {
           result += (element + delimiter) ; 
       })
       result = result.substring(0,(result.length-1));
       return result;
}


// TODO 2: Export the function convertArrToStr defined above


// WARNING: DO NOT EDIT THE CODE GIVEN BELOW (If you fail to do so, your solution will not pass the test cases!)
console.log(convertArrToStr([1, 2, 3, 4, 5], ","));
console.log(convertArrToStr(["Alpha", "Beta", "Gamma"], "-"));