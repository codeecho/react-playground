import React from 'react'

class CreateTodo extends React.Component{

    constructor(){
        super();
        this.state = {
            validationMessage: ''
        }
    }

    createTodo(event){
        event.preventDefault();

        const task = this.refs.task.value;

        const validationResult = this.validateTask(task);
        this.setState({validationMessage: validationResult.message});
        if(!validationResult.valid){
            return;
        }
        
        this.props.createTodo({task, complete: false});
        this.refs.task.value = '';
    }

    validateTask(task){
        if(!task){
            return {valid: false, message: 'Task cannot be empty'};
        }

        if(this.props.todos.find(todo => todo.task === task)){
            return {valid: false, message: 'Task already exists'};
        }

        return {valid: true};
    }

    render(){
        const errorStyle = {
            color:'red'
        }
        return (
            <form class="form-group" onSubmit={this.createTodo.bind(this)}>
                <div class="input-group">
        	        <input class="form-control" placeholder="What do you need to do?" ref="task"></input>
                    <span class="input-group-btn"><button class="btn btn-default">Create</button></span>
                </div>
                <div style={errorStyle}>{this.state.validationMessage}</div>
            </form>
        )
    }

}

export default CreateTodo;