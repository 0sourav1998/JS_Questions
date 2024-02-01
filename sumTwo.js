// function sumTwo(arr,target){
//     const map = new Map();
//     for(let i = 0 ; i<arr.length ; i++){
//      let complement = target - arr[i];
//      if(map.has(complement)){
//          return [map.get(complement),i]
//      }
//      map.set(arr[i],i)
//     }
//     return -1 ;
// }
// console.log(sumTwo([1,2,4,5,6,7,9],9))

function sumTwo(arr,target){
    for(let i = 0 ; i<arr.length ; i++){
            if(arr[i]+arr[i+1]===target){
                return [i,i+1];
            }
    }
    return -1;
}
console.log(sumTwo([1,2,4,5,6,7,9],6))