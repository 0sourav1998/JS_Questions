function chunkArray(arr,chunkSize){
    let result = [] ;
    for(let i = 0 ; i<arr.length ; i=i+chunkSize){
        result.push(arr.slice(i,i+chunkSize))
    }
    return result;
}
console.log(chunkArray( [1, 2, 3, 4, 5, 6],2))