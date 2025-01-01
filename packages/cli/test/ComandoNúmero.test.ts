import { MocksPadrão } from './MocksPadrão';

const mocks = new MocksPadrão();

const programa = '../src/index';
const comando = ['', '', 'numero'];

beforeEach(jest.resetModules);

describe('comando Número', () => {
  test('--help', async () => {
    process.argv = [...comando, '--help'];
    await import(programa);

    const saída = mocks.textoDaÚltimaSaída();
    expect(saída).toMatch(/^ {2}0/m);
    expect(saída).toMatch(/^ {2}1/m);
    expect(saída).toMatch(/^ {2}entre/m);
    expect(saída).toMatch(/^ {2}romano/m);
    expect(saída).toMatch(/^ {2}porextenso/m);
  });

  describe.each([
    ['0', 0],
    ['1', 1],
  ])('subcomando %s', (subcomando, mínimo) => {
    test('<x> válido', async () => {
      process.argv = [...comando, subcomando, '7'];
      await import(programa);

      const saída = Number.parseInt(mocks.textoDaÚltimaSaída());

      expect(saída).toBeGreaterThanOrEqual(mínimo);
      expect(saída).toBeLessThanOrEqual(7);
    });

    test('<x> inválido, não número', async () => {
      const argInválido = 'Z';
      process.argv = [...comando, subcomando, argInválido];
      await import(programa);

      mocks.espereArgumentoComVerificadorInválido(argInválido);
    });

    test(`<x> inválido, <x> <= ${mínimo}`, async () => {
      process.argv = [...comando, subcomando, mínimo.toString()];
      await import(programa);

      mocks.espereArgumentoComVerificadorInválido(mínimo.toString());
    });

    test('demasiados argumentos', async () => {
      process.argv = [...comando, subcomando, '7', '8', '9'];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });

    test('--exclusivo', async () => {
      process.argv = [...comando, subcomando, '7', '--exclusivo'];
      await import(programa);

      const saída = Number.parseInt(mocks.textoDaÚltimaSaída());

      expect(saída).toBeGreaterThanOrEqual(mínimo);
      expect(saída).toBeLessThanOrEqual(6);
    });

    test('--exclusivo inválido, <x> <= 1', async () => {
      process.argv = [
        ...comando,
        subcomando,
        String(mínimo + 1),
        '--exclusivo',
      ];
      await import(programa);

      mocks.espereSaídaDeErroContendo('Número limite inferior ao mínimo');
    });
  });

  describe('subcomando entre', () => {
    const subcomando = 'entre';
    const y = -5;
    const z = -1;
    const yComoTexto = ` ${y}`;
    const zComoTexto = ` ${z}`;

    test('<y> e <z> válidos', async () => {
      process.argv = [...comando, subcomando, yComoTexto, zComoTexto];
      await import(programa);

      const saída = Number.parseInt(mocks.textoDaÚltimaSaída());

      expect(saída).toBeGreaterThanOrEqual(y);
      expect(saída).toBeLessThanOrEqual(z);
    });

    test('<y> inválido, não número', async () => {
      const argInválido = 'A';
      process.argv = [...comando, subcomando, argInválido, zComoTexto];
      await import(programa);

      mocks.espereArgumentoComVerificadorInválido(argInválido, 'y');
    });

    test('<z> inválido, não número', async () => {
      const argInválido = 'A';
      process.argv = [...comando, subcomando, yComoTexto, argInválido];
      await import(programa);

      mocks.espereArgumentoComVerificadorInválido(argInválido, 'z');
    });

    test('demasiados argumentos', async () => {
      process.argv = [...comando, subcomando, '7', '8', '9'];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });
  });

  describe('subcomando romano', () => {
    const subcomando = 'romano';

    test('<x> válido', async () => {
      process.argv = [...comando, subcomando, '3'];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();

      expect(saída).toBe('III');
    });

    test('<x> inválido, não número', async () => {
      const argInválido = 'Z';
      process.argv = [...comando, subcomando, argInválido];
      await import(programa);

      mocks.espereArgumentoComVerificadorInválido(argInválido, 'x');
    });

    test('<x> inválido, < 1', async () => {
      const argInválido = '0';
      process.argv = [...comando, subcomando, argInválido];
      await import(programa);

      mocks.espereArgumentoComVerificadorInválido(argInválido, 'x');
    });

    test('<x> inválido, > 3999', async () => {
      const argInválido = '4000';
      process.argv = [...comando, subcomando, argInválido];
      await import(programa);

      mocks.espereSaídaDeErroContendo(
        `Número deve estar entre 1 e 3.999. Recebido ${argInválido}`,
      );
    });

    test('demasiados argumentos', async () => {
      process.argv = [...comando, subcomando, '7', '8', '9'];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });
  });

  describe('subcomando porextenso', () => {
    const subcomando = 'porextenso';

    test('<x> válido, apelido', async () => {
      process.argv = [...comando, 'pe', '0'];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();

      expect(saída).toBe('zero');
    });

    test('<x> válido', async () => {
      process.argv = [...comando, subcomando, '0'];
      await import(programa);

      const saída = mocks.textoDaÚltimaSaída();

      expect(saída).toBe('zero');
    });

    test('<x> inválido, não número', async () => {
      const argInválido = 'Y';
      process.argv = [...comando, subcomando, argInválido];
      await import(programa);

      mocks.espereArgumentoComVerificadorInválido(argInválido, 'x');
    });

    test('<x> inválido, < 0', async () => {
      const argInválido = ' -1';
      process.argv = [...comando, subcomando, argInválido];
      await import(programa);

      mocks.espereArgumentoComVerificadorInválido(argInválido, 'x');
    });

    test('<x> inválido, > 999_999_999_999', async () => {
      const argInválido = '1000000000000';
      process.argv = [...comando, subcomando, argInválido];
      await import(programa);

      mocks.espereSaídaDeErroContendo(
        `erro: ${argInválido} deve estar entre 0 e 999.999.999.999.`,
      );
    });

    test('demasiados argumentos', async () => {
      process.argv = [...comando, subcomando, '7', '8', '9'];
      await import(programa);

      mocks.espereArgumentosDemasiados(subcomando);
    });
  });
});
