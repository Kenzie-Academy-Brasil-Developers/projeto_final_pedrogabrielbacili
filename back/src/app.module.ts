import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/users.module';
import { ImagesModule } from './modules/images/images.module';
import { AnouncementsModule } from './modules/anouncements/anouncements.module';
import { AddressModule } from './modules/address/address.module';

@Module({
  imports: [UserModule, ImagesModule, AnouncementsModule, AddressModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
