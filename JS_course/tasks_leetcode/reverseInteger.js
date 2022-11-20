// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

var reverse = function (x) {
  const res = x.toString();

  let reverseX = res
    .split("")
    .reverse()
    .reduce((sum, el) => sum + el);
  reverseX = parseInt(reverseX);
  reverseX = res[0] === "-" ? reverseX * -1 : reverseX;
  if (reverseX < -2147483648 || reverseX > 2147483648) reverseX = 0;
  return reverseX;
};

console.log(reverse(-110043874));
