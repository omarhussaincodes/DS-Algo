// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in. 
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Examples:-
console.log(areThereDuplicates(1, 2, 3, 4, 5)); // false
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true 

// using multiple pointers pattern
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

function areThereDuplicates(...args) {

    for (let i = 0; i < args.length; i++) {
        for (let j = i + 1; j < args.length; j++) {
            if (args[i] === args[j]) {
                return true;
            }
        }
    }

    return false;
}

// // using frequency counter pattern
// function areThereDuplicates(...args) {
//     // args is an array.
//     const obj = {};
//     for (let item of args) {
//         obj[item] = (obj[item] || 0) + 1;
//     }

//     for (const key in obj) {
//         if (obj[key] !== 1) return true;
//     }

//     return false;
// }

// // using set
// function areThereDuplicates(...args) {
//     return new Set(args).size !== arguments.length;
// }