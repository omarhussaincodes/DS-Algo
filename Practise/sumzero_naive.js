// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. Return an array that
//  includes both values that sum to zero or undefined if a pair does not exist

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3] 
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined

function sumZero(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] !== 0 && arr[j] !== 0) && (arr[i] + arr[j] === 0)) {
                result.push(arr[i], arr[j]);
                break;
            }
        }
        if (result.length > 0) break;
    }

    if (result.length) return result;
    else return undefined;
}