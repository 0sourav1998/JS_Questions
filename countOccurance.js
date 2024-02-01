function countOccurance(arr){
    let finalArr = [] ;
    let count = 0 ;
    for(let i = 0 ; i<arr.length ; i++){
        for(let j = i+1 ; j<arr.length ; j++){
            if(arr[i]===arr[j]){
                return true ;
            }
        }
    }
    return false ;
}
console.log(myFn([1,2,3,4]))