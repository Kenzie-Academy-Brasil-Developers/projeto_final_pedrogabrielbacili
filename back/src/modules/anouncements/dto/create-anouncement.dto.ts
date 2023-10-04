import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateAnouncementDto {
  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsNumber()
  @IsNotEmpty()
  ano: number;

  @IsString()
  @IsNotEmpty()
  combustivel: string;

  @IsDecimal()
  @IsNotEmpty()
  quilometragem: number;

  @IsNumber()
  @IsNotEmpty()
  preco_fipe: number;

  @IsNumber()
  @IsNotEmpty()
  preco: number;

  @IsString()
  @IsNotEmpty()
  descricao: Text;

  @IsUUID()
  @IsNotEmpty()
  user_id: string;
}
