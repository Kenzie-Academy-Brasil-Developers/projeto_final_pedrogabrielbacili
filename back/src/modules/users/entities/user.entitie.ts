import { Address, TipoConta } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';


export class User {
    readonly id: string;
    nome: string;
    email: string;
    cpf: string;
    celular: string;
    data_nascimento: string;
    descricao: string;
    conta: TipoConta;

    @Exclude()
    password: string;

    constructor() {
        this.id = randomUUID();
        
    }
    addresses?:Address[];
}
