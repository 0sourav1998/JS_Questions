function vowelsCount(str){
    let arr = str.split('');
    let vowels = ['a','e','i','o','u'];
    let count = 0 ;
    for(let i = 0 ; i<arr.length ; i++){
        if(vowels.includes(arr[i])){
            count++;
        }
    }
    return count ;
}
console.log(vowelsCount('sourav'))