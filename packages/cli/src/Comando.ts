import { Command } from 'commander';
import { carmesim } from './Utilitários';

export class Comando extends Command {
  public constructor(nome?: string) {
    super(nome);

    super
      .configureOutput({
        outputError: (str, write) => write(carmesim`${str}`),
      })
      .allowExcessArguments(false)
      .exitOverride();
  }
}
