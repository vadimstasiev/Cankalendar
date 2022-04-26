import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  const currentProfile = JSON.parse(localStorage.getItem('profile'))
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    // case actionType.CREATE_PROJECT:
    //   localStorage.setItem('profile', JSON.stringify({ ...currentProfile, ...action?.data }));

    //   return { ...state, authData: { ...currentProfile, ...action?.data }, loading: false, errors: null };
    // case actionType.JOIN_PROJECT:
    //   localStorage.setItem('profile', JSON.stringify({ ...currentProfile, ...action?.data }));

    //   return { ...state, authData: { ...currentProfile, ...action?.data }, loading: false, errors: null };
    case actionType.UPDATE_PROJECTS:
      localStorage.setItem('profile', JSON.stringify({ ...currentProfile, ...action?.data }));
      console.log(currentProfile, action.data)
      return { ...state, authData: { ...currentProfile, ...action?.data }, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
