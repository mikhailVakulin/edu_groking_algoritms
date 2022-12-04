var defangIPaddr = function (address) {
  let resArr = address.split("");
  let result = "";
  for (let i = 0; i < resArr.length; i++) {
    if (resArr[i] === ".") resArr[i] = "[.]";
    result += resArr[i];
  }
  return result;
};

console.log(defangIPaddr("1.1.1.1"));
