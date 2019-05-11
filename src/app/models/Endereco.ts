export class Endereco implements IEndereco {
    constructor(
        public cep : string,
        public rua : string,
        public bairro : string,
        public cidade : string,
        public estado : string
    ){}
}

export interface IEndereco {
    cep : string;
    rua : string;
    bairro : string;
    cidade : string;
    estado : string;
} 
