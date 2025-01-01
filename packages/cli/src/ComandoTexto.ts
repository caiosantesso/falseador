import { falseador } from '@falseador/lib';
import { Comando } from './Comando';

export class ComandoTexto extends Comando {
  public constructor() {
    super('texto');

    super
      .description('Gera letras aleatórias.')
      .alias('t')
      .addCommand(this.subcomandoLetra())
      .addCommand(this.subcomandoRemoveAcentos());
  }

  private subcomandoLetra() {
    return new Comando('letra')
      .description('aleatória entre as 26 letras do alfabeto português.')
      .option('--minúscula', 'letra minúscula.', false)
      .option('--acentuadas', 'inclui letras acentuadas.', false)
      .action((opções: { minúscula: boolean; acentuadas: boolean }) => {
        const maiúscula = falseador.texto.letra(opções.acentuadas);
        process.stdout.write(
          opções.minúscula ? maiúscula.toLocaleLowerCase('pt-BR') : maiúscula,
        );
      });
  }

  private subcomandoRemoveAcentos() {
    return new Comando('removeAcentos')
      .alias('ra')
      .description(
        'substitui letras acentuadas por sua contraparte não acentudada.',
      )
      .argument('texto', 'texto a ter letras acentuadas substituídas.')
      .action((texto: string) => {
        process.stdout.write(falseador.texto.removeAcentos(texto));
      });
  }
}
