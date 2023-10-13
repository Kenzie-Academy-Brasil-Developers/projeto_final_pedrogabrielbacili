import { Controller, Get, Post, Body, Param, Patch, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { ImagesService } from './images.service';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { CreateImageDto } from './dto/create-image.dto';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) { }

  @Post(":id")
  @UseInterceptors(FileInterceptor("imagem_capa"))
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'imagem_capa', maxCount: 1 }
    ]),
  )
  upload(
    @UploadedFiles()
    files: {
      imagem_capa?: Express.Multer.File;
    },
    @Param('anouncement_id') anouncement_id: string,
  ) {
    const { imagem_capa } = files;
    return this.imagesService.upload(imagem_capa[0], anouncement_id)
  }


  // @Post(":id")
  // create(@Body() createImageDto: CreateImageDto) {
  //   @UseInterceptors(
  //     FileFieldsInterceptor(
  //       [
  //         { name: "imagem_capa", maxCount: 1 }
  //       ]))
  //   upload(
  //     @UploadedFile()
  //   files: {
  //     imagem_capa?: Express.Multer.File
  //   }, @Param("id") id: string,
  //   ){
  //     const { imagem_capa } = files
  //     return this.imagesService.upload(imagem_capa[0], id)
  //   }
  // }

}
