import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, ForbiddenException } from '@nestjs/common';
import { AnouncementsService } from './anouncements.service';
import { CreateAnouncementDto } from './dto/create-anouncement.dto';
import { UpdateAnouncementDto } from './dto/update-anouncement.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { error } from 'console';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("Anouncements")
@Controller('anouncements')
export class AnouncementsController {
  constructor(private readonly anouncementsService: AnouncementsService) {}

  @Post('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createAnouncementDto: CreateAnouncementDto, @Request() req) {
    if(req.user.conta === "comprador"){
      throw new ForbiddenException("tipo de conta invalida!")
    }else{
      return this.anouncementsService.create(createAnouncementDto, req.user.id)
    }
  }

  @Get()
  findAll() {
    return this.anouncementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anouncementsService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id:string ,@Body() updateAnouncementDto: UpdateAnouncementDto) {
    return this.anouncementsService.update(updateAnouncementDto, id)
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.anouncementsService.remove(id);
  }
}
