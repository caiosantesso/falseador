import { falseador } from '../src';

describe('entrePeríodoEmAnos()', () => {
  const referência = new Date(2023, 0, 1);
  const zComoNúmero = 'Z' as unknown as number;

  test('erro pois ambos são 0', () => {
    expect(() => falseador.data.entrePeríodoEmAnos(new Date(), 0, 0)).toThrow();
  });

  test('erro pois inf é não-número', () => {
    expect(() =>
      falseador.data.entrePeríodoEmAnos(new Date(), zComoNúmero, 0),
    ).toThrow();
  });

  test('erro pois sup é não-número', () => {
    expect(() =>
      falseador.data.entrePeríodoEmAnos(new Date(), 0, zComoNúmero),
    ).toThrow();
  });

  test('data deve ter entre 0.12% e 0.15% de chance de ser uma das 731 possibilidades.', () => {
    const testes = 1_000_000;
    const histogramaDatas = new Map<string, number>();

    for (let i = 0; i < testes; i++) {
      const dataHora = falseador.data.entrePeríodoEmAnos(referência, -1, 1);
      const data = dataHora.toLocaleString().split(',')[0];
      if (histogramaDatas.has(data)) {
        const contador = histogramaDatas.get(data)!;
        histogramaDatas.set(data, contador + 1);
      } else {
        histogramaDatas.set(data, 0);
      }
    }

    const mínimoPc = testes * 0.00122;
    const máximoPc = testes * 0.00158;
    for (const contador of histogramaDatas.values()) {
      expect(contador).toBeGreaterThanOrEqual(mínimoPc);
      expect(contador).toBeLessThanOrEqual(máximoPc);
    }

    expect(histogramaDatas.size).toBe(731);
  });

  test('data deve ser até 364 dias atrás ou a frente', () => {
    const anoAnterior = new Date(2022, 0, 1, 0, 0, 0, 1);
    const anoPróximo = new Date(2024, 0, 1, 23, 59, 59, 999);

    const data = falseador.data.entrePeríodoEmAnos(referência, -1, 1).getTime();

    expect(data).toBeGreaterThanOrEqual(anoAnterior.getTime());
    expect(data).toBeLessThanOrEqual(anoPróximo.getTime());
  });

  test('data deve ser até 364 dias a frente', () => {
    const anoPróximo = new Date(2024, 0, 1, 23, 59, 59, 999);

    const data = falseador.data.entrePeríodoEmAnos(referência, 0, 1).getTime();

    expect(data).toBeGreaterThanOrEqual(referência.getTime());
    expect(data).toBeLessThanOrEqual(anoPróximo.getTime());
  });

  test('data deve ser até 364 dias atrás', () => {
    const anoAnterior = new Date(2022, 0, 1, 0, 0, 0, 1);

    const data = falseador.data.entrePeríodoEmAnos(referência, -1, 0).getTime();

    expect(data).toBeLessThanOrEqual(referência.getTime());
    expect(data).toBeGreaterThanOrEqual(anoAnterior.getTime());
  });

  test('data deve ser até 365 dias a frente, ano bissexto (2024)', () => {
    const referência = new Date(2023, 2, 1);
    const anoPróximo = new Date(2024, 2, 1, 23, 59, 59, 999);

    const data = falseador.data.entrePeríodoEmAnos(referência, 0, 1).getTime();

    expect(data).toBeGreaterThanOrEqual(referência.getTime());
    expect(data).toBeLessThanOrEqual(anoPróximo.getTime());
  });

  test('data deve ser até 365 dias atrás, ano bissexto (2024)', () => {
    const anoAnterior = new Date(2024, 1, 28, 0, 0, 0, 1);
    const referência = new Date(2025, 1, 28);

    const data = falseador.data.entrePeríodoEmAnos(referência, -1, 0).getTime();

    expect(data).toBeLessThanOrEqual(referência.getTime());
    expect(data).toBeGreaterThanOrEqual(anoAnterior.getTime());
  });

  test('data deve ser ser reajustada para o primeiro segundo do dia referência', () => {
    const referência = new Date(2023, 0, 1, 23, 59, 59, 999);
    const anoPróximo = new Date(2023, 11, 31, 23, 59, 59, 999);

    const data = falseador.data.entrePeríodoEmAnos(referência, 0, 1).getTime();

    expect(data).toBeGreaterThanOrEqual(referência.getTime());
    expect(data).toBeLessThanOrEqual(anoPróximo.getTime());
  });

  test('data deve estar entre 18 e 60 anos a frente', () => {
    const dezoitoAnosNoFuturo = new Date(2041, 0, 1, 0, 0, 0, 1);
    const sessentaAnosNoFuturo = new Date(2083, 0, 1, 23, 59, 59, 999);

    const data = falseador.data
      .entrePeríodoEmAnos(referência, 60, 18)
      .getTime();

    expect(data).toBeGreaterThanOrEqual(dezoitoAnosNoFuturo.getTime());
    expect(data).toBeLessThanOrEqual(sessentaAnosNoFuturo.getTime());
  });

  test('data deve estar entre 18 e 60 anos atrás', () => {
    const dezoitoAnosNoPassado = new Date(2005, 0, 1, 23, 59, 59, 999);
    const sessentaAnosNoPassado = new Date(1963, 0, 2, 0, 0, 0, 1);

    const data = falseador.data
      .entrePeríodoEmAnos(referência, -18, -60)
      .getTime();

    expect(data).toBeGreaterThanOrEqual(sessentaAnosNoPassado.getTime());
    expect(data).toBeLessThanOrEqual(dezoitoAnosNoPassado.getTime());
  });

  test('data deve estar entre 18 e 60 anos atrás, limites invertidos', () => {
    const dezoitoAnosNoPassado = new Date(2005, 0, 1, 23, 59, 59, 999);
    const sessentaAnosNoPassado = new Date(1963, 0, 2, 0, 0, 0, 1);

    const data = falseador.data
      .entrePeríodoEmAnos(referência, -60, -18)
      .getTime();

    expect(data).toBeGreaterThanOrEqual(sessentaAnosNoPassado.getTime());
    expect(data).toBeLessThanOrEqual(dezoitoAnosNoPassado.getTime());
  });
});
