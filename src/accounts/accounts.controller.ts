import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { DeleteAccountIdDto } from 'src/dto/accounts/delete.dto';
import { PasswordDto } from 'src/dto/accounts/password.dto';
import { EmailAccountDto } from 'src/dto/accounts/email.dto';

@Controller('user')
export class AccountsController {
  constructor(private accountService: AccountsService) {}

  //api/user/profile/settings/65023287ef22e863fbd8689f
  // @Get('/profile/settings/:id')
  // getAccount(@Param('id') userId: string) {
  //   return this.accountService.getAccount(userId);
  // }

  //api/user/profile/settings?userId=65023287ef22e863fbd8689f
  @Get('/profile/settings')
  getAccount(@Query('userId') userId: string) {
    return this.accountService.getAccount(userId);
  }

  @Post('/profile/settings')
  delete(@Body() userId: DeleteAccountIdDto) {
    return this.accountService.deleteAccount(userId);
  }

  @Post('/profile/settings')
  modifyPassword(@Body() newPassword: PasswordDto, userId: string) {
    return this.accountService.modifyPassword(newPassword, userId);
  }

  @Post('/profile/settings')
  modifyEmail(@Body() newEmail: EmailAccountDto, userId: string) {
    return this.accountService.modifyEmail(newEmail, userId);
  }
}
