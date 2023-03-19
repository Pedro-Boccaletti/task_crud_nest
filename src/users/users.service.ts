import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(user: CreateUserDto) {
    // return 'This action adds a new user';
    const { password, ...createdUser } = await this.prisma.user.create({
      data: user,
    });
    return createdUser;
  }

  async findAll() {
    // return `This action returns all users`;
    const users = await this.prisma.user.findMany();
    return users.map(({ password, ...e }) => e);
  }

  async findOne(id: string) {
    // return `This action returns a #${id} user`;
    const { password, ...user } = await this.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  async update(id: string, user: UpdateUserDto) {
    // return `This action updates a #${id} user`;
    const { password, ...updatedUser } = await this.prisma.user.update({
      where: { id },
      data: { ...user },
    });
    return updatedUser;
  }

  async remove(id: string) {
    // return `This action removes a #${id} user`;
    const { password, ...user } = await this.prisma.user.delete({
      where: { id },
    });
    return user;
  }
}
