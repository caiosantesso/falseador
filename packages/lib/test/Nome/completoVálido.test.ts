import { zeroComoString } from '../../../../jest.setup';
import { falseador } from '../../src';

const nome = falseador.nome;

test.each`
  atual                        | descrição
  ${zeroComoString}            | ${'falso, arg não é string'}
  ${'Isabe11a'}                | ${'falso, contém número'}
  ${' '}                       | ${'falso, espaço'}
  ${'Helena'}                  | ${'falso, sem sobrenome'}
  ${'Camila V Lima'}           | ${'falso, sobrenome com menos de 3 letras'}
  ${'Heloísa da dos Oliveira'} | ${'falso, duas preposições seguidas'}
  ${'Ana dos'}                 | ${'falso, termina em preposição'}
`('$descrição', ({ atual }) => {
  expect(nome.éNomeCompletoVálido(atual)).toBe(false);
});

test.each`
  atual                            | descrição
  ${'Cris Andrade'}                | ${'verdadeiro, acaba com sobrenome terminado em preposição'}
  ${'Beatriz de Borba dos Santos'} | ${'verdadeiro, com preposições'}
  ${"Mariana Sant'Anna"}           | ${'verdadeiro, com apóstrofe'}
  ${'Eunice Borba Santos'}         | ${'verdadeiro, sem preposições'}
`('$descrição', ({ atual }) => {
  expect(nome.éNomeCompletoVálido(atual)).toBe(true);
});
