import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const tasks = await this.prisma.task.findMany();
    return tasks;
  }

  async insertTask(task: Task) {
    const createdTask = await this.prisma.task.create({
      data: task,
    });
    return createdTask;
  }
}
