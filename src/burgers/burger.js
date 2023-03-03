"use strict";
exports.__esModule = true;
exports.Burger = void 0;
var Burger = /** @class */ (function () {
    function Burger(name, sauce, meat, isCheeseAdded) {
        this.name = name;
        this.sauce = sauce;
        this.meat = meat;
        this.isCheeseAdded = isCheeseAdded;
    }
    Burger.prototype.prepare = function () {
        console.log("\u041F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u0438\u043D\u0433\u0440\u0438\u0434\u0438\u0435\u043D\u0442\u044B \u0434\u043B\u044F ".concat(this.name));
        console.log("\u041F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C ".concat(this.meat === 'beef' ? 'говяжью котлету' : 'куриную котлету'));
        console.log("\u041F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C ".concat(this.sauce));
        if (this.isCheeseAdded) {
            console.log('Подготавливаем сыр');
        }
    };
    Burger.prototype.combine = function () {
        console.log("\u041D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u0441\u0431\u043E\u0440\u043A\u0443 ".concat(this.name));
        console.log("\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C ".concat(this.meat === 'beef' ? 'говяжью котлету' : 'куриную котлету'));
        console.log("\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C ".concat(this.sauce));
        if (this.isCheeseAdded) {
            console.log('Добавляем сыр');
        }
    };
    Burger.prototype.box = function () {
        console.log("\u0423\u043F\u0430\u043A\u043E\u0432\u044B\u0432\u0430\u0435\u043C ".concat(this.name));
    };
    Burger.prototype.getName = function () {
        return this.name;
    };
    return Burger;
}());
exports.Burger = Burger;
