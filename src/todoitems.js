import React, { Component } from 'react';

class ToDoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <li key={item.key}>{item.text}</li>;
  }


  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(task => this.createTasks(task));

    return(
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
}

export default ToDoItems;
