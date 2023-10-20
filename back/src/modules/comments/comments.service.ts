import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentsRepository } from './repositories/comments.repository';

@Injectable()
export class CommentsService {
  constructor(private commetsRepository:CommentsRepository){}

  async create(createCommentDto: CreateCommentDto, user_id:string) {
    const comment= await this.commetsRepository.create(createCommentDto, user_id)
    return comment;
  }

  async findAll() {
    const comment = await this.commetsRepository.findAll()
    return comment
  }

  async findOne(id: string) {
    const comment = await this.commetsRepository.findOne(id)
    return comment
  }

  async remove(id: string) {
    const comment = await this.commetsRepository.remove(id)
    return comment
  }
}
