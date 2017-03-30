import React from 'react';

class TodoListItem extends React.Component{

    delete(todo){
        this.props.deleteTodo(todo);
    }

    complete(todo){
        this.props.completeTodo(todo);
    }

    render(){
        const todo = this.props.todo;

        return (
            <tr class={todo.complete ? 'success': ''}>
                <td>{todo.task}</td>
                <td>
                    {this.renderButtons(todo)}
                </td>
            </tr>
        );
    }

    renderButtons(todo){
        return (
            <div class="btn-group">
                {this.renderCompleteButton(todo)}
                {this.renderDeleteButton(todo)}
            </div>
        )
    }

    renderCompleteButton(todo){
        if(todo.complete){
            return null;
        }

        return (
            <button class="btn btn-default" onClick={this.complete.bind(this, todo)}>Complete</button>
        )
    }

    renderDeleteButton(todo){
        return(
            <button class="btn btn-warning" onClick={this.delete.bind(this, todo)}>Delete</button>
        );
    }

}

export default TodoListItem;