import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducer';
import axios from 'axios'

var serializedState

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    //axios.delete
    //axios.put
    //axios.post
    
    //axios.get('http://localhost:4000/api/v1/carros/')
    //  .then(function (response) {
    //  console.log(response.data.payload);
    //  serializedState = response.data.payload;
    //})
    serializedState = localStorage.getItem('state')
    //console.log(JSON.parse(serializedState));
    if (serializedState === null) return undefined
    //return JSON.parse(serializedState)
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const store = createStore(postReducer,persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root'));