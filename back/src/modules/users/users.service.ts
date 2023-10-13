import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUserDto, CreateUserInAddressDto } from './Dto/create-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { UpdateUserDto } from './Dto/update-user.dto';
import { ForbiddenException, NotFoundException } from '@nestjs/common/exceptions';
import { AddressService } from '../address/address.service';

@Injectable()
export class UserService {

  constructor(private userRepository: UsersRepository, private addressService:AddressService) {}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.userRepository.findByEmail(createUserDto.email);
    if (findUser) {
      throw new ConflictException('User alread exists');
    }
    const user = await this.userRepository.create(createUserDto);
    return user;
  }

  async createUserInAddress(createUserInAddressDto: CreateUserInAddressDto) {
    const findUser = await this.userRepository.findByEmail(
      createUserInAddressDto.email,
    );
    if (findUser) {
      throw new ConflictException('User already exists');
    }
    const { address, ...rest } = createUserInAddressDto;
    const user = await this.userRepository.create(rest);
    await this.addressService.create(address, user.id)

    const returnedUser = await this.userRepository.findOne(user.id)

    return returnedUser;
  }
 
  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);

    return user;
  }

  async find() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);
    return user;
  }
  
  async update(data: UpdateUserDto, idToUpdate: string, userId) {
    if(idToUpdate !== userId){
      throw new ForbiddenException("You dont have permisions");
    }
    const user = await this.userRepository.update(data, idToUpdate);
    if (!user) {
      throw new NotFoundException('User not exist');
    }
    return user;
  }
  async remove(id: string) {
    await this.userRepository.remove(id);
  }
}
