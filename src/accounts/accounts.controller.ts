import {
  Controller,
  Body,
  Get,
  Delete,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
// import { AuthGuard } from '@nestjs/passport';
import { AccountsService } from './accounts.service';
import { DeleteAccountIdDto } from 'src/dto/accounts/delete.dto';
import { PasswordDto } from 'src/dto/accounts/password.dto';
import { EmailAccountDto } from 'src/dto/accounts/email.dto';

@Controller('user')
export class AccountsController {
  constructor(private accountService: AccountsService) {}

  @Get('/profile/settings/me')
  // @UseGuards(AuthGuard())
  getAccount(@Req() req: Request) {
    return req.user;
  }

  @Delete('/profile/settings/delete')
  // @UseGuards(AuthGuard())
  deleteAccount(@Body() userId: DeleteAccountIdDto) {
    return this.accountService.deleteAccount(userId);
  }

  @Put('/profile/settings/modifyPassword')
  // @UseGuards(AuthGuard())
  modifyPassword(@Body() newPassword: PasswordDto, userId: string) {
    return this.accountService.modifyPassword(newPassword, userId);
  }

  @Put('/profile/settings/modifyEmail')
  // @UseGuards(AuthGuard())
  modifyEmail(@Body() newEmail: EmailAccountDto, userId: string) {
    return this.accountService.modifyEmail(newEmail, userId);
  }
}
