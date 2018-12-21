import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './postActions';
import * as types from '../constants/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async action creators', () => {
  describe('A `fetchPosts()` request initialises', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    const store = mockStore({
      posts: []
    });

    it('creates a FETCH_POSTS_REQUEST action', () => {
      const expectedActions = {
        type: types.FETCH_POSTS_REQUEST
      };

      return store.dispatch(actions.fetchPosts()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(expectedActions);
      });
    });
  });

  describe('A successful `fetchPosts()` request', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    const store = mockStore({
      posts: []
    });

    it('creates a FETCH_POSTS_REQUEST_SUCCESS action', () => {
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

  describe('A failed `fetchPosts()` request', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    const store = mockStore({
      posts: []
    });

    it('creates a FETCH_POSTS_REQUEST_FAILED action', () => {
      fetchMock.getOnce('https://jsonplaceholder.typicode.com/posts', {
        throws: {
          error: 'Request failed'
        }
      });

      const expectedActions = [
        { type: types.FETCH_POSTS_REQUEST },
        { type: types.FETCH_POSTS_REQUEST_FAILED, error: { error: 'Request failed' } }
      ];

      return store.dispatch(actions.fetchPosts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
