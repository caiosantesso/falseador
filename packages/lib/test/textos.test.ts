import { zeroComoString } from '../../../jest.setup';
import { falseador } from '../src';

const texto = falseador.texto;

describe('letra()', () => {
  test('letras do alfabeto', () => {
    const letra = texto.letra();
    expect(letra).toMatch(/[A-Z]/);
  });

  test('letras do alfabeto mais acentuadas', () => {
    const letra = texto.letra(true);

    expect(letra).toMatch(/[A-ZÀÁÂÃÇÉÊÍÓÔÕÚ]/);
  });
});

describe('removeAcentos()', () => {
  test('devolve palavra sem acentos', () => {
    const palavraSemAcentos = texto.removeAcentos('açúde');

    expect(palavraSemAcentos).toBe('acude');
  });

  test('devolve palavra já sem acentos', () => {
    const palavra = 'HEROICO';
    const palavraSemAcentos = texto.removeAcentos(palavra);

    expect(palavraSemAcentos).toBe(palavra);
  });

  test('erro pois argumento não é string', () => {
    expect(() => texto.removeAcentos(zeroComoString)).toThrow();
  });

  test('erro pois argumento é nulo', () => {
    expect(() => texto.removeAcentos(null)).toThrow();
  });

  test('erro pois argumento é indefinido', () => {
    expect(() => texto.removeAcentos(undefined)).toThrow();
  });

  test('erro pois não há argumento', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(() => texto.removeAcentos()).toThrow();
  });
});
