const fruits = ["apple", "orange"];

const [fruitOne, fruitTwo] = fruits; // код деструктуризации массива, важен порядок элементов

console.log(fruitOne);
console.log(fruitTwo);

const userProfile = {
  name: "Mikhail",
  commentsQty: 1,
  hasSignedAgreement: false,
};

const { name, commentsQty } = userProfile; // синтаксис деструктуризации объекта
const { hasSignedAgreement } = userProfile;

console.log(name);
console.log(hasSignedAgreement);

const userInfo = ({ name, commentsQty }) => {
  // синтаксис деструктуризации функции
  if (!commentsQty) {
    return `User ${name} has no comments`;
  }
  return `User ${name} has ${commentsQty} comments`;
};
console.log(userInfo(userProfile));
