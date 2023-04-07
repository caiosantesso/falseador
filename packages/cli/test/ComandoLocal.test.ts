import { falseador } from 'falseador-lib';

const programa = '../src/index';

describe('comando Local', () => {
  const info = jest.spyOn(console, 'info');
  const expRegular = /^[\p{sc=Latin} ]{3,} - \p{sc=Latin}{2}$/u;
  const comando = ['', '', 'local'];

  beforeEach(() => {
    jest.resetModules();
  });

  test('subcomando padrão', async () => {
    process.argv = comando;
    await import(programa);

    expect(info.mock.lastCall?.[0]).toMatch(expRegular);
  });

  test('comando abreviado', async () => {
    process.argv = ['', '', 'l'];
    await import(programa);

    expect(info.mock.lastCall?.[0]).toMatch(expRegular);
  });

  test('subcomando cidade', async () => {
    process.argv = [...comando, 'cidade'];
    await import(programa);

    expect(info.mock.lastCall?.[0]).toMatch(expRegular);
  });

  test('subcomando cidade sem sigla', async () => {
    process.argv = [...comando, 'cidade', '--sem-sigla'];
    await import(programa);

    const saída = falseador.texto.removeAcentos(info.mock.lastCall?.[0]);
    expect(saída).toMatch(/^[\p{sc=Latin} /-]{3,}$/u);
  });
});
