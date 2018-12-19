import fetch from 'cross-fetch';

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_REQUEST_SUCCESS,
  FETCH_POSTS_REQUEST_FAILED,
  NEW_POST
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

const fetchPosts = () => dispatch => {
  dispatch(fetchPostsRequest());
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch(fetchPostsSuccess(posts)))
    .catch(error => dispatch(fetchPostsFailed(error)));
};

const createPost = post => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then(post => dispatch({
    type: NEW_POST,
    payload: post
  }));
}

export {
  fetchPosts,
  createPost
}
