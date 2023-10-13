import { randomUUID } from 'crypto';

export class Anouncement {
  readonly id: string;
  marca: string;
  modelo: string;
  ano: number;
  combustivel: string;
  quilometragem: number;
  cor: string;
  preco_fipe: number;
  preco: number;
  descricao: string;
  user_id: string;

  constructor() {
    this.id = randomUUID();
  }
}
