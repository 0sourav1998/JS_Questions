function pushZerosToEnd(arr) {
    let sortedArr = arr.sort();
    let zeros = sortedArr.filter(el=>el===0);
    let nonZeros = sortedArr.filter(el=>el!==0);
    return nonZeros.concat(zeros)
    
}
console.log(pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]))