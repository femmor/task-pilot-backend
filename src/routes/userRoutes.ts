import { Request, Response } from 'express';

// Get all users
const getAllUsers = (req: Request, res: Response) => {
    res.json({ message: 'Get all users' });
};

// Get user by ID
const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: `Get user with ID: ${id}` })
};

// Create a new user
const createUser = (req: Request, res: Response) => {
    res.json({ message: 'Create a new user' });
};

// Update a user
const updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: `Update user with ID: ${id}` });
};

// Delete a user
const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: `Delete user with ID: ${id}` });
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };