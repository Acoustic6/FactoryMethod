"use strict";
exports.__esModule = true;
exports.FastFoodRestaurant = void 0;
var FastFoodRestaurant = /** @class */ (function () {
    function FastFoodRestaurant() {
    }
    FastFoodRestaurant.prototype.orderBurger = function (type) {
        var burger;
        burger = this.createBurger(type);
        burger.prepare();
        burger.combine();
        burger.box();
        return burger;
    };
    return FastFoodRestaurant;
}());
exports.FastFoodRestaurant = FastFoodRestaurant;
