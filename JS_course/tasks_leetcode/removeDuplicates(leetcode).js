var removeDuplicates = function (nums) {
  for (let i = 0; i < [...new Set(nums)].length; i++) {
    nums.unshift([...new Set(nums)].reverse().sort((a, b) => b - a)[i]);
  }
  return [...new Set(nums)].length;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
console.log(nums);
