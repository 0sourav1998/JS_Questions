function richestOne(accounts) {
    let result = [];
    for (let i = 0; i < accounts.length; i++) {
        let maxResult = accounts[i].reduce((acc, balance) => acc + balance, 0);
        result.push(maxResult);
    }
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] > result[j]) {
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    return result[result.length - 1]
}
console.log(richestOne([[1, 5], [7, 3], [3, 5]]))

