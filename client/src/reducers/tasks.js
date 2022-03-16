import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_SINGLE, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, tasks: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        tasks: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state, tasks: action.payload.data };
    case FETCH_SINGLE:
      return { ...state, task: action.payload.task, isLoading: false };
    case CREATE:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case UPDATE:
      return { ...state, tasks: state.tasks.map((task) => (task._id === action.payload._id ? action.payload : task)) };
    case DELETE:
      return { ...state, tasks: state.tasks.filter((task) => task._id !== action.payload) };
    default:
      return state;
  }
};

