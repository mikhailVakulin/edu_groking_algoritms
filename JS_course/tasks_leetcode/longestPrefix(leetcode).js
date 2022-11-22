strs = ["flower", "flowj", "flowight"];

var longestCommonPrefix = function (strs) {
  let j;
  function indexLetter(strs, j) {
    for (j; j < 201; j++) {
      for (let i = 0; i < strs.length; i++) {
        if (strs[i][j] !== strs[j < strs.length ? j : strs.length - 1][j])
          return j;
      }
    }
  }
  return strs[0].slice(0, indexLetter(strs, 0));
};
console.log(longestCommonPrefix(strs));
