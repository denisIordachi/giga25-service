import { Controller, Get, Body, Put, Param, UseGuards, Post } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { UpdateUserDto } from 'src/DTO/updatedUser.dto';
import { UserDataService } from './uder-data.service';
import { Animal } from 'src/entities/animal.entity';
import { CreateAnimalDto } from 'src/DTO/animal.dto';
import { CreateVehicleDto } from 'src/DTO/create-vehicle.dto';

@UseGuards(JwtAuthGuard)
@Controller()
export class UserDataController {
  constructor(private readonly userDataService: UserDataService) {}

  @Post('animal')
  createAnimal(@Body() dto: CreateAnimalDto) {
    return this.userDataService.createAnimal(dto);
  }

  @Get('animal/cattle/:cattleId')
  findByCattle(@Param('cattleId') cattleId: string) {
    return this.userDataService.findByCattleId(cattleId);
  }

  @Post('vehicle')
  async createVehicle(@Body() createVehicleDto: CreateVehicleDto) {
    return this.userDataService.createVehicle(createVehicleDto);
  }
}
