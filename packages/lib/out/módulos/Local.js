import{ListaDeLocais}from"../coleções/ListaDeLocais.js";import{Número}from"./Número.js";export class Local{#número=new Número;cidade(uf){let cidades=ListaDeLocais.cidades;if(uf&&ListaDeLocais.ufs.has(uf.toUpperCase())){cidades=cidades.filter(c=>c[1]===uf.toUpperCase())}const índice=cidades.length===1?0:this.#número.exclusivoEntreZeroE(cidades.length);const cidade=cidades[índice];const nomeDaCidade=cidade[2];const ufSigla=cidade[1];return[nomeDaCidade,ufSigla]}}
//# sourceMappingURL=Local.js.map