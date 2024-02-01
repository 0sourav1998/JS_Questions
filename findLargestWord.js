function findLargestWord(str){
    let arr = str.split(' ');
    let maxLength = 0 ;
    for(let i = 0 ; i<arr.length ; i++){
        let length = arr[i].length ;
        if(length>maxLength){
            maxLength = length ; 
        }
    }
    return maxLength ;
}
console.log(findLargestWord('sourav is a good boy'))