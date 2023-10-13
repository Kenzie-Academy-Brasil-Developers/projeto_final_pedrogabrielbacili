import { Injectable, NotFoundException } from '@nestjs/common';
import {v2 as cloudinary } from "cloudinary"
import { ImagesRepository } from './repositories/images.repository';
import { unlink } from 'fs';
import { error } from 'console';

@Injectable()
export class ImagesService {
  constructor(private imagesRepository: ImagesRepository){}
  async upload(imagem_capa: Express.Multer.File, anouncement_id:string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    })

    const findAnouncement = await this.imagesRepository.findOne(anouncement_id)

    if(!findAnouncement){
      throw new NotFoundException("image not found")
    }


    const uploadImage = await cloudinary.uploader.upload(
        imagem_capa.path,
      { resource_type: 'image' },
      (error, result) => result,
    );

    const createImage = await this.imagesRepository.create(
      {
        imagem_capa:uploadImage.secure_url,
        imagem1:uploadImage.segure_url,
        imagem2:uploadImage.segure_url
      },
      anouncement_id
    )

    unlink(imagem_capa.path, (error)=>{
      if(error) console.log(error)
    });
    return createImage;
  }
}

