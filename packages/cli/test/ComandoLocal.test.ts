import { MocksPadrão } from './MocksPadrão';

const mocks = new MocksPadrão();

const programa = '../src/index';
const comando = ['', '', 'local'];

beforeEach(jest.resetModules);

describe('comando Local', () => {
  const padrãoCidadeUf = /^[\p{sc=Latin} ]{3,} - \p{sc=Latin}{2}$/u;

  test('subcomando padrão', async () => {
    process.argv = comando;
    await import(programa);

    expect(mocks.textoDaÚltimaSaída()).toMatch(padrãoCidadeUf);
  });

  test('comando abreviado', async () => {
    process.argv = ['', '', 'l'];
    await import(programa);

    expect(mocks.textoDaÚltimaSaída()).toMatch(padrãoCidadeUf);
  });

  describe('subcomando cidade', () => {
    const subcomando = 'cidade';

    test('sem argumento, sucesso', async () => {
      process.argv = [...comando, subcomando];
      await import(programa);

      expect(mocks.textoDaÚltimaSaída()).toMatch(padrãoCidadeUf);
    });

    test('[uf] válido', async () => {
      process.argv = [...comando, subcomando, 'DF'];
      await import(programa);

      expect(mocks.textoDaÚltimaSaída()).toMatch(padrãoCidadeUf);
    });

    test('[uf] inválido', async () => {
      const argumento = 'Z';
      process.argv = [...comando, subcomando, argumento];
      await import(programa);

      mocks.espereArgumentoComVerificadorInválido(argumento);
    });

    test('argumentos demasiados', async () => {
      process.argv = [...comando, subcomando, 'DF', 'AM'];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });

    test('--sem-uf', async () => {
      process.argv = [...comando, 'cidade', '--sem-uf'];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      expect(saída).toMatch(/^[\p{sc=Latin} ]{3,}$/u);
      expect(saída).not.toMatch(/^-+$/);
    });
  });
});
