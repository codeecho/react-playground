import React from 'react';

import TodoListItem from './TodoListItem';

class TodoList extends React.Component{

    render(){
        return (
            <table class="table table-striped">
				<tbody>
				    {this.props.todos.map(todo => <TodoListItem key={todo.task} todo={todo} deleteTodo={this.props.deleteTodo} completeTodo={this.props.completeTodo}/>)}
			    </tbody>
		    </table>
        );
    }

}

export default TodoList;