import { AUTH } from '../constants/actionTypes';
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
