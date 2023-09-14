import { IsNotEmpty, IsString } from 'class-validator';

export class EmailAccountDto {
  @IsString()
  @IsNotEmpty()
  readonly email: string;
}
