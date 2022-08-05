import React, {useState} from "react";
import '../styles/EditTodo.scss'
import {EditTodoProps} from "../App";


export function EditTodo({todoList, addTodo, deleteTodo}: EditTodoProps) {
    const [text, setText] = useState<string>('')


    // Функция сохранения текста в state
    const inputText = (e: string) => {
        setText(prevState => e)
    }


    return (
        <div className='editTodoWrapper'>
            <div className='addTodoWrapper'>
                <input onChange={(e) => inputText(e.target.value)} type={'text'} className='addTodoWrapper__input'/>
                <button onClick={() => addTodo(text)} className='addTodoWrapper__button'> Добавить заметку
                </button>
            </div>
            <div className='addedTodoWrapper'>
                {todoList.map(el =>
                    <div className='addedTodoWrapper__todoElement'>
                        <input className='addedTodoWrapper__textInput' readOnly value={el.name}/>
                        <input type={"checkbox"}/>
                        <button onClick={() => deleteTodo(todoList,el.name)}> x </button>
                        <button> e </button>
                    </div>
                )}
            </div>
        </div>
    )
}