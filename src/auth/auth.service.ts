import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from 'src/DTO/register.dto';
import { LoginDto } from 'src/DTO/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(data.password, salt);
    console.log(hash)
    return this.usersService.createUser({
      ...data,
      passwordHash: hash,
    });
  }

  async login(data: LoginDto) {
    const user = await this.usersService.findByPhone(data.phone);
    if (!user || !user.passwordHash) throw new UnauthorizedException();
    const ok = await bcrypt.compare(data.password, user.passwordHash);
    if (!ok) throw new UnauthorizedException();

    return {
      access_token: await this.jwtService.signAsync({ sub: user.userId }),
    };
  }
}
