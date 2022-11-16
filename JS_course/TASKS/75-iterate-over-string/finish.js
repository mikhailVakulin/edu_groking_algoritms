/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0;
const vowels = ["a", "e", "i", "o", "u"];

const str = "Today is the best day of my life";

// option 1
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) vowelsCount++;
}

// option 2
str.split("").forEach((char) => {
  if (vowels.includes(char)) vowelsCount++;
});

// option 3
for (const char of str) {
  if (vowels.includes(char)) vowelsCount++;
}
console.log(vowelsCount);
// 9
