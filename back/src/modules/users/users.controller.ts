import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  HttpCode,
  Delete,
  UseGuards,
  Request
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto, CreateUserInAddressDto } from './Dto/create-user.dto';
import { UpdateUserDto } from './Dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("Users")
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Post('')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('address')
  createUserAndAdress(@Body() createUserInAddressDto: CreateUserInAddressDto){
    return this.userService.createUserInAddress(createUserInAddressDto)
  }

  @Get()
  find() {
    return this.userService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update( @Body() updateUserDto: UpdateUserDto, @Request() req) {
    return this.userService.update(updateUserDto, req.user.id);
  }
  @HttpCode(204)
  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
