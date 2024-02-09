function wiggleSequence(arr){
    let increment = 1 ;
    let decrement = 1;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i+1]>arr[i]){
            increment = decrement+1 ;
        }else if(arr[i]>arr[i+1]){
            decrement = increment+1 ;
        }
    }
    return Math.max(increment , decrement)
}
console.log(wiggleSequence([1,6,4,8,11,9,13]))