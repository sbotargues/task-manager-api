import { Task } from "../models/task";
import { v4 as uuidv4 } from "uuid";

export class TaskFactory {
  static createTask(title: string, description: string): Task {
    const task = new Task();
    task.id = uuidv4();
    task.title = title;
    task.description = description;
    task.createdAt = new Date();
    return task;
  }
}
