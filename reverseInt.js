function reversedInt(int){
    let result = 0 ;
    while(int != 0){
        let digit = int % 10 ;
        result = result * 10 + digit ;
        int = Math.round(int / 10) ;
    }
    return result ;
}
console.log(reversedInt(123))