import { randomUUID } from 'crypto';

export class Anouncement {
  readonly id: string;
  marca: string;
  modelo: string;
  ano: number;
  combustivel: string;
  quilometragem: number;
  cor: string;
  preco_fipe: Float32Array;
  preco: Float32Array;
  decricao: Text;
  user_id: string;

  constructor() {
    this.id = randomUUID();
  }
}
