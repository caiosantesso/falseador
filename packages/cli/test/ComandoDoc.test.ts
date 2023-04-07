import { falseador } from 'falseador-lib';

const programa = '../src/index';
const comando = ['', '', 'doc'];
const info = jest.spyOn(console, 'info');

describe('comando Doc', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('comando abreviado', async () => {
    process.argv = ['', '', 'd', 'cpf'];
    await import(programa);

    expect(info.mock.lastCall?.[0]).toMatch(/^\d{11}$/);
  });

  test('subcomando cpf', async () => {
    process.argv = [...comando, 'cpf'];
    await import(programa);

    expect(info.mock.lastCall?.[0]).toMatch(/^\d{11}$/);
  });

  test('subcomando cnpj', async () => {
    process.argv = [...comando, 'cnpj'];
    await import(programa);

    const saída = falseador.texto.removeAcentos(info.mock.lastCall?.[0]);
    expect(saída).toMatch(/^\d{14}$/);
  });
});
