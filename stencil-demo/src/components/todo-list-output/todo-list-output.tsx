import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'todo-list-output',
  styleUrl: 'todo-list-output.css',
  shadow: true,
})
export class TodoListOutput {
 

  @Prop() todoList: Array<string>
  todo: any;

  remove () {
    return this.todo(i =>{i.remove()
    });
  }


    
    render(){
        return(
        <div>
            <ul style={{listStyleType: "none"}}>
                {this.todoList.map((todo) => <li>{todo}
                <button type="submit" onClick={this.remove}> X </button>
                </li>)}
               
            </ul>
        </div>                
        )
    }

}
