function rotateArr (arr,k){
    let size = arr.length  ;
    if(k>size){
       k = k%size ; 
    }
    
    const slicedArr =  arr.slice(size-k,size);
    // console.log(slicedArr);
    arr.unshift(...slicedArr)
    return arr ;
}
console.log(rotateArr([77,29,87,15,16,76,43],10));