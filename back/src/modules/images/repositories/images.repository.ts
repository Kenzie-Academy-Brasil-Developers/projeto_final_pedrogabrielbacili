import { CreateImageDto } from '../dto/create-image.dto';
import { Image } from '../entities/image.entity';

export abstract class ImagesRepository {
  abstract create(data: CreateImageDto, userId: string): Promise<Image>;
  abstract findOne(id: string): Promise<Image | undefined>;
  abstract findAll(): Promise<Image[]>;
}
