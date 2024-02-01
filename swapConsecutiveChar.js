function swapConsecutiveChar(str){
    let arr = str.split('')
    for(let i = 0 ; i<arr.length ; i=i+2){
        let temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp ;
    }
    return arr.join('') ;
}
console.log(swapConsecutiveChar('abcdef'));