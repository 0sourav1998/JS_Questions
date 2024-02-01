function countOccuranceEachElement (str){
    let occurance = {};
    str.split('').map((e)=>{
        if(occurance.hasOwnProperty(e)===false){
            occurance[e]=1 ;
        }else{
            occurance[e]++ ;
        }
    });
    return occurance ;
}
console.table(countOccuranceEachElement('babu'))