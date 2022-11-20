// var mergeTwoLists = function (list1, list2) {
//   return list1.reduce((resArr, num, index) => {
//     if (num < list2[index]) {
//       resArr.push(num);
//       resArr.push(list2[index]);
//       console.log(index);
//     } else {
//       resArr.push(list2[index]);
//       resArr.push(num);
//       console.log(index);
//     }
//     return resArr;
//   }, []);
// };
// var mergeTwoLists = function (list1, list2) {
//   const list1Arr = Array.from(list1);
//   const list2Arr = Array.from(list2);
//   const resArr = list1Arr.concat(list2Arr);
//   resArr.sort((a, b) => a - b);
//   return resArr.sort((a, b) => a - b);
// };

var mergeTwoLists = function (list1, list2) {
  let resList;
  for (let i = 0; i < list1.length + list2.length; i += 2) {
    const element = list1[i];
    if (element < list2[i]) {
      resList[i] = element;
      resList[i + 1] = list2[i];
    } else {
      resList[i] = list2[i];
      resList[i + 1] = element;
    }
  }
  return resList;
};

console.log(mergeTwoLists([1, 2, 3], [1, 4, 5]));
