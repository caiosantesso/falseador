import { falseador, UFSigla } from '../src';
import { ListaDeLocais } from '../src/coleções/ListaDeLocais';

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

    expect(ListaDeLocais.ufs.keys()).toContain(uf);
  });

  test('null', () => {
    const [cidade, uf] = falseador.local.cidade(null as unknown as UFSigla);

    expect(typeof cidade).toBe('string');
    expect(typeof uf).toBe('string');
  });

  test('uf inválida', () => {
    const [cidade, uf] = falseador.local.cidade('ZZ' as unknown as UFSigla);

    expect(typeof cidade).toBe('string');
    expect(typeof uf).toBe('string');
  });

  test('uf válida', () => {
    const [, uf] = falseador.local.cidade('ac' as unknown as UFSigla);

    expect(uf).toBe('AC');
  });

  test('uf válida com apenas uma cidade', () => {
    const [cidade, uf] = falseador.local.cidade('df');

    expect(cidade).toBe('Brasília');
    expect(uf).toBe('DF');
  });
});
