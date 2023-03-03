"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.VkusnoITochka = void 0;
var cheeseburger_1 = require("../burgers/vkusnoITochka/cheeseburger");
var chickenBurger_1 = require("../burgers/vkusnoITochka/chickenBurger");
var fastFoodRestaurant_1 = require("./fastFoodRestaurant");
var VkusnoITochka = /** @class */ (function (_super) {
    __extends(VkusnoITochka, _super);
    function VkusnoITochka() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VkusnoITochka.prototype.createBurger = function (type) {
        if (type === 'cheeseburger') {
            return new cheeseburger_1.Cheeseburger();
        }
        else {
            return new chickenBurger_1.ChickenBurger();
        }
    };
    return VkusnoITochka;
}(fastFoodRestaurant_1.FastFoodRestaurant));
exports.VkusnoITochka = VkusnoITochka;
