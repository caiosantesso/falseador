import{Command}from"commander";import{carmesim}from"./Utilitários.js";export class Comando extends Command{constructor(nome){super(nome);super.configureOutput({outputError:(str,write)=>write(carmesim`${str}`)}).allowExcessArguments(false).exitOverride()}}
//# sourceMappingURL=Comando.js.map