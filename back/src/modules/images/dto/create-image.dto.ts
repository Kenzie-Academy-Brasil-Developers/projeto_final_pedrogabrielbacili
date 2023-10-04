import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImageDto {
  @IsString()
  @IsNotEmpty()
  imagem_capa;

  @IsString()
  @IsNotEmpty()
  imagem1;

  @IsString()
  @IsNotEmpty()
  imagem2;
}
