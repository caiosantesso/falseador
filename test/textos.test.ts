import { falseador } from '../src';

describe('letra()', () => {
  test('devolve letra maiúscula ASCII', () => {
    const letra = falseador.texto.letra();
    expect(letra).toMatch(/[A-Z]/);
  });
});

describe('letra()', () => {
  test('devolve letra maiúscula ASCII', () => {
    const letra = falseador.texto.letraAcentuada();
    expect(letra).toMatch(/[A-ZÀÁÂÃÇÉÊÍÓÔÕÚ]/);
  });
});
