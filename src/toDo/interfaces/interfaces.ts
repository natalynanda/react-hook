export interface ToDo {
    id: string;
    task: string;
    completed: boolean;
}

export interface ToDoState {
    todoCount: number;
    toDos: ToDo[];
    completed: number;
    pending: number;
}