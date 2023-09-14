import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteAccountIdDto {
  @IsString()
  @IsNotEmpty()
  _id: string;
}
