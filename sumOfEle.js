function subArray(arr,sum){
    for(let i = 0 ; i<arr.length ; i++){
        for(let j = i+1 ; j<arr.length ; j++){
            for(let k = j+1 ; k<arr.length ; k++){
                if(arr[i]+arr[j]+arr[k]===sum){
                    return [i,j,k]
                }
            }
        }
    }
    return null ;
}
console.log(subArray([1,2,3,7,5] , 15))