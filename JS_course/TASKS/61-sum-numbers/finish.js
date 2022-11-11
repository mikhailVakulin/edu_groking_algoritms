/** ЗАДАЧА 61 - Сумма чисел
 *
 * 1. Создайте функцию "sumNumbers", которая будет суммировать все переданные ей аргументы.
 * Количество аргументов неизвестно
 *
 * 2. Используйте console.log внутри функции для вывода результата
 *
 * 3. Также верните эту сумму как результат функции
 */

sumNumbers(1, 3);
// 4

sumNumbers(10, 20, 5);
// 35

sumNumbers1(2, 5, 80, 1, 10, 12);
// 110
function sumNumbers(...arr) {
  const result = arr.reduce((sum, el) => sum + el);
  console.log(result);
  return result;
}

function sumNumbers1(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
}
