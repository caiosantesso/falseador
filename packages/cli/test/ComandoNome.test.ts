import { MocksPadrão } from './MocksPadrão';

const mocks = new MocksPadrão();

const programa = '../src/index';
const comando = ['', '', 'nome'];

beforeEach(jest.resetModules);

describe('comando Nome', () => {
  const padrãoNome = /^[\p{sc=Latin} /-]{3,}$/u;

  test('apelido, subcomando padrão', async () => {
    process.argv = ['', '', 'n'];
    await import(programa);

    const saída = mocks.textoDaÚltimaSaída();
    expect(saída).toMatch(padrãoNome);
  });

  test('subcomando padrão nome completo', async () => {
    process.argv = comando;
    await import(programa);

    const saída = mocks.textoDaÚltimaSaída();
    expect(saída).toMatch(padrãoNome);
  });

  describe.each([
    ['completo', 'F', 'Z', ['F', 'M']],
    ['primeiro', 'F', 'Z', ['F', 'M']],
    ['composto', 'F', 'Z', ['F', 'M']],
    ['sobrenomes', '5', 'Z', ['1', '2']],
  ])('subcomando %s', (subcomando, argVálido, argInválido, args) => {
    test('sem argumentos, sucesso', async () => {
      process.argv = [...comando, subcomando];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      expect(saída).toMatch(padrãoNome);
    });

    test('[gênero] válido', async () => {
      process.argv = [...comando, subcomando, argVálido];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      expect(saída).toMatch(padrãoNome);
    });

    test('[gênero] inválido', async () => {
      process.argv = [...comando, subcomando, argInválido];
      await import(programa);

      mocks.espereArgumentoComVerificadorInválido(argInválido);
    });

    test('argumentos demasiados', async () => {
      process.argv = [...comando, subcomando, ...args];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });
  });

  describe('subcomando abreviado', () => {
    const subcomando = 'abreviado';

    test('sem argumentos', async () => {
      process.argv = [...comando, subcomando];
      await import(programa);

      mocks.espereArgumentoFaltante();
    });

    test('<nome> válido', async () => {
      process.argv = [...comando, subcomando, 'Ângela Ivone David'];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      expect(saída).toEqual('Ângela I. David');
    });

    test('argumentos demasiados', async () => {
      process.argv = [...comando, subcomando, 'X', 'Z'];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });
  });
});
