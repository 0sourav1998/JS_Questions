function leaderInArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] > arr[i] && arr[i + 1] > arr[i + 2]) {
            result.push(arr[i + 1])
        }
    }

    result.push(arr[arr.length - 1]);
    return result;
}
console.log(leaderInArr([16, 17, 4, 3, 5, 2]))