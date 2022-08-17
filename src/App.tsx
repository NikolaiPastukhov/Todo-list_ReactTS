import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import {ListTodo} from "./components/ListTodo";
import {EditTodoList} from "./components/EditTodoList"
import {Todo, StatusTodo} from "./interface/interface";


function App() {
    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [text, setText] = useState('');
    const [listItemText, setListItemText] = useState('')
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [todoPerPage] = useState<number>(5)
    const pageNumbers: Array<number> = []
    const [foundTodos, setFoundedTodos] = useState(todos)
    // Создание id для каждого элемента массива.
    let newId = Math.max(...todos.map(todo => todo.id), 0) + 1;

    useEffect(() => {
        setFoundedTodos(todos)
    }, [todos])

    for (let i = 1; i <= Math.ceil(foundTodos.length / todoPerPage); i++) {
        pageNumbers.push(i)
    }

    if (pageNumbers.length && pageNumbers.length < currentPage) {
        setCurrentPage(currentPage - 1)
    }

    const lastTodoIndex = currentPage * todoPerPage
    const firstTodoIndex = lastTodoIndex - todoPerPage;
    const currentTodos = foundTodos.slice(firstTodoIndex, lastTodoIndex)


    // Функция поиска заметок
    function searchTodos(text: string) {
        let searchTodos = todos.filter(el => el.name.includes(text))
        setFoundedTodos(searchTodos)
        setListItemText(text)
    }

    // Функция переключения страниц
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Функция сохранения текста в state
    const inputText = (e: string) => {
        setText(prevState => e);
    }
    // Функция добавления заметок
    const addTodo = (text: string) => {
        if (text.length === 0) return
        setTodos([{
            id: newId,
            name: text,
            status: StatusTodo.pending,
            isReadOnly: true,
        }, ...todos])
        setText('')
        setListItemText('')
    }
    // Функция удаления заметок
    const deleteTodo = (id: number) => {
        const findTodo = todos.find(todo => todo.id === id);
        setTodos(todos.filter(todo => todo !== findTodo));
        setListItemText('')

    }
    // Функция редактирования заметок
    const editTodo = (id: number, editName: string) => {
        let editTodos = foundTodos.map((todo) => {
            if (todo.id === id) {
                todo.name = editName;
                todo.isReadOnly = !todo.isReadOnly;
            }
            return todo;
        });
        setFoundedTodos(editTodos)
        searchTodos(listItemText)

    }
    // Функция выполнения заметок
    const editStatusTodo = (id: number, status: StatusTodo) => {
        let editStatusTodos = foundTodos.map(todo => {
            if (todo.id === id) {
                todo.status = status;
            }
            return todo;
        })
        setFoundedTodos(editStatusTodos);
    }

    return (
        <div className="App">
            <ListTodo todos={foundTodos} searchTodos={searchTodos} listItemText={listItemText}/>
            <EditTodoList todoList={currentTodos}
                          addTodo={addTodo}
                          deleteTodo={deleteTodo}
                          text={text}
                          inputText={inputText}
                          editTodo={editTodo}
                          editStatusTodo={editStatusTodo}
                          paginate={paginate}
                          pageNumbers={pageNumbers}
                          currentPage={currentPage}
            />
        </div>
    );
}

export default App;
