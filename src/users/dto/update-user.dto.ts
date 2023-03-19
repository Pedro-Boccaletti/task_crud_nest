import { PartialType } from '@nestjs/mapped-types';
import {
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsStrongPassword,
  IsUUID,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsAlphanumeric()
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
