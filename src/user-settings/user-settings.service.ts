import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSettingsDto } from 'src/dto/user-settings/userSettings.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserSettingsService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async userSettingsDetails(userSettingsDto: UserSettingsDto) {
    const { avatar, age, description, gender, sex_preference } =
      userSettingsDto;
  }
}
