function trailingZeroes(n) {
   
    let result = 1 ;
    for(let i =2 ; i <=n ; i++){
     result = result * i ;
    }
    let count = 0 ;
    while(result % 10 === 0){
        result = result / 10 ;
        count++ ;
    }
    return count ;
 };
 console.log(trailingZeroes(10))