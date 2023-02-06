// Given a sorted array of integers, write a function called search, 
// that accepts a value and returns the index where the value passed to the function is located.
//  If the value is not found, return -1

console.log(search([1, 2, 3, 4, 5, 6, 9], 4)) // 3 // index
console.log(search([1, 2, 3, 4, 5, 6], 6)) // 5 // index
console.log(search([1, 2, 3, 4, 5, 6], 11)) // -1 // index

// since sorted array of integer
// if searchValue > arr[middle] -- go front change min = middleIdx + 1 and max = arr.length -1
// else go backwards - change min = 0 and max = middleIdx - 1
function search(array, val) {

    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middleIdx = Math.floor((min + max) / 2);

        if (array[middleIdx] < val) {
            min = middleIdx + 1;
        }
        else if (array[middleIdx] > val) {
            max = middleIdx - 1;
        }
        else {
            return middleIdx;
        }
    }

    return -1;
}