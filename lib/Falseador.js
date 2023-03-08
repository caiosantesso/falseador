"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Falseador = void 0;
const N_mero_1 = require("./N\u00FAmero");
const Nome_1 = require("./Nome");
const Tipo_1 = require("./Tipo");
const Documento_1 = require("./Documento");
const Texto_1 = require("./Texto");
class Falseador {
    constructor() {
        this.categoriaNome = new Nome_1.Nome();
        this.categoriaNúmero = new N_mero_1.Número();
        this.categoriaTipo = new Tipo_1.Tipo();
        this.categoriaTexto = new Texto_1.Texto();
        this.categoriaDocumento = new Documento_1.Documento();
    }
    get nome() {
        return this.categoriaNome;
    }
    get número() {
        return this.categoriaNúmero;
    }
    get tipo() {
        return this.categoriaTipo;
    }
    get texto() {
        return this.categoriaTexto;
    }
    get doc() {
        return this.categoriaDocumento;
    }
}
exports.Falseador = Falseador;
