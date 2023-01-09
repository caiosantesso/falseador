"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Falseador = void 0;
var N_mero_1 = require("./N\u00FAmero");
var Nome_1 = require("./Nome");
var Tipo_1 = require("./Tipo");
var Documento_1 = require("./Documento");
var Texto_1 = require("./Texto");
var Falseador = /** @class */ (function () {
    function Falseador() {
        this.nomes = new Nome_1.Nome();
        this.números = new N_mero_1.Número();
        this.tipos = new Tipo_1.Tipo();
        this.textos = new Texto_1.Texto();
        this.documentos = new Documento_1.Documento();
    }
    Object.defineProperty(Falseador.prototype, "nome", {
        get: function () {
            return this.nomes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Falseador.prototype, "n\u00FAmero", {
        get: function () {
            return this.números;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Falseador.prototype, "tipo", {
        get: function () {
            return this.tipos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Falseador.prototype, "texto", {
        get: function () {
            return this.textos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Falseador.prototype, "doc", {
        get: function () {
            return this.documentos;
        },
        enumerable: false,
        configurable: true
    });
    return Falseador;
}());
exports.Falseador = Falseador;
