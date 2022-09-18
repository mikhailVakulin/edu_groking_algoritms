const fix = {
  size: 10,
};
const upFix = {
  ...fix, // оператор ... разбивает объект на свойства!
  color: "red",
};
console.table(upFix);

const originStyle = {
  textSize: "small",
};
const originName = {
  length: 10,
};
const origin = {
  // объединение свойст объектов при помощи оператора ...
  ...originStyle,
  ...originName,
};
console.table(origin);

const hello = "Hello";
const world = "World";
const greeting = `${hello} , ${world}`; // синтаксис интерполяции в JS

console.log(greeting);

const name = "Mikhail";
const city = "Moscow";

console.log(`My name is - ${name}, my city is - ${city}`);
