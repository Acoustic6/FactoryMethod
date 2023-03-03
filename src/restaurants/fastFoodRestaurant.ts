import { Burger } from '../burgers/burger';
import { burgerType } from '../types';

export abstract class FastFoodRestaurant {
    public orderBurger(type: burgerType): Burger {
        let burger: Burger;

        burger = this.createBurger(type);

        burger.prepare();
        burger.combine();
        burger.box();
    
        return burger;
    }

    protected abstract createBurger(type: burgerType): Burger;
}