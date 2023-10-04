import { CreateUserDto } from '../Dto/create-user.dto';
import { UpdateUserDto } from '../Dto/update-user.dto';
import { User } from '../entities/user.entitie';

export abstract class UserRepository {
  abstract create(data: CreateUserDto): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findOne(id: string): Promise<User | null>;
  abstract update(data: UpdateUserDto, id: string): Promise<User | null>;
  abstract remove(id: string): Promise<void>;
}
