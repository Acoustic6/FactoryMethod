import { Burger } from "../burger";

export class ChickenBurger extends Burger  {
    constructor() {
        super('Чикенбургер', 'Фирменный соус "Вкусно и точка"', 'chicken', true);
    }

    public combine(): void {
        console.log(`Собираем ${this.name}`);
        console.log(`Добавляем ${this.sauce}`);
        if (this.isCheeseAdded) {
            console.log("Добавляем сыр");
        }
        console.log(`Добавляем ${this.meat === "beef" ? 'говяжью котлету' : 'куриную котлету'}`);
    }

    public box(): void {
        console.log(`Упаковываем ${this.name} в специальную упаковку "Вкусно и точка"`);
    }
}