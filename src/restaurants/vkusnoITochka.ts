import { Burger } from '../burgers/burger';
import { Cheeseburger } from '../burgers/vkusnoITochka/cheeseburger';
import { ChickenBurger } from '../burgers/vkusnoITochka/chickenBurger';
import { burgerType } from '../types';
import { FastFoodRestaurant } from './fastFoodRestaurant';

export class VkusnoITochka extends FastFoodRestaurant {
    protected createBurger(type: burgerType): Burger {
        if (type === 'cheeseburger') {
            return new Cheeseburger();
        }
        else {
            return new ChickenBurger();
        }
    }
}