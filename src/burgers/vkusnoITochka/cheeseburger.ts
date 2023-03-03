import { Burger } from "../burger";

export class Cheeseburger extends Burger  {
    constructor() {
        super('Чизбургер', 'Фирменный соус "Вкусно и точка"', 'beef', true);
    }

    public box(): void {
        console.log(`Упаковываем ${this.name} в специальную упаковку "Вкусно и точка"`);
    }
}