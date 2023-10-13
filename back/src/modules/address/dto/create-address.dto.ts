import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist";

export class CreateAddressDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cep: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    estado: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cidade: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    rua: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    numero: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    complemento: string;
}
