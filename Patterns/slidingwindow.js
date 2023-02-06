// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));// 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

function maxSubarraySum(arr, num) {
    if (arr.length === 0) return null;
    let tempSum = 0;
    let maxSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let j = num; j < arr.length; j++) {
        tempSum = tempSum - arr[j - num] + arr[j];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

// [1, 2, 5, 2, 8, 1, 5], 4