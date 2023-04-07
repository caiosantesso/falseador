const programa = '../src/index';
const comando = ['', '', 'nome'];
const info = jest.spyOn(console, 'info');

describe('comando Nome', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('comando abreviado, nome completo', async () => {
    process.argv = ['', '', 'n'];
    await import(programa);

    expect(info.mock.lastCall?.[0]).toMatch(/^[\p{sc=Latin} /-]{7,}$/u);
  });

  test('subcomando padrão nome completo', async () => {
    process.argv = comando;
    await import(programa);

    expect(info.mock.lastCall?.[0]).toMatch(/^[\p{sc=Latin} /-]{7,}$/u);
  });

  test('subcomando primeiro nome', async () => {
    process.argv = [...comando, 'primeiro'];
    await import(programa);

    expect(info.mock.lastCall?.[0]).toMatch(/^[\p{sc=Latin} /-]{3,}$/u);
  });
});
