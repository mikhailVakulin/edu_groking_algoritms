var lengthOfLastWord = function (s) {
  const arr = s.split(" ");
  const resArr = [...new Set(arr)].map((el) => el || delete el);
  resArr[resArr.length - 1].length || resArr.pop();
  return resArr[resArr.length - 1].length;
};

console.log(lengthOfLastWord("what are you from? Get the car"));
