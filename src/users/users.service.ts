import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  async create(prisma: PrismaService, user: User) {
    // return 'This action adds a new user';
    const createdUser = await prisma.user.create({ data: user });
    return createdUser;
  }

  async findAll(prisma: PrismaService) {
    // return `This action returns all users`;
    const users = await prisma.user.findMany();
    return users;
  }

  async findOne(prisma: PrismaService, id: string) {
    // return `This action returns a #${id} user`;
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  }

  async update(prisma: PrismaService, id: string, user: User) {
    // return `This action updates a #${id} user`;
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { ...user },
    });
    return updatedUser;
  }

  async remove(prisma: PrismaService, id: string) {
    // return `This action removes a #${id} user`;
    const user = await prisma.user.delete({ where: { id } });
    return user;
  }
}
