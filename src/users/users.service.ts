import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from 'src/DTO/updatedUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  public createUser(data: Partial<User>) {
    const user = this.repo.create(data);
    return this.repo.save(user);
  }

  async updateUser(userId: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.repo.findOne({ where: { userId } });
    if (!user) throw new Error('User not found');

    if (dto.password) {
      dto.password = await bcrypt.hash(dto.password, 10);
      user.passwordHash = dto.password;
    }

    Object.assign(user, dto);

    return this.repo.save(user);
  }

  public findByPhone(phone: string) {
    return this.repo.findOne({ where: { phone } });
  }

  async findById(userId: number): Promise<User | null> {
    return this.repo.findOne({ where: { userId } });
  }

  public findAll() {
    return this.repo.find();
  }
}
