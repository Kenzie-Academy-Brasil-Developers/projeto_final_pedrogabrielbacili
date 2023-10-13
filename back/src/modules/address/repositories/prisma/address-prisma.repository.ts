import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../address.repository';
import { CreateAddressDto } from '../../dto/create-address.dto';
import { Address } from '../../entities/address.entity';
import { PrismaService } from 'src/modules/database/prisma.service';
import { UpdateAddressDto } from '../../dto/update-address.dto';
@Injectable()
export class AddressPrismaRepository implements AddressRepository {
  constructor(private prisma: PrismaService) { }
  async create(data: CreateAddressDto, user_id: string): Promise<Address> {
    const address = new Address();
    Object.assign(address, {
      ...data,
    });
    const newAddress = await this.prisma.address.create({
      data: {
        id: address.id,
        cep: address.cep,
        estado: address.estado,
        cidade: address.cidade,
        rua: address.rua,
        numero: address.numero,
        complemento: address.complemento,
        user_id,
      },
    });
    return newAddress;
  }
  async findOne(id: string): Promise<Address> {
    const address = await this.prisma.address.findFirst({
      where: { id },
    });
    return address;
  }
  async findAll(): Promise<Address[]> {
    const address = await this.prisma.address.findMany();
    return address;
  }
  async update(data: UpdateAddressDto, addressId: string): Promise<Address> {
    const address = await this.prisma.address.update({
      where: {
        id: addressId,
      },
      data: { ...data },
    });
    return address;
  }
}