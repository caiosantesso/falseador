import { Falseador } from '../src/Falseador';
import { LinhaDeComando } from '../src/LinhaDeComando';

const commando = new LinhaDeComando(new Falseador());

afterEach(jest.resetAllMocks);

test('Comando com argumento de tipo correto', () => {
  const consoleInfo = jest.spyOn(console, 'info');

  process.argv[2] = 'número';
  process.argv[3] = 'romano';
  process.argv[4] = '1917';

  commando.execute();

  expect(consoleInfo.mock.lastCall?.[0]).toBe('MCMXVII');
});

test('Comando com argumento de tipo incorreto', () => {
  const consoleError = jest.spyOn(console, 'error');

  process.argv[2] = 'número';
  process.argv[3] = 'porExtenso';
  process.argv[4] = 'E';

  commando.execute();

  expect(consoleError.mock.lastCall?.[0]).toBe('E deve ser número inteiro.');
});

test('Comando com argumento requerido e não informado', () => {
  const consoleError = jest.spyOn(console, 'error');
  jest.spyOn(process, 'exit').mockImplementation(() => "" as never);

  process.argv[2] = 'número';
  process.argv[3] = 'entreZeroE';
  process.argv[4] = undefined as unknown as string;

  commando.execute();

  expect(consoleError.mock.lastCall?.[1]).toBe(
    'Argumento é requerido para método entreZeroE.'
  );
});
