import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  firstName: string;

  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
