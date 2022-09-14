const objectA = {
  //
  a: 10,
  b: true,
};

const copyOfA = objectA;

copyOfA.a = null;
copyOfA.c = "abc";

console.log(objectA);

const myCity = {
  city: "New York",
  popular: true,
  size: 10,
  info: {
    ispopular: true,
  },
};

console.log(myCity.size);
myCity.popular = false;
myCity.countrie = "USA";

console.log(myCity);

delete myCity.popular; // удаление свойства объекта

myCity["popular"] = true; // создание свойства через квадратные скобки
myCity.countrie.ispopular = false;
console.log(myCity);

const name = "Mikhail";
const postQty = 10;

const userProfile = {
  // сокращенный формат записи свойств
  name, // работает если нжно присвоить свойствам
  postQty, // значение обьявленных ранеее одноименных переменных
  hasSignedAgreement: false,
};

console.log(userProfile);

myCity.cityGreeting = function () {
  console.log("Grerting");
};

myCity.cityGreeting();

const myCity2 = Object.assign({}, myCity); //  делает клон объекта вложенные объекты мутируют

myCity2.size = 20;
console.log(myCity.size);
console.log(myCity2.size);

const myCity3 = { ...myCity }; // делает копию объекта вложенные объекты мутируют

const myCity4 = JSON.parse(JSON.stringify(myCity)); // делает копию объекта вложенные объекты НЕ мутируют
console.log(myCity4);

function sum(a, b) {
  // вариант объявления функции
  let c = a + b;
  return c;
}

console.dir(sum); // можно смотреть структуру функции в консоли браузера

console.log(sum(2, 3));
