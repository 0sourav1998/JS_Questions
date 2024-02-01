function myFn(arr,k){
    let left = 0 ; 
    let right = arr.length -1 ;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        let x = arr[mid]-(mid+1)
    if(x<k){
        left = mid+1 ;
    }else{
        right = left -1 ;
    }
    }
    return left+k
}
console.log(myFn([2, 3, 4, 7, 11], 5))