function myFn(str1, str2) {
    let objStr = {};
    if (str1.length !== str2.length) {
        return false;
    }
    for (let ch of str1) {
        objStr[ch] = (objStr[ch] || 0) + 1;
    }
    console.log(objStr)

    for (let char of str2) {
        if (!objStr[char]) {
            return false;
        }
        objStr[char]--;
    }
    console.log(objStr)

    return true;
}
console.log(myFn('pool', 'loop'))