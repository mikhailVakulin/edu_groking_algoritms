// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
// Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A"

var numJewelsInStones = function (jewels, stones) {
  let jewelsSort = jewels.split("").sort();
  let stonesSort = stones.split("").sort();
  let result = [];
  jewelsSort.forEach((el) => {
    result = result.concat(stonesSort.filter((element) => element === el));
  });
  return result.length;
};

console.log(numJewelsInStones("ab", "aAAbbbb"));
