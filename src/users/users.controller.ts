import { Controller, Get, Body, Put, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { UpdateUserDto } from 'src/DTO/updatedUser.dto';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':userId')
  async findOne(@Param('userId') userId: string): Promise<User | null> {
    return this.usersService.findById(+userId);
  }

  @Put(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() dto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(+userId, dto);
  }
}
