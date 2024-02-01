function fizzbuzz(num){
    let modifiedArr = [] ;
    for(let i = 1 ; i<num ; i++){
        if(i % 3 ===0){
            modifiedArr.push('Fizz')
        }else if(i % 4 === 0){
            modifiedArr.push('Buzz')
        }else if (i%4===0 && i%3===0){
            modifiedArr.push('FizzBuzz')
        }else{
            modifiedArr.push(i)
        }
    }
    return modifiedArr ;
}
console.table(fizzbuzz(20))