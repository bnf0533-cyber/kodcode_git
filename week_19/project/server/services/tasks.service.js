import { ObjectId } from "mongodb";
import {
  findTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../dal/tasks.dal.js";

function createError(message, status) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function isValidId(id) {
  return ObjectId.isValid(id);
}

export async function getTasksService() {
  return findTasks();
}

export async function createTaskService(title) {
  if (!title || !title.trim()) {
    throw createError("Title is required", 400);
  }

  return createTask({
    title: title.trim(),
    completed: false,
    createdAt: new Date(),
  });
}

export async function updateTaskService(id, completed) {
  if (!isValidId(id)) {
    throw createError("Invalid task id", 400);
  }

  if (typeof completed !== "boolean") {
    throw createError("completed must be true or false", 400);
  }

  const task = await updateTask(id, { completed });

  if (!task) {
    throw createError("Task not found", 404);
  }

  return task;
}

export async function deleteTaskService(id) {
  if (!isValidId(id)) {
    throw createError("Invalid task id", 400);
  }

  const deletedCount = await deleteTask(id);

  if (!deletedCount) {
    throw createError("Task not found", 404);
  }
}
