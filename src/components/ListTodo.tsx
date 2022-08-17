import React from 'react'
import '../styles/ListTodo.scss'
import {TodoListProps} from '../interface/interface';


export function ListTodo({todos, searchTodos, listItemText}: TodoListProps) {

    return (
        <div className='listTodoWrapper'>
            <h1>Список заметок</h1>
            <div className='listTodoWrapper__todoSearch'>
                <input onChange={(e) => searchTodos(e.target.value)} type={'text'} value={listItemText}/>
            </div>
            <div className='listTodoWrapper__todoWrapper'>
                <ol>
                    {todos.map(el =>
                        <li key={el.id}>
                            <span className={el.status === 'in progress' ? 'listTodoWrapper__todo todo_color-blue' :
                                el.status === 'complete' ? 'listTodoWrapper__todo todo_color-green' : 'listTodoWrapper__todo'
                            }>
                            {el.name}
                            </span>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}