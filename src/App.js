import React from 'react';  // { Fragment }
// import { Route, NavLink } from 'react-router-dom';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

const App = () => (
  <div>
    <PostForm />
    <Posts />
  </div>
);

export default App;


// <Fragment>
//   <header>
//     <NavLink to="/posts">Posts</NavLink>
//     <NavLink to="/create-a-post">Create a Post</NavLink>
//   </header>
//   <Route path="/posts/" component={Posts} />
//   <Route path="/create-a-post" component={PostForm} />
// </Fragment>
