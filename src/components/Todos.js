import React from 'react';

import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const todos = [{
	task: 'Clean car',
	complete: true
},{
	task: 'Phone Dave',
	complete: false
}];

class Todos extends React.Component {

	constructor(){
		super();
		this.state = {todos};
	}

	createTodo(todo){
		const todos = this.state.todos.concat(todo);
		this.setState({todos});
	}
	
	completeTodo(todo){
		todo.complete = true;
		this.forceUpdate();
	}

	deleteTodo(todo){
		const todos = this.state.todos.filter(t => t !== todo);
		this.setState({todos});
	}

  render() {
    return (
			<div>
				<CreateTodo todos={this.state.todos} createTodo={this.createTodo.bind(this)}/>
				<TodoList todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} completeTodo={this.completeTodo.bind(this)}/>
			</div>
    );
  }

}

export default Todos;
