import { IsDate, IsEmail, IsInt, IsNotEmpty, IsString, MinLength, IsEnum, IsNumber, IsDecimal, IsObject, ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { hashSync } from 'bcryptjs';
import { TipoConta } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { CreateAddressDto } from 'src/modules/address/dto/create-address.dto';

export class CreateUserDto {
  @ApiProperty({
    description: "Nome Do Usuario",
    type: String,
    default: "Pedro Gabriel",
  })
    @IsString()
    nome: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    celular: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    cpf:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    data_nascimento:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    descricao: string;

    @ApiProperty()
    @IsEnum(TipoConta)
    conta: TipoConta;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Transform(({ value }: { value: string }) => hashSync(value, 10), {
        groups: ['transform'],
    })
    password: string;
}

export class CreateUserInAddressDto{
  @ApiProperty({
    description: "Nome Do Usuario",
    type: String,
    default: "Pedro Gabriel",
  })
  @IsString()
  nome: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  cpf: string;

  @ApiProperty()
  @IsString()
  celular: string;

  @ApiProperty()
  @IsString()
  data_nascimento: string;

  @ApiProperty()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty()
  @IsEnum(TipoConta)
  conta: TipoConta;

  @ApiProperty()
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
  
  @IsObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
