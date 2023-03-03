import { Burger } from '../burgers/burger';
import { KfcCheeseburger } from '../burgers/kfc/kfcCheeseburger';
import { KfcChickenBurger } from '../burgers/kfc/kfcChickenBurger';
import { burgerType } from '../types';
import { FastFoodRestaurant } from './fastFoodRestaurant';

export class Kfc extends FastFoodRestaurant {
    protected createBurger(type: burgerType): Burger {
        if (type === 'cheeseburger') {
            return new KfcCheeseburger();
        }
        else {
            return new KfcChickenBurger();
        }
    }
}