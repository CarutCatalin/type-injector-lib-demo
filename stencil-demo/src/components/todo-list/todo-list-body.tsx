import { Component, h, State } from '@stencil/core';

Component({
    tag: 'todo-list-container',
    styleUrl:'todo-list-container',
    shadow: true,
})
export class TodoListContainer{


    @State() todos = [];


    render() {
        return(
            <div>
                <input type='text' placeholder='To do task'></input>
            </div>
        );
    }
}


