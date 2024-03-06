function findNumberOfTriangles(arr, n){
    arr.sort()
    let count = 0 ;
    for(let i = n-1 ; i>=2 ; i--){
        let left = 0 ;
        let right = i-1 ;
        while(left<right){
            if(arr[left]+arr[right]>arr[i]){
                count = count + right -left;
                right-- ;
            }else{
                left++ ;
            }
        }
    }
    return count ;
}
console.log(findNumberOfTriangles([6, 4, 9, 7, 8,9,15,11,10,27,19],11)) ;