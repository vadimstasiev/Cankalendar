import express from 'express';

import { getTasks, getTasksBySearch, getTasksByCreator, getTasksByProjectId, getTasksByStartDate, getTask, createTask, updateTask, deleteTask, getTasksForKanban } from '../controllers/tasks.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/creator', auth, getTasksByCreator);
router.get('/search', auth, getTasksBySearch);
router.get('/byid', auth, getTasksByProjectId);
router.get('/bystartdate', auth, getTasksByStartDate);
router.get('/kanban', auth, getTasksForKanban);
router.get('/', auth, getTasks);
router.get('/:id', auth, getTask);

router.post('/', auth,  createTask);
router.patch('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

export default router;