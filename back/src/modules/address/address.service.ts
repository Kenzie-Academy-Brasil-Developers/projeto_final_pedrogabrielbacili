import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressRepository } from './repositories/address.repository';
@Injectable()
export class AddressService {
  constructor(private addressRepository: AddressRepository){}
  async create(createAddressDto: CreateAddressDto, userId: string) {
    const address= await this.addressRepository.create(createAddressDto, userId);
    return address;
  }
  async findAll() {
    return this.addressRepository.findAll()
  }
  async findOne(id: string) {
    const findAddress = await this.addressRepository.findOne(id);
    if (!findAddress) {
      throw new NotFoundException('Address not found');
    }
    return findAddress;  }
  async update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }
  async remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
