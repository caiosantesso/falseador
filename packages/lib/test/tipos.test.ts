import { falseador } from '../src';

describe('booleano()', () => {
  test('devolve verdadeiro ou falso', () => {
    const bool = falseador.tipo.booleano();
    expect(typeof bool).toBe('boolean');
  });

  test('distribuição entre 49,8% e 50,2%', () => {
    const testes = 1_000_000;
    const histograma = new Map<boolean, number>();

    for (let iteração = 0; iteração < testes; iteração++) {
      const booleano = falseador.tipo.booleano();

      if (histograma.has(booleano)) {
        let contador = histograma.get(booleano)!;
        histograma.set(booleano, ++contador);
      } else {
        histograma.set(booleano, 1);
      }
    }

    const mínimoPc = testes * 0.498;
    const máximoPc = testes * 0.502;
    for (const contador of histograma.values()) {
      expect(contador).toBeGreaterThan(mínimoPc);
      expect(contador).toBeLessThan(máximoPc);
    }
  });
});

describe('entre()', () => {
  test('devolve valor aleatório de lista númerica', () => {
    const lista = [1, 2, 3];
    const número = falseador.tipo.entre(lista);

    expect(typeof número).toBe('number');
    expect(lista).toContain(número);
  });

  test('devolve valor aleatório de lista de obj', () => {
    const lista = [{ cor: 'violeta' }, { cor: 'lilás' }];
    const objeto = falseador.tipo.entre(lista);

    expect(typeof objeto).toBe('object');
    expect(lista).toContain(objeto);
    expect(objeto).toHaveProperty('cor');
  });

  test('distribuição entre 19,5% e 20,5%; 1 de 5 itens', () => {
    const lista = ['A', 'B', 'C', 'D', 'E'];
    const testes = 100_000;
    const histograma = new Map<string, number>();

    for (let iteração = 0; iteração < testes; iteração++) {
      const sorteado = falseador.tipo.entre(lista);

      if (histograma.has(sorteado)) {
        let contador = histograma.get(sorteado)!;
        histograma.set(sorteado, ++contador);
      } else {
        histograma.set(sorteado, 1);
      }
    }

    const mínimoPc = testes * 0.195;
    const máximoPc = testes * 0.205;
    for (const contador of histograma.values()) {
      expect(contador).toBeGreaterThan(mínimoPc);
      expect(contador).toBeLessThan(máximoPc);
    }
  });

  test('erro pois há menos de 2 valores na lista', () => {
    expect(() => falseador.tipo.entre([])).toThrow();
  });
});

describe('cópiaEmbaralhada()', () => {
  test('erro pois há menos de 2 valores na lista', () => {
    expect(() => falseador.tipo.cópiaEmbaralhada([1])).toThrow();
  });

  test('distribuição entre 19,5% e 20,5%; cada um dos 5 itens em um dos 5 índices', () => {
    const lista = ['A', 'B', 'C', 'D', 'E'];
    const testes = 100_000;
    const histograma = new Map<string, number[]>();

    for (let iteração = 0; iteração < testes; iteração++) {
      const embaralhada = falseador.tipo.cópiaEmbaralhada(lista);

      embaralhada.forEach((v, i) => {
        if (histograma.has(v)) {
          const índices = histograma.get(v)!;
          índices[i] += 1;
        } else {
          const índices = new Array(5).fill(0);
          índices[i] = 1;
          histograma.set(v, índices);
        }
      });
    }

    const mínimoPc = testes * 0.195;
    const máximoPc = testes * 0.205;
    for (const índices of histograma.values()) {
      índices.forEach((contador) => {
        expect(contador).toBeGreaterThan(mínimoPc);
        expect(contador).toBeLessThan(máximoPc);
      });
    }
  });
});
