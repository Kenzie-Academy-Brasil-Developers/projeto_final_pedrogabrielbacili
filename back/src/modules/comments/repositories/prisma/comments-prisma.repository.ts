import { PrismaService } from "src/modules/database/prisma.service";
import { CommentsRepository } from "../comments.repository";
import { CreateCommentDto } from "../../dto/create-comment.dto";
import { plainToInstance } from "class-transformer";
import { Comment } from "../../entities/comment.entity";
import { Injectable } from "@nestjs/common/decorators";

@Injectable()
export class CommentsPrismaRepository implements CommentsRepository{
    constructor(private prisma: PrismaService){}
    async create(data: CreateCommentDto, user_id: string): Promise<Comment> {
        const comment = new Comment();
        Object.assign(comment, {
          ...data,
        });
    
        const newCommets = await this.prisma.comments.create({
          data:{
            id:comment.id,
            comentario:comment.comentario,
            user_id,
            anouncement_id:comment.anouncement_id,
          },
        });
        return plainToInstance(Comment, newCommets);
    }
    
    async findAll(): Promise<Comment[]> {
        const comment = await this.prisma.comments.findMany();
        return plainToInstance(Comment, comment)
    }

    async update(data: CreateCommentDto, id: string): Promise<Comment> {
        const comment = await this.prisma.comments.update({
          where:{id},
          data:{...data}
        })
        return plainToInstance(Comment, comment)
    }

    async findOne(id:string): Promise<Comment>{
      const comment = await this.prisma.comments.findUnique({
        where: {id},
      })
      return plainToInstance(Comment, comment)
    }

    async remove(id: string): Promise<void> {
        await this.prisma.comments.delete({
          where: {id},
        })
    }
}