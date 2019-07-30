import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

import ReactDOM from "react-dom";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";


class App extends Component {
render() {
return (
<HashRouter>
	<div className="App">
  	<div className="navbar">
    	<div>
          	<h1>IA APLICADA AL MERCADO DE AUTOMOVILES DE GUATEMALA</h1>
          	<ul className="header">
            	<li><NavLink exact to="/">Home</NavLink></li>
            	<li><NavLink to="/stuff">Data</NavLink></li>
            	<li><NavLink to="/contact">Input</NavLink></li>
          	</ul>
          	<div className="content">
            	<Route exact path="/" component={Home}/>
            	<Route path="/stuff" component={Stuff}/>
            	<Route path="/contact" component={Contact}/>
          	</div>
    	</div>
	</div>
	</div>
</HashRouter>
);
}
}
export default App;