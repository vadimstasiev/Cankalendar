import { combineReducers } from 'redux';

import posts from './posts';
import tasks from './tasks';
import auth from './auth';

export const reducers = combineReducers({ posts, tasks, auth });
