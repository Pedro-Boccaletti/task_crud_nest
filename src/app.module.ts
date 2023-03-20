import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [TaskModule, UsersModule, LoginModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
