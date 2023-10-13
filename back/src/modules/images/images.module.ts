import { BadRequestException, Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { PrismaService } from '../database/prisma.service';
import { ImagesRepository } from './repositories/images.repository';
import { ImagesPrismaRepository } from './repositories/prisma/images-prisma.repository';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination:"./temp",
        filename: (_, file, cb) =>{
          cb(null, file.originalname)
        },
      }),
      fileFilter:(_, file, cb)=>{
        if(file.mimetype === "image/jpeg"){
          cb(null, true)
        }else{
          cb(new BadRequestException("only jpeg formats allowed"), false)
        }
      }
    }),
  ],
  controllers: [ImagesController],
  providers: [ImagesService, PrismaService,
  {
    provide: ImagesRepository,
    useClass: ImagesPrismaRepository
  }],
})
export class ImagesModule {}
