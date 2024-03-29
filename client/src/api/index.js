import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5000'});
console.log("env", process.env)

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  
  return req;
});

export const fetchTask = (id) => API.get(`/tasks/${id}`);
export const fetchTasks = (page, projectId) => API.get(`/tasks?page=${page}&id=${projectId}`);
export const fetchTasksByCreator = (name) => API.get(`/tasks/creator?name=${name}`);
export const fetchTasksBySearch = (searchQuery) => API.get(`/tasks/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const fetchTasksNewerThanDate = (startDate, projectId) => API.get(`/tasks/bystartdate?date=${startDate}&id=${projectId}`);
export const fetchTasksForKanban = (projectId) => API.get(`/tasks/kanban?id=${projectId}`);
export const createTask = (newTask) => API.post('/tasks', newTask);
export const updateTask = (id, updatedTask) => API.patch(`/tasks/${id}`, updatedTask);
export const updateKanbanTasks = (projectId, updatedTasks) => API.patch(`/tasks/updatekanban/${projectId}`, updatedTasks);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const joinProject = (formData) => API.post('/user/joinProject', formData);
export const createProject = (formData) => API.post('/user/createProject', formData);
export const getProjectsList = (formData) => API.post('/user/getProjectList', formData);

// export const fetchProjectName = (id) => API.get(`/tasks/${id}`);
