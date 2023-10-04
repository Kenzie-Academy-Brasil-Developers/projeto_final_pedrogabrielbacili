import { Injectable } from '@nestjs/common';
import { CreateAnouncementDto } from './dto/create-anouncement.dto';
import { UpdateAnouncementDto } from './dto/update-anouncement.dto';

@Injectable()
export class AnouncementsService {
  create(createAnouncementDto: CreateAnouncementDto) {
    return 'This action adds a new anouncement';
  }

  findAll() {
    return `This action returns all anouncements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anouncement`;
  }

  update(id: number, updateAnouncementDto: UpdateAnouncementDto) {
    return `This action updates a #${id} anouncement`;
  }

  remove(id: number) {
    return `This action removes a #${id} anouncement`;
  }
}
