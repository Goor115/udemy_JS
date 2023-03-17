/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

// const arrKey = Object.keys(myObject)

// arrKey.forEach((e) => {
//   if (e === "key1" || e === "key3") {
//     console.log(myObject[e]);
//   }
// })

for (let prop in myObject ) {
  if (prop === "key1" || prop === "key3") {
    console.log(myObject[prop]);
  }
}