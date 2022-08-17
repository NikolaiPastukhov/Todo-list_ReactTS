export interface EditTodoProps extends PaginationProps{
    text: string,
    inputText: (e: string) => void,
    todoList: Array<Todo>,
    addTodo: (text: string) => void,
    deleteTodo: (id: number) => void,
    editTodo: (id: number, editName: string) => void,
    editStatusTodo: (id: number, status: StatusTodo) => void,
}

export enum StatusTodo {
    pending = 'pending',
    inProgress = 'in progress',
    complete = 'complete',
}

export interface Todo {
    id: number,
    name: string,
    status: StatusTodo,
    isReadOnly: boolean,
}

export interface TodoProps extends Todo {
    deleteTodo: (id: number) => void,
    editTodo: (id: number, editName: string) => void,
    editStatusTodo: (id: number, status: StatusTodo) => void,
}

export interface TodoListProps {
    todos: Todo[]
    searchTodos: (text:string) => void
    listItemText:string
}

export interface PaginationProps {
    paginate: (pageNumber:number) => void
    pageNumbers: number[]
    currentPage:number
}


