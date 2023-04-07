export declare enum UF {
    AC = "Acre",
    AL = "Alagoas",
    AP = "Amap\u00E1",
    AM = "Amazonas",
    BA = "Bahia",
    CE = "Cear\u00E1",
    DF = "Distrito Federal",
    ES = "Esp\u00EDrito Santo",
    GO = "Goi\u00E1s",
    MA = "Maranh\u00E3o",
    MT = "Mato Grosso",
    MS = "Mato Grosso do Sul",
    MG = "Minas Gerais",
    PA = "Par\u00E1",
    PB = "Para\u00EDba",
    PR = "Paran\u00E1",
    PE = "Pernambuco",
    PI = "Piau\u00ED",
    RJ = "Rio de Janeiro",
    RN = "Rio Grande do Norte",
    RS = "Rio Grande do Sul",
    RO = "Rond\u00F4nia",
    RR = "Roraima",
    SC = "Santa Catarina",
    SP = "S\u00E3o Paulo",
    SE = "Sergipe",
    TO = "Tocantins"
}
export declare class Local {
    #private;
    cidade(uf?: UF): [string, UF];
}
