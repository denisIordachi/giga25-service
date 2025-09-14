import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  vehicleType: string;

  @IsNumber()
  fabricationDate: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsNumber()
  vehicleGroupId: number;
}
