function isMultipleOfFive(n){
    let digit = n.toString().split('');
    return digit.includes('5')||digit.includes('0')
}
console.log(isMultipleOfFive(5))