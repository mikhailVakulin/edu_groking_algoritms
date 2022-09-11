const objectA = {
  a: 10,
  b: true,
};

const copyOfA = objectA;

copyOfA.a = null;
copyOfA.c = "abc";

console.log(objectA);

const number = 1;
number = 2;
console.log(number);
