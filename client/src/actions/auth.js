import { AUTH, LOGOUT, CREATE_PROJECT, JOIN_PROJECT } from '../constants/actionTypes';
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

export const createproject = formData => dispatch => new Promise( async (resolve, reject) => {
  try {
    const { data } = await api.createProject({userEmail: formData.email, projectName: formData.projectName});
    dispatch({ type: CREATE_PROJECT, data });
    resolve()
  } catch (error) {
    reject(error)
  }
}
)

export const joinproject = formData => dispatch => new Promise( async (resolve, reject) => {
  try {
    const { data } = await api.joinProject({projectId: formData.id, userEmail: formData.email, userRole: formData.role});
    dispatch({ type: JOIN_PROJECT, data });
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
