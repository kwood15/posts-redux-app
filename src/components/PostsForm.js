import React, { Component } from 'react';

class PostsForm extends Component {
  state = {
    title: '',
    body: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="body">Body: </label>
            <textarea
              id="formBody"
              name="body"
              value={body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostsForm;
