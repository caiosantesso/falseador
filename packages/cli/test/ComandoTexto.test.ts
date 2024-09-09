import { MocksPadrão } from './MocksPadrão';

const mocks = new MocksPadrão();

const programa = '../src/index';
const comando = ['', '', 'texto'];

beforeEach(jest.resetModules);

describe('comando Texto', () => {
  test('opção --help', async () => {
    process.argv = [...comando, '--help'];
    await import(programa);

    const saída = mocks.textoDaÚltimaSaída();
    expect(saída).toMatch(/^ {2}letra.*/m);
    expect(saída).toMatch(/^ {2}removeAcentos.*/m);
  });

  describe('subcomando letra', () => {
    const subcomando = 'letra';
    const alfabetoMaiúsculo = /[A-Z]/;
    const alfabetoMinúsculo = /[a-z]/;
    const alfabetoMaiúsculoAcentuado = /[A-ZÀÁÂÃÇÉÊÍÓÔÕÚ]/;
    const alfabetoMinúsculoAcentuado = /[a-zàáâãçéêíóôõú]/;

    test('sem argumentos', async () => {
      process.argv = [...comando, subcomando];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      expect(saída).toMatch(alfabetoMaiúsculo);
    });

    test('argumentos demasiados', async () => {
      process.argv = [...comando, subcomando, 'X'];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });

    test('--minúscula', async () => {
      process.argv = [...comando, subcomando, '--minúscula'];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      expect(saída).toMatch(alfabetoMinúsculo);
    });

    test('--acentuadas', async () => {
      process.argv = [...comando, subcomando, '--acentuadas'];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      expect(saída).toMatch(alfabetoMaiúsculoAcentuado);
    });

    test('--acentuadas --minúscula', async () => {
      process.argv = [...comando, subcomando, '--acentuadas', '--minúscula'];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      expect(saída).toMatch(alfabetoMinúsculoAcentuado);
    });
  });

  describe('subcomando removeAcentos', () => {
    const subcomando = 'removeAcentos';
    const acentuada = 'açúde';
    const desacentuada = 'acude';

    test('apelido', async () => {
      process.argv = [...comando, 'ra', acentuada];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      expect(saída).toBe(desacentuada);
    });

    test('<texto> válido', async () => {
      process.argv = [...comando, subcomando, acentuada];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      expect(saída).toBe(desacentuada);
    });

    test('sem argumento', async () => {
      process.argv = [...comando, subcomando];
      await import(programa);

      mocks.espereArgumentoFaltante();
    });

    test('demasiados argumentos', async () => {
      process.argv = [...comando, subcomando, 'X', 'Y'];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });
  });
});
