import React, { Component } from 'react';
import ToDoItems from './todoitems';
import './todolist.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();

    const itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });
    }

    this.setState({
      items: itemArray
    });

    this._inputElement.value = "";
  }

  render() {

    return(
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
          <ToDoItems entries={this.state.items} />
        </div>
      </div>
    );
  }
}

export default ToDoList;
