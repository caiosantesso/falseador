import { falseador, UF } from '../src';

describe('cidade()', () => {
  test('tipo', () => {
    const [cidade, uf] = falseador.local.cidade();

    expect(typeof cidade).toBe('string');
    expect(typeof uf).toBe('string');
  });

  test('tamanho', () => {
    const [cidade, uf] = falseador.local.cidade();

    expect(cidade.length).toBeGreaterThanOrEqual(3);
    expect(cidade.length).toBeLessThanOrEqual(32);
    expect(uf.length).toBe(2);
  });

  test('estado', () => {
    const [, uf] = falseador.local.cidade();

    expect(Object.keys(UF)).toContain(uf);
  });

  test('null', () => {
    const [cidade, uf] = falseador.local.cidade(null as unknown as UF);

    expect(typeof cidade).toBe('string');
    expect(typeof uf).toBe('string');
  });

  test('estado inválido', () => {
    const [cidade, uf] = falseador.local.cidade('ZZ' as unknown as UF);

    expect(typeof cidade).toBe('string');
    expect(typeof uf).toBe('string');
  });

  test('estado válido', () => {
    const [, uf] = falseador.local.cidade('ac' as unknown as UF);

    expect(uf).toBe('AC');
  });
});
