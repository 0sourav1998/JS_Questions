function minAbsolateDiff(arr){
    let sortedArr = arr.sort((a,b)=>a-b)
    let min = Infinity ;
    let result = [] ;
    for(let i = 0 ; i<sortedArr.length ; i++){
        currentDiff = sortedArr[i+1]-sortedArr[i];
        if(currentDiff<min){
            min = currentDiff ;
            result = [[sortedArr[i],sortedArr[i+1]]];

        }else if(currentDiff===min){
            result.push([sortedArr[i],sortedArr[i+1]])
        }
    }
    return result ;
}
console.log(minAbsolateDiff([5,8,6,4,10,28,22,16]))