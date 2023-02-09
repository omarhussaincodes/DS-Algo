function swap(arr, i, j) {
    if ((i > arr.length - 1) || (j > arr.length - 1)) return "Out of bound Index";
    
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}

console.log(swap([1, 2, 3, 4, 5], 0, 2));