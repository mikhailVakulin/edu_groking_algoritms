const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
  nums = [...new Set(nums)];

  // resArr = [...nums];

  return nums;
};

console.log(removeDuplicates(nums));

console.log(nums);

// console.log(resArr);
