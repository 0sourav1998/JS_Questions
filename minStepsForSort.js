function myFn(nums){
    let len = nums.length ;
    let i = 0 ;
    let ans = -1 ;
    while(i<len){
     if(nums[i]>nums[(i+1)%len]){
        if(ans===-1){
            ans = len-i-1 ;
        }else{
            return -1 ;
        }
    }  
    i++ ;
    }
    return ans ;
}
console.log(myFn([4,5,1,2,3]))

//output -- 3