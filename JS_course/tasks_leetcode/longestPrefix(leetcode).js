strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
  let j = 0;
  counter = 0;
  for (let i = 0; i < strs.length; i++) {
    while (j < strs.length - 1) {
      if (strs[j][i] === strs[j][i + 1]) counter++;
    }
  }
  return strs;
};
console.log(longestCommonPrefix(strs)[2][1]);
