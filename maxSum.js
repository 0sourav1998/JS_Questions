function maxSum(num){
    let ans = 0 ;
    for(let i = 0 ; i<num.length ; i++){
        for(let j = 0 ; j<num.length ; j++){
            if(i !== j && eqaulOrNot(num[i],num[j])){
                ans = Math.max(num[i]+num[j],ans)
            }
        }
    }
    return ans ;
}
function eqaulOrNot(n1,n2){
    let num1 = n1.toString().split('');
    let num2 = n2.toString().split('') ;
    let a = Math.max(...num1);
    let b = Math.max(...num2) ;
    return a===b ;
}
console.log(maxSum([51,71,17,24,42]))