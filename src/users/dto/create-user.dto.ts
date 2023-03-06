import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserDto {
  @IsUUID()
  id: string;

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
