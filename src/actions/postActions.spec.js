import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './postActions';
import * as types from '../constants/types';
const fetchMock = require('fetch-mock').sandbox();
const nodeFetch = require('node-fetch');
nodeFetch.default = fetchMock;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async action creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates a FETCH_POSTS action when getting posts', () => {
    fetchMock.getOnce('/https://jsonplaceholder.typicode.com/posts', {
      payload: {
        posts: ['test']
      }
    });

    const expectedActions = [{
      type: types.FETCH_POSTS,
      payload: {
        posts: ['test']
      }
    }];

    const store = mockStore({
      posts: []
    });

    return store.dispatch(actions.fetchPosts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})
