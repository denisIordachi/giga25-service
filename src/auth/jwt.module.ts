// jwt-strategy.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET', 'mySuperSecretKey123'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  providers: [JwtStrategy],
  exports: [JwtStrategy, PassportModule, JwtModule],
})
export class JwtStrategyModule {}
