import {
  IsString,
  IsEmail,
  IsBoolean,
  IsNotEmpty,
  IsPhoneNumber,
  IsNumber,
} from 'class-validator';

export class RegisterDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  businessId: number;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;

  @IsBoolean()
  isOwner: boolean;

  @IsBoolean()
  verified: boolean = false;

  @IsString()
  @IsNotEmpty()
  password: string;
}
