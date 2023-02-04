function categorizeNum(arr) {
    const evens = [];
    const odds = [];
    const primes = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        isEven(num) ? evens.push(num) : odds.push(num);
        if (isPrime(num)) primes.push(num);
    }

    const obj = {
        evens,
        odds,
        primes
    };

    return obj;

}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true;
}

function isEven(num) {
    if (num % 2 === 0) return true;
    else return false;
}

function isOdd(num) {
    if (num % 2 !== 0) return true;
    else return false;
}

console.table(categorizeNum([1, 2, 3, 45, 7, 9, 10, 67, 23]));

console.log(isPrime(49));