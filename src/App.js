import React from 'react';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

const App = () => (
  <section className="posts">
    <PostForm />
    <Posts />
  </section>
);

export default App;
