import { Component, h } from '@stencil/core';

@Component({
  tag: 'todo-list-container',
  styleUrl: 'todo-list-container.css',
  // shadow: true,
})
export class TodoListContainer {

  render() {
    return (
      <div class="container">
        <h1>To-Do List</h1>

        <todo-list-input></todo-list-input>
        {/* <item-list></item-list> */}

      </div>
    );
  }

}
