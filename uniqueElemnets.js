function myFn(arr1,arr2){
    let uniquearr = [] ;
    for(let num1 of arr1){
        for(let num2 of arr2){
         if(num1===num2 && !uniquearr.includes(num1)){
             uniquearr.push(num1)
         }
        }
    }
    return uniquearr ;
}
console.log(myFn([1,2,3,4,5],[1,10,11,12,12,2]));


function myFn(arr1,arr2,arr3){
    let uniqueArr = [] ;
    for(let key1 of arr1){
        for(let key2 of arr2){
            for(let key3 of arr3){
                if(key1===key2 && key2===key3){
                    uniqueArr.push(key1)
                }
            }
        }
    }
    return uniqueArr ;
}
console.log(myFn([1, 5, 10, 20, 40, 80],[6, 7, 20, 80, 100],[3, 4, 15, 20, 30, 70, 80, 120]))