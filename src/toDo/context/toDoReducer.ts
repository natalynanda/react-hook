import { ToDo, ToDoState } from "../interfaces/interfaces";

type ActionType = 
    | {type: 'ADD_TODO', payload: ToDo}
    | {type: 'TOGGLE_TODO', payload: {id: string}}

export const toDoReducer = (state: ToDoState, action: ActionType): ToDoState => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                toDos: [...state.toDos, action.payload],
                todoCount: state.todoCount + 1,
                pending: state.pending + 1
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                toDos: state.toDos.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo),
                completed: state.toDos.filter(todo => todo.completed).length,
                pending: state.toDos.filter(todo => !todo.completed).length
            }
        default:
            return state;

    }
}