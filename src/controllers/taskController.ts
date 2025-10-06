import { Request, Response } from 'express';

// Get all tasks
const getAllTasks = (req: Request, res: Response) => {
    res.json({ message: 'Get all tasks' });
};

// Get task by ID
const getTaskById = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: `Get task with ID: ${id}` });
};

// Create a new task
const createTask = (req: Request, res: Response) => {
    const { title, description } = req.body;
    res.json({ message: 'Create a new task', task: { title, description } });
};

// Update a task
const updateTask = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: `Update task with ID: ${id}` });
};

// Delete a task
const deleteTask = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: `Delete task with ID: ${id}` });
};

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask };