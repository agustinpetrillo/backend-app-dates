import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteAccountIdDto } from 'src/dto/accounts/delete.dto';
import { EmailAccountDto } from 'src/dto/accounts/email.dto';
import { PasswordDto } from 'src/dto/accounts/password.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class AccountsService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getAccount(userId: string) {
    const account = await this.userModel.findById(userId);
    if (!account) {
      throw new NotFoundException('User not founded.');
    }
    return account;
  }

  async deleteAccount(accountId: DeleteAccountIdDto) {
    const deletedAccount = await this.userModel.findByIdAndDelete(accountId);
    if (!deletedAccount) throw new NotFoundException('User not founded.');
    return deletedAccount;
  }

  async modifyPassword(newPassword: PasswordDto, userId: string) {
    const updatedAccount = await this.userModel.findByIdAndUpdate(
      userId,
      { password: newPassword },
      { new: true },
    );
    if (!updatedAccount) {
      throw new NotFoundException('User not founded.');
    }
    return updatedAccount;
  }

  async modifyEmail(newEmail: EmailAccountDto, userId: string) {
    const updatedAccount = await this.userModel.findByIdAndUpdate(
      userId,
      { email: newEmail },
      { new: true },
    );
    if (!updatedAccount) {
      throw new NotFoundException('User not founded.');
    }
    return updatedAccount;
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }
}
