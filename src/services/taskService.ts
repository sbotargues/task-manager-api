import { Task } from "../models/task";

export class TaskService {
  async addTask(title: string, description: string): Promise<Task> {
    return await Task.create({ title, description });
  }

  async getTasks(): Promise<Task[]> {
    return await Task.findAll();
  }

  async getTask(id: string): Promise<Task | null> {
    return await Task.findByPk(id);
  }

  async updateTask(
    id: string,
    title?: string,
    description?: string
  ): Promise<Task | null> {
    const task = await this.getTask(id);
    if (task) {
      if (title) task.title = title;
      if (description) task.description = description;
      await task.save();
    }
    return task;
  }

  async deleteTask(id: string): Promise<boolean> {
    const task = await this.getTask(id);
    if (task) {
      await task.destroy();
      return true;
    }
    return false;
  }
}
