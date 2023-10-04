import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user.dto';
import { UserRepository } from './repositories/users.repository';
import { UpdateUserDto } from './Dto/update-user.dto';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async create(createUserDto: CreateUserDto) {
    const findUser = await this.userRepository.findByEmail(createUserDto.email);
    if (findUser) {
      throw new ConflictException('User alread exists');
    }
    const user = await this.userRepository.create(createUserDto);
    return user;
  }
  async find() {
    const users = await this.userRepository.findAll();
    return users;
  }
  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User not exist');
    }
    return user;
  }
  async update(data: UpdateUserDto, id: string) {
    const user = await this.userRepository.update(data, id);
    if (!user) {
      throw new NotFoundException('User not exist');
    }
    return user;
  }
  async remove(id: string) {
    await this.userRepository.remove(id);
  }
}
