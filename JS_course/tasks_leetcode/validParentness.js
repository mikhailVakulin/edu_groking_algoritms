const name = ")(){}";
const isValid = function (s) {
  const resArr = s.split("");
  if (s.length < 1) return false;
  for (let i = 0; i < resArr.length / 2; i++) {
    if (
      resArr.indexOf("(") < resArr.lastIndexOf(")") &&
      resArr.indexOf("(") !== -1 &&
      resArr.lastIndexOf(")") !== -1 &&
      (resArr.lastIndexOf("(") - resArr.indexOf(")")) % 2 !== 0
    ) {
      delete resArr[resArr.indexOf("(")];
      delete resArr[resArr.lastIndexOf(")")];
    }
    if (
      resArr.indexOf("[") < resArr.lastIndexOf("]") &&
      resArr.indexOf("[") !== -1 &&
      resArr.lastIndexOf("]") !== -1 &&
      (resArr.lastIndexOf("[") - resArr.indexOf("]")) % 2 !== 0
    ) {
      delete resArr[resArr.indexOf("[")];
      delete resArr[resArr.lastIndexOf("]")];
    }
    if (
      resArr.indexOf("{") < resArr.lastIndexOf("}") &&
      resArr.indexOf("{") !== -1 &&
      resArr.lastIndexOf("}") !== -1 &&
      (resArr.lastIndexOf("}") - resArr.indexOf("{")) % 2 !== 0
    ) {
      delete resArr[resArr.indexOf("{")];
      delete resArr[resArr.lastIndexOf("}")];
    }
  }
  if (
    resArr.includes("{") ||
    resArr.includes("}") ||
    resArr.includes("(") ||
    resArr.includes(")") ||
    resArr.includes("[") ||
    resArr.includes("]")
  )
    return false;
  return true;
};

console.log(isValid(name));
