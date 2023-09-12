import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

//.controller is for client side interaction

@Controller('tasks')
export class TasksController {
  constructor(private TaskService: TasksService) {}

  @Get()
  async findAll() {
    return await this.TaskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.TaskService.findOne(id);
    if (!task) throw new NotFoundException('Task not founded');
    return task;
  }

  @Post()
  async create(@Body() body: CreateTaskDto) {
    try {
      return await this.TaskService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Task already exists');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const task = await this.TaskService.delete(id);
    if (!task) throw new NotFoundException('Task not founded');
    return task;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    const task = await this.TaskService.update(id, body);
    if (!task) throw new NotFoundException('Task not founded');
    return task;
  }
}
