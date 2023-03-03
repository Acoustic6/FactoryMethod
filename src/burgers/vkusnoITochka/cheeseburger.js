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
exports.Cheeseburger = void 0;
var burger_1 = require("../burger");
var Cheeseburger = /** @class */ (function (_super) {
    __extends(Cheeseburger, _super);
    function Cheeseburger() {
        return _super.call(this, 'Чизбургер', 'Фирменный соус "Вкусно и точка"', 'beef', true) || this;
    }
    Cheeseburger.prototype.box = function () {
        console.log("\u0423\u043F\u0430\u043A\u043E\u0432\u044B\u0432\u0430\u0435\u043C ".concat(this.name, " \u0432 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443 \"\u0412\u043A\u0443\u0441\u043D\u043E \u0438 \u0442\u043E\u0447\u043A\u0430\""));
    };
    return Cheeseburger;
}(burger_1.Burger));
exports.Cheeseburger = Cheeseburger;
