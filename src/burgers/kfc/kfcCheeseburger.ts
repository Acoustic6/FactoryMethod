import { Burger } from '../burger';

export class KfcCheeseburger extends Burger  {
    constructor() {
        super('KFC Чизбургер', 'Фирменный соус "KFC"', 'chicken', true);
    }

    public box(): void {
        console.log(`Упаковываем ${this.name} в специальную упаковку 'KFC'`);
    }
}