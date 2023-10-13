import { ApiProperty } from '@nestjs/swagger';
import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateAnouncementDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  marca: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  modelo: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  ano: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  combustivel: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  quilometragem: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  preco_fipe: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  preco: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cor:string
}
