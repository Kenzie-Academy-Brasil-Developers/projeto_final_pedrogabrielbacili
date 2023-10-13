import { CreateImageDto } from '../dto/create-image.dto';
import { UpdateImageDto } from '../dto/update-image.dto';
import { Image } from '../entities/image.entity';

export abstract class ImagesRepository {
    abstract create(data: CreateImageDto, image_Id: string): Promise<Image>;
    abstract findOne(id: string): Promise<Image | undefined>;
    abstract findAll(): Promise<Image[]>;
    abstract upload(data: UpdateImageDto, image_id:string):Promise<Image>
}
