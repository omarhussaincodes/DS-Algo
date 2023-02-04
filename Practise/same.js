// cons : O(n*2)
// nested loop
// not possible to check irrespective of order
function isSame(arr1, arr2) {

    if (arr1.length !== arr2.length) return false;
    let count = 0;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] === arr2[j]) count++;
        }
    }

    if ((count === arr1.length) || (count === arr2.length)) return true;
    else return false;

}

console.log(isSame([1, 2, 3], [4, 1, 9])); // true
console.log(isSame([1, 2, 3], [1, 9])); // false
console.log(isSame([1, 2, 1], [4, 4, 1])); // false

// cons : O(n*2)
// loop - with squaring inside loop
// possible to check irrespective of order
function isSamee(arr1, arr2) {

    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        const correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === 1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
        console.log(arr2);
    }

    return true;
}

console.log(isSamee([1, 2, 3], [4, 1, 9])); // true
console.log(isSamee([1, 2, 3], [1, 9])); // false
console.log(isSamee([1, 2, 1], [4, 4, 1])); // false
