/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
];

// const JsonParse = postsJSON.map(JSON.parse);

// console.log(JsonParse);

// console.log(JsonParse[0].postId);
// console.log(JsonParse[JsonParse.length - 1].commentsQuantity);

// const arr = [1, 3, 4];

// const resultArr = arr.map((el) => (el += 1));

// console.log(resultArr);
// console.log(arr);

console.log(JSON.parse(postsJSON[0]));
