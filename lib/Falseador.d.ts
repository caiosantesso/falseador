import { Número } from './Número';
import { Nome } from './Nome';
import { Tipo } from './Tipo';
import { Documento } from './Documento';
import { Texto } from './Texto';
export declare class Falseador {
    private readonly nomes;
    private readonly números;
    private readonly tipos;
    private readonly textos;
    private readonly documentos;
    get nome(): Nome;
    get número(): Número;
    get tipo(): Tipo;
    get texto(): Texto;
    get doc(): Documento;
}
