import { Command } from 'commander';
import { falseador } from 'falseador-lib';
import { Comando } from './Comando';

export class ComandoDoc implements Comando {
  public obtenha(): Command {
    return new Command('doc')
      .description('Gera números de documento.')
      .alias('d')
      .addCommand(this.cnpj())
      .addCommand(this.cpf());
  }

  private cpf() {
    return new Command('cpf')
      .description('Cadastro de Pessoa Física.')
      .action(() => {
        console.info(falseador.doc.cpf());
      });
  }

  private cnpj() {
    return new Command('cnpj')
      .description('Cadastro Nacional de Pessoa Jurídica.')
      .action(() => {
        console.info(falseador.doc.cnpj());
      });
  }
}
