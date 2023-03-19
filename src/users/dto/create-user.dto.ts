import {
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsAlpha()
  firstName: string;

  @IsOptional()
  @IsAlpha()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
