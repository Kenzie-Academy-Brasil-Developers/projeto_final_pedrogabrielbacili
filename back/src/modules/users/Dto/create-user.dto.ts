import { IsDate, IsEmail, IsInt, IsNotEmpty, IsString, MinLength, IsEnum, IsNumber, IsDecimal, IsObject, ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { hashSync } from 'bcryptjs';
import { TipoConta } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { CreateAddressDto } from 'src/modules/address/dto/create-address.dto';
import { Address } from 'src/modules/address/entities/address.entity';

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
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  cpf: string;

  @IsString()
  celular: string;

  @IsString()
  data_nascimento: string;

  @IsNotEmpty()
  descricao: string;

  @IsEnum(TipoConta)
  conta: TipoConta;

  @IsString()
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
