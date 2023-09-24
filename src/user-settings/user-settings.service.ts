import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSettingsDto } from 'src/dto/user-settings/userSettings.dto';
import { UserSettings } from 'src/schemas/user-settings.schema';

@Injectable()
export class UserSettingsService {
  constructor(
    @InjectModel(UserSettings.name) private userModel: Model<UserSettings>,
  ) {}

  async userSettingsDetails(userSettingsDto: UserSettingsDto) {
    const { avatar, age, description, gender, sex_preference } =
      userSettingsDto;
  }
}
