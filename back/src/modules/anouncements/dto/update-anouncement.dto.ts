import { PartialType } from '@nestjs/mapped-types';
import { CreateAnouncementDto } from './create-anouncement.dto';

export class UpdateAnouncementDto extends PartialType(CreateAnouncementDto) {}
