const programa = '../src/index';
const info = jest.spyOn(console, 'info');
const comando = ['', '', 'pessoa'];

describe('comando Pessoa', () => {
  const ref = {
    nome: expect.stringMatching(/^[\p{sc=Latin} /-]+$/u),
    nascimento: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
    idade: expect.any(Number),
    cpf: expect.stringMatching(/^\d{11}$/),
    email: expect.stringMatching(/\w+@\w+/),
    cidade: expect.stringMatching(/^[\p{sc=Latin} /-]+$/u),
    estado: expect.stringMatching(/^\w{2}$/),
  };

  beforeEach(() => {
    jest.resetModules();
  });

  test('subcomando padrão', async () => {
    process.argv = comando;
    await import(programa);

    const saída = JSON.parse(info.mock.lastCall?.[0]);
    expect(saída).toMatchObject(ref);
  });

  test('comando abreviado', async () => {
    process.argv = ['', '', 'p'];
    await import(programa);

    const saída = JSON.parse(info.mock.lastCall?.[0]);
    expect(saída).toMatchObject(ref);
  });

  test('subcomando completa', async () => {
    process.argv = [...comando, 'completa'];
    await import(programa);

    const saída = JSON.parse(info.mock.lastCall?.[0]);
    expect(saída).toMatchObject(ref);
  });

  test('subcomando completa, opção tabela', async () => {
    process.argv = [...comando, 'completa', '--tabela'];
    await import(programa);

    const saída = info.mock.lastCall?.[0];
    expect(saída).toMatch(
      /^nome .+\nnascimento .+\nidade .+\ncpf .+\nemail .+\ncidade .+\nestado .+$/m,
    );
  });

  test('subcomando completa, opção json', async () => {
    process.argv = [...comando, 'completa', '--json'];
    await import(programa);

    const saída = JSON.parse(info.mock.lastCall?.[0]);
    expect(saída).toMatchObject(ref);
  });
});
