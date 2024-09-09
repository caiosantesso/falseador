import { MocksPadrão } from './MocksPadrão';

const mocks = new MocksPadrão();

const programa = '../src/index';
const comando = ['', '', 'doc'];

describe('comando Doc', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('comando abreviado', async () => {
    process.argv = ['', '', 'd', 'cpf'];
    await import(programa);

    expect(mocks.textoDaÚltimaSaída()).toMatch(/^\d{11}$/);
  });

  describe('subcomando cpf', () => {
    const subcomando = 'cpf';

    test('sem argumentos', async () => {
      process.argv = [...comando, subcomando];
      await import(programa);

      expect(mocks.textoDaÚltimaSaída()).toMatch(/^\d{11}$/);
    });

    test('com argumento, erro', async () => {
      process.argv = [...comando, subcomando, 'Z'];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });
  });

  describe('subcomando cnpj', () => {
    const subcomando = 'cnpj';
    test('sem argumentos', async () => {
      process.argv = [...comando, subcomando];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      expect(saída).toMatch(/^\d{14}$/);
    });

    test('com argumento, erro', async () => {
      process.argv = [...comando, subcomando, 'Z'];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });
  });
});
