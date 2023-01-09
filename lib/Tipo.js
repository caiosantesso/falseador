"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tipo = void 0;
var Tipo = /** @class */ (function () {
    function Tipo() {
    }
    Tipo.prototype.booleano = function () {
        return Math.random() < 0.5;
    };
    return Tipo;
}());
exports.Tipo = Tipo;
