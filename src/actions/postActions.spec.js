import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './postActions';
import * as types from '../constants/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async action creators', () => {
  describe('A `fetchPosts()` initialised request', () => {
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

  describe('A `fetchPosts()` successful request', () => {
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

  describe('A `fetchPosts()` failed request', () => {
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

  describe('A `createPost()` initialised request', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    const store = mockStore({
      post: {}
    });

    it('creates a NEW_POST_REQUEST action', () => {
      const expectedActions = {
        type: types.NEW_POST_REQUEST
      };

      return store.dispatch(actions.createPost()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(expectedActions);
      });
    });
  });

  describe('A `createPost()` successful request', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    const store = mockStore({
      post: {}
    });

    it('creates a NEW_POST_REQUEST_SUCCESS action', () => {
      const post = {
        title: 'Test title',
        body: 'Test content'
      };

      fetchMock.post('https://jsonplaceholder.typicode.com/posts', {
        body: post
      });

      const expectedActions = [
        { type: types.NEW_POST_REQUEST },
        {
          type: types.NEW_POST_REQUEST_SUCCESS,
          payload: post
        }
      ];

      return store.dispatch(actions.createPost()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('A `createPost()` failed request', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    const store = mockStore({
      post: {}
    });

    it('creates a NEW_POST_REQUEST_FAILED action', () => {
      fetchMock.post('https://jsonplaceholder.typicode.com/posts', {
        throws: {
          error: 'Request failed'
        }
      });

      const expectedActions = [
        { type: types.NEW_POST_REQUEST },
        { type: types.NEW_POST_REQUEST_FAILED, error: { error: 'Request failed' } }
      ];

      return store.dispatch(actions.createPost()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
