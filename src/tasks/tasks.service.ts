import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/schemas/tasks.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/dto/tasks/create-task.dto';
import { UpdateTaskDto } from 'src/dto/tasks/update-task.dto';

//.service is for database interaction

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private TaskModel: Model<Task>) {}

  //search for all data
  async findAll() {
    return this.TaskModel.find();
  }

  //search for only one
  async findOne(id: string) {
    return this.TaskModel.findById(id);
  }

  //add new data
  async create(createdTask: CreateTaskDto) {
    return this.TaskModel.create(createdTask);
  }

  //delete some data
  async delete(id: string) {
    return this.TaskModel.findByIdAndDelete(id);
  }

  //update some data
  async update(id: string, task: UpdateTaskDto) {
    return this.TaskModel.findByIdAndUpdate(id, task, { new: true });
  }
}
