import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        const inputAddTodo = addTodo(input.value)
        dispatch(inputAddTodo)
        input.value = ''
        var dataObj = ({
            id: inputAddTodo.id,
            todotext: inputAddTodo.text
        });
        console.log("dataObj: " + dataObj)
        $.ajax({
            method: 'POST',
            url: 'api/addtodo',
            contentType: 'application/json',
            data: JSON.stringify(dataObj),
            dataType: 'json'
        }).done(function(data) {
            console.log("addtodo success");
        }).fail(function() {
            alert("addtodo failed !");
        })
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
