import { TaskService } from "../services/taskService";
import { Task } from "../models/task";

export class TaskFacade {
  private taskService = new TaskService();

  async createTask(title: string, description: string): Promise<Task> {
    return await this.taskService.addTask(title, description);
  }

  async getAllTasks(): Promise<Task[]> {
    return await this.taskService.getTasks();
  }

  async getTaskById(id: string): Promise<Task | null> {
    return await this.taskService.getTask(id);
  }

  async updateTask(
    id: string,
    title?: string,
    description?: string
  ): Promise<Task | null> {
    return await this.taskService.updateTask(id, title, description);
  }

  async deleteTask(id: string): Promise<boolean> {
    return await this.taskService.deleteTask(id);
  }
}
