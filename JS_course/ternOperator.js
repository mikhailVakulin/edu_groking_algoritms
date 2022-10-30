a = 2;
b = 1;

a < b ? console.log("true") : console.log("false");

// тернарный оператор м=синтаксис - условие   ?выражение если истина :выражение если ложь

let value = -10;
console.log(value >= 0 ? value : -value); // пример использования

value = 5;
const result = value >= 0 ? value : value; // присваивание переменной результата тернарного оператора
console.log(value);
