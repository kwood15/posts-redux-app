import 'cross-fetch/polyfill';

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_REQUEST_SUCCESS,
  FETCH_POSTS_REQUEST_FAILED,
  NEW_POST_REQUEST_FAILED,
  NEW_POST_REQUEST_SUCCESS,
  NEW_POST_REQUEST
} from '../constants/types';

const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST
});

const fetchPostsSuccess = payload => ({
  type: FETCH_POSTS_REQUEST_SUCCESS,
  payload
});

const fetchPostsFailed = (error) => ({
  type: FETCH_POSTS_REQUEST_FAILED,
  error
});

const createPostRequest = () => ({
  type: NEW_POST_REQUEST
});

const createPostRequestSuccess = payload => ({
  type: NEW_POST_REQUEST_SUCCESS,
  payload
});

const createPostRequestFailed = (error) => ({
  type: NEW_POST_REQUEST_FAILED,
  error
});

const fetchPosts = () => dispatch => {
  dispatch(fetchPostsRequest());
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch(fetchPostsSuccess(posts)))
    .catch(error => dispatch(fetchPostsFailed(error)));
};

const createPost = post => dispatch => {
  dispatch(createPostRequest());
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then(post => dispatch(createPostRequestSuccess(post)))
  .catch(error => dispatch(createPostRequestFailed(error)));
}

export {
  fetchPosts,
  createPost
}
