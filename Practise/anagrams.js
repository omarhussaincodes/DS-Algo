// ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
// formed from iceman.
// console.log(validAnagram('', '')) // true
// console.log(validAnagram('aaz', 'zza')) // false
// console.log(validAnagram('anagram', 'nagaram')) // true
// console.log(validAnagram("rat", "car")) // false) // false
// console.log(validAnagram('awesome', 'awesom')) // false
// console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(isValidAnagram('texttwisttime', 'timetwisttext')) // true

function validAnagram(str1, str2) {
    const arr1 = str1.split("");
    const arr2 = str2.split("");

    if (arr1.length !== arr2.length) return false;

    const obj1 = {};
    const obj2 = {};

    for (let val of arr1) {
        obj1[val] = (obj1[val] || 0) + 1;
    }

    for (let val of arr2) {
        obj2[val] = (obj2[val] || 0) + 1;
    }

    for (let key in obj1) {
        if (!(key in obj2)) return false;
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;
}

function isValidAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const obj = {};

    for (let letter of str1) {
        (!(obj[letter])) ? obj[letter] = 1 : obj[letter] += 1;
    }

    for (let i = 0; i < str2.length; i++) {
        const letter = str2[i];
        if (!obj[letter]) return false;
        else {
            obj[letter] -= 1;
        }
    }
    return true;
}

function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    if (str1 === "" && str2 === "") return true;

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            const idx = str2.indexOf(str1[i]);
            if (idx !== -1) str2 = str2.replace(str2.charAt(idx), "");
            if (str2.length === 0 || str2 === "") return true;
        }
    }

    return false;
}