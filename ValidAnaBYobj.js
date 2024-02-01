function canConstruct(str1,str2){
    let frequency = {};
    for(let i = 0 ; i<str2.length ; i++){
        if(str2[i] in frequency){
            frequency[str2[i]]++;
        }else{
            frequency[str2[i]]=1 ;
        }
    }
    for(let j = 0 ; j<str1.length ; j++){
        if(str1[j] in frequency && frequency[str1[j]]>0){
            frequency[str1[j]]--;
        }else{
            return false ;
    }
}
return true ;
}
console.log(canConstruct('ab','abab'))