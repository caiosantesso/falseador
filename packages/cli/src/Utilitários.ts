import { util } from '@falseador/lib';
import { Argument, InvalidArgumentError } from 'commander';

export function validaNúmeroInteiroNãoNegativo(valor: never): number {
  try {
    const número = parseInt(valor);
    util.númeroInteiroNãoNegativoOuLançaErro(número);
    return número;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    throw new InvalidArgumentError(`${valor} não é inteiro positivo.`);
  }
}

export function validaNúmeroInteiroPositivo(valor: string): number {
  try {
    const número = parseInt(valor);
    util.númeroInteiroPositivoOuLançaErro(número);
    return número;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    throw new InvalidArgumentError(`${valor} não é inteiro positivo.`);
  }
}

export function validaNúmeroMaiorQue1(valor: string): number {
  const número = validaNúmeroInteiroPositivo(valor);
  if (número === 1) throw new InvalidArgumentError('<x> deve ser maior que 1.');
  return número;
}

export function validaNúmeroInteiro(valor: never): number {
  try {
    const número = parseInt(valor);
    util.númeroInteiroOuLançaErro(número);
    return número;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    throw new InvalidArgumentError(`${valor} não é inteiro.`);
  }
}

export function validaOpçãoNúmeroInteiroPositivo(
  valor: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _anterior: number,
): number {
  try {
    const número = parseInt(valor);
    util.númeroInteiroPositivoOuLançaErro(número);
    return número;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_e) {
    throw new InvalidArgumentError(`${valor} não é inteiro positivo.`);
  }
}

export const gênero = new Argument('[gênero]', 'F, M ou nenhum').choices([
  'F',
  'f',
  'm',
  'M',
]);

export const carmesim = (estático: TemplateStringsArray, dinâmico?: string) =>
  `\x1b[31m${estático.join('')}${dinâmico ?? ''}\x1b[0m`;
