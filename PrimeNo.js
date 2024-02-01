function isPrime(n){
    if(n<=1){
        return false ;
    }
    for(let i = 2 ; i<n ; i++){
        if(n%i===0){
            return false ;
        }
    }
    return true ;
}

function finalPrimeList(n){
    let result = [] ;
    for(let i = 2 ; i<n;i++){
        if(isPrime(i)){
            result.push(i)
        }
    }
    return result ;
}
console.log(finalPrimeList(20))