const name = "()[]{}";

const isValid = function (s) {
  let result;
  for (var i = 0; i < s.length - 1; i += 2) {
    if (
      (s[i] === "(" && s[i + 1] === ")") ||
      (s[i] === "{" && s[i + 1] === "}") ||
      (s[i] === "[" && s[i + 1] === "]")
    ) {
      result = true;
    } else result = false;
  }
  return result;
};

console.log(isValid(name));
