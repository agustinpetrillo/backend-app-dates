import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class PasswordDto {
  @IsString()
  @IsNumber()
  @IsNotEmpty()
  @MinLength(6)
  readonly password: string | number;
}
