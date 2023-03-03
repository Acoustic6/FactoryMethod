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
exports.Kfc = void 0;
var kfcCheeseburger_1 = require("../burgers/kfc/kfcCheeseburger");
var kfcChickenBurger_1 = require("../burgers/kfc/kfcChickenBurger");
var fastFoodRestaurant_1 = require("./fastFoodRestaurant");
var Kfc = /** @class */ (function (_super) {
    __extends(Kfc, _super);
    function Kfc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kfc.prototype.createBurger = function (type) {
        if (type === 'cheeseburger') {
            return new kfcCheeseburger_1.KfcCheeseburger();
        }
        else {
            return new kfcChickenBurger_1.KfcChickenBurger();
        }
    };
    return Kfc;
}(fastFoodRestaurant_1.FastFoodRestaurant));
exports.Kfc = Kfc;
