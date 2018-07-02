import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let LoadTodo = ({ dispatch }) => {

    return (
        <div onLoad={e => {
            e.preventDefault()
            let todos = []
            $.ajax({
                method: 'GET',
                url: 'api/todo',
            }).done(function(objData) {
                console.log("get todo success");
                console.log(objData);
                if (objData) {
                    todos = objData.map( todoData => ({
                        id: todoData.id,
                        text: todoData.todotext,
                        completed: todoData.completed == true
                    }))
                    console.log(todos)
                }
            }).fail(function(data) {
                console.log("get todo failed");
            });

            todos.map(todo => dispatch(addTodo(todo.text)))

        }}>
        </div>
    )
}
LoadTodo = connect()(LoadTodo)

export default LoadTodo
