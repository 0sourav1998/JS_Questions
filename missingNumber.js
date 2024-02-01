function missingNoArray(arr){
    const sortedArr = arr.sort((a,b)=>a-b)
    for(let i = 0 ; i<sortedArr.length ; i++){
        if(sortedArr[i+1]-sortedArr[i]>1){
            return arr[i]+1
        }
    }
    return -1 ;
}
console.log(missingNoArray([6,1,2,8,3,4,7,10,5]))