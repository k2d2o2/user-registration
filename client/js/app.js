import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { loadTodo } from './actions'
import thunkMiddleware from 'redux-thunk'

$(document).ready(function() {
    console.log('page ready');

    const todoListStore = createStore(reducer,
        applyMiddleware(
            thunkMiddleware
        )
        );


    todoListStore.dispatch(loadTodo())
    let x = document.getElementById('todo-root');
    render(
        <Provider store={todoListStore}>
            <App />
        </Provider>,
        x
    )
});
