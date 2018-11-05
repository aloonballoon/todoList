import React, { Component } from 'react';

class ToDoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <li onClick={() => this.delete(item.key)}
              key={item.key}>{item.text}</li>;
  }

  delete(key) {
    this.props.delete(key);
  }


  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(item => this.createTasks(item));

    return(
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
}

export default ToDoItems;
