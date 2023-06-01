/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  {
    carBrand: 'Shkoda',
    price: 18000,
    isAvailableForSale: true,
  },
  {
    carBrand: 'BMW',
    price: 23000,
    isAvailableForSale: true,
  },
  {
    carBrand: 'Mers',
    price: 35000,
    isAvailableForSale: false,
  }
]

console.log(cars);

cars.push(
    {carBrand: 'Suzuki',
    price: 55000,
    isAvailableForSale: false,}
    )

    console.log(cars)