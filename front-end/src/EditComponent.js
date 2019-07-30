import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newMessage = this.getMessage.value;
  const newMessage2 = this.getMessage2.value;
  const newMessage3 = this.getMessage3.value;
  const newMessage4 = this.getMessage4.value;
  const data = {
    newTitle,
    newMessage,
    newMessage2, 
    newMessage3,
    newMessage4
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data,})
}
render() {
return (
<div key={this.props.post.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage = input}
    defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage2 = input}
    defaultValue={this.props.post.message2} cols="28" placeholder="Enter Post" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage3 = input}
    defaultValue={this.props.post.message3} cols="28" placeholder="Enter Post" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage4 = input}
    defaultValue={this.props.post.message4} cols="28" placeholder="Enter Post" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);