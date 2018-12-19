import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './postActions';
import * as types from '../constants/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async action creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  const store = mockStore({
    posts: []
  });

  it('creates FETCH_POSTS_REQUEST_SUCCESS when fetching posts has been done', () => {
    fetchMock.getOnce('https://jsonplaceholder.typicode.com/posts', ['test']);

    const expectedActions = [
      { type: types.FETCH_POSTS_REQUEST },
      { type: types.FETCH_POSTS_REQUEST_SUCCESS, payload: ['test'] }
    ];

    return store.dispatch(actions.fetchPosts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
