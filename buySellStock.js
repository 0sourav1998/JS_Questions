function buySellStock (arr){
    let priceOfStock = arr[0];
    let profitOnStock = 0 ;
    for(let i = 1 ; i<arr.length ; i++){
        priceOfStock = Math.min(priceOfStock,arr[i]); 
        profitOnStock = Math.max(profitOnStock , arr[i]-priceOfStock);
    }
    return profitOnStock ;
}
console.log(buySellStock([7,1,5,3,6,4,8]));

//output-7