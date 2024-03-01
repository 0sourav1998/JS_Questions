function bazeballGame(arr){
    let result = [] ;
    for(let el of arr){
        if(el==='C'){
            result.pop();
        }else if(el==='D'){
            result.push(2*result[result.length-1])
        }else if(el==='+'){
            result.push(result[result.length-1]+result[result.length-2])
        }else{
            result.push(parseInt(el))
        }
    }
    return result.reduce((sum,total)=>sum+total,0)
    
}
console.log(bazeballGame(["5","-2","4","C","D","9","+","+"])); 


//output - 27