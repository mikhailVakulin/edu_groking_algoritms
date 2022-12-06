var singleNumber = function (nums) {
  let res = [];
  for (let el of nums) {
    if (nums.lastIndexOf(el) === nums.indexOf(el)) res.push(el);
  }
  return res;
};

nums = [2, 2, 1];

console.log(singleNumber(nums));
