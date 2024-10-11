import { Request, Response } from "express";
import { TaskFacade } from "../facades/taskFacade";

const taskFacade = new TaskFacade();

export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description } = req.body;
    if (!title) {
      res.status(400).json({ message: "Title is required" });
      return;
    }
    const task = await taskFacade.createTask(title, description);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await taskFacade.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving tasks" });
  }
};

export const getTaskById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const task = await taskFacade.getTaskById(req.params.id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving the task" });
  }
};

export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description } = req.body;
    const task = await taskFacade.updateTask(req.params.id, title, description);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error updating the task" });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const success = await taskFacade.deleteTask(req.params.id);
    if (!success) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting the task" });
  }
};
