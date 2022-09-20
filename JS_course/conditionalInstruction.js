const person = {
  age: 20,
};
// выполняет действие если свойства name нет
if (!person.name) {
  console.log("Name not found");
}

const sumPositiveNumbers = (a, b) => {
  //испольование if в функции
  if (typeof a !== "number" || typeof b !== "number") {
    return "One of the arguments is not a number";
  }
  if (a <= 0 || b <= 0) {
    return "One of the arguments is not a positive number";
  }
  return a + b;
};

sumPositiveNumbers(4, 6);

console.log(sumPositiveNumbers(-4, 6));
// инструукция switch
switch (person.age) {
  case 20:
    console.log("20 years old");
    break;
  case 30:
    console.log("30 years old");
    break;
  default:
    console.log("age not defined");
    break;
}
