import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const tasks = await this.prisma.task.findMany();
    return tasks;
  }

  async getAllByUser(id: string) {
    const tasks = await this.prisma.task.findMany({
      where: { userId: id },
    });
    return tasks;
  }

  async getAllTasksIdsByUser(id: string) {
    const tasks = await this.prisma.task.findMany({
      where: { userId: id },
    });
    return tasks.map((e) => e.id);
  }

  async insertTask(task: CreateTaskDto) {
    const createdTask = await this.prisma.task.create({
      data: {
        ...task,
        time: task.time ? new Date(task.time) : null,
      },
    });
    return createdTask;
  }

  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    return task;
  }

  async update(id: string, task: UpdateTaskDto) {
    const time =
      task.time === undefined
        ? undefined
        : task.time
        ? new Date(task.time)
        : null;
    const updatedTask = await this.prisma.task.update({
      where: { id },
      data: {
        ...task,
        time,
      },
    });
    return updatedTask;
  }

  async remove(id: string) {
    const task = await this.prisma.task.delete({ where: { id } });
    return task;
  }
}
