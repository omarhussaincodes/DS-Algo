// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));// 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null


// o(n2) - for n number of digits
function maxSubSumArray(arr, num) {
    if (arr.length === 0) return null;
    let max = -Infinity;

    for (let i = 0; i <= (arr.length - num); i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// naive solutions just for 2 consecutive numbers
function maxSubarraySum(arr, n) {
    if (arr.length === 0) return null;

    let sum = [];

    for (let i = 0; i <= arr.length; i++) {
        if ((i + 1) < arr.length) {
            sum.push(arr[i] + arr[i + 1]);
        }
    }

    let max = 0;

    for (let j = 0; j < sum.length; j++) {
        const curr = sum[j];
        if (curr > max) {
            max = curr;
        }
    }

    return max;
}


console.log(maxSubSumArray([1, 2, 5, 2, 8, 1, 5], 4)); // 17

// [1, 2, 5, 2, 8, 1, 5], 4
//  -
