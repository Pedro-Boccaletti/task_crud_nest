import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TaskModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
