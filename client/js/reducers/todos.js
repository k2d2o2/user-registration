

const todos = (state = [], action) => {
    console.log(state)
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      case 'LOAD_TODO':
          console.log(action.todos)
          return [
              ...state,
              ...action.todos
          ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
        console.log("default state")
      return state
  }
}

export default todos
