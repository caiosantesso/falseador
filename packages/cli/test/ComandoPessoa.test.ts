import { MocksPadrão } from './MocksPadrão';

const mocks = new MocksPadrão();

const programa = '../src/index';
const comando = ['', '', 'pessoa'];

beforeEach(jest.resetModules);

describe('comando Pessoa', () => {
  const padrãoEmail = /[\w.-]{2,}@[a-z.]{9,}/;
  const ref = {
    nome: expect.stringMatching(/^[\p{sc=Latin} '/-]+$/u),
    nascimento: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
    idade: expect.any(Number),
    cpf: expect.stringMatching(/^\d{11}$/),
    email: expect.stringMatching(padrãoEmail),
    cidade: expect.stringMatching(/^[\p{sc=Latin}´ /-]+$/u),
    estado: expect.stringMatching(/^\w{2}$/),
  };

  test('--help', async () => {
    process.argv = [...comando, '--help'];
    await import(programa);

    const saída = mocks.textoDaÚltimaSaída();
    expect(saída).toMatch(/^ {2}completa.*/m);
    expect(saída).toMatch(/^ {2}email.*/m);
  });

  test('subcomando padrão', async () => {
    process.argv = comando;
    await import(programa);

    const saída = JSON.parse(mocks.textoDaÚltimaSaída());
    expect(saída).toMatchObject(ref);
  });

  test('apelido', async () => {
    process.argv = ['', '', 'p'];
    await import(programa);

    const saída = JSON.parse(mocks.textoDaÚltimaSaída());
    expect(saída).toMatchObject(ref);
  });

  describe('subcomando completa', () => {
    const subcomando = 'completa';

    test('sem opção', async () => {
      process.argv = [...comando, subcomando];
      await import(programa);

      const saída = JSON.parse(mocks.textoDaÚltimaSaída());
      expect(saída).toMatchObject(ref);
    });

    test('--tabela', async () => {
      process.argv = [...comando, subcomando, '--tabela'];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();
      expect(saída).toMatch(
        /^nome .+\nnascimento .+\nidade .+\ncpf .+\nemail .+\ncidade .+\nestado .+$/m,
      );
    });

    test('--json', async () => {
      process.argv = [...comando, subcomando, '--json'];
      await import(programa);

      const saída = JSON.parse(mocks.textoDaÚltimaSaída());
      expect(saída).toMatchObject(ref);
    });

    test('--json --tabela', async () => {
      const opção1 = '--json';
      const opção2 = '--tabela';

      process.argv = [...comando, subcomando, opção1, opção2];
      await import(programa);

      mocks.espereSaídaDeErroContendo(
        `option '${opção1}' cannot be used with option '${opção2}'`,
      );
    });

    test('[gênero] válido', async () => {
      process.argv = [...comando, subcomando, 'F'];
      await import(programa);

      const saída = JSON.parse(mocks.textoDaÚltimaSaída());
      expect(saída).toMatchObject(ref);
    });

    test('[gênero] inválido', async () => {
      const argumento = 'Z';
      process.argv = [...comando, subcomando, 'Z'];
      await import(programa);

      mocks.espereArgumentoComVerificadorInválido(argumento);
    });

    test('argumentos demasiados', async () => {
      process.argv = [...comando, subcomando, 'F', 'M'];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });

    describe('subcomando email', () => {
      const subcomando = 'email';

      test('sem argumentos', async () => {
        process.argv = [...comando, subcomando];
        await import(programa);

        const saída = mocks.textoDaÚltimaSaída();
        expect(saída).toMatch(padrãoEmail);
      });

      test('[nome] completo', async () => {
        process.argv = [...comando, subcomando, 'Carlos Marquês'];
        await import(programa);

        const saída = mocks.textoDaÚltimaSaída();
        expect(saída).toMatch(/c[\w.-]*m[\w.-]*@[a-z.]{9,}/);
      });

      test('[nome] incompleto', async () => {
        process.argv = [...comando, subcomando, 'Silvia'];
        await import(programa);

        const saída = mocks.textoDaÚltimaSaída();
        expect(saída).toMatch(padrãoEmail);
      });
    });
  });
});
