#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const ComandoNome_1 = require("./ComandoNome");
const ComandoDoc_1 = require("./ComandoDoc");
const ComandoPessoa_1 = require("./ComandoPessoa");
const ComandoLocal_1 = require("./ComandoLocal");
const programa = new commander_1.Command();
programa.configureOutput({
    outputError: (str, write) => write(`\x1b[31m${str}\x1b[0m`),
});
programa
    .name('falseador')
    .description('Gerador de dados por vezes brasileiros, aleatórios e verossímeis.')
    .version('0.0.1');
[
    new ComandoNome_1.ComandoNome(),
    new ComandoDoc_1.ComandoDoc(),
    new ComandoPessoa_1.CommandoPessoa(),
    new ComandoLocal_1.CommandoLocal(),
].forEach((comando) => programa.addCommand(comando.obtenha()));
programa.parse(process.argv);
