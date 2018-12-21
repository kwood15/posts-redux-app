import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_REQUEST_SUCCESS,
  FETCH_POSTS_REQUEST_FAILED,
  NEW_POST_REQUEST,
  NEW_POST_REQUEST_SUCCESS,
  NEW_POST_REQUEST_FAILED
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
    case NEW_POST_REQUEST:
      return {
        ...state,
      };
    case NEW_POST_REQUEST_SUCCESS:
      return {
        ...state,
        item: action.payload
      };
    case NEW_POST_REQUEST_FAILED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
