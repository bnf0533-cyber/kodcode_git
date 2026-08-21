import {
  getTasksService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} from "../services/tasks.service.js";

export async function getTasks(req, res, next) {
  try {
    const tasks = await getTasksService();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  try {
    const task = await createTaskService(req.body.title);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
}

export async function updateTask(req, res, next) {
  try {
    const task = await updateTaskService(req.params.id, req.body.completed);
    res.json(task);
  } catch (error) {
    next(error);
  }
}

export async function deleteTask(req, res, next) {
  try {
    await deleteTaskService(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
