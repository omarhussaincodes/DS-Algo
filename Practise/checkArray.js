// Write a function that takes an array, an integer, and a value (any type)
// the function should check whether the array is of length = the integer parameter
// and display a corresponding message . The function should also search for the
// value and display whether the value exists in the array and, if so how
// many times it appears
checkArray([1, 4, 2, 3, 4], 3, 4);
// //output
// Your array is not size 3.
// The value 4 appears 2 times.

function checkArray(arr, size, value) {
    if (arr.length === 0) return null;

    if (arr.length !== size) console.log(`Your Array is not size ${size}`);
    else console.log(`Your Array is of size ${size}`);

    const count = arr.filter(v => v === value).length;

    if (count) console.log(`The value ${value} appears ${count} times.`);
    else console.log(`The value ${value} isn't present in the array.`);

}