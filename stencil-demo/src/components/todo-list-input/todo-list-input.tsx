import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'todo-list-input',
  styleUrl: 'todo-list-input.css',
  shadow: true,
})
export class TodoListInput {

  textInput!: HTMLInputElement;

  @State () todoList: string[] = [];

  handleSubmit = (event: Event) => {
    event.preventDefault();
    this.todoList = [...this.todoList, this.textInput.value];
    console.log(this.todoList);
    this.textInput.value = '';
  }

  render() {
    return (
      <div>
          <form  id="task-container" onSubmit={this.handleSubmit}>
            <label>
              <input type="text" id="task-input" autocomplete='off' placeholder="Enter Task" ref={(el) => this.textInput = el as HTMLInputElement} />
            </label>
            <button type="submit" > Add </button>
          </form>
          <todo-list-output todoList={this.todoList }></todo-list-output>
      </div>
    );
  }

}
