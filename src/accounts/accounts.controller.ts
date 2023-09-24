import {
  Controller,
  Body,
  Get,
  Delete,
  Put,
  UseGuards,
  Req,
  Param,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { DeleteAccountIdDto } from 'src/dto/accounts/delete.dto';
import { PasswordDto } from 'src/dto/accounts/password.dto';
import { EmailAccountDto } from 'src/dto/accounts/email.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class AccountsController {
  constructor(private accountService: AccountsService) {}

  @Get('/profile/:id')
  getSingleUser(@Param('id') id: string) {
    return this.accountService.getAccount(id);
  }

  @Get('/profile/settings/me')
  @UseGuards(JwtAuthGuard)
  getAccount(@Req() req) {
    return this.accountService.findOne(req.user.id);
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
