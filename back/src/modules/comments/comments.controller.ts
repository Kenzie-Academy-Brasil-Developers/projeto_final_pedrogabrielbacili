
import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, NotFoundException } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AnouncementsRepository } from '../anouncements/repositories/anouncements.repository';
import { UsersRepository } from '../users/repositories/users.repository';


@ApiTags("Comments")
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService, private anouncement: AnouncementsRepository,
     private userRepository:UsersRepository) {}

  @Post('')
  @UseGuards(JwtAuthGuard)
  async create(@Body() data: CreateCommentDto, @Request() req) {
    const anouncement = await this.anouncement.findOne(req.body.anouncement_id);
    const user = await this.userRepository.findOne(req.body.user_id);
    if(!user) throw new NotFoundException("User not found!");
    if(!anouncement) throw new NotFoundException("Anouncement not found!");
    return this.commentsService.create(data, req.user.id)
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }


  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}