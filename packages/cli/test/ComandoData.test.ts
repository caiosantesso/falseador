import { MocksPadrão } from './MocksPadrão';

const mocks = new MocksPadrão();

const programa = '../src/index';
const comando = ['', '', 'data'];

beforeEach(jest.resetModules);

describe('comando Data', () => {
  const hoje = new Date();

  test('--help', async () => {
    process.argv = [...comando, '--help'];
    await import(programa);

    expect(mocks.textoDaÚltimaSaída()).toMatch(/^ {2}futura/m);
  });

  describe('subcomando futura', () => {
    const subcomando = 'futura';

    test('sem opções, devolve data <= 1 ano 0 dias no futuro', async () => {
      process.argv = [...comando, subcomando];
      await import(programa);

      const umAnoNoFuturo = new Date().setFullYear(hoje.getFullYear() + 1);
      const saída = new Date(mocks.textoDaÚltimaSaída()).getTime();

      expect(saída).toBeGreaterThanOrEqual(hoje.getTime());
      expect(saída).toBeLessThanOrEqual(umAnoNoFuturo);
    });

    test('--sup 10, devolve data >= hoje e <= 10 anos 0 dias no futuro', async () => {
      process.argv = [...comando, subcomando, '--sup', '10'];
      await import(programa);

      const agora = new Date();
      agora.setHours(23, 59, 59, 999);
      const dezAnosNoFuturoAjustado = agora.setFullYear(
        hoje.getFullYear() + 10,
      );
      const saída = new Date(mocks.textoDaÚltimaSaída()).getTime();

      expect(saída).toBeGreaterThanOrEqual(hoje.getTime());
      expect(saída).toBeLessThanOrEqual(dezAnosNoFuturoAjustado);
    });

    test('--sup inválido, não-número', async () => {
      const argInválido = 'não-número';
      process.argv = [...comando, subcomando, '--sup', argInválido];
      await import(programa);

      mocks.espereSaídaDeErroContendo(
        `option '-s, --sup <anos>' argument '${argInválido}' is invalid.`,
      );
    });

    test('--inf 10, devolve data >= hoje e <= 10 anos 0 dias no futuro', async () => {
      process.argv = [...comando, subcomando, '--inf', '10'];
      await import(programa);

      const agora = new Date();
      agora.setHours(23, 59, 59, 999);
      const dezAnosNoFuturoAjustado = agora.setFullYear(
        hoje.getFullYear() + 10,
      );
      const saída = new Date(mocks.textoDaÚltimaSaída()).getTime();

      expect(saída).toBeGreaterThanOrEqual(hoje.getTime());
      expect(saída).toBeLessThanOrEqual(dezAnosNoFuturoAjustado);
    });

    test('--inf inválido, não-número', async () => {
      const argInválido = 'não-número';
      process.argv = [...comando, subcomando, '--inf', argInválido];
      await import(programa);

      mocks.espereSaídaDeErroContendo(
        `option '-i, --inf <anos>' argument '${argInválido}' is invalid.`,
      );
    });

    test('--base 2000-01-01, devolve data <= 2001-01-01', async () => {
      const dataBaseComoTexto = '2000-01-01';
      const dataBase = new Date(dataBaseComoTexto);
      process.argv = [...comando, subcomando, '--base', dataBaseComoTexto];
      await import(programa);

      const umAnoDepois = new Date(dataBase.getTime());
      umAnoDepois.setHours(23, 59, 59, 999);
      const umAnoDepoisAjustado = umAnoDepois.setFullYear(
        dataBase.getFullYear() + 1,
      );

      const saída = new Date(mocks.textoDaÚltimaSaída()).getTime();

      expect(saída).toBeGreaterThanOrEqual(dataBase.getTime());
      expect(saída).toBeLessThanOrEqual(umAnoDepoisAjustado);
    });

    test('--base inválida', async () => {
      process.argv = [...comando, subcomando, '--base', 'data-inválida'];
      await import(programa);

      mocks.espereSaídaDeErroContendo('Data inválida.');
    });

    test('--base 2000-01-01, --inf 2, --sup 4, devolve data entre 2002-01-01 e 2004-01-01', async () => {
      const dataBaseComoTexto = '2000-01-01';
      const dataBase = new Date(dataBaseComoTexto);
      process.argv = [
        ...comando,
        subcomando,
        '--base',
        dataBaseComoTexto,
        '--inf',
        '2',
        '--sup',
        '4',
      ];
      await import(programa);

      const doisAnosDepois = new Date(dataBase.getTime());
      doisAnosDepois.setHours(0, 0, 0, 1);
      const doisAnosDepoisAjustado = doisAnosDepois.setFullYear(
        dataBase.getFullYear() + 2,
      );

      const quatroAnosDepois = new Date(dataBase.getTime());
      quatroAnosDepois.setHours(23, 59, 59, 999);
      const quatroAnosDepoisAjustado = quatroAnosDepois.setFullYear(
        dataBase.getFullYear() + 4,
      );

      const saída = new Date(mocks.textoDaÚltimaSaída()).getTime();

      expect(saída).toBeGreaterThanOrEqual(doisAnosDepoisAjustado);
      expect(saída).toBeLessThanOrEqual(quatroAnosDepoisAjustado);
    });
  });
});
