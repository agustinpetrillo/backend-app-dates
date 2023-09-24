import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserSettings,
  UserSettingsSchema,
} from 'src/schemas/user-settings.schema';
import { UserSettingsController } from './user-settings.controller';
import { UserSettingsService } from './user-settings.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forFeature([
      { name: UserSettings.name, schema: UserSettingsSchema },
    ]),
  ],
  controllers: [UserSettingsController],
  providers: [UserSettingsService],
})
export class UserSettingsModule {}
