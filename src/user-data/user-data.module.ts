import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategyModule } from 'src/auth/jwt.module';
import { Animal } from 'src/entities/animal.entity';
import { UserDataService } from './uder-data.service';
import { UserDataController } from './user-data.controller';
import { Vehicle } from 'src/entities/vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Animal, Vehicle]), JwtStrategyModule],
  providers: [UserDataService],
  controllers: [UserDataController],
  exports: [UserDataService],
})
export class UserDataModule {}
