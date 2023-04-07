import { zeroComoString } from '../../jest.setup';
import { falseador } from '../../src';

const nome = falseador.nome;
test('erro pois argumento não é string', () => {
  expect(() => nome.abreviado(zeroComoString)).toThrowError();
});

test.each`
  atual                            | esperado                      | descrição
  ${' Julio '}                     | ${' Julio '}                  | ${'igual, apenas um nome'}
  ${'Ângela Ivone'}                | ${'Ângela Ivone'}             | ${'igual, apenas dois nomes'}
  ${'José da Silva Júnior'}        | ${'José da Silva Júnior'}     | ${'igual, dois nomes + agnome'}
  ${' paulo neves freire '}        | ${'paulo n. freire'}          | ${'nome do meio abreviado, espaço cortado'}
  ${'José Carlos da Silva Júnior'} | ${'José C. Silva Jr.'}        | ${'nome do meio e Junior abreviado'}
  ${'Maria José Pereira Segunda'}  | ${'Maria J. Pereira Segunda'} | ${'nome do meio abreviado, agnome mantido'}
  ${'C410 V1n1c1u2 S4ntess0'}      | ${'C410 V. S4ntess0'}         | ${'nome do meio inválido mas abreviado'}
`('$descrição', ({ atual, esperado }) => {
  expect(nome.abreviado(atual)).toBe(esperado);
});
