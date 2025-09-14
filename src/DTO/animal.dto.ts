import { IsString, IsOptional, IsDateString, IsNumberString } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  species: string;

  @IsString()
  sex: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsNumberString()
  cattleId: string;
}
