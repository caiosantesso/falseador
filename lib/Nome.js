"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nome = void 0;
var N_mero_1 = require("./N\u00FAmero");
var Tipo_1 = require("./Tipo");
var ListaDeNomes_1 = require("./ListaDeNomes");
var Nome = /** @class */ (function () {
    function Nome() {
        this.número = new N_mero_1.Número();
        this.tipo = new Tipo_1.Tipo();
    }
    Nome.prototype.primeiroComGênero = function (gênero) {
        var nomes = ListaDeNomes_1.ListaDeNomes[gênero];
        var índice = this.número.entreZeroE(nomes.length);
        return nomes[índice];
    };
    Nome.prototype.primeiro = function (gênero) {
        if (gênero === 'F')
            return this.primeiroComGênero(gênero);
        else if (gênero === 'M')
            return this.primeiroComGênero(gênero);
        return this.tipo.booleano()
            ? this.primeiroComGênero('F')
            : this.primeiroComGênero('M');
    };
    Nome.prototype.composto = function (gênero) {
        if (gênero)
            return (this.primeiroComGênero(gênero) + ' ' + this.primeiroComGênero(gênero));
        return this.tipo.booleano()
            ? this.primeiroComGênero('F') + ' ' + this.primeiroComGênero('F')
            : this.primeiroComGênero('M') + ' ' + this.primeiroComGênero('M');
    };
    Nome.prototype.sobrenome = function () {
        var sobrenomes = ListaDeNomes_1.ListaDeNomes.sobrenomes;
        var índice = this.número.exclusivoEntreZeroE(sobrenomes.length);
        return sobrenomes[índice];
    };
    Nome.prototype.sobrenomes = function (quantidade) {
        var número = quantidade && quantidade >= 1 ? quantidade : this.número.entreUmE(3);
        var sobrenomes = [];
        for (var i = 0; i < número; i++) {
            sobrenomes.push(this.sobrenome());
        }
        return sobrenomes.join(' ');
    };
    return Nome;
}());
exports.Nome = Nome;
