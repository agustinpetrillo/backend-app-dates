import { IsNotEmpty, IsString } from 'class-validator';

export class UserSettingsDto {
  @IsString()
  @IsNotEmpty()
  readonly avatar: string;

  @IsString()
  @IsNotEmpty()
  readonly age: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly gender: string;

  @IsString()
  @IsNotEmpty()
  readonly sex_preference: string;
}
