/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000;
const MAX = 9999;

function getRandomInt(Min, Max) {
  return Math.floor(Math.random() * (Max - Min + 1) + Min);
}
const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];

const addRandomNumberArray = (arr, min, max) => {
  let newRandomNumber;
  const resultArray = [...arr];

  do {
    newRandomNumber = getRandomInt(min, max);
  } while (resultArray.includes(newRandomNumber));

  resultArray.push(newRandomNumber);
  return resultArray;
};

const updatedArray = addRandomNumberArray(myNumbers, MIN, MAX);

console.log("UPDATE ARRAY", updatedArray);
console.log("ORIGINAL ARRAY", myNumbers);
