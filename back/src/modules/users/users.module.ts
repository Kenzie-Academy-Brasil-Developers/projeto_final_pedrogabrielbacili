import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { UsersRepository } from './repositories/users.repository';
import { PrismaService } from '../database/prisma.service';
import { UsersPrismaRepository } from './repositories/prisma/users-prisma.repository';
import { AddressModule } from '../address/address.module';

@Module({
  imports:[AddressModule],
  controllers: [UsersController],
  providers: [
    UserService,
    PrismaService,
    { provide: UsersRepository, useClass: UsersPrismaRepository },
  ],
  exports: [UsersRepository, UserService],
})
export class UserModule {}
