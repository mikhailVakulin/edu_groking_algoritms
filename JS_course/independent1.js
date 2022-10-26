const multiplication = function (arr) {
  const newArray = arr.map((el) => {
    if (el === 2) el * el;
    else el = el + 1;
  });
  return newArray;
};

const array = [1, 2, 3];
console.log(multiplication(array));
