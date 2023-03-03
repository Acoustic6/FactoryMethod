import { VkusnoITochka } from './src/restaurants/vkusnoITochka';
import { Burger } from "./src/burgers/burger";
import { Kfc } from "./src/restaurants/kfc";

// replace "" to ''
const order: Array<Burger> = [];

const kfc = new Kfc();
const kfcCheeseburger = kfc.orderBurger("cheeseburger");
const kfcChickenBurger = kfc.orderBurger("chickenBurger");
order.push(kfcCheeseburger);
order.push(kfcChickenBurger);

const vkusnoITochka = new VkusnoITochka();
const cheeseburger = vkusnoITochka.orderBurger("cheeseburger");
const chickenBurger = vkusnoITochka.orderBurger("chickenBurger");
order.push(cheeseburger);
order.push(chickenBurger);

console.log(`You have ordered ${order.map(burger => burger.getName()).join(', ')}`)
