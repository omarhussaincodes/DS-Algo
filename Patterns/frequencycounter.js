// check if same array irrespective of order
// console.log(isSame([1, 2, 3], [4, 1, 9])); // true
// console.log(isSame([1, 2, 3], [1, 9])); // false
// console.log(isSame([1, 2, 1], [4, 4, 1])); // false

function checkIfSame(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    const obj1 = {};
    const obj2 = {};

    for (let val of arr1) {
        obj1[val] = (obj1[val] || 0) + 1;
    }

    for (let val of arr2) {
        obj2[val] = (obj2[val] || 0) + 1;
    }

    for (const key in obj1) {
        if (!(key ** 2 in obj2)) return false;
        if (obj1[key] !== obj2[key * key]) return false;
    }

    return true;
}

console.log(checkIfSame([1, 2, 3, 6], [1, 5, 6, 7])); // false
console.log(checkIfSame([1, 2, 3], [4, 1, 9])); // true
console.log(checkIfSame([1, 2, 3], [1, 9])); // false
console.log(checkIfSame([1, 2, 1], [4, 4, 1])); // false