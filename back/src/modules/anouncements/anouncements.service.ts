import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnouncementDto } from './dto/create-anouncement.dto';
import { UpdateAnouncementDto } from './dto/update-anouncement.dto';
import { AnouncementsRepository } from './repositories/anouncements.repository';

@Injectable()
export class AnouncementsService {
  constructor(private anouncementRepository: AnouncementsRepository){}
  async create(createAnouncementDto: CreateAnouncementDto, anouncement_id: string) {
    const anouncement = await this.anouncementRepository.create(createAnouncementDto, anouncement_id);
    return anouncement;
  }

  async findAll() {
    const anouncements = await this.anouncementRepository.findAll();
    return anouncements;

  }

  async findOne(id: string) {
    const anouncement = await this.anouncementRepository.findOne(id);
    if (!anouncement) {
      throw new NotFoundException('User not found !');
    }
    return anouncement;
  }

  async update(data: UpdateAnouncementDto, id: string,) {
    const anouncement = await this.anouncementRepository.update(data, id);
    if(!anouncement){
      throw new NotFoundException("Anouncement not found!")
    }
    return anouncement

  }

  async remove(id: string) {
    const anouncement=await this.anouncementRepository.findOne(id);
    if(!anouncement){
      throw new NotFoundException("Anouncement not found")
    }else{
      await this.anouncementRepository.remove(id);
    }
  }
}
