import { falseador } from '../src';

describe('cpf()', () => {
  test('devolve CPF aleatório', () => {
    const cpf = falseador.doc.cpf();

    expect(typeof cpf).toBe('string');
    expect(cpf).toMatch(/^[0-9]{11}$/);
  });
});

describe('cnpj()', () => {
  test('devolve CNPJ aleatório', () => {
    const cnpj = falseador.doc.cnpj();

    expect(typeof cnpj).toBe('string');
    expect(cnpj).toMatch(/^[0-9]{14}$/);
  });
});
