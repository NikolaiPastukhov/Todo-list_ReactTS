import React from 'react'
import '../styles/ListTodo.scss'
import {TodoListProps} from '../interface/interface';


export function TodoList({todos}: TodoListProps) {
    console.log(todos)
    return (
        <div className='listTodoWrapper'>
            <h1>Список заметок</h1>
            <div className='listTodoWrapper__todoWrapper'>
                <ol>
                    {todos.map(el =>
                        <li key={el.id}><span className={ el.status === 'in progress' ? 'listTodoWrapper__todo todo_color-blue' :
                            el.status === 'complete' ? 'listTodoWrapper__todo todo_color-green' : 'listTodoWrapper__todo'
                        }>{el.name}</span></li>
                    )}
                </ol>
            </div>
        </div>
    )
}