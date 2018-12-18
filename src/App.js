import React, { Component } from 'react';
import Posts from './components/Posts';
import PostsForm from './components/PostsForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsForm />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
