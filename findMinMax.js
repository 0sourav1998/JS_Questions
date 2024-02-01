// function findMinMax(arr) {
//   let result = [] ;
//   arr.sort((a,b)=>a-b);
//   result.push(arr[0],arr[arr.length-1]);
//   return result ;
// }
// console.log(findMinMax([3, 2, 1, 56, 10000, 167]))

function minMax(arr){
    let result = [];
    for(let i = 0 ; i<arr.length; i++){
        for(let j = 0 ; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp ;
            }
        }
    }
    return [arr[0],arr[arr.length-1]]
}
console.log(minMax([3, 2, 1, 56, 10000, 167]))