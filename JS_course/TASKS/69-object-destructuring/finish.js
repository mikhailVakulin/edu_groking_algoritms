/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  a: 5,
  b: 20,
  y: 3,
};

function mult(obj) {
  const { a, b, c } = obj;
  return a * b * c;
}

// function mult({ x, y, z }) {
//   return x * y * z;
// }

const result = mult(objectWithNumbers);
console.log(result);
// 300
