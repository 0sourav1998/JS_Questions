function findDublicates(arr){
    let result = [] ;
    for(let i = 0 ; i<arr.length ; i++){
        for(let j = i+1 ; j<arr.length ; j++){
            if(arr[i]===arr[j+1]){
                result.push(arr[i])
            }
        }
    }
    if(result.length===0){
        return -1 ;
    }else{
         return result ;
    }
}
console.log(findDublicates([1,2,3,4,1,2]))