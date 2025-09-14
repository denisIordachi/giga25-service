import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnimalDto } from 'src/DTO/animal.dto';
import { Animal } from 'src/entities/animal.entity';
import { CreateVehicleDto } from 'src/DTO/create-vehicle.dto';
import { Vehicle } from 'src/entities/vehicle.entity';

@Injectable()
export class UserDataService {
  constructor(
    @InjectRepository(Animal)
    private animalRepo: Repository<Animal>,
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  public createAnimal(data: CreateAnimalDto) {
    return this.animalRepo.save(data);
  }

  public findByCattleId(cattleId: string) {
    return this.animalRepo.find({ where: { cattleId } });
  }

  async createVehicle(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const vehicle = this.vehicleRepository.create(createVehicleDto);
    return this.vehicleRepository.save(vehicle);
  }
}
