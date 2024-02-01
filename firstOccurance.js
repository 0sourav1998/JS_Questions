function findFirstOccurrence(arr, target) {
    let repeatedArr = [] ;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      repeatedArr.push(arr[i]);
    }
  }
  return repeatedArr;
}

const arr = [2, 4, 6, 6, 6, 8, 10];
const target = 6;

console.log(findFirstOccurrence(arr, target));  // Output: 2