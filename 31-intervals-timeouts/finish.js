/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

// setTimeout(() => console.log("Сообщение номер 1"), 2000)
// setTimeout(() => console.log('Сообщение номер 2'), 4000)
// setTimeout(() => console.log('Сообщение номер 3'), 6000)
// setTimeout(() => console.log('Сообщение номер 4'), 8000)
// setTimeout(() => console.log('Сообщение номер 5'), 10000)

let i = 1

const intervall = setInterval(() => {
    console.log('Сообщение номер' + i)
    i += 1
}, 2000)

setTimeout(() => {
    clearInterval(intervall)
}, 11000)