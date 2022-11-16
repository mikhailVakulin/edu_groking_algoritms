/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3];
// option 1
const b = [...a];

// option 2
const b = Array.from(a);

// option 3 (вложенные ссылки не сохраняются) глубокая копия массива
const b = JSON.parse(JSON.stringify(a));

b.push("newElement");

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]
