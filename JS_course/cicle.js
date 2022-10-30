const array = [1, 2, 3];

const newArray = array.map((el) => el * 2);
console.log(array);
console.log(newArray);

// перебор массива  синтаксис
let a = 2;
array.forEach((el, index) => {
  if (el < 2) console.log(index);
});

// do while синтаксис
i = 0;
do {
  a *= a;
  console.log(a);
  i++;
} while (array[i] < 3);

// for in синтаксис
const userProfile = {
  name: "Mikhail",
  age: 33,
  id: 1,
};

for (const key in userProfile) {
  console.log(userProfile[key]);
}
// оптимальная конструкция для перебора свойств или значений свойств объектов
Object.keys(userProfile).forEach((el, i) => {
  console.log(`${el}[${i}]`);
});

Object.values(userProfile).forEach((el) => {
  console.log(el + 1);
});
