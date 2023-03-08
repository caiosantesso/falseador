#!/usr/bin/env node
import { Falseador } from './Falseador';
import { LinhaDeComando } from './LinhaDeComando';

export const falseador = new Falseador();


const foiExecutadoDoTerminal = require.main === module;

if (foiExecutadoDoTerminal) {
  const linhaDeComando = new LinhaDeComando(falseador);
  linhaDeComando.execute();
}
