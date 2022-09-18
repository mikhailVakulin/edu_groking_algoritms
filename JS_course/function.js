const myltByFactor = (value, multiplayer = 1) => {
  // стрелочная функия
  return value * multiplier;
};

const myltByFactor1 = function (value, multiplayer = 1) {
  //функциональное выражение
  return value * multiplier;
};

const newPost = (post, addedAt = Date()) => ({
  // возвращаем неявно объект при помощи круглых скобок перед фигурными(не нкжно использовать return)
  ...post,
  addedAt,
});

const firstPost = {
  id: 1,
  autor: "Mikhail",
};

// newPost(firstPost);

const newPost2 = (post, addedAt = Date()) => {
  //возвращаем объект явно ри помощи стрелочной функции
  const result = Object.assign({}, post);
  result["addedAt"] = addedAt;
  return result;
};

console.table(newPost2(firstPost));
