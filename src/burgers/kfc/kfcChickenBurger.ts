import { Burger } from '../burger';

export class KfcChickenBurger extends Burger  {
    constructor() {
        super('KFC Чикенбургер', 'Фирменный соус "KFC"', 'chicken', false);
    }

    public combine(): void {
        console.log(`Добавляем ${this.name}`);
        console.log(`Добавляем ${this.sauce}`);
        if (this.isCheeseAdded) {
            console.log('Добавляем сыр');
        }
        console.log(`Добавляем ${this.meat === 'beef' ? 'говяжью котлету' : 'куриную котлету'}`);
    }

    public box(): void {
        console.log(`Упаковываем ${this.name} в специальную упаковку 'KFC'`);
    }
}