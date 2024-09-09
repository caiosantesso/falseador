#!/usr/bin/env node

import * as process from 'node:process';
import { CommanderError } from 'commander';
import { Comando } from './Comando';
import { ComandoNome } from './ComandoNome';
import { ComandoDoc } from './ComandoDoc';
import { ComandoData } from './ComandoData';
import { ComandoPessoa } from './ComandoPessoa';
import { ComandoLocal } from './ComandoLocal';
import { ComandoNúmero } from './ComandoNúmero';
import { ComandoTexto } from './ComandoTexto';
import { ComandoItem } from './ComandoItem';
import { carmesim } from './Utilitários';

const comando = new Comando()
  .name('falseador')
  .description(
    'Gerador de dados por vezes brasileiros, aleatórios e verossímeis.',
  )
  .version('0.0.1')
  .addCommand(new ComandoData())
  .addCommand(new ComandoDoc())
  .addCommand(new ComandoLocal())
  .addCommand(new ComandoNome())
  .addCommand(new ComandoNúmero())
  .addCommand(new ComandoPessoa())
  .addCommand(new ComandoTexto())
  .addCommand(new ComandoItem());

try {
  comando.parse(process.argv);
} catch (e) {
  if (e instanceof CommanderError) {
    // Neste ponto a saída de erro já foi escrita. Apenas saída com código de saída abaixo.
  } else if (e instanceof Error) {
    process.stderr.write(carmesim`erro: ${e.message}`);
  } else {
    process.stderr.write(carmesim`erro: Falha inesperada.`);
  }
  process.exit(2);
}
