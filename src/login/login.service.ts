import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class LoginService {
  constructor(private readonly prisma: PrismaService) {}
  async login(login: Pick<User, 'email' | 'password'>) {
    const foundUser = await this.prisma.user.findFirst({
      where: { email: login.email },
    });
    if (!foundUser) throw new NotFoundException();
    const { password, ...user } = foundUser;
    const match = password === login.password;
    if (!match) throw new NotAcceptableException();
    return user;
  }
}
