import { falseador } from '../src';
import { ListaDeNomes } from '../src/ListaDeNomes';

test('devolve primeiro nome, qualquer gênero', () => {
  const nome = falseador.nome.primeiro();
  const nomes = [...ListaDeNomes.M, ...ListaDeNomes.F];
  expect(nomes).toEqual(expect.arrayContaining([nome]));
});

test('devolve primeiro nome, masculino', () => {
  const nomeMasculino = falseador.nome.primeiro('M');
  expect(ListaDeNomes.M).toEqual(expect.arrayContaining([nomeMasculino]));
});

test('devolve primeiro nome, feminino', () => {
  const nomeFeminino = falseador.nome.primeiro('F');
  expect(ListaDeNomes.F).toEqual(expect.arrayContaining([nomeFeminino]));
});

test('devolve nome composto, qualquer gênero', () => {
  const nome = falseador.nome.composto();
  const nomes = [...ListaDeNomes.M, ...ListaDeNomes.F];
  const nomesDivididos = nome.split(' ');
  expect(nomes).toEqual(expect.arrayContaining(nomesDivididos));
  expect(nomesDivididos.length).toBe(2);
});

test('devolve nome composto, masculino', () => {
  const nomeMasculino = falseador.nome.composto('M');
  expect(ListaDeNomes.M).toEqual(
    expect.arrayContaining(nomeMasculino.split(' '))
  );
});

test('devolve nome composto, feminino', () => {
  const nomeFeminino = falseador.nome.composto('F');
  expect(ListaDeNomes.F).toEqual(
    expect.arrayContaining(nomeFeminino.split(' '))
  );
});

test('devolve sobrenome', () => {
  const sobrenome = falseador.nome.sobrenome();
  expect(ListaDeNomes.sobrenomes).toEqual(expect.arrayContaining([sobrenome]));
});

//TODO Souza Sant
test('devolve sobrenomes, entre 1 e 3', () => {
  const sobrenomes = falseador.nome.sobrenomes();
  const partes = [...sobrenomes.matchAll(/^[A-Z]| [A-Z]/g)];

  expect(typeof sobrenomes).toBe('string')
  expect(partes.length).toBeGreaterThanOrEqual(1);
  expect(partes.length).toBeLessThanOrEqual(3);
});

test('devolve 2 sobrenomes', () => {
  const sobrenomes = falseador.nome.sobrenomes(2);
  const partes = [...sobrenomes.matchAll(/^[A-Z]| [A-Z]/g)];

  expect(typeof sobrenomes).toBe('string');
  expect(partes.length).toEqual(2);
});