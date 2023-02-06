// Given a sorted array of integers, write a function called search, 
// that accepts a value and returns the index where the value passed to the function is located.
//  If the value is not found, return -1

console.log(search([1, 2, 3, 4, 5, 6], 4)) // 3 // index
console.log(search([1, 2, 3, 4, 5, 6], 6)) // 5 // index
console.log(search([1, 2, 3, 4, 5, 6], 11)) // -1 // index

function search(arr, value) {
    if (arr.length === 0) return null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }

    return -1;

}