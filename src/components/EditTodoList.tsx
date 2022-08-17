import React  from "react";
import '../styles/EditTodo.scss'
import {EditTodoProps} from '../interface/interface';
import {TodoItem} from "./TodoItem";
import {Pagination} from "./Pagination";

export function EditTodoList({todoList, addTodo, deleteTodo, text, inputText, editTodo, editStatusTodo, pageNumbers, paginate, currentPage}: EditTodoProps) {



    return (
        <div className='editTodoWrapper'>
            <div className='addTodoWrapper'>
                <input onChange={(e) => inputText(e.target.value)} type={'text'} value={text} className='addTodoWrapper__input'/>
                <button onClick={() => addTodo(text)} className='addTodoWrapper__button'> Добавить заметку
                </button>
            </div>
            <div className='addedTodoWrapper'>
                {todoList.map(el =>
                    <TodoItem key={el.id} {...el} deleteTodo={deleteTodo} editTodo={editTodo} editStatusTodo={editStatusTodo}/>
                )}
            </div>
            <Pagination  pageNumbers={pageNumbers} paginate={paginate} currentPage={currentPage}/>
        </div>
    )
}