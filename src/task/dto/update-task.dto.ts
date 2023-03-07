import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsUUID,
} from 'class-validator';

export class UpdateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description: string;

  @IsOptional()
  @IsDateString()
  time: string;

  @IsOptional()
  @IsBoolean()
  allDay: boolean;

  @IsUUID()
  userId: string;
}
