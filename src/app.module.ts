import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './entities/user.entity';
import { Field } from './entities/field.entity';
import { FieldsModule } from './field/field.module';
import { UserDataModule } from './user-data/user-data.module';
import { Animal } from './entities/animal.entity';
import { Vehicle } from './entities/vehicle.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT', 6543),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASS'),
        database: config.get<string>('DB_NAME'),
        entities: [User, Field, Animal, Vehicle],
        synchronize: false, 
        ssl: { rejectUnauthorized: false },
      }),
    }),

    AuthModule,
    UsersModule,
    FieldsModule,
    UserDataModule
  ],
})
export class AppModule {}
