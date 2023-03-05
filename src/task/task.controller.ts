import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from '@prisma/client';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async postTask(@Body() body: Task) {
    const task = await this.taskService.insertTask(body);
    return task;
  }
  @Get()
  async getAll() {
    const tasks = await this.taskService.getAll();
    return tasks;
  }
}
