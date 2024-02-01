function isEasyToPronounce(str){
    let arr = str.split('');
    let count = 0 ;
    let vowels = ['a','e','i','o','u'];
    for(let i = 0 ; i<arr.length ; i++){
        if(!vowels.includes(arr[i])){
            count++;
        }
    }
    if(count >= 4){
        return 'NO'
    }else{
        return 'YES'
    }
}
console.log(isEasyToPronounce('trysit'))