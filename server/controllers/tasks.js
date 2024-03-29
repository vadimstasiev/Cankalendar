import express from 'express';
import mongoose from 'mongoose';

import TaskMessage from '../models/task.js';
import Project from '../models/project.js';

const router = express.Router();

export const getTasks = async (req, res) => {
    const { page, id } = req.query;
    const filter = {projectId: id}
    
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await TaskMessage.countDocuments(filter);
        const tasks = await TaskMessage.find(filter).sort({ createdAt: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: tasks, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getTasksBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const tasks = await TaskMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

        res.json({ data: tasks });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getTasksByStartDate = async (req, res) => {
    const { date, id } = req.query;
    

    var cutoff = new Date(date)
    const filter = {projectId: id, dueDate: {$gte: cutoff}}
    
    try {
    
        const tasks = await TaskMessage.find(filter);

        res.json({ data: tasks});
    } catch (error) {    
        res.status(404).json({ message: error.message })
    }
}

export const getTasksForKanban = async (req, res) => {
    const { id } = req.query;
    

    const filter = {projectId: id, showOnKanban: true}
    
    try {
    
        const tasks = await TaskMessage.find(filter);

        res.json({ data: tasks});
    } catch (error) {    
        res.status(404).json({ message: error.message })
    }
}

export const getTasksByCreator = async (req, res) => {
    const { name } = req.query;

    try {
        const tasks = await TaskMessage.find({ name });

        res.json({ data: tasks });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getTasksByProjectId = async (req, res) => {
    const { projectId } = req.query;

    try {
        const tasks = await TaskMessage.find({ projectId });

        res.json({ data: tasks });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getTask = async (req, res) => { 
    const { id } = req.params;

    try {
        const task = await TaskMessage.findById(id);
        
        res.status(200).json(task);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTask = async (req, res) => {
    const task = req.body;

    const newTaskMessage = new TaskMessage({ ...task, order: -1, column:1, createdAt: new Date().toISOString(), dueDate: new Date().toISOString() })

    try {
        await newTaskMessage.save();

        res.status(201).json(newTaskMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, dueDate, showOnKanban } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No task with id: ${id}`);

    const updatedTask = { creator, title, message, dueDate, showOnKanban, id: id };

    await TaskMessage.findByIdAndUpdate(id, updatedTask, { new: true });

    res.json(updatedTask);
}

export const updateTasks = async (req, res) => {
    const { id } = req.params;
    const tasks = req.body;
    
    
    tasks.map(async task => {
        if (!mongoose.Types.ObjectId.isValid(task.taskId)) return res.status(404).send(`No task with task.: ${task.taskId}`);
        await TaskMessage.findByIdAndUpdate(task.taskId, {order: task.order, column: task.column}, { new: true });

    })
    
    const filter = {projectId: id, showOnKanban: true}
    
    try {
    
        const tasks = await TaskMessage.find(filter);

        res.json({ data: tasks});
    } catch (error) {    
        res.status(404).json({ message: error.message })
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No task with id: ${id}`);

    await TaskMessage.findByIdAndRemove(id);

    res.json({ message: "Task deleted successfully." });
}



export default router;