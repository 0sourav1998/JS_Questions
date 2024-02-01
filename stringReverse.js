function reverseString(s) {
    let arr = s.split('');
    for(let i = 0 ; i<arr.length /2 ; i++){
     let temp = arr[i];
     arr[i]=arr[arr.length-1-i];
     arr[arr.length-1-i] = temp ;
    }
    return arr.join('') ;
 }
 console.log(reverseString('sourav'))