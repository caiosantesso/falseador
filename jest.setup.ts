export const zeroComoString = 0 as unknown as string;
export const espaçoComoNúmero = ' ' as unknown as number;

global.console = {
  ...console,
  info: jest.fn(),
  error: jest.fn(),
};
