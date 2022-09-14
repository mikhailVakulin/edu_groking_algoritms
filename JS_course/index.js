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
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}