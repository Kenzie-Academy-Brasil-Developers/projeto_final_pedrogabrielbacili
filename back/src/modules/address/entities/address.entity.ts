import { randomUUID } from "crypto";

export class Address {
    readonly id: string;
    cep: string;
    estado: string;
    cidade: string;
    rua: string;
    numero: number;
    complemento?: string;
    constructor() {
        this.id = randomUUID()
    }
}
