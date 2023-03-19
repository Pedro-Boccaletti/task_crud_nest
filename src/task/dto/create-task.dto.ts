import { Transform } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  time: Date;

  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
