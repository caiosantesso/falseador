import{Número}from"./Número.js";import{Exceção}from"../integridade/Exceção.js";export class Tipo{#número=new Número;booleano(){return Math.random()<.5}entre(valores){const possibilidades=valores.length;if(possibilidades<=1)throw new Exceção("Lista deve ter ao menos 2 itens.");return valores[this.#número.exclusivoEntreZeroE(possibilidades)]}cópiaEmbaralhada(original){if(original.length<=1)throw new Exceção("Lista deve ter ao menos 2 itens.");const cópia=new Array(original.length);for(let i=0;i<original.length;i++){const aleatório=i===0?0:this.#número.entreZeroE(i);cópia[i]=cópia[aleatório];cópia[aleatório]=original[i]}return cópia}}
//# sourceMappingURL=Tipo.js.map