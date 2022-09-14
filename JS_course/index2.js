const personeOne = {
  name: "Mikhail",
  age: 33,
};

function increasePersoneAge(persone) {
  // внутро функции не рекомендуется!!! мутировать объект
  const updatedPerson = Object.assign({}, persone); // поэтому делаем копирование объекта
  updatedPerson.age += 1;
  return updatedPerson;
}

const updatedPersoneOne = increasePersoneAge(personeOne);

console.log(updatedPersoneOne.age);
console.log(personeOne.age);

function printName() {
  console.log("Mikhail");
}

setTimeout(printName, 1000); // printName в дааном случае-  колбэк фукция
