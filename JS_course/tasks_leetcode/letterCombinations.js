var letterCombinations = function (digits) {
  const letters = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  let resString = "";
  for (let i = 0; i < digits.length; i++) {
    resString += (parseInt(digits[i]) - 2).toString();
  }
  let resArr = [];
  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      resArr[i] = [
        letters[digits[i]][j] + letters[digits[i]][j],
        // letters[digits[i]][j] +
        // letters[digits[i]][j],
      ];
    }
  }
  return resArr;
};

console.log(letterCombinations("34"));
