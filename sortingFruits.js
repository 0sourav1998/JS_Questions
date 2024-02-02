function printFruitsByFrequency(fruits) {
    const frequency = {};
    for (let i = 0; i < fruits.length; i++) {
        frequency[fruits[i]] = (frequency[fruits[i]] || 0) + 1;
        console.log(frequency)
    }
    const sortedFruits = Object.keys(frequency).sort((a, b) => {
        if (frequency[b] === frequency[a]) {
            return fruits.indexOf(a) - fruits.indexOf(b);
        }
        return frequency[b] - frequency[a];
    });
    return sortedFruits;
}
console.log(printFruitsByFrequency(['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry']))