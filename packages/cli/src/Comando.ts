import { Command } from 'commander';

export interface Comando {
  obtenha: () => Command;
}
