function Consecutive (arr) {
        for(let i = 0 ; i<arr.length ; i++){
            if(arr[i+1]-arr[i]>1){
                arr.splice(i+1,0,arr[i]+1)
            }
        }
        return arr ;
    }
    console.log(Consecutive([1,3,4,6,7,9,14,16]))