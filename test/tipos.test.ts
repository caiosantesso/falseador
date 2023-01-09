import { falseador } from '../src';

describe('booleano()', () => {
  test('devolve verdadeiro ou falso', () => {
    const bool = falseador.tipo.booleano();
    expect(typeof bool).toBe('boolean');
  });
});
