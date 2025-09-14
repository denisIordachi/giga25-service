import { IsOptional, IsString, IsNumber, IsArray } from 'class-validator';

export class UpdateFieldDto {
  @IsOptional()
  @IsString()
  cropType?: string;

  @IsOptional()
  @IsArray()
  coords?: [number, number][];

  @IsOptional()
  @IsNumber()
  size?: number;

  @IsOptional()
  @IsString()
  soilType?: string;

  @IsOptional()
  @IsString()
  fertiliser?: string;

  @IsOptional()
  @IsString()
  herbicide?: string;
}
