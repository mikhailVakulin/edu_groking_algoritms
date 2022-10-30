/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15; // выражение

const myObject = {
  // выражение
  x: 10,
  y: true,
};

myObject.z = "abc"; // выражение-инструкция

delete myObject.x; // инструкция

let newVariable; // инструкцйия

newVariable = 30 + 5;

console.log(newVariable);

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`);
}
