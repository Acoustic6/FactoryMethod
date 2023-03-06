import { VkusnoITochka } from './src/restaurants/vkusnoITochka';
import { Burger } from './src/burgers/burger';
import { Kfc } from './src/restaurants/kfc';

/**
    Клиент хочет заказать чизбургер и чикенбургер в двух ресторанах быстрого питания.
    В объектно-ориентированном программировании существует идиома избегания сильной связанности между объектами, например, избегание использования оператора 'new'.
    Шаблон проектирования 'Фабричный метод' позволяет различным ресторанам быстрого питания следовать единой схеме приготовления бургеров, переопределяя метод 'orderBurger' и другие методы.
    Метод 'orderBurger' является фабричным методом, так как именно он инкапсулирует в себе создание того или иного бургера, используя оператор 'new' по аналогии с фабрикой.
    Однако, использование оператора 'new' скрыто внутри фабричного метода, что обеспечивает связывание объектов между собой посредством композиции, то есть их слабую связанность.
 */

const order: Array<Burger> = [];

const vkusnoITochka = new VkusnoITochka();

const cheeseburger = vkusnoITochka.orderBurger('cheeseburger');
console.log(`Добавляем ${cheeseburger.getName()} в корзину\n`);
order.push(cheeseburger);

const chickenBurger = vkusnoITochka.orderBurger('chickenBurger');
console.log(`Добавляем ${chickenBurger.getName()} в корзину\n`);
order.push(chickenBurger);

const kfc = new Kfc();

const kfcCheeseburger = kfc.orderBurger('cheeseburger');
console.log(`Добавляем ${kfcCheeseburger.getName()} в корзину\n`);
order.push(kfcCheeseburger);

const kfcChickenBurger = kfc.orderBurger('chickenBurger');
console.log(`Добавляем ${kfcChickenBurger.getName()} в корзину\n`);
order.push(kfcChickenBurger);


console.log(`Ваш заказ: ${order.map(burger => burger.getName()).join(', ')}`)


// Output:
// Подготавливаем ингредиенты для Чизбургер
// Подготавливаем говяжью котлету
// Подготавливаем Фирменный соус "Вкусно и точка"
// Подготавливаем сыр
// Начинаем сборку Чизбургер
// Добавляем говяжью котлету
// Добавляем Фирменный соус "Вкусно и точка"
// Добавляем сыр
// Упаковываем Чизбургер в специальную упаковку "Вкусно и точка"
// Добавляем Чизбургер в корзину

// Подготавливаем ингредиенты для Чикенбургер
// Подготавливаем куриную котлету
// Подготавливаем Фирменный соус "Вкусно и точка"
// Подготавливаем сыр
// Собираем Чикенбургер
// Добавляем Фирменный соус "Вкусно и точка"
// Добавляем сыр
// Добавляем куриную котлету
// Упаковываем Чикенбургер в специальную упаковку "Вкусно и точка"
// Добавляем Чикенбургер в корзину

// Подготавливаем ингредиенты для KFC Чизбургер
// Подготавливаем куриную котлету
// Подготавливаем Фирменный соус "KFC"
// Подготавливаем сыр
// Начинаем сборку KFC Чизбургер
// Добавляем куриную котлету
// Добавляем Фирменный соус "KFC"
// Добавляем сыр
// Упаковываем KFC Чизбургер в специальную упаковку 'KFC'
// Добавляем KFC Чизбургер в корзину

// Подготавливаем ингредиенты для KFC Чикенбургер
// Подготавливаем куриную котлету
// Подготавливаем Фирменный соус "KFC"
// Добавляем KFC Чикенбургер
// Добавляем Фирменный соус "KFC"
// Добавляем куриную котлету
// Упаковываем KFC Чикенбургер в специальную упаковку 'KFC'
// Добавляем KFC Чикенбургер в корзину