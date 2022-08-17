import React, {useState} from 'react'
import {StatusTodo, TodoProps} from '../interface/interface';
import '../styles/TodoItem.css'
import editIcon from '../icons/editIcon.svg'
import deleteIcon from '../icons/deleteIcon.svg'

export function TodoItem({name, id, isReadOnly, editTodo, status, deleteTodo, editStatusTodo}: TodoProps) {
    const [editName, setEditName] = useState<string>(name);
    const inputText = (e: string) => {
        setEditName(prevState => e)
    }
    //  При нажатии на input[text] заметка перейдет в состояние "в процессе"

    // При нажатии на input[checkbox] заметка перейдет в состояние "выполнена"
    return (
        <div className='addedTodoWrapper__todoElement'>

            <input disabled={status === 'complete' || status === 'in progress'}
                   onChange={(e) => inputText(e.target.value)}
                   onClick={() => {
                       if (!isReadOnly) return
                       editStatusTodo(id, StatusTodo.inProgress)
                   }}
                   className={isReadOnly ? 'addedTodoWrapper__textInput' : 'addedTodoWrapper__textInput textInput-active'}
                   readOnly={isReadOnly} value={editName}/>

            <input disabled={status === 'complete'}
                   onClick={() => editStatusTodo(id, StatusTodo.complete)}
                   className={'addedTodoWrapper__checkBox'}
                   type={"checkbox"} id={'checkbox' + id}/>

            <label htmlFor={'checkbox' + id}></label>

            <button className={'addedTodoWrapper__button'} onClick={() => deleteTodo(id)}>
                <img alt={'delete'} src={deleteIcon}/>
            </button>

            <button disabled={status === 'complete' || status === 'in progress'}
                    className={isReadOnly ? 'addedTodoWrapper__button' : 'addedTodoWrapper__button button-active'}
                    onClick={() => editTodo(id, editName)}>
                <img alt={'edit'} src={editIcon}/>
            </button>
        </div>
    )
}