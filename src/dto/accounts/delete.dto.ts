import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteAccountIdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
