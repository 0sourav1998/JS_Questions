function romanToInteger(s){
    const myMap = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    let result = 0 ;
    for(let i = 0 ; i<s.length ; i=i+1){
     let curr = myMap[s[i]];
     let next = (i + 1 < s.length) ? myMap[s[i + 1]] : 0;
     if(curr>=next){
         result = result + (curr + next);
         i++ ;
     }else{
         result = result + (next - curr);
         i++ ;

     }
    }
    return result ;
}
console.log(romanToInteger('XXXIIIX'))