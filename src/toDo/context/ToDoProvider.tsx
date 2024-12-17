import { useReducer } from "react";
import { ToDoState } from "../interfaces/interfaces";
import { ToDoContext } from "./ToDoContext";
import { toDoReducer } from "./toDoReducer";

const INITIAL_STATE: ToDoState = {
    todoCount: 2,
    toDos: [{
        id: '1',
        task: 'Task 1',
        completed: false
    },
    {
        id: '2',
        task: 'Task 2',
        completed: false
    }],
    completed: 0,
    pending: 2
}

interface props {
    children: JSX.Element | JSX.Element[];
}

export const ToDoProvider = ({children}: props) => {
    const [todoState, dispatch] = useReducer(toDoReducer, INITIAL_STATE);
    const toggleTodo = (id: string) => {
        dispatch({type: 'TOGGLE_TODO', payload: {id}});
    }
    return (
        <ToDoContext.Provider value={{todoState, toggleTodo}}>
            {children}
        </ToDoContext.Provider>
    )
}