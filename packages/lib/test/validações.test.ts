import { Validações } from '../src/integridade/Validações';

describe.each([
  [Validações.númeroInteiroPositivo],
  [Validações.númeroInteiroNãoNegativo],
  [Validações.númeroInteiro],
])('%p', (função) => {
  test.each([
    ['NaN', NaN],
    ['não é conversível para inteiro', '3'],
    ['ponto flutuante não é conversível para inteiro', 1.7],
    ['bigint', 1n],
    ['maior que MAX_SAFE_INT', Number.MAX_SAFE_INTEGER + 2],
    ['menor que MIN_SAFE_INT', Number.MIN_SAFE_INTEGER - 2],
  ])('erro quando %s', (_descrição, arg) => {
    expect(() => função(arg)).toThrow();
  });
});

describe.each([
  [Validações.númeroInteiroPositivo],
  [Validações.númeroInteiroNãoNegativo],
  [Validações.númeroInteiro],
])('%p', (função) => {
  test.each([
    ['igual a MAX_SAFE_INT', Number.MAX_SAFE_INTEGER],
    [
      'ponto flutuante com perda de precisão é conversível para inteiro',
      // eslint-disable-next-line no-loss-of-precision
      1.0000000000000001,
    ],
  ])('válido quando %s', (_descrição, arg) => {
    expect(() => função(arg)).not.toThrow();
  });
});

describe('númeroInteiroNãoNegativo()', () => {
  test('válido quando 0', () => {
    expect(() => Validações.númeroInteiroNãoNegativo(0)).not.toThrow();
  });

  test('válido quando maior que zero', () => {
    expect(() => Validações.númeroInteiroNãoNegativo(1)).not.toThrow();
  });
});

describe('númeroInteiroPositivo()', () => {
  test('erro quando 0', () => {
    expect(() => Validações.númeroInteiroPositivo(0)).toThrow();
  });

  test('válido quando maior que zero', () => {
    expect(() => Validações.númeroInteiroPositivo(1)).not.toThrow();
  });
});

describe('númeroInteiro()', () => {
  test('válido quando 0', () => {
    expect(() => Validações.númeroInteiro(0)).not.toThrow();
  });

  test('válido quando maior que 0', () => {
    expect(() => Validações.númeroInteiro(1)).not.toThrow();
  });

  test('válido quando menor que 0', () => {
    expect(() => Validações.númeroInteiro(-1)).not.toThrow();
  });

  test('válido quando inteiro maior ou igual ao limite negativo', () => {
    expect(() =>
      Validações.númeroInteiro(Number.MIN_SAFE_INTEGER),
    ).not.toThrow();
  });
});

describe('data()', () => {
  test('erro quando nulo', () => {
    expect(() => Validações.data(null)).toThrow();
  });

  test('erro quando string', () => {
    expect(() => Validações.data('')).toThrow();
  });

  test('erro quando inteiro', () => {
    expect(() => Validações.data(2)).toThrow();
  });

  test('válido', () => {
    expect(() => Validações.data(new Date())).not.toThrow();
  });
});
