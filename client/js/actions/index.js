import fetch from 'cross-fetch'

export var nextTodoId = 0

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

//thunk
export const loadTodo = () => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/list`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(response => response.json())
            .then(objData => {
                console.log("get todo success");
                console.log(objData);
                if (objData) {
                    let todos = objData.map(todoData => ({
                        id: todoData.id,
                        completed: todoData.completed == true,
                        text: todoData.todotext,
                    }))
                    console.log(todos)
                    nextTodoId = todos.length
                    console.log(nextTodoId)
                    dispatch(listTodoDone(todos))
                }
            })
    }
}

export const listTodoDone = (todos) =>
    ({
        type: 'LOAD_TODO',
        todos
    })

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})


export const toggleTodo = (id) => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/item`,
            {
                method: "PUT",
                body: JSON.stringify({id : id}),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(response => response.json())
            .then(json => dispatch(toggleTodoDone(id)))
    }

}
export const toggleTodoDone = (id) =>
    ({
        type: 'TOGGLE_TODO',
        id
    })
