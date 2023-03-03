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
exports.KfcCheeseburger = void 0;
var burger_1 = require("../burger");
var KfcCheeseburger = /** @class */ (function (_super) {
    __extends(KfcCheeseburger, _super);
    function KfcCheeseburger() {
        return _super.call(this, 'KFC Чизбургер', 'Фирменный соус KFC', 'chicken', true) || this;
    }
    KfcCheeseburger.prototype.box = function () {
        console.log("\u0423\u043F\u0430\u043A\u043E\u0432\u044B\u0432\u0430\u0435\u043C ".concat(this.name, " \u0432 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443 \"KFC\""));
    };
    return KfcCheeseburger;
}(burger_1.Burger));
exports.KfcCheeseburger = KfcCheeseburger;