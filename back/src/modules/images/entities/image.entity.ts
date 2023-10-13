import { randomUUID } from 'node:crypto';

export class Image {
    readonly id: string;
    imagem_capa: string;
    imagem1: string;
    imagem2: string;

    constructor() {
        this.id = randomUUID();
    }
}
