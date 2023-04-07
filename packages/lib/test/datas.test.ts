import { falseador } from '../src';

describe('entrePeríodoEmAnos()', () => {
  test('erro pois ambos são nulos', () => {
    expect(() =>
      falseador.data.entrePeríodoEmAnos(new Date(), null, null),
    ).toThrow();
  });

  test('data deve ser até 364 dias atrás ou a frente', () => {
    const referência = new Date(2023, 0, 1);
    const anoAnterior = new Date(2022, 0, 1);
    const anoPróximo = new Date(2024, 0, 1);

    const data = falseador.data.entrePeríodoEmAnos(referência, 0, 0).getTime();

    expect(data).toBeGreaterThan(anoAnterior.getTime());
    expect(data).toBeLessThan(anoPróximo.getTime());
  });

  test('data deve ser até 364 dias a frente', () => {
    const referência = new Date(2023, 0, 1);
    const anoProxímo = new Date(2024, 0, 1);

    const data = falseador.data
      .entrePeríodoEmAnos(referência, null, 0)
      .getTime();

    expect(data).toBeGreaterThanOrEqual(referência.getTime());
    expect(data).toBeLessThan(anoProxímo.getTime());
  });

  test('data deve ser até 364 dias atrás', () => {
    const anoAnterior = new Date(2022, 0, 1);
    const referência = new Date(2023, 0, 1);

    const data = falseador.data
      .entrePeríodoEmAnos(referência, 0, null)
      .getTime();

    expect(data).toBeLessThanOrEqual(referência.getTime());
    expect(data).toBeGreaterThan(anoAnterior.getTime());
  });

  test('data deve ser até 364 dias a frente, ano bissexto', () => {
    const referência = new Date(2023, 2, 1);
    const dataAnoPróximo = new Date(2024, 2, 1);

    const data = falseador.data
      .entrePeríodoEmAnos(referência, null, 0)
      .getTime();

    expect(data).toBeGreaterThanOrEqual(referência.getTime());
    expect(data).toBeLessThan(dataAnoPróximo.getTime());
  });

  test('data deve ser até 364 dias atrás, ano bissexto', () => {
    const anoAnterior = new Date(2024, 1, 28);
    const referência = new Date(2025, 1, 28);

    const data = falseador.data
      .entrePeríodoEmAnos(referência, 0, null)
      .getTime();

    expect(data).toBeLessThanOrEqual(referência.getTime());
    expect(data).toBeGreaterThan(anoAnterior.getTime());
  });

  test('data deve estar entre 18 e 60 anos a frente', () => {
    const dezoitoAnosNoFuturo = new Date(2041, 0, 1);
    const sessentaAnosNoFuturo = new Date(2083, 11, 31);
    const referência = new Date(2023, 0, 1);

    const data = falseador.data
      .entrePeríodoEmAnos(referência, 60, 18)
      .getTime();

    expect(data).toBeGreaterThanOrEqual(dezoitoAnosNoFuturo.getTime());
    expect(data).toBeLessThanOrEqual(sessentaAnosNoFuturo.getTime());
  });

  test('data deve estar entre 18 e 60 anos atrás', () => {
    const dezoitoAnosNoPassado = new Date(2005, 0, 1);
    const sessentaAnosNoPassado = new Date(1962, 0, 2);
    const referência = new Date(2023, 0, 1);

    const data = falseador.data
      .entrePeríodoEmAnos(referência, -18, -60)
      .getTime();

    expect(data).toBeGreaterThanOrEqual(sessentaAnosNoPassado.getTime());
    expect(data).toBeLessThanOrEqual(dezoitoAnosNoPassado.getTime());
  });

  test('data deve estar entre 18 e 60 anos atrás 2', () => {
    const dezoitoAnosNoPassado = new Date(2005, 0, 1);
    const sessentaAnosNoPassado = new Date(1962, 0, 2);
    const referência = new Date(2023, 0, 1);

    const data = falseador.data
      .entrePeríodoEmAnos(referência, -60, -18)
      .getTime();

    expect(data).toBeGreaterThanOrEqual(sessentaAnosNoPassado.getTime());
    expect(data).toBeLessThanOrEqual(dezoitoAnosNoPassado.getTime());
  });
});
