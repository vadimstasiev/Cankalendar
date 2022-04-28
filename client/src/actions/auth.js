import { AUTH, LOGOUT, UPDATE_PROJECTS } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = formData => dispatch => new Promise( async (resolve, reject) => {
    try {
      const { data } = await api.signIn(formData);
      dispatch({ type: AUTH, data });
      resolve()
    } catch (error) {
      reject(error)
    }
  }
)

export const signup = formData => dispatch => new Promise( async (resolve, reject) => {
    try {
      const { data } = await api.signUp(formData)
      dispatch({ type: AUTH, data })
      resolve()
    } catch (error) {
      reject(error)
    }
  }
)

export const signout = () => dispatch => new Promise( async (resolve, reject) => {
  dispatch({ type: LOGOUT })
  await new Promise(resolve => setTimeout(resolve, 500))
  resolve()
}
)

export const createproject = (formData, navigate) => dispatch => new Promise( async (resolve, reject) => {
  try {
    const { data } = await api.createProject(formData);
    await dispatch({ type: UPDATE_PROJECTS, data });
    navigate(`/`)
    resolve()
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
    reject(error)
  }
}
)

export const joinproject = (formData, navigate) => dispatch => new Promise( async (resolve, reject) => {
  try {
    const { data } = await api.joinProject(formData);
    dispatch({ type: UPDATE_PROJECTS, data });
    navigate(`/Kanban/${formData.projectId}`)
    resolve()
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
    reject(error)
  }
}
)

export const getprojectslist = (formData, navigate) => dispatch => new Promise( async (resolve, reject) => {
  try {
    const { data } = await api.getProjectsList({userEmail: formData.email});
    dispatch({ type: UPDATE_PROJECTS, data });
    resolve()
  } catch (error) {
    console.log(error);
    if(error.response.status===401){
      dispatch(signout()).then(()=>navigate("/SignIn"))
    }
    reject(error)
  }
}
)


