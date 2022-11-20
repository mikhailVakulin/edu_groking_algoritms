// Given an integer nums nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// var threeSum = function (nums) {
//   let tempArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       for (let k = 0; k < nums.length; k++) {
//         if (
//           i !== j &&
//           i !== k &&
//           j !== k &&
//           nums[i] + nums[j] + nums[k] === 0
//         ) {
//           tempArr.unshift(
//             JSON.stringify([nums[i], nums[j], nums[k]].sort((a, b) => a - b))
//           );
//         }
//       }
//     }
//   }
//   const resArr = [...new Set(tempArr)];
//   const finalArr = resArr.map((el) => JSON.parse(el));
//   return finalArr;
// };

var threeSum = function (nums) {
  let tempArr = [];
  if (nums.every((el) => el === 0 && nums.length >= 3)) return [[0, 0, 0]];
  const setNums = [...new Set(nums)];
  setNums.forEach((el, index) => {
    if (nums.indexOf(el) !== nums.lastIndexOf(el) && el !== 0) {
      setNums.push(el);
    }
  });
  for (let i = 0; i < setNums.length; i++) {
    for (let j = i + 1; j < setNums.length; j++) {
      let tempValue = (setNums[i] + setNums[j]) * -1;
      if (setNums.includes(tempValue, j + 1)) {
        if (i !== j && setNums[i] + setNums[j] + tempValue === 0) {
          tempArr.unshift(
            JSON.stringify(
              [setNums[i], setNums[j], tempValue].sort((a, b) => a - b)
            )
          );
        }
      }
    }
  }
  const resArr = [...new Set(tempArr)];
  const finalArr = resArr.map((el) => JSON.parse(el));
  if (nums.sort((a, b) => a - b) && nums[nums.indexOf(0) + 2] === 0)
    finalArr.push([0, 0, 0]);
  return finalArr;
};

// var threeSum = function (nums) {
//   const setNums = [...new Set(nums)];
//   setNums.forEach((el, index) => {
//     if (nums.indexOf(el) !== nums.lastIndexOf(el)) {
//       setNums.push(el);
//     }
//   });
//   return setNums;
// };

console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));

// const nums = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0];

// console.log(nums.sort((a, b) => a - b));
