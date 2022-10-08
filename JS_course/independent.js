const array = [1, 2, 3];

const newArray = array.map((el) => el * 2);
console.log(array);
console.log(newArray);

// перебор массива  синтаксис
let a = 2;
array.forEach((el, index) => {
  if (el < 2) console.log(index);
});
