import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import App from './App';

it('passes the {store} prop via a provider and renders the app', () => {
  const div = document.createElement('div');
  div.id = 'root';
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>, div);
});
