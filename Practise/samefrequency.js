// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:
console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14))// false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222))// false

function sameFrequency(num1, num2) {
    const arr1 = num1.toString().split("");
    const arr2 = num2.toString().split("");

    if (arr1.length !== arr2.length) return false;

    const obj1 = {};
    const obj2 = {};

    for (let item of arr1) {
        obj1[item] = (obj1[item] || 0) + 1;
    }

    for (let item of arr2) {
        obj2[item] = (obj2[item] || 0) + 1;
    }

    for (let key in obj1) {
        if (!key in obj2) return false;
        else if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true;

}