import { START_LOADING, END_LOADING, FETCH_PAGE, FETCH_PAGE_CUMULATIVE, FETCH_BY_SEARCH, FETCH_NEW_BY_DATE, FETCH_BY_CREATOR, FETCH_SINGLE, CREATE, UPDATE, DELETE, CLEAR, SET_SELECTED_PROJECT } from '../constants/actionTypes';

export default (state = { isLoading: true, tasks: [], selectedProject: {} }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_PAGE:
      return {
        ...state,
        tasks: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_PAGE_CUMULATIVE:
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload.data],
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state, tasks: action.payload.data };
    case FETCH_NEW_BY_DATE:
      return { ...state, tasks: action.payload.data };
    case FETCH_SINGLE:
      return { ...state, task: action.payload.task };
    case CREATE:
      return { ...state, tasks: [action.payload, ...state.tasks] };
    case UPDATE:
      return { ...state, tasks: state.tasks.map((task) => (task._id === action.payload._id ? action.payload : task)) };
    case DELETE:
      return { ...state, tasks: state.tasks.filter((task) => task._id !== action.payload) };
    case CLEAR:
      return { ...state, tasks: [] };
    case SET_SELECTED_PROJECT:
      localStorage.setItem('selectedProject', JSON.stringify({ ...action?.payload }));
      return { ...state, selectedProject: action.payload }
    default:
      return state;
  }
};

