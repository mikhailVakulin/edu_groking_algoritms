var fourSum = function (nums, target) {
  const resArr = [];
  let i = 0;
  let j = nums.length / 2;
  let k = nums.length / 2;
  let f = nums.length - 1;
  do {
    if (
      nums[i] + nums[j] + nums[k] + nums[f] !== target &&
      i !== j &&
      j !== k &&
      f !== i &&
      f !== j &&
      k !== i &&
      f !== k
    ) {
      i++;
      f--;
      j++;
      k--;
    } else resArr.push([nums[i] + nums[j] + nums[k] + nums[f] !== target]);
  } while (i < nums.length / 2);
  return resArr;
};

console.log(fourSum([-1, 2, 3, 4, 1, 1, -1, -1]));
