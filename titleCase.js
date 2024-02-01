function titleCase(str){
    let arr = str.split(' ')
    for(let i = 0 ; i<arr.length ; i++){
        for(let j = 0 ; j<arr.length ; j++){
          arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1);
        }
    }
return arr.join(' ') ;
}
console.log(titleCase('sourav is a good boy'));