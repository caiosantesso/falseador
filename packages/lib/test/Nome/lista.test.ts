import { ListaDeNomes } from '../../src/coleções/ListaDeNomes';

const padrãoNome = /^[A-ZÁÂÊÉÍ][a-zàáâãçéêíóôõú]{2,}$/;
const padrãoSobrenome =
  /^(da |do |das |dos |de )?[A-ZÁ][a-zàáâãçéêíóôõúü']+$|^do Espírito Santo$|^Sant'An+a$|Vilas Bôas/;

test('ListaDeNomes.F', () => {
  for (const nome of ListaDeNomes.F) {
    expect(nome).toMatch(padrãoNome);
  }
});

test('ListaDeNomes.F snapshot', () => {
  for (const nome of ListaDeNomes.F) {
    expect(nome).toMatchSnapshot();
  }
});

test('ListaDeNomes.M', () => {
  for (const nome of ListaDeNomes.M) {
    expect(nome).toMatch(padrãoNome);
  }
});

test('ListaDeNomes.M snapshot', () => {
  for (const nome of ListaDeNomes.M) {
    expect(nome).toMatchSnapshot();
  }
});

test('ListaDeNomes.sobrenomes', () => {
  for (const nome of ListaDeNomes.sobrenomes) {
    expect(nome).toMatch(padrãoSobrenome);
  }
});

test('ListaDeNomes.sobrenomes snapshot', () => {
  for (const nome of ListaDeNomes.sobrenomes) {
    expect(nome).toMatchSnapshot();
  }
});
