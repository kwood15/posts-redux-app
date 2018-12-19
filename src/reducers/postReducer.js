import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_REQUEST_SUCCESS,
  FETCH_POSTS_REQUEST_FAILED,
  NEW_POST
} from '../constants/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
      };
    case FETCH_POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_POSTS_REQUEST_FAILED:
      return {
        ...state,
        error: action.error
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
