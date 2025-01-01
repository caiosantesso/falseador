import { MocksPadrão } from './MocksPadrão';

const mocks = new MocksPadrão();

const programa = '../src/index';
const comando = ['', '', 'item'];
const concatenaçãoDeItens = 'a,b,c,d,e';
const itensSeparados = concatenaçãoDeItens.split(',');
const separadorPadrão = '\n';

beforeEach(jest.resetModules);

describe('comando Item', () => {
  test('opção --help', async () => {
    process.argv = [...comando, '--help'];
    await import(programa);

    const saída = mocks.textoDaÚltimaSaída();
    expect(saída).toMatch(/^ {2}sortear.*/m);
    expect(saída).toMatch(/^ {2}embaralhar.*/m);
  });

  describe('subcomando sortear', () => {
    const subcomando = 'sortear';

    test('sem argumento', async () => {
      process.argv = [...comando, subcomando];
      await import(programa);

      mocks.espereArgumentoFaltante();
    });

    test('argumentos demasiados', async () => {
      process.argv = [...comando, subcomando, 'X', 'Y'];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });

    test('<itensConcatenados> válido', async () => {
      process.argv = [...comando, subcomando, concatenaçãoDeItens];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      expect(itensSeparados).toContain(saída);
    });

    test('<itensConcatenados> com menos de 2 itens', async () => {
      process.argv = [...comando, subcomando, 'a,,'];
      await import(programa);

      mocks.espereSaídaDeErroContendo('deve ser menor');
    });

    test('opção sorteios válida', async () => {
      const sorteios = 2;
      process.argv = [
        ...comando,
        subcomando,
        concatenaçãoDeItens,
        '--sorteios',
        String(sorteios),
      ];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída() as string;
      const sorteados = saída.split(separadorPadrão);

      expect(sorteados).toHaveLength(sorteios);
      expect(new Set(sorteados).size).toBe(sorteios);
    });

    test('opção sorteios, qtde de sorteio maior que qtde de itens', async () => {
      const sorteios = 20;
      process.argv = [
        ...comando,
        subcomando,
        concatenaçãoDeItens,
        '--sorteios',
        String(sorteios),
      ];
      await import(programa);

      mocks.espereSaídaDeErroContendo('deve ser menor que a de itens.');
    });

    test('opção sorteios, não número', async () => {
      const argInválido = 'zz';
      process.argv = [
        ...comando,
        subcomando,
        concatenaçãoDeItens,
        '--sorteios',
        argInválido,
      ];
      await import(programa);

      mocks.espereArgumentoInválido(argInválido);
    });

    test('opção separador', async () => {
      const sorteios = 3;
      const separador = ';';
      process.argv = [
        ...comando,
        subcomando,
        concatenaçãoDeItens,
        '--separador',
        separador,
        '--sorteios',
        String(sorteios),
      ];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída() as string;
      const sorteados = saída.split(separador);

      expect(sorteados).toHaveLength(sorteios);
    });
  });

  describe('subcomando embaralhar', () => {
    const subcomando = 'embaralhar';

    test('sem argumento', async () => {
      process.argv = [...comando, subcomando];
      await import(programa);

      mocks.espereArgumentoFaltante();
    });

    test('argumentos demasiados', async () => {
      process.argv = [...comando, subcomando, 'X', 'Y'];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });

    test('<itensConcatenados> válido', async () => {
      process.argv = [...comando, subcomando, concatenaçãoDeItens];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída() as string;
      const embaralhados = saída.split(separadorPadrão);

      expect(embaralhados).toEqual(expect.arrayContaining(itensSeparados));
      expect(embaralhados).toHaveLength(itensSeparados.length);
    });

    test('<itensConcatenados> com menos de 2 itens', async () => {
      process.argv = [...comando, subcomando, 'a,,'];
      await import(programa);

      mocks.espereSaídaDeErroContendo('deve ter ao menos 2 itens.');
    });

    test('opção separador', async () => {
      const separador = ';';
      process.argv = [
        ...comando,
        subcomando,
        concatenaçãoDeItens,
        '--separador',
        separador,
      ];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      const embaralhados = saída.split(separador);

      expect(embaralhados).toHaveLength(itensSeparados.length);
    });
  });
});
