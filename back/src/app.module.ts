import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/users.module';
import { ImagesModule } from './modules/images/images.module';
import { AnouncementsModule } from './modules/anouncements/anouncements.module';
import { AddressModule } from './modules/address/address.module';
import { CommentsModule } from './modules/comments/comments.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, ImagesModule, AnouncementsModule, AddressModule, CommentsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
