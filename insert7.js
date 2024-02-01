function insert7(str){
        let arr = str.split('')
        for(let i = 0 ; i<arr.length-1; i=i+7){
            arr.splice(i+7,0,7)
        }
        return arr.join('')
    }
    console.log(insert7('sourav is a fantastic boy'))
    