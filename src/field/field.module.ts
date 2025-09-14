import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategyModule } from 'src/auth/jwt.module';
import { Field } from 'src/entities/field.entity';
import { FieldsService } from './field.service';
import { FieldsController } from './field.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Field]), JwtStrategyModule],
  providers: [FieldsService],
  controllers: [FieldsController],
  exports: [FieldsService],
})
export class FieldsModule {}
