function lengthOfLastStr(str){
    let arr = str.split(' ');
    const lastLength = arr[arr.length-1];
    return lastLength.length ;
}
console.log(lengthOfLastStr('sourav is a good boy'))