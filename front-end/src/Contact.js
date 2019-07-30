import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

import ReactDOM from "react-dom";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div>
        <PostForm />
        <h2>PREGUNTAS?</h2>
        <p>Info de la empresa <a href="https://github.com/davidromero">github</a>.
        </p>
      </div>
    );
  }
}

export default Contact;
