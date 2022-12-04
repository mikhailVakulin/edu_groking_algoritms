// You are given a positive integer num consisting of exactly four digits.
// Split num into two new integers new1 and new2 by using the digits found in num.
// Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3.
// Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.

// Example 1:
// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

// Example 2:
// Input: num = 4009
// Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.
// The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.

var minimumSum = function (num) {
  const charArr = num.toString().split("");
  let min = 100000;
  let i = 0;
  let j = 1;
  let k = 2;
  let f = 3;
  function findMin(i, j, k, f, charArr) {
    min =
      parseInt(charArr[i]) + parseInt(charArr[j] + charArr[k] + charArr[f]) <
      min
        ? parseInt(charArr[i]) + parseInt(charArr[j] + charArr[k] + charArr[f])
        : min;
    min =
      parseInt(charArr[i] + charArr[j]) + parseInt(charArr[k] + charArr[f]) <
      min
        ? parseInt(charArr[i] + charArr[j]) + parseInt(charArr[k] + charArr[f])
        : min;
  }
  function replace(i, j, k, f) {
    let temp;
    temp = i;
    i = k;
    k = j;
    j = f;
    f = temp;
  }

  findMin(i, j, k, f, charArr);
  replace(i, j, k, f);
  findMin(i, j, k, f, charArr);
  replace(i, j, k, f);
  findMin(i, j, k, f, charArr);
  replace(i, j, k, f);
  findMin(i, j, k, f, charArr);

  return min;
};

num = 4009;

console.log(minimumSum(num));
// function replace(a, b) {
//   let temp;
//   temp = a;
//   a = b;
//   b = temp;
// }
