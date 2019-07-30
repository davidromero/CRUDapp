
import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {
render() {
return (
<div className="post">
  <h2 className="post_title">{this.props.post.title}</h2>
  <p className="post_message">{this.props.post.message}</p>
  <p className="post_message2">{this.props.post.message2}</p>
  <p className="post_message3">{this.props.post.message3}</p>
  <p className="post_message4">{this.props.post.message4}</p>
  <div className="control-buttons">
    <button className="edit"
    onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
    }
    >Edit</button>
    <button className="delete"
    onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
    >Delete</button>
  </div>
</div>
);
}
}
export default connect()(Post);