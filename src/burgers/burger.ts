import { meatType as Meat } from '../types';

export abstract class Burger {
    protected name: string;
    protected sauce: string;
    protected meat: Meat;
    protected isCheeseAdded: boolean;

    constructor(name: string, sauce: string, meat: Meat, isCheeseAdded: boolean) {
        this.name = name;
        this.sauce = sauce;
        this.meat = meat;
        this.isCheeseAdded = isCheeseAdded;
    }

    public prepare(): void {
        console.log(`Подготавливаем ингредиенты для ${this.name}`);
        console.log(`Подготавливаем ${this.meat === 'beef' ? 'говяжью котлету' : 'куриную котлету'}`);
        console.log(`Подготавливаем ${this.sauce}`);
        if (this.isCheeseAdded) {
            console.log('Подготавливаем сыр');
        }
    }

    public combine(): void {
        console.log(`Начинаем сборку ${this.name}`);
        console.log(`Добавляем ${this.meat === 'beef' ? 'говяжью котлету' : 'куриную котлету'}`);
        console.log(`Добавляем ${this.sauce}`);
        if (this.isCheeseAdded) {
            console.log('Добавляем сыр');
        }
    }

    public box(): void {
        console.log(`Упаковываем ${this.name}`);
    }

    public getName(): string {
        return this.name;
    }
}
