import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    comentario: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    anouncement_id: string;
}
