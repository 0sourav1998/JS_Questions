function backspaceCompare(s,t){
    let result = [] ;
    function hashCheck(str){
        for(let ch of str){
            if(ch==='#'){
                result.pop();
            }else{
                result.push(ch);
            }
        }
        return result.join('') ;
        console.log(result)
    }
    let proceedS = hashCheck(s) ;
    let proceedT = hashCheck(t);
    return proceedS===proceedT ;
}
let s = "a#c" ;
let t = "b"
const result = backspaceCompare(s,t)
console.log(result)