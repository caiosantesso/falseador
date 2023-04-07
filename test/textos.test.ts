import { zeroComoString } from '../jest.setup';
import { falseador } from '../src';

const texto = falseador.texto;

test('letra()', () => {
  const letra = texto.letra();
  expect(letra).toMatch(/[A-Z]/);
});

test('letraAcentuada()', () => {
  const letra = texto.letraAcentuada();

  expect(letra).toMatch(/[A-ZÀÁÂÃÇÉÊÍÓÔÕÚ]/);
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
    expect(() => texto.removeAcentos(zeroComoString)).toThrowError();
  });
});
