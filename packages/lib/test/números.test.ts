import { falseador } from '../src';

describe('entreUmE()', () => {
  test('retorno deve ser inteiro', () => {
    const númmero = falseador.número.entreUmE(3);
    expect(Number.isInteger(númmero)).toBe(true);
  });

  test('devolve númmero entre 1 e 3', () => {
    const númmero = falseador.número.entreUmE(3);
    expect(númmero).toBeLessThanOrEqual(3);
    expect(númmero).toBeGreaterThanOrEqual(1);
    expect(Number.isInteger(númmero)).toBe(true);
  });

  test('devolve númmero entre 1 e 2', () => {
    const númmero = falseador.número.entreUmE(3, false);
    expect(númmero).toBeLessThanOrEqual(2);
    expect(númmero).toBeGreaterThanOrEqual(1);
  });

  test('erro para limite menor ou igual a 1', () => {
    expect(() => falseador.número.entreUmE(1)).toThrow();
  });

  test('erro para limite menor ou igual a 2 (exclusivo)', () => {
    expect(() => falseador.número.entreUmE(2, false)).toThrow();
  });
});

describe('entreZeroE()', () => {
  test('deve ser inteiro', () => {
    const númmero = falseador.número.entreZeroE(3);
    expect(Number.isInteger(númmero)).toBe(true);
  });

  test('devolve númmero entre 0 e 2', () => {
    const númmero = falseador.número.entreZeroE(3, false);
    expect(númmero).toBeLessThanOrEqual(2);
    expect(númmero).toBeGreaterThanOrEqual(0);
  });

  test('devolve númmero entre 0 e 3', () => {
    const númmero = falseador.número.entreZeroE(3);
    expect(númmero).toBeLessThanOrEqual(3);
    expect(númmero).toBeGreaterThanOrEqual(0);
  });

  test('erro para limite menor ou igual a 0', () => {
    expect(() => falseador.número.entreZeroE(0)).toThrow();
  });

  test('erro para limite menor ou igual a 1 (exclusivo)', () => {
    expect(() => falseador.número.entreZeroE(1, false)).toThrow();
  });
});

describe('exclusivoEntreUmE()', () => {
  test('deve ser inteiro', () => {
    const númmero = falseador.número.exclusivoEntreUmE(3);
    expect(Number.isInteger(númmero)).toBe(true);
  });

  test('devolve númmero entre 1 e 2', () => {
    const númmero = falseador.número.exclusivoEntreUmE(3);
    expect(númmero).toBeLessThanOrEqual(2);
    expect(númmero).toBeGreaterThanOrEqual(1);
  });

  test('erro para limite menor ou igual a 2 (exclusivo)', () => {
    expect(() => falseador.número.exclusivoEntreUmE(2)).toThrow();
  });
});

describe('exclusivoEntreZeroE()', () => {
  test('deve ser inteiro', () => {
    const númmero = falseador.número.exclusivoEntreZeroE(3);
    expect(Number.isInteger(númmero)).toBe(true);
  });

  test('devolve númmero entre 0 e 1', () => {
    const númmero = falseador.número.exclusivoEntreZeroE(2);
    expect(númmero).toBeLessThanOrEqual(1);
    expect(númmero).toBeGreaterThanOrEqual(0);
  });

  test('erro para limite menor ou igual a 1 (exclusivo)', () => {
    expect(() => falseador.número.exclusivoEntreZeroE(1)).toThrow();
  });
});

describe('entre()', () => {
  test('deve ser inteiro', () => {
    const númmero = falseador.número.entre(2, 6);
    expect(Number.isInteger(númmero)).toBe(true);
  });

  test('devolve númmero entre 2 e 7', () => {
    const númmero = falseador.número.entre(2, 7);

    expect(númmero).toBeGreaterThanOrEqual(2);
    expect(númmero).toBeLessThanOrEqual(7);
  });

  test('devolve númmero entre -3 e 0', () => {
    const númmero = falseador.número.entre(-3, 0);

    expect(númmero).toBeGreaterThanOrEqual(-3);
    expect(númmero).toBeLessThanOrEqual(0);
  });

  test('inverte limites', () => {
    const númmero = falseador.número.entre(4, 2);

    expect(númmero).toBeGreaterThanOrEqual(2);
    expect(númmero).toBeLessThanOrEqual(4);
  });
});

describe('romano()', () => {
  test('lança erro pois número é maior ou igual a 4000', () => {
    expect(() => falseador.número.romano(4000)).toThrow();
  });

  test('lança erro pois número é menor ou igual a 0', () => {
    expect(() => falseador.número.romano(0)).toThrow();
  });

  test('lança erro pois número é real', () => {
    expect(() => falseador.número.romano(0.1)).toThrow();
  });

  test('8', () => {
    const número = falseador.número.romano(8);
    expect(número).toBe('VIII');
  });

  test('9', () => {
    const número = falseador.número.romano(9);
    expect(número).toBe('IX');
  });

  test('44', () => {
    const número = falseador.número.romano(44);
    expect(número).toBe('XLIV');
  });

  test('99', () => {
    const número = falseador.número.romano(99);
    expect(número).toBe('XCIX');
  });

  test('999', () => {
    const número = falseador.número.romano(999);
    expect(número).toBe('CMXCIX');
  });
});

describe('porExtenso()', () => {
  test('erro pois número é menor que 0', () => {
    expect(() => falseador.número.porExtenso(-1)).toThrow();
  });

  test('erro pois número é maior que 999.999.999.999', () => {
    expect(() => falseador.número.porExtenso(999_999_999_999 + 1)).toThrow();
  });

  test('erro pois número tem ponto flutuante', () => {
    expect(() => falseador.número.porExtenso(0.2)).toThrow();
  });

  test('0', () => {
    const número = falseador.número.porExtenso(0);
    expect(número).toBe('zero');
  });

  test('10', () => {
    const número = falseador.número.porExtenso(10);
    expect(número).toBe('dez');
  });

  test('50', () => {
    const número = falseador.número.porExtenso(50);
    expect(número).toBe('cinquenta');
  });

  test('99', () => {
    const número = falseador.número.porExtenso(99);
    expect(número).toBe('noventa e nove');
  });

  test('100', () => {
    const número = falseador.número.porExtenso(100);
    expect(número).toBe('cem');
  });

  test('107', () => {
    const número = falseador.número.porExtenso(107);
    expect(número).toBe('cento e sete');
  });

  test('411', () => {
    const número = falseador.número.porExtenso(411);
    expect(número).toBe('quatrocentos e onze');
  });

  test('800', () => {
    const número = falseador.número.porExtenso(800);
    expect(número).toBe('oitocentos');
  });

  test('1.099', () => {
    const número = falseador.número.porExtenso(1_099);
    expect(número).toBe('mil e noventa e nove');
  });

  test('1.100', () => {
    const número = falseador.número.porExtenso(1_100);
    expect(número).toBe('mil e cem');
  });

  test('1.101', () => {
    const número = falseador.número.porExtenso(1_101);
    expect(número).toBe('mil cento e um');
  });

  test('2.000', () => {
    const número = falseador.número.porExtenso(2_000);
    expect(número).toBe('dois mil');
  });

  test('999.999', () => {
    const número = falseador.número.porExtenso(999_999);
    const classes = [
      'novecentos e noventa e nove mil',
      'novecentos e noventa e nove',
    ];
    expect(número).toBe(classes.join(' '));
  });

  test('1.000.000', () => {
    const número = falseador.número.porExtenso(1_000_000);
    const classes = ['um milhão'];
    expect(número).toBe(classes.join(' '));
  });

  test('1.000.000.000', () => {
    const número = falseador.número.porExtenso(1_000_000_000);
    expect(número).toBe('um bilhão');
  });

  test('999.888.777.666', () => {
    const número = falseador.número.porExtenso(999_888_777_666);
    const classes = [
      'novecentos e noventa e nove bilhões',
      'oitocentos e oitenta e oito milhões',
      'setecentos e setenta e sete mil',
      'seiscentos e sessenta e seis',
    ];

    expect(número).toBe(classes.join(' '));
  });
});
