import { Patch, UseInterceptors } from "@nestjs/common";
import { CreateImageDto } from "../../dto/create-image.dto";
import { Image } from "../../entities/image.entity";
import { ImagesRepository } from "../images.repository";
import { UpdateImageDto } from "../../dto/update-image.dto";
import { PrismaService } from "src/modules/database/prisma.service";

export class ImagesPrismaRepository implements ImagesRepository{
    constructor(private prisma:PrismaService){}
    create(data: CreateImageDto, userId: string): Promise<Image> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<Image> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Image[]> {
        throw new Error("Method not implemented.");
    }

    async upload(data: UpdateImageDto, image_id: any): Promise<Image> {
        const image = await this.prisma.image.update({
            where:{
                id:image_id
            },
            data: {...data}
        })
        return image;
    }
}