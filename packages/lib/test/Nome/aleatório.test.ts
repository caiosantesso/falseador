import { espaçoComoNúmero } from '../../../../jest.setup';
import { falseador } from '../../src';
import { ListaDeNomes } from '../../src/coleções/ListaDeNomes';

const todosOsNomes = [...ListaDeNomes.M, ...ListaDeNomes.F];
const nome = falseador.nome;
const padrão =
  /do Espírito Santo|S(?:ant'An{1,}a|\w+)|V(?:ilas Bôas|\w+)| ?[A-RTUW-Z]\w+/g;

describe('primeiro()', () => {
  test.each`
    possíveis         | gênero       | descrição
    ${todosOsNomes}   | ${undefined} | ${'não informado, qualquer gênero'}
    ${todosOsNomes}   | ${' '}       | ${'inválido, qualquer gênero'}
    ${ListaDeNomes.F} | ${'F'}       | ${'feminino'}
    ${ListaDeNomes.M} | ${'m'}       | ${'masculino'}
  `('$descrição', ({ possíveis, gênero }) => {
    expect(possíveis).toContain(nome.primeiro(gênero));
  });
});

describe('composto()', () => {
  test.each`
    possíveis         | gênero       | descrição
    ${todosOsNomes}   | ${undefined} | ${'não informado, qualquer gênero'}
    ${todosOsNomes}   | ${' '}       | ${'inválido, qualquer gênero'}
    ${ListaDeNomes.F} | ${'F'}       | ${'feminino'}
    ${ListaDeNomes.M} | ${'m'}       | ${'masculino'}
  `('$descrição', ({ possíveis, gênero }) => {
    const nomeComposto = nome.composto(gênero).split(' ');

    expect(nomeComposto.at(0)).not.toEqual(nomeComposto.at(1));
    expect(possíveis).toEqual(expect.arrayContaining(nomeComposto));
  });
});

test('sobrenome()', () => {
  expect(ListaDeNomes.sobrenomes).toContain(nome.sobrenome());
});

describe('sobrenomes()', () => {
  test.each`
    atual               | descrição
    ${undefined}        | ${'não informado, entre 1 e 3'}
    ${espaçoComoNúmero} | ${'inválido, entre 1 e 3 '}
  `('$descrição', ({ atual }) => {
    const sobrenomes = nome.sobrenomes(atual);

    const partes = [...sobrenomes.matchAll(padrão)];

    expect(partes.length).toBeGreaterThanOrEqual(1);
    expect(partes.length).toBeLessThanOrEqual(3);
  });

  test('2', () => {
    const sobrenomes = nome.sobrenomes(2);
    const partes = [...sobrenomes.matchAll(padrão)];

    expect(partes.length).toEqual(2);
  });
});

describe('completo()', () => {
  test.each`
    possíveis         | gênero       | descrição
    ${todosOsNomes}   | ${undefined} | ${'não informado, qualquer gênero'}
    ${todosOsNomes}   | ${' '}       | ${'inválido, qualquer gênero'}
    ${ListaDeNomes.F} | ${'F'}       | ${'feminino'}
    ${ListaDeNomes.M} | ${'m'}       | ${'masculino'}
  `('$descrição', ({ possíveis, gênero }) => {
    const nomeCompleto = nome.completo(gênero);

    const nomesDivididos = nomeCompleto.split(' ');
    expect(nomesDivididos.length).toBeGreaterThanOrEqual(2);

    const primeiro = nomesDivididos.at(0);
    expect(possíveis).toContain(primeiro);

    const últimos = nomesDivididos.slice(-2);
    const temÚltimo =
      ListaDeNomes.sobrenomes.includes(últimos.join(' ')) ||
      ListaDeNomes.sobrenomes.includes(últimos.at(-1) as string) ||
      ['Vilas Bôas', 'Espírito Santo'].includes(últimos.join(' '));

    expect(temÚltimo).toBe(true);
  });
});
