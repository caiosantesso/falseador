import { falseador } from '@falseador/lib';
import { Comando } from './Comando';

export class ComandoDoc extends Comando {
  public constructor() {
    super('doc');
    super
      .description('Gera números de documento.')
      .alias('d')
      .addCommand(this.cnpj())
      .addCommand(this.cpf());
  }

  private cpf() {
    return new Comando('cpf')
      .description('Cadastro de Pessoa Física.')
      .action(() => {
        console.info(falseador.doc.cpf());
      });
  }

  private cnpj() {
    return new Comando('cnpj')
      .description('Cadastro Nacional de Pessoa Jurídica.')
      .action(() => {
        console.info(falseador.doc.cnpj());
      });
  }
}
