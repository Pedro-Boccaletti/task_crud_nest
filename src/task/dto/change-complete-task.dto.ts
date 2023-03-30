import { IsBoolean, IsNotEmpty } from 'class-validator';

export class ChangeCompleteDto {
  @IsNotEmpty()
  @IsBoolean()
  complete: boolean;
}
