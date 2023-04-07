#!/usr/bin/env node

import { Command } from 'commander';
import { ComandoNome } from './ComandoNome';
import { ComandoDoc } from './ComandoDoc';
import { CommandoPessoa } from './ComandoPessoa';
import { CommandoLocal } from './ComandoLocal';

const programa = new Command();

programa.configureOutput({
  outputError: (str, write) => write(`\x1b[31m${str}\x1b[0m`),
});

programa
  .name('falseador')
  .description(
    'Gerador de dados por vezes brasileiros, aleatórios e verossímeis.',
  )
  .version('0.0.1');

[
  new ComandoNome(),
  new ComandoDoc(),
  new CommandoPessoa(),
  new CommandoLocal(),
].forEach((comando) => programa.addCommand(comando.obtenha()));

programa.parse(process.argv);
