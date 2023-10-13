import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { PrismaService } from '../database/prisma.service';
import { CommentsRepository } from './repositories/comments.repository';
import { CommentsPrismaRepository } from './repositories/prisma/comments-prisma.repository';
import { UserModule } from '../users/users.module';


@Module({
  imports: [UserModule],
  controllers: [CommentsController],
  providers: [CommentsService, PrismaService,
  {
    provide:CommentsRepository,
    useClass: CommentsPrismaRepository,
  },
],
  exports: [CommentsService],
})
export class CommentsModule {}
