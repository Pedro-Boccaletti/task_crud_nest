import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateTaskDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsDateString()
  time: string;

  @IsNotEmpty()
  @IsBoolean()
  complete: boolean;
}
