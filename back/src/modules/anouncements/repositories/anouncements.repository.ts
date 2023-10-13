import { CreateAnouncementDto } from "../dto/create-anouncement.dto";
import { UpdateAnouncementDto } from "../dto/update-anouncement.dto";
import { Anouncement } from "../entities/anouncement.entity";

export abstract class AnouncementsRepository{
    abstract create(data: CreateAnouncementDto, user_id: string): Promise<Anouncement>;
    abstract findAll(): Promise<Anouncement[]>;
    abstract findOne(id: string): Promise<Anouncement | null>;
    abstract update(data: UpdateAnouncementDto, anouncement_id: string): Promise<Anouncement>;
    abstract remove(id:string): Promise<void>
}