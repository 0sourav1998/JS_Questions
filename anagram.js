 function myFn(str1,str2){
        let arr1 = str1.split('').sort().join('')
        let arr2 = str2.split('').sort().join('')
        if( arr1 === arr2){
          return true;  
        }else{
            return false ;
        }
    }
    console.log(myFn('loop','sourav'))
    console.log(myFn('loop','pool'))