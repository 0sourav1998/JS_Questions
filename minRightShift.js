var minimumRightShifts = function (nums) {
  let len = nums.length;
  let i = 0;
  let ans = -1;
  while (i < len) {
    if (nums[i] > nums[(i + 1) % len]) {
      if (ans === -1) {
        ans = len - i - 1;
      } else {
        return -1;
      }
    }
    i++;
  }
  return ans;
};
console.log(minimumRightShifts([3, 4, 5, 6, 8, 1, 2]));
