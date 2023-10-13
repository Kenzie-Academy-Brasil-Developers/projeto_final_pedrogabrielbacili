import { randomUUID } from 'node:crypto';

export class Comment {
    readonly id: string;
    comentario: string;
    user_id?: string;
    anouncement_id?: string;

    constructor() {
        this.id = randomUUID();
    }
}
