import { falseador } from '../src';

const pessoa = falseador.pessoa;

describe('email()', () => {
  test('devolve email', () => {
    for (let i = 0; i < 10; i++)
      expect(pessoa.email()).toMatch(/^[\w.]+@[a-z_.]+\.com(.br)?$/g);
  });
});
