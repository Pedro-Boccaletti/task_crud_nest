import { IsEmail, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateUserDto {
  @IsUUID()
  @IsOptional()
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
