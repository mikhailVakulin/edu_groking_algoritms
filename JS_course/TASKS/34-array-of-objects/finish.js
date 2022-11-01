/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
// const mercedes = {
//   carBrand: "mercedes",
//   price: 22000,
//   isAvailableForSale: true,
// };
// const bmw = {
//   carBrand: "bmw",
//   price: 50000,
//   isAvailableForSale: false,
// };
// const volvo = {
//   carBrand: "volvo",
//   price: 43000,
//   isAvailableForSale: true,
// };
// const objectArray = [mercedes, bmw, volvo];

const objectArray = [
  {
    carBrand: "bmw",
    price: 50000,
    isAvailableForSale: false,
  },
  {
    carBrand: "volvo",
    price: 43000,
    isAvailableForSale: true,
  },
  {
    carBrand: "mercedes",
    price: 22000,
    isAvailableForSale: true,
  },
];

const mazda = {
  carBrand: "mazda",
  price: 35000,
  isAvailableForSale: true,
};

objectArray.push(mazda);

console.log(objectArray);
