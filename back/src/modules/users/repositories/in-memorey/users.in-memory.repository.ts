import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from '../../Dto/create-user.dto';
import { UpdateUserDto } from '../../Dto/update-user.dto';
import { User } from '../../entities/user.entitie';
import { UserRepository } from '../users.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersInMemoryRepository implements UserRepository {
  private database: User[] = [];
  async create(data: CreateUserDto): Promise<User> {
    const newUser = new User();
    Object.assign(newUser, {
      ...data,
    });
    this.database.push(newUser);
    return plainToInstance(User, newUser);
  }
  async findAll(): Promise<User[]> {
    return plainToInstance(User, this.database);
  }
  async findByEmail(email: string): Promise<User> {
    const user = this.database.find((user) => user.email == email);
    return user;
  }
  async findOne(id: string): Promise<User> {
    const user = this.database.find((user) => user.id == id);
    return plainToInstance(User, user);
  }
  async update(data: UpdateUserDto, id: string): Promise<User> {
    const userIndex = this.database.findIndex((user) => user.id == id);
    this.database[userIndex] = {
      ...this.database[userIndex],
      ...data,
    };
    return plainToInstance(User, this.database[userIndex]);
  }
  async remove(id: string): Promise<void> {
    const userIndex = this.database.findIndex((user) => user.id == id);
    this.database.splice(userIndex, 1);
  }
}