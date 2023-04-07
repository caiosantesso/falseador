"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Falseador_categoriaNome, _Falseador_categoriaNúmero, _Falseador_categoriaTipo, _Falseador_categoriaTexto, _Falseador_categoriaDocumento, _Falseador_categoriaPessoa, _Falseador_categoriaLocal, _Falseador_categoriaData;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Falseador = void 0;
const N_mero_1 = require("./N\u00FAmero");
const Nome_1 = require("./Nome");
const Tipo_1 = require("./Tipo");
const Documento_1 = require("./Documento");
const Texto_1 = require("./Texto");
const Pessoa_1 = require("./Pessoa");
const Data_1 = require("./Data");
const Local_1 = require("./Local");
class Falseador {
    constructor() {
        _Falseador_categoriaNome.set(this, new Nome_1.Nome());
        _Falseador_categoriaNúmero.set(this, new N_mero_1.Número());
        _Falseador_categoriaTipo.set(this, new Tipo_1.Tipo());
        _Falseador_categoriaTexto.set(this, new Texto_1.Texto());
        _Falseador_categoriaDocumento.set(this, new Documento_1.Documento());
        _Falseador_categoriaPessoa.set(this, new Pessoa_1.Pessoa());
        _Falseador_categoriaLocal.set(this, new Local_1.Local());
        _Falseador_categoriaData.set(this, new Data_1.Data());
    }
    get nome() {
        return __classPrivateFieldGet(this, _Falseador_categoriaNome, "f");
    }
    get número() {
        return __classPrivateFieldGet(this, _Falseador_categoriaNúmero, "f");
    }
    get tipo() {
        return __classPrivateFieldGet(this, _Falseador_categoriaTipo, "f");
    }
    get texto() {
        return __classPrivateFieldGet(this, _Falseador_categoriaTexto, "f");
    }
    get doc() {
        return __classPrivateFieldGet(this, _Falseador_categoriaDocumento, "f");
    }
    get pessoa() {
        return __classPrivateFieldGet(this, _Falseador_categoriaPessoa, "f");
    }
    get local() {
        return __classPrivateFieldGet(this, _Falseador_categoriaLocal, "f");
    }
    get data() {
        return __classPrivateFieldGet(this, _Falseador_categoriaData, "f");
    }
}
exports.Falseador = Falseador;
_Falseador_categoriaNome = new WeakMap(), _Falseador_categoriaNúmero = new WeakMap(), _Falseador_categoriaTipo = new WeakMap(), _Falseador_categoriaTexto = new WeakMap(), _Falseador_categoriaDocumento = new WeakMap(), _Falseador_categoriaPessoa = new WeakMap(), _Falseador_categoriaLocal = new WeakMap(), _Falseador_categoriaData = new WeakMap();
