import { Validações } from '../src/Validações';

describe('númeroInteiroPositivo()', () => {
  test('erro quando é NaN', () => {
    expect(() => Validações.númeroInteiroPositivo(NaN)).toThrow();
  });

  test('erro quando não é conversível para inteiro', () => {
    expect(() =>
      Validações.númeroInteiroPositivo('3' as unknown as number),
    ).toThrow();
  });

  test('erro quando ponto flutuante não é conversível para inteiro', () => {
    expect(() => Validações.númeroInteiroPositivo(1.7)).toThrow();
  });

  test('erro quando bigint', () => {
    expect(() =>
      Validações.númeroInteiroPositivo(1n as unknown as number),
    ).toThrow();
  });

  test('erro quando maior que MAX_SAFE_INT', () => {
    expect(() =>
      Validações.númeroInteiroPositivo(Number.MAX_SAFE_INTEGER + 2),
    ).toThrow();
  });

  test('erro quando negativo', () => {
    expect(() => Validações.númeroInteiroPositivo(-1)).toThrow();
  });

  test('válido quando 0', () => {
    expect(() => Validações.númeroInteiroPositivo(0)).not.toThrow();
  });

  test('válido quando maior que zero', () => {
    expect(() => Validações.númeroInteiroPositivo(0)).not.toThrow();
  });

  test('válido quando inteiro menor ou igual ao limite positivo', () => {
    expect(() =>
      Validações.númeroInteiroPositivo(Number.MAX_SAFE_INTEGER),
    ).not.toThrow();
  });

  test('válido quando ponto flutuante com perda de precisão é conversível para inteiro', () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
      Validações.númeroInteiroPositivo(1.0000000000000001),
    ).not.toThrow();
  });
});

describe('númeroInteiro()', () => {
  test('erro quando é NaN', () => {
    expect(() => Validações.númeroInteiro(NaN)).toThrow();
  });

  test('erro quando não é conversível para inteiro', () => {
    expect(() => Validações.númeroInteiro('3' as unknown as number)).toThrow();
  });

  test('erro quando ponto flutuante não é conversível para inteiro', () => {
    expect(() => Validações.númeroInteiro(1.7)).toThrow();
  });

  test('erro quando bigint', () => {
    expect(() => Validações.númeroInteiro(1n as unknown as number)).toThrow();
  });

  test('erro quando maior que MAX_SAFE_INT', () => {
    expect(() =>
      Validações.númeroInteiro(Number.MAX_SAFE_INTEGER + 2),
    ).toThrow();
  });

  test('erro quando menor que MIN_SAFE_INT', () => {
    expect(() =>
      Validações.númeroInteiro(Number.MIN_SAFE_INTEGER - 2),
    ).toThrow();
  });

  test('válido quando 0', () => {
    expect(() => Validações.númeroInteiro(0)).not.toThrow();
  });

  test('válido quando maior que 0', () => {
    expect(() => Validações.númeroInteiro(1)).not.toThrow();
  });

  test('válido quando menor que 0', () => {
    expect(() => Validações.númeroInteiro(-1)).not.toThrow();
  });

  test('válido quando inteiro menor ou igual ao limite positivo', () => {
    expect(() =>
      Validações.númeroInteiro(Number.MAX_SAFE_INTEGER),
    ).not.toThrow();
  });

  test('válido quando inteiro maior ou igual ao limite negativo', () => {
    expect(() =>
      Validações.númeroInteiro(Number.MIN_SAFE_INTEGER),
    ).not.toThrow();
  });

  test('válido quando ponto flutuante com perda de precisão é conversível para inteiro', () => {
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
      Validações.númeroInteiro(1.0000000000000001),
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
