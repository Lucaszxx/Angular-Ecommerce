export class Usuarios {
    id: number;
    nome: string;
    sobrenome: string;
    cpf: string;
    email: string;
    sexo: string;
    dataCad: string;

    constructor(id: number, nome:string, sobrenome: string, cpf: string, email: string, sexo: string, dataCad: string) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
        this.sexo = sexo;
        this.dataCad = dataCad;
    }
}
