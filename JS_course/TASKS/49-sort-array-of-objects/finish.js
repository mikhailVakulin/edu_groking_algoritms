/** ЗАДАЧА 49 - Сортировка объектов в массиве
 *
 * 1. Создайте функцию "sortProductsByPrice" с одним параметром "products"
 *
 * 2. Эта функция должна отсортировать входной массив товаров
 * по цене каждого товара в порядке возрастания
 * и вернуть отсортированный массив
 *
 * 3. Оригинальный массив должен остаться без изменений
 */
function sortProductsByPrice(products) {
  const resArr = [...products];
  for (let i = 0; i < resArr.length; i++) {
    for (let j = 0; j < resArr.length; j++) {
      if (j > i && resArr[i].price > resArr[j].price) {
        let temp = resArr[i];
        resArr[i] = resArr[j];
        resArr[j] = temp;
      }
    }
  }
  return resArr;
}
const inputProducts = [
  {
    title: "Phone case",
    price: 23,
    quantity: 2,
    category: "Accessories",
  },
  {
    title: "Android phone",
    price: 150,
    quantity: 1,
    category: "Phones",
  },
  {
    title: "Headphones",
    price: 78,
    quantity: 1,
    category: "Accessories",
  },
  {
    title: "Sport Watch",
    price: 55,
    quantity: 2,
    category: "Watches",
  },
];

const sortedProducts = sortProductsByPrice(inputProducts);

console.log(sortedProducts); // Массив отсортированных товаров

console.log(inputProducts); // Оригинальный массив не должен измениться
