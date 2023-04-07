import { falseador } from '../src';

describe('booleano()', () => {
  test('devolve verdadeiro ou falso', () => {
    const bool = falseador.tipo.booleano();
    expect(typeof bool).toBe('boolean');
  });
});

describe('entre()', () => {
  test('devolve valor aleatório de lista númerica', () => {
    const lista = [1, 2, 3];
    const número = falseador.tipo.entre(lista);

    expect(typeof número).toBe('number');
    expect(lista).toContain(número);
  });

  test('devolve valor aleatório de lista de obj', () => {
    const lista = [{ cor: 'violeta' }, { cor: 'lilás' }];
    const objeto = falseador.tipo.entre(lista);

    expect(typeof objeto).toBe('object');
    expect(lista).toContain(objeto);
    expect(objeto).toHaveProperty('cor');
  });

  test('erro pois há menos de 2 valores na lista', () => {
    expect(() => falseador.tipo.entre([])).toThrowError();
  });
});
