import { START_LOADING, END_LOADING, FETCH_PAGE, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_SINGLE, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_PAGE:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state, posts: action.payload.data };
    case FETCH_SINGLE:
      return { ...state, post: action.payload.post };
    case LIKE:
      return { ...state, posts: state.posts.map((post) => (post.id === action.payload.id ? action.payload : post)) };
    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id == +action.payload.id) {
            return action.payload;
          }
          return post;
        }),
      };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      return { ...state, posts: state.posts.map((post) => (post.id === action.payload.id ? action.payload : post)) };
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post.id !== action.payload) };
    default:
      return state;
  }
};

