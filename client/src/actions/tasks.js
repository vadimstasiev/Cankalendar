import { START_LOADING, END_LOADING, FETCH_PAGE, FETCH_PAGE_CUMULATIVE, FETCH_SINGLE, FETCH_BY_SEARCH, FETCH_NEW_BY_DATE, CREATE, UPDATE, DELETE, FETCH_BY_CREATOR, LOGOUT, SET_SELECTED_PROJECT, CLEAR } from '../constants/actionTypes';
import * as api from '../api/index.js';
import {signout} from './auth'


export const setSelectedProject = (projectId, projectName, navigate=()=>{}) => async (dispatch) => {
  try {
    dispatch({ type: SET_SELECTED_PROJECT, payload: {id: projectId, name: projectName} });
    // dispatch refresh projects list

    // get current projects list, (listed in user)

    // select project

    // console.log("here", projectId)
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
  }
};

export const getTask = (id, navigate=()=>{}) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchTask(id);
    dispatch({ type: FETCH_SINGLE, payload: { task: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
  }
};

export const getTasks = (page, projectId, navigate=()=>{}) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchTasks(page, projectId);

    dispatch({ type: FETCH_PAGE, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
  }
};

export const getTasksCumulative = (page, projectId, navigate=()=>{}) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchTasks(page, projectId);

    dispatch({ type: FETCH_PAGE_CUMULATIVE, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
  }
};

export const getTasksByCreator = (name, navigate=()=>{}) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchTasksByCreator(name);

    dispatch({ type: FETCH_BY_CREATOR, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
  }
};

export const getTasksBySearch = (searchQuery, navigate=()=>{}) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchTasksBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
  }
};

export const getTasksNewerThanDate = (startDate, projectId, navigate=()=>{}) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchTasksNewerThanDate(startDate, projectId);

    dispatch({ type: FETCH_NEW_BY_DATE, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
  }
};

export const clearTasks = (navigate=()=>{}) => async (dispatch) => {
  try {
    dispatch({ type: CLEAR });
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
  }
};

export const createTask = (task, navigate=()=>{}) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createTask(task);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
  }
};

export const updateTask = (id, task, navigate=()=>{}) => async (dispatch) => {
  try {
    const { data } = await api.updateTask(id, task);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
  }
};

export const deleteTask = (id, navigate=()=>{}) => async (dispatch) => {
  try {
    await await api.deleteTask(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
  }
};
