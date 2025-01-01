import { falseador, util } from '@falseador/lib';
import { Comando } from './Comando';
import { validaOpçãoNúmeroInteiroPositivo } from './Utilitários';

const { Exceção } = util;

export class ComandoItem extends Comando {
  public constructor() {
    super('item');

    super
      .description('Sorteia e embaralha itens.')
      .alias('i')
      .addCommand(this.subcomandoSorteio(), { isDefault: true })
      .addCommand(this.subcomandoEmbaralhar());
  }

  private subcomandoSorteio() {
    return new Comando('sortear')
      .description(
        'Sorteia item aleatório dentre os especificados em <itensConcatenados>. Itens vazios são ignorados.',
      )
      .alias('s')
      .argument('itensConcanetados', 'itens divididos por , (vírgula)')
      .option(
        '-q, --sorteios <número>',
        'quantidade de itens únicos sorteados.',
        validaOpçãoNúmeroInteiroPositivo,
        1,
      )
      .option(
        '-s, --separador <caracteres>',
        'separador dos itens sorteados.',
        '\n',
      )
      .action(
        (
          itensConcanetados: string,
          opções: { sorteios: number; separador: string },
        ) => {
          const itens = itensConcanetados
            .split(',')
            .filter((item) => item !== '');

          if (opções.sorteios >= itens.length)
            throw new Exceção(
              'Quantidade de sorteios deve ser menor que a de itens.',
            );

          let i = 0;
          let resultado = '';
          while (i++ < opções.sorteios - 1) {
            const item = falseador.tipo.entre(itens);
            const índice = itens.indexOf(item);
            itens.splice(índice, 1);
            resultado += `${item}${opções.separador}`;
          }

          resultado += `${falseador.tipo.entre(itens)}`;

          process.stdout.write(resultado);
        },
      );
  }

  private subcomandoEmbaralhar() {
    return new Comando('embaralhar')
      .description('embaralha itens.')
      .alias('e')
      .argument('itensConcanetados', 'itens divididos por , (vírgula).')
      .option(
        '-s, --separador <caracteres>',
        'separador dos itens sorteados; se sequência, deve estar envolta por aspas.',
        '\n',
      )
      .action((itensConcanetados: string, opções: { separador: string }) => {
        const itens = itensConcanetados
          .split(',')
          .filter((item) => item !== '');
        const embaralhada = falseador.tipo.cópiaEmbaralhada(itens);
        const resultado = embaralhada.join(opções.separador);

        process.stdout.write(resultado);
      });
  }
}
