import express from 'express';

import { getTasks, getTasksBySearch, getTasksByCreator, getTask, createTask, updateTask, deleteTask } from '../controllers/tasks.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/creator', getTasksByCreator);
router.get('/search', getTasksBySearch);
router.get('/', getTasks);
router.get('/:id', getTask);

router.post('/', auth,  createTask);
router.patch('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

export default router;