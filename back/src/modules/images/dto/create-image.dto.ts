import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImageDto {
  @IsString()
  @IsNotEmpty()
  imagem_capa:string;

  @IsString()
  @IsNotEmpty()
  imagem1: string;

  @IsString()
  @IsNotEmpty()
  imagem2?: string;
}
