var finalValueAfterOperations = function (operations) {
  let sum = 0;
  for (let index = 0; index < operations.length; index++) {
    const element = operations[index];
    if (element === "X++" || element === "++X") sum++;
    else if (element === "X--" || element === "--X") sum--;
  }
  return sum;
};

const array = ["--X", "X++", "X++"];
console.table(finalValueAfterOperations(array));
