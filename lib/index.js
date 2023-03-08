#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.falseador = void 0;
const Falseador_1 = require("./Falseador");
const LinhaDeComando_1 = require("./LinhaDeComando");
exports.falseador = new Falseador_1.Falseador();
const foiExecutadoDoTerminal = require.main === module;
if (foiExecutadoDoTerminal) {
    const linhaDeComando = new LinhaDeComando_1.LinhaDeComando(exports.falseador);
    linhaDeComando.execute();
}
