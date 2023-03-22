"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LinhaDeComando_instances, _LinhaDeComando_imprimeErro, _LinhaDeComando_obtenhaIdDaCategoria, _LinhaDeComando_verifiqueErroEmCategoria, _LinhaDeComando_obtenhaIdDoMétodo, _LinhaDeComando_verifiqueErroEmMétodo, _LinhaDeComando_invoqueMétodo;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinhaDeComando = void 0;
class LinhaDeComando {
    constructor(falseador) {
        this.falseador = falseador;
        _LinhaDeComando_instances.add(this);
    }
    execute() {
        const idDaCategoria = __classPrivateFieldGet(this, _LinhaDeComando_instances, "m", _LinhaDeComando_obtenhaIdDaCategoria).call(this);
        const categoria = this.falseador[idDaCategoria];
        const idDoMétodo = __classPrivateFieldGet(this, _LinhaDeComando_instances, "m", _LinhaDeComando_obtenhaIdDoMétodo).call(this, categoria);
        __classPrivateFieldGet(this, _LinhaDeComando_instances, "m", _LinhaDeComando_invoqueMétodo).call(this, categoria, idDoMétodo);
    }
}
exports.LinhaDeComando = LinhaDeComando;
_LinhaDeComando_instances = new WeakSet(), _LinhaDeComando_imprimeErro = function _LinhaDeComando_imprimeErro(mensagem) {
    console.error('\x1b[31m%s\x1b[0m', mensagem);
    process.exit(127);
}, _LinhaDeComando_obtenhaIdDaCategoria = function _LinhaDeComando_obtenhaIdDaCategoria() {
    var _a;
    const possívelIdDaCategoria = (_a = process.argv) === null || _a === void 0 ? void 0 : _a[2];
    __classPrivateFieldGet(this, _LinhaDeComando_instances, "m", _LinhaDeComando_verifiqueErroEmCategoria).call(this, possívelIdDaCategoria);
    return possívelIdDaCategoria;
}, _LinhaDeComando_verifiqueErroEmCategoria = function _LinhaDeComando_verifiqueErroEmCategoria(id) {
    const protótipo = Object.getPrototypeOf(this.falseador);
    const propriedades = Object.getOwnPropertyDescriptors(protótipo);
    const categorias = Object.entries(propriedades)
        .filter(([, valor]) => valor.get)
        .map(([chave]) => chave);
    let erro;
    if (!id)
        erro = `Categoria deve ser informada.`;
    else if (!categorias.includes(id))
        erro = `Não há a categoria ${id}.`;
    if (erro)
        __classPrivateFieldGet(this, _LinhaDeComando_instances, "m", _LinhaDeComando_imprimeErro).call(this, `${erro}\nCategorias: ${categorias.join('|')}`);
}, _LinhaDeComando_obtenhaIdDoMétodo = function _LinhaDeComando_obtenhaIdDoMétodo(categoria) {
    var _a;
    const possívelIdDoMétodo = (_a = process.argv) === null || _a === void 0 ? void 0 : _a[3];
    __classPrivateFieldGet(this, _LinhaDeComando_instances, "m", _LinhaDeComando_verifiqueErroEmMétodo).call(this, possívelIdDoMétodo, categoria);
    return possívelIdDoMétodo;
}, _LinhaDeComando_verifiqueErroEmMétodo = function _LinhaDeComando_verifiqueErroEmMétodo(id, categoria) {
    const protótipo = Object.getPrototypeOf(categoria);
    const propriedades = Object.getOwnPropertyDescriptors(protótipo);
    const métodos = Object.entries(propriedades)
        .filter(([chave, valor]) => typeof valor.value === 'function' && chave !== 'constructor')
        .map(([chave]) => chave);
    let erro;
    if (!id)
        erro = `Método deve ser informado.`;
    else if (!(id in categoria))
        erro = `Não há o método ${id}.`;
    if (erro)
        __classPrivateFieldGet(this, _LinhaDeComando_instances, "m", _LinhaDeComando_imprimeErro).call(this, `${erro}\nMétodos: ${métodos.join('|')}`);
}, _LinhaDeComando_invoqueMétodo = function _LinhaDeComando_invoqueMétodo(categoria, idDoMétodo) {
    var _a;
    const argumento = (_a = process.argv) === null || _a === void 0 ? void 0 : _a[4];
    const parâmetros = categoria[idDoMétodo].length;
    if (parâmetros && !argumento) {
        __classPrivateFieldGet(this, _LinhaDeComando_instances, "m", _LinhaDeComando_imprimeErro).call(this, `Argumento é requerido para método ${idDoMétodo}.`);
    }
    const arg = /^-?\d+$/.test(argumento) ? Number(argumento) : argumento;
    try {
        const resultado = categoria[idDoMétodo](arg);
        console.info(resultado);
    }
    catch (erro) {
        console.error(erro.message);
    }
};
