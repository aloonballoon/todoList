import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './todolist';

document.addEventListener("DOMContentLoaded", () => {
  const destination = document.querySelector("#container");

  ReactDOM.render(
    <React.Fragment>
      <ToDoList/>
    </React.Fragment>,
    destination
  );
});
