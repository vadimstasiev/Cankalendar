import { AUTH, LOGOUT, JOIN_PROJECT } from '../constants/actionTypes';
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

export const joinproject = formData => dispatch => new Promise( async (resolve, reject) => {
  try {
    const { data } = await api.joinProject({projectId: formData.id, userEmail: formData.email});
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
