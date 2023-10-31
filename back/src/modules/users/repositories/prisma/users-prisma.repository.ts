import { CreateUserDto } from '../../Dto/create-user.dto';
import { UpdateUserDto } from '../../Dto/update-user.dto';
import { User } from '../../entities/user.entitie';
import { UsersRepository } from '../users.repository';
import { PrismaService } from 'src/modules/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { Injectable } from '@nestjs/common';
import { Address } from 'src/modules/address/entities/address.entity';
import { CreateAddressDto } from 'src/modules/address/dto/create-address.dto';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    const user = new User()
    Object.assign(user, {
      ...data,
    });
    const newUser = await this.prisma.users.create({
      data: { ...user,  },
    });

    return plainToInstance(User, newUser);
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.users.findMany();
    return plainToInstance(User, users);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.users.findUnique({
      where: { email },
    });
    return user;
  }
  async findOne(id:string): Promise<User>{
    const user = await this.prisma.users.findUnique({
      where: { id },
      include: { Address: true}
    });
    return plainToInstance(User, user);
  }


  async update(data: UpdateUserDto, id: string): Promise<User> {
    const user = await this.prisma.users.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(User, user);
  }

  async remove(id: string): Promise<any> {
    await this.prisma.users.delete({
      where: { id },
    });

  }
}