import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnouncementsService } from './anouncements.service';
import { CreateAnouncementDto } from './dto/create-anouncement.dto';
import { UpdateAnouncementDto } from './dto/update-anouncement.dto';

@Controller('anouncements')
export class AnouncementsController {
  constructor(private readonly anouncementsService: AnouncementsService) {}

  @Post()
  create(@Body() createAnouncementDto: CreateAnouncementDto) {
    return this.anouncementsService.create(createAnouncementDto);
  }

  @Get()
  findAll() {
    return this.anouncementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anouncementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnouncementDto: UpdateAnouncementDto) {
    return this.anouncementsService.update(+id, updateAnouncementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anouncementsService.remove(+id);
  }
}
