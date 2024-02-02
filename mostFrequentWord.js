function mostFrequentWord(arr) {
    let obj = {};
    let emptyStr = '';
    let maxKey = 0
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (!obj[key]) {
            obj[key] = 0
        }
        obj[key]++;
        if (emptyStr === '' || obj[key] > obj[maxKey]) {
            maxKey = key;
        }
    }
    return maxKey;
}
console.log(mostFrequentWord(["same", "to", "same"]))