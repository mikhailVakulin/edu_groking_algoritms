// "use strict";

// const variable = (a, v) => {
//   let c = a + v;
//   return c;
// };

// console.log(variable(4, 5));

// let arr = []; // способы объявления массива
// let arrayX = new array(); // способы объявления массива

function myFn(a) {
  console.log(a);
}

myFn((b = true));

let array = [1, 2, 3];
array.push(5); // добавлние элемента в конец массива
console.log(array);

array.pop(); // удаляет последний элемент массива, и возвращает удаленный элемент

array.unshift(5); // добавлеие элмента в начало массива
array.shift(); // удаляет элемент в начале массива и возвращает его значение

array.forEach((el) => el * 2); // переберирает массив и выполняет с каждым элементом
// функцию не меняя значение элементаа
console.log(array);

const newArray = array.map((el) => el * 2); // пребирает массив и создает его копию,
// проделав с каждым элементов функцию
console.log(newArray);
