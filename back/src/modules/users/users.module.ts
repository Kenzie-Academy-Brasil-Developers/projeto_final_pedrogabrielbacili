import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { UserRepository } from './repositories/users.repository';
import { UsersInMemoryRepository } from './repositories/in-memorey/users.in-memory.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UserService,
    { provide: UserRepository, useClass: UsersInMemoryRepository },
  ],
})
export class UserModule {}
